// import { useState } from "react";
// import { Send, Check, AlertCircle, Mail, MapPin, Github } from "lucide-react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [status, setStatus] = useState({
//     submitted: false,
//     submitting: false,
//     success: false,
//     error: null,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({
//       submitted: false,
//       submitting: true,
//       success: false,
//       error: null,
//     });

//     try {
//       // In a real application, this would be an API call to your backend
//       // For demonstration, we'll simulate a successful submission
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       setStatus({
//         submitted: true,
//         submitting: false,
//         success: true,
//         error: null,
//       });

//       // Reset form after successful submission
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });

//       // Reset success status after 5 seconds
//       setTimeout(() => {
//         setStatus((prev) => ({
//           ...prev,
//           submitted: false,
//           success: false,
//         }));
//       }, 5000);
//     } catch (error) {
//       setStatus({
//         submitted: true,
//         submitting: false,
//         success: false,
//         error: "Something went wrong. Please try again later.",
//       });
//     }
//   };

//   return (
//     <section id="contact" className="section bg-rice-100">
//       <div className="container">
//         <div className="text-center mb-12 animated-element">
//           <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//           <p className="max-w-2xl mx-auto text-gray-600">
//             Have questions about our Rice Grain Length Detection System? We'd
//             love to hear from you! Fill out the form below and we'll get back to
//             you as soon as possible.
//           </p>
//         </div>

//         <div className="max-w-3xl mx-auto animated-element">
//           <form onSubmit={handleSubmit} className="card p-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent"
//                   placeholder="Your name"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent"
//                   placeholder="Your email address"
//                 />
//               </div>
//             </div>

//             <div className="mb-6">
//               <label
//                 htmlFor="subject"
//                 className="block text-gray-700 font-medium mb-2"
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent"
//                 placeholder="What is this regarding?"
//               />
//             </div>

//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="block text-gray-700 font-medium mb-2"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows="5"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent resize-none"
//                 placeholder="Your message..."
//               ></textarea>
//             </div>

//             <div className="flex items-center justify-between">
//               <button
//                 type="submit"
//                 disabled={status.submitting}
//                 className={`btn-primary flex items-center ${
//                   status.submitting ? "opacity-70 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {status.submitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <Send size={18} className="mr-2" />
//                     Send Message
//                   </>
//                 )}
//               </button>

//               {status.success && (
//                 <div className="flex items-center text-green-600">
//                   <Check size={18} className="mr-1" />
//                   <span>Message sent successfully!</span>
//                 </div>
//               )}

//               {status.error && (
//                 <div className="flex items-center text-red-600">
//                   <AlertCircle size={18} className="mr-1" />
//                   <span>{status.error}</span>
//                 </div>
//               )}
//             </div>
//           </form>
//         </div>

//         <div className="mt-16 text-center animated-element">
//           <h3 className="text-2xl font-semibold mb-4">
//             Other Ways to Reach Us
//           </h3>
//           <div className="flex flex-col md:flex-row justify-center gap-8 max-w-3xl mx-auto">
//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
//               <Mail size={28} className="text-leaf-600 mb-3" />
//               <h4 className="text-lg font-semibold mb-1">Email</h4>
//               <a
//                 href="mailto:contact@ricedetect.com"
//                 className="text-leaf-700 hover:underline"
//               >
//                 contact@ricedetect.com
//               </a>
//             </div>

//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
//               <MapPin size={28} className="text-leaf-600 mb-3" />
//               <h4 className="text-lg font-semibold mb-1">Location</h4>
//               <p className="text-gray-600 text-center">
//                 Rice Research Institute
//                 <br />
//                 Agricultural Sciences Building
//                 <br />
//                 123 University Ave
//               </p>
//             </div>

//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
//               <Github size={28} className="text-leaf-600 mb-3" />
//               <h4 className="text-lg font-semibold mb-1">GitHub</h4>
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-leaf-700 hover:underline"
//               >
//                 github.com/rice-detector
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

import { Mail, MapPin, Github } from "lucide-react";

const ContactForm = ({ formData, setFormData, formStatus, setFormStatus }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: false,
      submitting: true,
      success: false,
      error: null,
    });

    try {
      // In a real application, this would be an API call to your backend
      // For demonstration, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus({
        submitted: true,
        submitting: false,
        success: true,
        error: null,
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success status after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({
          ...prev,
          submitted: false,
          success: false,
        }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitted: true,
        submitting: false,
        success: false,
        error: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="section bg-rice-100">
      <div className="container">
        <div className="text-center mb-12 animated-element">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions about our Rice Grain Length Detection System? We'd
            love to hear from you! Fill out the form below and we'll get back to
            you as soon as possible.
          </p>
        </div>

        {/* <div className="max-w-3xl mx-auto animated-element">
          <form onSubmit={handleSubmit} className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent"
                placeholder="What is this regarding?"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={formStatus.submitting}
                className={`btn-primary flex items-center ${
                  formStatus.submitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {formStatus.submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {formStatus.success && (
                <div className="flex items-center text-green-600">
                  <Check size={18} className="mr-1" />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {formStatus.error && (
                <div className="flex items-center text-red-600">
                  <AlertCircle size={18} className="mr-1" />
                  <span>{formStatus.error}</span>
                </div>
              )}
            </div>
          </form>
        </div> */}

        <div className="mt-16 text-center animated-element">
          <h3 className="text-2xl font-semibold mb-4">
            Other Ways to Reach Us
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Mail size={28} className="text-leaf-600 mb-3" />
              <h4 className="text-lg font-semibold mb-1">Email</h4>
              <a
                href="mailto:contact@ricedetect.com"
                className="text-leaf-700 hover:underline"
              >
                contact@ricedetect.com
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin size={28} className="text-leaf-600 mb-3" />
              <h4 className="text-lg font-semibold mb-1">Location</h4>
              <p className="text-gray-600 text-center">
                Rice Research Institute
                <br />
                Agricultural Sciences Building
                <br />
                123 University Ave
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Github size={28} className="text-leaf-600 mb-3" />
              <h4 className="text-lg font-semibold mb-1">GitHub</h4>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-leaf-700 hover:underline"
              >
                github.com/rice-detector
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
