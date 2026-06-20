import { generatedCurrentPeopleGroups } from "./generatedPeople.js";
import { generatedResearchProjects } from "./generatedResearchProjects.js";

export const profile = {
  name: "Dr. Abhishek",
  title: "AVM Harjinder Singh, VSM, Chair Professor",
  department: "Department of Aerospace Engineering",
  lab: "Helicopter and VTOL Laboratory",
  institute: "Indian Institute of Technology Kanpur",
  address: "Kanpur 208016, India",
  email: "abhish(at)iitk.ac.in",
  phone: "+91 - (0)512 - 6797515 (O)",
  phones: [
    "+91 - (0)512 - 6797515 (O)",
    "+91 - 7318018894 (M)",
    "+91 - 8765069138 (M)",
  ],
  image: "/assets/images/abhishek.jpg",
  professionalInterest:
    "A commitment to education through teaching and research in broad areas of rotary wing aeromechanics, Vertical Take Off and Landing systems, autonomous and intelligent rotary wing MAV/UAV platforms, and inverse flight dynamics simulation with applications to experimentation, analysis, and design.",
  education: [
    "Ph.D., Aerospace Engineering (Rotorcraft Dynamics), University of Maryland, College Park",
    "M.S., Aerospace Engineering (Rotorcraft Dynamics), University of Maryland, College Park",
    "B.Tech., Aerospace Engineering, Indian Institute of Technology Kharagpur",
  ],
};

export const lab = {
  name: "Helicopter and VTOL Laboratory",
  shortDescription:
    "The lab works on rotorcraft, VTOL systems, autonomous aerial vehicles, aeromechanics, flight dynamics, and unconventional air vehicle design.",
  latest:
    "Sabal 20 is an unmanned logistic drone with 20 kg payload lifting capacity. The original design study was carried out in the lab at IIT Kanpur and later manufactured and tested by EndureAir Systems Pvt. Ltd.",
  latestImage: "/assets/images/marquee/sabal-20.jpg",
  latestVideo: "https://www.youtube.com/embed/TolzhZOXuPk?si=mA91SxMwD2jNDqgw",
};

export const researchInterests = [
  "Unmanned Aerial Systems",
  "Aeromechanics and Design",
  "Inverse flight dynamics simulation for helicopters",
  "Autonomous hover-capable MAV and UAV design",
  "Unconventional VTOL/STOL systems",
  "Adaptive rotors",
  "Wind turbines",
  "Finite Element Analysis and Multibody Dynamics",
];

export const galleryImages = [
  {
    src: "/assets/images/marquee/sabal-20.jpg",
    alt: "Sabal 20 unmanned logistics drone",
    caption: "Sabal 20 logistics UAV",
  },
  {
    src: "/assets/images/marquee/tailsitter-hover.jpg",
    alt: "Quadrotor biplane tailsitter in hover mode",
    caption: "Biplane tailsitter hover",
  },
  {
    src: "/assets/images/marquee/tailsitter-forward-flight.jpg",
    alt: "Quadrotor biplane tailsitter in forward flight mode",
    caption: "Biplane tailsitter forward flight",
  },
  {
    src: "/assets/images/marquee/tiltrotor.jpg",
    alt: "Quadrotor convertiplane prototype",
    caption: "VTOL quadrotor convertiplane",
  },
  {
    src: "/assets/images/marquee/variable-pitch-quadrotor.jpg",
    alt: "Variable pitch quadrotor prototype",
    caption: "Variable pitch quadrotor",
  },
  {
    src: "/assets/images/marquee/uav_landing.png",
    alt: "Autonomous UAV landing experiment",
    caption: "Autonomous UAV heave landing",
  },
  {
    src: "/assets/images/marquee/uav_sway.png",
    alt: "UAV moving deck sway experiment",
    caption: "Moving-deck landing (sway) experiment",
  },
  {
    src: "/assets/images/marquee/tandem-rotor-uav-ground-test.jpeg",
    alt: "Tandem rotor UAV on a grass test field",
    caption: "Variable Pitch Sabal 40 ground test",
  },
  {
    src: "/assets/images/marquee/tandem-rotor-uav-sunset.jpeg",
    alt: "Tandem rotor UAV at sunset on the flight field",
    caption: "Tandem rotor and the golden hour",
  },
  {
    src: "/assets/images/marquee/high-altitude-uav-hover-test.jpeg",
    alt: "Heavy-lift UAV hovering during a mountain runway trial",
    caption: "High-altitude hover test",
  },
  {
    src: "/assets/images/marquee/high-altitude-uav-flight.jpeg",
    alt: "Heavy-lift UAV flying over snow-covered mountains",
    caption: "High-altitude flight test",
  },
  {
    src: "/assets/images/marquee/winter-uav-hover-trial.jpeg",
    alt: "Heavy-lift UAV hovering over snow during winter trials",
    caption: "Extreme weather hover trial",
  },
  {
    src: "/assets/images/marquee/tandem-rotor-uav-prototype.jpeg",
    alt: "Tandem rotor UAV prototype on a grass field",
    caption: "Tandem rotor UAV prototype",
  },
  {
    src: "/assets/images/marquee/micro-helicopter-autopilot-bench.jpeg",
    alt: "Small helicopter autopilot prototype on a lab bench",
    caption: "Swashplate-less micro helicopter prototype",
  },
];

