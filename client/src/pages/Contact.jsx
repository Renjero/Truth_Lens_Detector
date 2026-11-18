
import { useState, useEffect } from "react";
import { useAuth } from "./store/auth";



const defaultContactFormData = {
  username: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [contact, setcontact] = useState(defaultContactFormData);
  const [isLoading, setIsLoading] = useState(false);

  const { user, token } = useAuth();

  // Automatically fill name and email when Contact page opens
  useEffect(() => {
    if (user) {
      setcontact((prev) => ({
        ...prev,
        username: user.name || user.username || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setcontact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit contact form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && {
            Authorization: `Bearer ${token}`,
          }),
        },
        body: JSON.stringify(contact),
      });

     const responseText = await response.text();

const data = responseText ? JSON.parse(responseText) : {};

      if (response.ok) {
        alert(data.message || "Message sent successfully!");

        // Clear subject and message but keep name and email
        setcontact({
          ...defaultContactFormData,
          username: user?.name || user?.username || "",
          email: user?.email || "",
        });
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      console.log("Contact Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="bg-[#0B132B] text-white px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Have questions, feedback, or found something suspicious?
          We'd love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Get in touch {user?.name || user?.username || ""}
            </h2>

            <p className="text-gray-600 leading-7 mb-10">
              Your feedback helps us improve TruthLens and make
              information verification easier for everyone.
            </p>

            <div className="space-y-7">
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-gray-500">
                  support@truthlens.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Feedback</h3>
                <p className="text-gray-500">
                  Share your suggestions and ideas with us.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">Our Platform</h3>
                <p className="text-gray-500">
                  Online News Verification Platform
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">

            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="username"
                 value={contact.username}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={contact.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={contact.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-teal-700 hover:bg-teal-800 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#0B132B] text-white text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          Together, We Can Fight Misinformation.
        </h2>

        <p className="text-gray-400 mt-3">
          TruthLens — Don't Just Read the News. Verify It.
        </p>
      </section>

    </div>
  );
};

export default Contact;
