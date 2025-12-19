import profileImg from '../assets/profile.png'; // import from assets

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 gap-8"
    >
      {/* Left: Circular Image */}
      <div className="flex-shrink-0">
        <img
          src={profileImg}
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-sky-500 shadow-lg"
        />
      </div>

      {/* Right: Text */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Reygan M. Corvera</h1>
        <p className="text-lg md:text-xl mb-6">
          I’m a Frontend Developer building modern web applications.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