export const galleryLeadImage = {
  src: "/assets/images/Lab_Photo.jpg",
  alt: "Helicopter and VTOL Laboratory group photo",
  caption: "Helicopter and VTOL Laboratory",
};

export const marqueeImages = [
  {
    src: "/assets/images/marquee/sabal-20.jpg",
    alt: "Sabal 20 unmanned logistics drone",
    caption: "Sabal 20 logistics UAV",
  },
  {
    src: "/assets/images/marquee/uav_landing.png",
    alt: "Autonomous UAV landing experiment",
    caption: "Autonomous UAV landing",
  },
  {
    src: "/assets/images/marquee/tailsitter-hover.jpg",
    alt: "Quadrotor biplane tailsitter in hover mode",
    caption: "Biplane tailsitter hover",
  },
  {
    src: "/assets/images/marquee/uav_sway.png",
    alt: "UAV moving deck sway experiment",
    caption: "Moving-deck landing experiment",
  },
  {
    src: "/assets/images/marquee/tailsitter-forward-flight.jpg",
    alt: "Quadrotor biplane tailsitter in forward flight mode",
    caption: "Biplane tailsitter forward flight",
  },
  {
    src: "/assets/images/marquee/tiltrotor.jpg",
    alt: "Quadrotor convertiplane prototype",
    caption: "VTOL quadrotor convertiplane",
  },
  {
    src: "/assets/images/marquee/variable-pitch-quadrotor.jpg",
    alt: "Variable pitch quadrotor prototype",
    caption: "Variable pitch quadrotor",
  },
  {
    src: "/assets/images/marquee/tandem-rotor-uav-ground-test.jpeg",
    alt: "Tandem rotor UAV on a grass test field",
    caption: "Tandem rotor UAV ground test",
  },
  {
    src: "/assets/images/marquee/tandem-rotor-uav-sunset.jpeg",
    alt: "Tandem rotor UAV at sunset on the flight field",
    caption: "Tandem rotor UAV at sunset",
  },
  {
    src: "/assets/images/marquee/high-altitude-uav-hover-test.jpeg",
    alt: "Heavy-lift UAV hovering during a mountain runway trial",
    caption: "High-altitude hover test",
  },
  {
    src: "/assets/images/marquee/high-altitude-uav-flight.jpeg",
    alt: "Heavy-lift UAV flying over snow-covered mountains",
    caption: "Mountain flight test",
  },
  {
    src: "/assets/images/marquee/winter-uav-hover-trial.jpeg",
    alt: "Heavy-lift UAV hovering over snow during winter trials",
    caption: "Winter hover trial",
  },
  {
    src: "/assets/images/marquee/tandem-rotor-uav-prototype.jpeg",
    alt: "Tandem rotor UAV prototype on a grass field",
    caption: "Tandem rotor UAV prototype",
  },
  {
    src: "/assets/images/marquee/micro-helicopter-autopilot-bench.jpeg",
    alt: "Small helicopter autopilot prototype on a lab bench",
    caption: "Autopilot bench prototype",
  },
];

