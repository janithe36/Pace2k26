import React, { useState, useEffect } from "react";
import axios from "axios";

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    phoneNumber: "",
    email: "",
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.companyName.trim()) newErrors.companyName = "Company Name is required";
    if (!formData.yourName.trim()) newErrors.yourName = "Your Name is required";

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be 10 digits";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid Email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails

    setLoading(true);
    const apiUrl = "https://pace-2025.onrender.com/api/v1/pace2025/sendEmail";

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setMessage("Response received successfully. Please check your email.");
        setFormData({ companyName: "", yourName: "", phoneNumber: "", email: "" }); // Reset form after success
      } else {
        setMessage("Failed to send request. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen hero9-container bg-black px-4 py-10 relative">
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="loader"></div>
        </div>
      )}

      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 text-center font-[Genos]">WANT TO</h2>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center font-[Genos]">SPONSOR US</h2>

      {/* Form */}
      <div className="bg-[00000] rounded-t-2xl rounded-b-none p-8 shadow-lg w-full max-w-lg md:max-w-2xl">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-white">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full text-white px-3 py-2 mt-1 border border-[rgb(0,191,255)] rounded-md focus:ring focus:ring-indigo-300"
            />
            {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-white">Your Name</label>
            <input
              type="text"
              name="yourName"
              value={formData.yourName}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full text-white px-3 py-2 mt-1 border border-[rgb(0,191,255)] rounded-md focus:ring focus:ring-indigo-300"
            />
            {errors.yourName && <p className="text-red-500 text-xs mt-1">{errors.yourName}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-white">Phone No.</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone No."
              className="w-full text-white px-3 py-2 mt-1 border border-[rgb(0,191,255)] rounded-md focus:ring focus:ring-indigo-300"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full text-white px-3 py-2 mt-1 border border-[rgb(0,191,255)] rounded-md focus:ring focus:ring-indigo-300"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all hover:scale-105"
              disabled={loading}
            >
              SUBMIT FORM
            </button>
          </div>
        </form>
      </div>

      {/* Snackbar */}
      {message && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          {message}
        </div>
      )}

      <style jsx>{`
        /* Phone View (Below 500px) */
        @media (max-width: 500px) {
          .hero9-container {
            width: 150%;
            height: 200%;
          }
        }

        .loader {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #3498db;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SponsorForm;
  