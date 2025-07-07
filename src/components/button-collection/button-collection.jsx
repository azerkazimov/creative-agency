import "./button-collection.css"
export default function ButtonCollection({ children, position }) {
  const dinamicStyles = {
    justifyContent: position,
  };
  
  return (
    <div className="btn-collection" style={dinamicStyles}>
      {children}
    </div>
  );
}