export const researchFocus = [
  "Rotary wing aeromechanics",
  "VTOL and STOL vehicle design",
  "Autonomous flight control",
  "Micro air vehicles",
  "UAV logistics platforms",
  "Wind turbine mechanisms",
];

const baseResearchProjects = [
  {
    title: "High Endurance Tandem Rotor UAV",
    area: "Aerial logistics",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Designed and flight tested",
    image: "/assets/images/marquee/sabal-20.jpg",
    summary:
      "A tandem rotor UAV platform developed at IIT Kanpur for payload transport and autonomous stabilization using in-house guidance and control software.",
    details:
      "A tandem rotor UAV platform designed and developed at IIT Kanpur for aerial logistics with 10 kg payload capacity, a 12 kg empty weight, and a 4 kW two-stroke gasoline engine. The vehicle used the in-house NAAVIK autopilot for stabilization and position hold during flight testing.",
    experimentVideos: [
      { label: "Preliminary tandem rotor UAV flight test", href: "https://www.youtube.com/watch?v=HKyiRecqXpM" },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Payload Delivery System for Autonomous RUAV",
    area: "Aerial logistics",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Autonomous payload delivery mechanism",
    image: "/assets/images/projects/ruav-payload-delivery.jpg",
    summary:
      "A payload and package delivery mechanism developed for the lab's autonomous RUAV platform.",
    details:
      "The lab developed a payload and package delivery system for aerial logistics using the autonomous RUAV platform. The demonstration shows the mechanism releasing a package during flight.",
    experimentVideos: [
      { label: "Payload delivery mechanism demonstration", href: "https://www.youtube.com/watch?v=AQgIwjmS3D0" },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Aggressive Attitude Tracking and Autonomous Inverted Flight",
    area: "Rotorcraft control",
    authors: ["Mangal Kothari", "Abhishek", "Ravi Banavar"],
    phase: "completed",
    status: "Autonomous inverted helicopter flight",
    image: "/assets/images/projects/autonomous-inverted-flight.jpg",
    summary:
      "A rotorcraft control demonstration for aggressive attitude tracking, helicopter flipping, and autonomous inverted flight.",
    details:
      "This work demonstrated aggressive attitude tracking for flipping a helicopter and achieving autonomous inverted flight. The work was a joint effort between IIT Kanpur and IIT Bombay collaborators.",
    experimentVideos: [
      { label: "Autonomous inverted flight demonstration", href: "https://www.youtube.com/watch?v=1zz71W__RNA" },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Autonomous Autorotation Using NAAVIK Autopilot",
    area: "Autonomous helicopter safety",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Emergency landing mode for unmanned helicopters",
    image: "/assets/images/projects/naavik-autonomous-autorotation.jpg",
    summary:
      "An autonomous autorotation capability added to the NAAVIK autopilot for unmanned helicopter emergency landing.",
    details:
      "NAAVIK autopilot was enhanced to enable autonomous autorotation for an unmanned helicopter. The project used a simpler autorotation approach intended for safe landing after engine, transmission, or tail-rotor failure.",
    experimentVideos: [
      { label: "Autonomous autorotation demonstration", href: "https://www.youtube.com/watch?v=OduviuUKxu0" },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "High Efficiency Dissimilar Coaxial Rotor Concept",
    area: "Rotorcraft concept",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Reduced rotor-rotor interaction concept",
    image: "/assets/images/projects/dissimilar-coaxial-rotor.jpg",
    summary:
      "A dissimilar coaxial rotor concept studied as a lower-power anti-torque alternative for hovering rotorcraft.",
    details:
      "This work studied a dissimilar coaxial rotor arrangement intended to reduce rotor-rotor aerodynamic interaction. The concept uses a reduced-RPM anti-torque rotor and was predicted to reduce power demand compared with conventional single main rotor-tail rotor and regular coaxial configurations in hover.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "High Efficiency VTOL Quadrotor Convertiplane",
    area: "Hybrid VTOL aircraft",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Prototype flight tested in hover",
    image: "/assets/images/marquee/tiltrotor.jpg",
    summary:
      "A quadrotor convertiplane with tilting wing-propeller segments intended to improve hover efficiency and support transition to aircraft-like forward flight.",
    details:
      "This project explored tilting wing-propeller modules for efficient hover and aircraft-like forward flight transition.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Design and Developement of Mini Compound Rotary Wing Unmanned Aerial Vehicle (CRUAV)",
    area: "Compound rotary wing UAV",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Model-scale compound RUAV design",
    image: "/assets/images/projects/compound-ruav.png",
    summary:
      "A model-scale compound helicopter RUAV design effort supported by rotorcraft dynamics and performance analysis.",
    details:
      "This project focused on designing and developing a 10 kg class compound helicopter RUAV. The work included rotorcraft dynamics formulation, baseline design studies, performance prediction, and evaluation of wing, propeller, and horizontal stabilizer effects in compound RUAV trim analysis.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Remote Controlled Boomerang",
    area: "Unconventional flight vehicles",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Pilot-controlled circular flight vehicle",
    image: "/assets/images/projects/remote-controlled-boomerang.jpg",
    summary:
      "A remote-controlled boomerang concept designed for inherently stable circular flight without autopilot support.",
    details:
      "The lab developed a remote-controlled boomerang that is inherently stable in hover and flies circular paths of controllable radius under pilot input. Follow-on work targeted a flight dynamics model for deeper understanding of the concept.",
    experimentVideos: [
      { label: "Remote controlled boomerang video", href: "https://www.youtube.com/watch?v=86dJ-izn2iM" },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Biplane Quadrotor Tailsitter",
    area: "Payload delivery UAV",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Hover and forward-flight configurations",
    image: "/assets/images/marquee/tailsitter-hover.jpg",
    summary:
      "A VTOL airplane concept combining variable-pitch quadrotor agility with compact biplane fixed wings for efficient cruise.",
    details:
      "The biplane tailsitter concept combines the speed and endurance of a fixed-wing UAV with the VTOL and hovering capability of a variable-pitch quadrotor. The design uses an H-shaped quadrotor frame with fixed wings in biplane configuration for compact size, cruise efficiency, and payload delivery.",
    experimentVideos: [
      { label: "Biplane tailsitter flight test", href: "https://www.youtube.com/watch?v=r80l2pN_MbI" },
      { label: "Swiveling biplane tailsitter UAV", href: "https://www.youtube.com/watch?v=MjGfSMEPUGE" },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Flybarless Coaxial Helicopter Active Stabilization",
    area: "Micro air vehicles",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Onboard-sensor active stabilization",
    image: "/assets/images/projects/flybarless-coaxial-active-stabilization.jpg",
    summary:
      "A flybarless coaxial helicopter platform stabilized actively using onboard sensors for improved agility.",
    details:
      "This work removed the passive-stability flybar from a coaxial helicopter, making the vehicle unstable but more agile. Active stabilization was then achieved using onboard sensors.",
    experimentVideos: [
      { label: "Flybarless coaxial active stabilization", href: "https://www.youtube.com/watch?v=r5x_PsOTAhU" },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Coaxial MAV Obstacle Avoidance Using Microsoft Kinect Sensor",
    area: "Autonomous MAV navigation",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Realtime obstacle detection and avoidance",
    image: "/assets/images/projects/kinect-obstacle-avoidance.png",
    summary:
      "A coaxial Micro Air Vehicle test platform using Microsoft Kinect sensing for realtime obstacle detection and avoidance.",
    details:
      "The test flight demonstrated a coaxial Micro Air Vehicle using a Microsoft Kinect sensor for realtime obstacle detection and avoidance in constrained indoor environments.",
    experimentVideos: [
      {
        label: "Obstacle-avoidance flight test",
        href: "/assets/videos/kinect-obstacle-avoidance-flight.flv",
      },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Project NAAVIK",
    area: "Autonomous navigation",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "ongoing",
    status: "Tested on multiple platforms",
    image: "/assets/images/ruav-iitk.jpg",
    summary:
      "A cross-platform autopilot project for UAV/MAV applications, including loiter, path following, return-to-home, height hold, and VTOL landing modes.",
    details:
      "NAAVIK supports cross-platform autonomy experiments for guidance, navigation, control, and VTOL landing modes.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "RL-Optimised UAV Quadrotor Landing On A Heaving Ship-Deck Emulator With CBF-Safety Filtering",
    area: "Autonomous Landing",
    authors: ["Ritwik Shankar"],
    phase: "ongoing",
    status: "RL landing policy with CBF safety filtering",
    image: "/assets/images/projects/rl-heave-landing.png",
    summary:
      "Trained an RL landing policy to land a UAV Quadrotor on heave-dominant Z-axis deck motion using GRU-based reinforcement learning with privileged critic information.",
    details:
      "Trained an RL landing policy to land a UAV Quadrotor on heave-dominant Z-axis deck motion using GRU-based reinforcement learning with privileged critic information. Derived a descent-phase Control Barrier Function from relative clearance and stopping margin to provide crash-proof safety filtering during landing.",
    experimentVideos: [
      { label: "Heaving deck landing experiment", href: "https://youtu.be/ytcI675lGTQ" },
      { label: "CBF-filtered landing experiment", href: "https://youtu.be/iTDNAP14bmY" },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "RL-Optimised UAV Quadrotor Landing On A Moving Ship-Deck Emulator",
    area: "Autonomous Landing",
    authors: ["Ritwik Shankar"],
    phase: "ongoing",
    status: "PX4-compatible RL landing stack",
    image: "/assets/images/projects/rl-moving-deck-landing.png",
    summary:
      "Built a PX4-compatible reinforcement learning stack in IsaacSim with a parallelisable PX4-like cascaded controller for quadrotors.",
    details:
      "Built a PX4-compatible reinforcement learning stack in IsaacSim with a parallelisable PX4-like cascaded controller for quadrotors. Demonstrated autonomous landings on a moving platform under sinusoidal motion up to 0.2 Hz frequency and 55 cm amplitude.",
    experimentVideos: [
      { label: "Moving deck landing experiment", href: "https://www.youtube.com/watch?v=cQChESdLzrM" },
      { label: "Moving platform landing experiment", href: "https://www.youtube.com/watch?v=pRaUoR9tWNc" },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Micro Coaxial Autonomous Heli",
    area: "Micro air vehicles",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "ongoing",
    status: "Autonomous hover research",
    image: "/assets/images/micav2.jpg",
    summary:
      "A hover-capable micro air vehicle platform instrumented with optic-flow, IMU, infrared, and sonar sensors.",
    details:
      "The micro coaxial helicopter platform is used for autonomous hover research with compact onboard sensing.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Vertical Axis Wind Turbine",
    area: "Wind energy",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "ongoing",
    status: "Lab-scale prototype",
    image: "/assets/images/vawt-cad.jpg",
    summary:
      "A variable-pitch VAWT design with aerodynamic braking, intended to improve performance across wind-speed and wind-direction changes.",
    details:
      "This work studies variable-pitch vertical-axis wind turbine mechanisms and aerodynamic braking at lab scale.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
];

function mergeResearchProjects(baseProjects, importedProjects) {
  const merged = new Map(baseProjects.map((project) => [project.title, project]));

  for (const project of importedProjects) {
    merged.set(project.title, project);
  }

  return Array.from(merged.values());
}

export const researchProjects = mergeResearchProjects(baseResearchProjects, generatedResearchProjects);

export const teachingCourses = [
  {
    id: "fall-2018-ae686",
    term: "Fall 2018",
    code: "AE686",
    title: "Helicopter Theory",
    role: "Instructor",
    resources: [{ label: "Course content", href: "/assets/documents/ae_686.pdf" }],
  },
  {
    id: "fall-2017-ae670",
    term: "Fall 2017",
    code: "AE670",
    title: "Preliminary Design of Helicopters",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2017-ae686",
    term: "Fall 2017",
    code: "AE686",
    title: "Helicopter Theory",
    role: "Instructor",
    resources: [],
  },
  {
    id: "spring-2016-ae462",
    term: "Spring 2016",
    code: "AE462",
    title: "Aircraft Design - II",
    role: "Instructor",
    resources: [],
  },
  {
    id: "spring-2016-ae630",
    term: "Spring 2016",
    code: "AE630",
    title: "Autonomous Unmanned Aerial Systems",
    role: "Instructor",
    resources: [{ label: "Course content", href: "/assets/documents/ae-630.pdf" }],
  },
  {
    id: "fall-2015-ae688",
    term: "Fall 2015",
    code: "AE688",
    title: "Dynamics and Vibration",
    role: "Instructor",
    resources: [],
  },
  {
    id: "spring-2015-ae462",
    term: "Spring 2015",
    code: "AE462",
    title: "Aircraft Design - II",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2014-ae668",
    term: "Fall 2014",
    code: "AE668",
    title: "Helicopter Theory",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2013-ae688",
    term: "Fall 2013",
    code: "AE688",
    title: "Dynamics and Vibration",
    role: "Instructor",
    resources: [],
  },
  {
    id: "spring-2013-ae462",
    term: "Spring 2013",
    code: "AE462",
    title: "Aircraft Design - II",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2012-ae670",
    term: "Fall 2012",
    code: "AE670",
    title: "Aircraft Structural Analysis",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2012-eso209",
    term: "Fall 2012",
    code: "ESO209",
    title: "Dynamics",
    role: "Tutor",
    resources: [],
  },
  {
    id: "spring-2012-ae660",
    term: "Spring 2012",
    code: "AE660",
    title: "Preliminary Design of Helicopters",
    role: "Instructor",
    resources: [{ label: "Course content", href: "/assets/documents/ae660.pdf" }],
  },
  {
    id: "spring-2012-eso204",
    term: "Spring 2012",
    code: "ESO204",
    title: "Mechanics of Solids",
    role: "Tutor",
    resources: [],
  },
  {
    id: "fall-2011-ae688",
    term: "Fall 2011",
    code: "AE688",
    title: "Dynamics and Vibration",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2011-ae321",
    term: "Fall 2011",
    code: "AE321",
    title: "Flight Mechanics",
    role: "Co-Instructor",
    resources: [],
  },
];

export const currentPeopleGroups = generatedCurrentPeopleGroups;

export const calendarEvents = [
  {
    id: "lab-calendar-placeholder",
    title: "Lab calendar",
    date: "",
    time: "",
    location: "Helicopter and VTOL Laboratory",
    description: "Calendar entries can be added here as lab events are finalized.",
  },
];

export const phdAlumni = [
  {
    name: "Kuldeep Kumar Dhiman",
    program: "PhD, since Dec 2013",
    current: "",
    thesis: "Flapping wing micro air vehicles; hover-capable micro air vehicles",
    contacts: { email: "dhims(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Rahul Ramanujam",
    program: "PhD, since Jan 2016",
    current: "",
    thesis: "Helicopter blade morphing, smart materials, compound helicopter",
    contacts: { email: "rahulram(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "M. Rama Krishna",
    program: "PhD, since Aug 2019",
    current: "",
    thesis: "Design of rotary wing and VTOL UAV/MAVs",
    contacts: { email: "rkrishna(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Ram D Gadekar",
    program: "PhD, since Aug 2015",
    current: "",
    thesis: "Control, navigation and guidance, micro air vehicle design",
    contacts: { email: "ramd(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Yonas Gebre",
    program: "PhD, since Aug 2013",
    current: "",
    thesis: "Experimental and analytical investigation of vertical axis wind turbine",
    contacts: { email: "yonasg(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Raghavendra Prasad",
    program: "PhD 2018",
    current: "Bell - Textron India, Bangalore",
    thesis:
      "Inverse flight dynamic analysis for prediction of helicopter rotor blade loads in unsteady maneuvering flight",
    contacts: { email: "", linkedin: "", homepage: "" },
  },
  {
    name: "Sagar Setu",
    program: "PhD 2019",
    current: "Milky Way AI, Singapore",
    thesis:
      "Modeling, hardware-in-the-loop simulation and flight controller development for rotary wing UAVs - from first flight to autonomous autorotation",
    contacts: { email: "", linkedin: "", homepage: "" },
  },
  {
    name: "Nidhish Raj",
    program: "PhD 2019",
    current: "Post Doctoral Researcher, IIT Kanpur",
    thesis: "Control of agile rotorcrafts: a geometric approach",
    contacts: { email: "", linkedin: "", homepage: "" },
  },
];

export const degreeAlumni = [
  {
    name: "Ankur Duhoon",
    program: "Research Engineer",
    current: "",
    research:
      "Design and development of UAVs, transmission design, composite development, material manufacturing, structural dynamic testing and CAD modelling",
    contacts: { email: "aduhoonpal(at)gmail.com", linkedin: "", homepage: "" },
  },
  {
    name: "Naveen Gupta",
    program: "BT/MT",
    current: "",
    research: "Rotary wing MAV design, flapping wing MAV",
    contacts: { email: "nvngupta(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Prashant Singh",
    program: "BT/MT",
    current: "",
    research: "Design and control of VTOL UAVs",
    contacts: { email: "singhpra(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Praveen Kumar",
    program: "Research Engineer",
    current: "",
    research: "",
    contacts: { email: "ranjanpk(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Shubham",
    program: "BT/MT",
    current: "",
    research: "",
    contacts: { email: "kshubham(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  { name: "Akshay Sharma", program: "MTech 2019", current: "Klearexpress India Pvt. Ltd." },
  { name: "Balachandar D.", program: "MTech 2019", current: "Eaton Technologies Pvt. Ltd." },
  { name: "Basab Adhyapak", program: "MTech 2019", current: "Bell - Textron India, Bangalore" },
  { name: "Pankaj Patil", program: "BT/MT 2019", current: "Deutsche Bank" },
  {
    name: "Rama Krishna Mendu",
    program: "BT/MT 2019",
    current: "Pursuing PhD, IIT Kanpur; Co-Founder, EndureAir Systems Pvt. Ltd.",
  },
  { name: "Sourav Sinha", program: "BT/MT 2019", current: "Pursuing PhD, Virginia Tech" },
  { name: "N. C. Kaushik", program: "BT/MT 2019", current: "Pursuing PhD, RPI" },
  { name: "Praveen Ranjan", program: "BT/MT 2019", current: "Research Engineer, IIT Kanpur" },
  { name: "Karthik S.", program: "M.Tech 2018", current: "HAL RWR&DC, Bangalore" },
  { name: "Naba Kishore Routray", program: "M.Tech 2018", current: "HAL RWR&DC, Bangalore" },
  { name: "Diksha Aggarwal", program: "M.Tech 2018", current: "Eaton Technologies Pvt. Ltd." },
  { name: "Sakshi Gupta", program: "M.Tech 2018", current: "Eaton Technologies Pvt. Limited" },
  { name: "K. Anjenayulu", program: "M.Tech 2017", current: "HAL RWR&DC, Bangalore" },
  {
    name: "Vishnu Chipade",
    program: "BT/MT 2017",
    current: "Pursuing PhD at University of Michigan, Ann Arbor",
  },
  { name: "B. Sai Tharun", program: "M.Tech 2017", current: "Pursuing PhD, TAMU" },
  {
    name: "Praneet Vayalali",
    program: "M.Tech 2016",
    current: "Pursuing PhD, Rensselaer Polytechnic Institute (RPI)",
  },
  { name: "Sangith Rajasegar", program: "M.Tech 2016", current: "" },
  { name: "Namrata Gupta", program: "BT/MT 2016", current: "Eaton Technologies Pvt. Ltd." },
  { name: "Ran Vijay Singh", program: "BT/MT 2016", current: "" },
  { name: "Shyamal Rao", program: "M.Tech 2015", current: "Bell - Textron India, Bangalore" },
  { name: "Md. Afzal", program: "M.Tech 2015", current: "Cognizant Technology Solutions" },
  { name: "Abhijit Verma", program: "BT/MT 2015", current: "" },
  { name: "Naman Rawal", program: "BT/MT 2015", current: "Honeywell Pvt. Ltd." },
  { name: "Rahul R.", program: "M.Tech 2014", current: "Pursuing PhD at IIT Kanpur" },
  { name: "Prashanth Nagaraj", program: "M.Tech 2014", current: "Eaton Technologies Pvt. Ltd." },
  { name: "Palash Jain", program: "BT/MT 2014", current: "Pursuing PhD at Univ. of Texas at Austin" },
  { name: "Anant Goel", program: "BT/MT 2014", current: "" },
  { name: "Sagar Setu", program: "BT/MT 2013", current: "Pursuing PhD at IIT Kanpur" },
  { name: "Aishwarya P.", program: "M.Tech 2013", current: "WS Atkin India Pvt. Ltd." },
];

export const summerTrainees = [
  {
    year: "2026",
    people: [
      {
        name: "Chitrani Banerjee",
        college: "Banasthali Vidyapith",
        email: "chitranibanerjee8405@gmail.com",
      },
      {
        name: "Pradeep Bishnoi",
        college: "IIT Kanpur",
        email: "pradeep24@iitk.ac.in",
      },
      {
        name: "Ayush Kumar Singh",
        college: "Indian Institute of Technology",
        email: "ayushkumars139@gmail.com",
      },
      {
        name: "Prisha Bansal",
        college: "NFSU, Delhi",
        email: "prishabansal11@gmail.com",
      },
      {
        name: "Rajvardhan Beniwal",
        college: "IIT Kanpur",
        email: "rajvardhan24@iitk.ac.in",
      },
      {
        name: "Amogh Agarwal",
        college: "SVNIT Surat",
        email: "amoghagarwals26@gmail.com",
      },
      {
        name: "Bala Rohit",
        college: "IIT Kanpur",
        email: "balar24@iitk.ac.in",
      },
      {
        name: "Harshwardha Giri Goswami",
        college: "IIT Kanpur",
        email: "hgiri24@iitk.ac.in",
      },
    ],
  },
  {
    year: "2014",
    people: [
      "Suresh Sharma, Amrita School of Engineering, Amrita Vishwavidyapeetham",
      "Carolyn Walther, Texas A&M",
    ],
  },
  {
    year: "2013",
    people: [
      "Rohit Gupta, BESU Shibpur - pursuing MS at UIUC",
      "Swastik Basu, Jadavpur University - pursuing PhD at RPI",
      "Jose Flores, Texas A&M",
    ],
  },
  {
    year: "2012",
    people: [
      "Nidhish Raj, NIT Warangal - pursuing PhD at IITK",
      "Anubhav Dwivedi, IIT Kanpur",
      "Emily Boster, Texas A&M",
      "Abhijit Verma, IIT Kanpur",
      "Siddhartha Srivastava, IIT Kanpur",
    ],
  },
  {
    year: "2011",
    people: [
      "Nidhish Raj, NIT Warangal - pursuing PhD at IITK",
      "Shamayita Mukherjee, NIT Durgapur",
    ],
  },
];
