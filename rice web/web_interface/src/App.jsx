// import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/Home';
// import AboutPage from './pages/About';
// import ContactPage from './pages/Contact';

// function App() {
//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.1
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     const animatedElements = document.querySelectorAll('.animated-element');
//     animatedElements.forEach(el => observer.observe(el));

//     return () => {
//       animatedElements.forEach(el => observer.unobserve(el));
//     };
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    success: false,
    error: null,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animated-element");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                formData={formData}
                setFormData={setFormData}
                formStatus={formStatus}
                setFormStatus={setFormStatus}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/contact"
            element={
              <ContactPage
                formData={formData}
                setFormData={setFormData}
                formStatus={formStatus}
                setFormStatus={setFormStatus}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
