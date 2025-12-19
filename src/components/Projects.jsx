const projects = [
  {
    title: "Project One",
    description: "A modern web app built with React.",
    link: "#",
    image: "/booking.png",
  },
  {
    title: "Project Two",
    description: "A responsive portfolio template.",
    link: "#",
    image: "/login.png",
  },
  {
    title: "Project Three",
    description: "A Tailwind CSS landing page.",
    link: "#",
    image: "/dash.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4 hover:scale-105 transform transition"
            />
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
            {/* Description */}
            <p className="mb-4 text-gray-300">{project.description}</p>
            {/* Link */}
            <a href={project.link} className="text-sky-400 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
