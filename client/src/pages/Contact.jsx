import { useState } from "react";

const Contact = () => {

  const [user , setuser]= useState({
    username : "",
    email : "",
    subject : "",
    message : "" 
  })


    // 2. Collect input data
     const handleChange = (e) =>{
     setuser({
      ...user,
     [ e.target.name]: e.target.value
     })
     }

       // 3. Get data when user clicks Login
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
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
              Get in Touch
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
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200" >

            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5"  onSubmit={handleSubmit}>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                value={user.username}
                onChange={handleChange}
                  name="username"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                value={user.email}
                onChange={handleChange}
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                value={user.subject}
                onChange={handleChange}
                  name="subject"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                value={user.message}
                onChange={handleChange}
                name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
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
