export default function SelectedProject({ project, onDelete }) {
  if (!project) {
    return <p>No project selected!</p>; // Safety fallback
  }

  // Ensure that the date is a valid Date object
  const formatedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <header>
        <h1>{project.title || "No title"}</h1> {/* Safety check */}
        <button onClick={onDelete}>Delete</button>
        <p>{formatedDate}</p> {/* Formatted date */}
        <p>{project.description || "No description available"}</p>{" "}
        {/* Safety check */}
      </header>
    </div>
  );
}
