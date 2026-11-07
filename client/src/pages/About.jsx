
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="bg-[#0B132B] text-white px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          About TruthLens
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          See Beyond the Headlines. Discover the Truth.
        </p>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          TruthLens helps people identify misinformation, analyze suspicious
          news, and make informed decisions.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-5">Our Mission</h2>

          <p className="text-gray-600 text-lg leading-8">
            Our mission is to promote digital awareness and responsible
            information sharing by helping users evaluate the credibility
            of news and online content.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-7 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">
                News Verification
              </h3>
              <p className="text-gray-600 leading-7">
                Analyze news content to identify potentially misleading
                information.
              </p>
            </div>

            <div className="p-7 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-600 leading-7">
                Use AI to examine claims and identify suspicious patterns
                in news content.
              </p>
            </div>

            <div className="p-7 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">
                Fact Checking
              </h3>
              <p className="text-gray-600 leading-7">
                Help users understand claims through supporting evidence
                and reliable sources.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-5">Our Vision</h2>

        <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto">
          A world where people question information responsibly,
          recognize misinformation, and make decisions based on
          credible evidence.
        </p>
      </section>

      {/* Footer Message */}
      <section className="bg-[#0B132B] text-white text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          Don't Just Read the News. Verify It.
        </h2>

        <p className="text-gray-400 mt-3">
          TruthLens — See the truth behind every headline.
        </p>
      </section>

    </div>
  );
};

export default About;
