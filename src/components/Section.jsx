export default function Section({ eyebrow, title, children, className = "", id }) {
  return (
    <section className={`section ${className}`} id={id}>
      <div className="section-header">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
