import { useEffect, useState } from "react";
import { legacyRouteAliases } from "../data/pages.js";
import { publicPath } from "../utils/publicPath.js";

const assetMap = new Map([
  ["files/150/abhishek.jpg", "assets/images/thumbnails/abhishek.jpg"],
  ["files/150/Hardware_Schematic.png", "assets/images/thumbnails/hardware-schematic.png"],
  ["files/150/micav2.jpg", "assets/images/thumbnails/micav2.jpg"],
  ["files/200/mav-collage.jpg", "assets/images/thumbnails/mav-collage.jpg"],
  ["files/200/group.jpg", "assets/images/Lab_Photo.jpg"],
  ["files/abhishek.jpg", "assets/images/abhishek.jpg"],
  ["files/group.jpg", "assets/images/Lab_Photo.jpg"],
  ["files/sabal-20.jpg", "assets/images/sabal-20.jpg"],
  ["files/ruav-iitk.jpg", "assets/images/ruav-iitk.jpg"],
  ["files/P1010398-edt.jpg", "assets/images/variable-pitch-quadrotor.jpg"],
  ["files/micav2.jpg", "assets/images/micav2.jpg"],
  ["files/mav-collage.jpg", "assets/images/mav-collage.jpg"],
  ["files/Hardware_Schematic.png", "assets/images/hardware-schematic.png"],
  ["images/DuCoax.png", "assets/images/dual-coaxial-tandem-heli.png"],
  ["images/kinect.jpg", "assets/images/kinect-collision-avoidance.jpg"],
  ["images/mav_design.png", "assets/images/mav-design.png"],
  ["images/micav2.jpg", "assets/images/micav2.jpg"],
  ["images/vawt_cad.jpg", "assets/images/vawt-cad.jpg"],
  ["uploads/tiltrotor.jpg", "assets/images/tiltrotor.jpg"],
  ["uploads/tailsitter.jpg", "assets/images/tailsitter-hover.jpg"],
  ["uploads/tailsitter_ff.jpg", "assets/images/tailsitter-forward-flight.jpg"],
  ["files/ae_686.pdf", "assets/documents/ae_686.pdf"],
  ["files/ae-630.pdf", "assets/documents/ae-630.pdf"],
  ["uploads/ae660.pdf", "assets/documents/ae660.pdf"],
  [
    "../../www.iitk.ac.in/aero/abhishek/uploads/Helicopter_design.jpg",
    "https://www.iitk.ac.in/aero/abhishek/uploads/Helicopter_design.jpg",
  ],
  [
    "../../www.iitk.ac.in/aero/abhishek/uploads/MiCAH-flight.jpg",
    "https://www.iitk.ac.in/aero/abhishek/uploads/MiCAH-flight.jpg",
  ],
  [
    "../../www.iitk.ac.in/aero/abhishek/files/compound-heli.png",
    "https://www.iitk.ac.in/aero/abhishek/files/compound-heli.png",
  ],
]);

function legacySlugFromHref(href) {
  if (!href || href.startsWith("#")) return null;
  const cleanPath = href.split("?")[0].split("#")[0].split("/").pop();
  return legacyRouteAliases[cleanPath] || null;
}

function cleanLegacyArtifacts(value) {
  return value
    .replace(/\u00c2\u00a0/g, " ")
    .replace(/\u00e2\u20ac\u0153/g, '"')
    .replace(/\u00e2\u20ac\u009d/g, '"')
    .replace(/\u00e2\u20ac\u201c/g, "-")
    .replace(/\u00c2/g, "");
}

function normalizeLegacyPage(html) {
  const doc = new DOMParser().parseFromString(cleanLegacyArtifacts(html), "text/html");
  const pageNode = doc.querySelector("#page");

  if (!pageNode) {
    throw new Error("Legacy page content was not found.");
  }

  pageNode.querySelectorAll("script, #container1").forEach((node) => node.remove());

  pageNode.querySelectorAll("[src], [href]").forEach((node) => {
    const attr = node.hasAttribute("src") ? "src" : "href";
    const value = node.getAttribute(attr);

    if (assetMap.has(value)) {
      node.setAttribute(attr, publicPath(assetMap.get(value)));
      return;
    }

    const routeSlug = legacySlugFromHref(value);
    if (routeSlug) {
      node.setAttribute(attr, `#/${routeSlug}`);
      return;
    }

    if (value?.startsWith("javascript:")) {
      node.removeAttribute(attr);
    }
  });

  pageNode.querySelectorAll("img").forEach((image) => {
    image.loading = "lazy";
    image.decoding = "async";
  });

  pageNode.querySelectorAll("iframe").forEach((iframe) => {
    iframe.loading = "lazy";
    iframe.title = iframe.title || "Embedded research media";
  });

  return cleanLegacyArtifacts(pageNode.innerHTML);
}

export default function LegacyPage({ page, onNavigate }) {
  const [html, setHtml] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let isCurrent = true;

    async function loadPage() {
      setError("");
      setHtml("");

      try {
        const legacyContentUrl = `${publicPath(`legacy-pages/${page.legacyFile}`)}?v=${Date.now()}`;
        const response = await fetch(legacyContentUrl, { cache: "no-cache" });
        if (!response.ok) {
          throw new Error(`Unable to load ${page.legacyFile}`);
        }

        const source = await response.text();
        if (isCurrent) {
          setHtml(normalizeLegacyPage(source));
        }
      } catch (loadError) {
        if (isCurrent) {
          setError(loadError.message);
        }
      }
    }

    loadPage();

    return () => {
      isCurrent = false;
    };
  }, [page]);

  const handleClick = (event) => {
    const anchor = event.target.closest("a");
    if (!anchor) return;

    const routeSlug = legacySlugFromHref(anchor.getAttribute("href"));
    if (!routeSlug) return;

    event.preventDefault();
    onNavigate(routeSlug);
  };

  return (
    <article className="content-frame">
      <div className="page-summary">
        <p>{page.summary}</p>
      </div>

      {error ? <p className="load-error">{error}</p> : null}
      {!error && !html ? <p className="loading-state">Loading page content...</p> : null}
      {html ? (
        <div
          className="legacy-content"
          onClick={handleClick}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : null}
    </article>
  );
}
