export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:border-sky-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:border-sky-400 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:border-sky-400 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
