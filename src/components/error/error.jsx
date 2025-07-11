import "./error.css"
export default function Error({ error }) {
    return (
        <div className="error-wrapped">
            <h2>{error?.message || error?.toString() || "An error occurred"}</h2>
            <p>{error?.status ? `Status: ${error.status}` : null}</p>
        </div>
    );
}