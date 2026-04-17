import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function SponsorSection() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.company.trim())
      newErrors.company = "Company name is required";

    if (!formData.name.trim())
      newErrors.name = "Your name is required";

    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10-digit phone number";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_wr1t462",
        "template_uxxl3la",
        {
          company: formData.company,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        },
        "bZua3bgZ_G4EZ4hsz"
      );

      setSuccess(true);
      setFormData({
        company: "",
        name: "",
        phone: "",
        email: "",
      });
    } catch (error) {
        console.error(error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen  text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-blue-400 font-[Genos] tracking-widest mb-2">
            SPONSOR PACE
          </p>
          <h1 className="text-4xl font-[Genos] md:text-5xl font-bold mb-4">
            Partner With <span className="text-blue-500">PACE</span>
          </h1>
          <p className=" text-lg text-gray-400 mb-6">
            Become a sponsor of PACE and get exclusive brand visibility,
            networking opportunities, and access to top talent.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📧 pace2k2526@gmail.com</p>
            <p>📞 +91 6376861901 - Dheeraj Pandey</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#111827] rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">
            Sponsor Inquiry
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="input"
              />
              {errors.company && (
                <p className="error">{errors.company}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="input"
              />
              {errors.name && (
                <p className="error">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="input"
              />
              {errors.phone && (
                <p className="error">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="input"
              />
              {errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Become a Sponsor"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#111827] rounded-xl p-8 max-w-md text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-3">
              Successfully Submitted!
            </h3>
            <p className="text-gray-300 mb-6">
              A confirmation email has been sent to your provided
              email address with further instructions.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-blue-600 px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
