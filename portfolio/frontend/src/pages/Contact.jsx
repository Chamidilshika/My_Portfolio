import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      console.log(data);
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Server error.");
  }
};

  return (
    <section className="bg-[#0B1B3A] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <p className="text-center text-gray-300 mb-12">
          Feel free to reach out for projects, collaborations, or opportunities.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#102A54] p-8 rounded-xl shadow-lg border border-blue-900"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded bg-[#0B1B3A] border border-blue-900 outline-none focus:border-blue-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded bg-[#0B1B3A] border border-blue-900 outline-none focus:border-blue-400"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full mt-6 p-3 rounded bg-[#0B1B3A] border border-blue-900 outline-none focus:border-blue-400"
            required
          />

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* NEW SECTION BELOW FORM */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">

          {/* LEFT - Contact Info */}
          <div className="bg-[#102A54] p-6 rounded-xl shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">
              Contact Information
            </h3>

            <p className="mb-2">
              📧 Email: chamidilshika7@gmail.com
            </p>
            <p className="mb-2">
              📞 Phone: +94 779769050 / 0787614931
            </p>
            <p>
              📍 Location: Nugegoda, Sri Lanka
            </p>
          </div>

          {/* RIGHT - Follow Me */}
          <div className="bg-[#102A54] text-white p-6 rounded-xl shadow-lg flex flex-col justify-center items-center">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Follow Me
            </h3>

            <div className="flex justify-center gap-12 w-full">
              {/* INSTAGRAM LINK */}
              <a 
                href="https://www.instagram.com/chamii_dil?igsh=MTlnY3kxaXE5dXlkbQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group text-base hover:text-pink-400 transition cursor-pointer"
              >
                {/* Instagram SVG Icon */}
                <svg 
                  className="w-8 h-8 text-gray-300 group-hover:text-pink-400 transition" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
              
              {/* LINKEDIN LINK */}
              <a 
                href="https://www.linkedin.com/in/chami-dilshika-508045320/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group text-base hover:text-blue-400 transition cursor-pointer"
              >
                {/* LinkedIn SVG Icon */}
                <svg 
                  className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;