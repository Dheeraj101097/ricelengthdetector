import React from "react";
import ContactForm from "../components/ContactForm";
import AboutPage from "../components/About";

const ContactPage = ({ formData, setFormData, formStatus, setFormStatus }) => {
  return (
    <>
      <AboutPage />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-rice-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  What hardware is required to run the system?
                </h3>
                <p className="text-gray-700">
                  The system requires a standard computer with at least 8GB RAM,
                  a high-resolution camera (minimum 12MP), and a uniformly lit
                  capture area. Detailed specifications are provided in the
                  documentation.
                </p>
              </div>

              <div className="bg-rice-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Can the system classify different rice varieties?
                </h3>
                <p className="text-gray-700">
                  Yes, the system can be trained to identify and classify
                  different rice varieties based on grain morphology. The base
                  model includes common rice varieties, and custom training
                  options are available.
                </p>
              </div>

              <div className="bg-rice-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  How accurate is the measurement system?
                </h3>
                <p className="text-gray-700">
                  The system achieves over 98% accuracy for length measurements
                  and 97% for width measurements when compared to manual caliper
                  measurements. Results have been validated against industry
                  gold standards.
                </p>
              </div>

              <div className="bg-rice-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Is the software open source?
                </h3>
                <p className="text-gray-700">
                  The core components are available open-source on our GitHub
                  repository. Advanced features and specialized modules are
                  available through licensing. Please contact us for more
                  details.
                </p>
              </div>

              <div className="bg-rice-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Can I integrate this system with our existing equipment?
                </h3>
                <p className="text-gray-700">
                  Yes, the system is designed to be flexible and can be
                  integrated with most standard imaging equipment. Our team can
                  provide consultation on integration with your specific setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-rice-100">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Contact Us
            </h1>
            <p className="text-xl text-center text-gray-700 mb-8">
              We'd love to hear from you! Get in touch with our team for any
              questions or inquiries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
