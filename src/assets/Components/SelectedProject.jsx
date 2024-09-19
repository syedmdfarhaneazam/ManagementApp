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
    <div className="mx-5 md:mx-10 lg:mx-17">
      <header className="flex flex-col items-center  border border-black px-20 mx-10 h-screen w-19/20 rounded-2xl p-4">
        <h1 className="text-center font-extrabold text-3xl mb-4">
          {project.title || "No title"}
        </h1>

        <div className="flex flex-row space-x-4 mb-4">
          <button className="bg-red-500  text-white px-4 py-2 rounded-md hover:px-10 hover:bg-red-700 transition-all duration-150">
            Delete
          </button>
          <p className="font-serif">{formatedDate}</p>
        </div>

        <p className="text-center text-white font-ubuntu-mono">
          {project.description || "No description available"}
        </p>
      </header>
    </div>
  );
}
