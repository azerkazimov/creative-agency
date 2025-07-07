import "./section-header.css";

export default function SectionHeader({ highlight, content, position }) {
  const dinamicStyles = {
    textAlign: position,
  };

  return (
    <div className="section-header" style={dinamicStyles}>
      <span className="section-header-highlight">{highlight}</span>
      <h2 className="section-header-content">{content}</h2>
    </div>
  );
}
