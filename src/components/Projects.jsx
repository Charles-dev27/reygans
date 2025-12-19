import bookingImg from '../assets/booking.png';
import loginImg from '../assets/login.png';
import dashImg from '../assets/dash.png';

const projects = [
  {
    title: "Project One",
    description: "A Ride Hailing App built with laravel",
    link: "#",
    image: bookingImg,
  },
  {
    title: "Project Two",
    description: "A Login Page using Laravel.",
    link: "#",
    image: loginImg,
  },
  {
    title: "Project Three",
    description: "A Dashboard System for campus clearance using Laravel.",
    link: "#",
    image: dashImg,
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
            className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition"
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
