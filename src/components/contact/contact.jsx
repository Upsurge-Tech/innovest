import React, { useState } from "react";
import { motion } from "framer-motion";
import contact from "../../assets/images/contact/contact.png";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const xValue = isMobile ? 0 : 100;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrors((prevData) => ({ ...prevData, email: "Email is required" }));
      return;
    }
    if (!formData.message) {
      setErrors((prevData) => ({
        ...prevData,
        message: "Message is required",
      }));
      return;
    }

    const emailData = {
      email: formData.email,
      subject: "Contact Form Submission",
      message: formData.message,
    };

    try {
      const response = await fetch(
        "https://innovest-back-email-service-kfe3.onrender.com/mail/recieveMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully");
        // You can handle success (e.g., show a success message)
      } else {
        console.log("Failed to send email");
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error sending email", error);
      // Handle error (e.g., show an error message)
    }

    // Clear the form after sending the email
    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
  };

  return (
    <main id="contact" className="min-w-screen pt-16 mt-16">
      {/* ... (previous content) */}
      <motion.div className="grid grid-cols-3 overflow-hidden ml-8">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#00407B] col-span-3 sm:col-span-1"
          initial={{ x: -100 }}
          whileInView={{ x: xValue, transition: { duration: 1 } }}
        >
          Contact Us
        </motion.h2>
        <motion.div
          className="sm:col-span-2 h-10 bg-black w-full mt-1 hidden sm:block"
          initial={{ x: 400 }}
          whileInView={{ x: xValue, transition: { duration: 1 } }}
        ></motion.div>
      </motion.div>
      <div className="flex flex-col lg:flex-row pr-8 md:pr-16 pb-20 pt-10  lg:pl-0 mt-4 sm:mt-12 gap-5 ml-8 sm:ml-20 md:ml-32 lg:space-x-8">
        <div className="flex flex-col sm:flex-row lg:flex-col ">
          <div className="lg:relative">
            <img src={contact} className="hidden lg:block" alt="contact us" />

            <div className="flex flex-col gap-3 bg-white rounded-2xl p-7 py-8 px-4 lg:absolute lg:-bottom-32 w-full">
              <h2 className="font-bold text-xl sm:text-2xl">
                Contact Information
              </h2>
              <div className="flex flex-col lg:flex-col xl:flex-row justify-between mt-4">
                <div className="flex flex-row gap-3">
                  <BiSolidPhoneCall size={20} />
                  <p className="font-poppins">+1012 3456 789</p>
                </div>
                <div className="flex flex-row gap-3">
                  <BiSolidPhoneCall size={20} />
                  <p className="font-poppins">+1012 3456 789</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 mt-4">
                <MdEmail size={20} />
                <a
                  href="mailto:contact@innovest-africa-business-group.com"
                  className="flex flex-row gap-5"
                >
                  <p className="font-poppins">
                    contact@innovest-africa-business-group.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-screen"></div>
        <div className="flex flex-col lg:w-6/12 p-10 gap-3 bg-white rounded-2xl">
          <p className="flex font-bold text-2xl sm:text-3xl md:text-4xl font-inter">
            Send Us A Message
          </p>
          <p className="flex text-lg font-poppins">
            Have any questions regarding our services? Send us your message.
          </p>
          <form className="flex flex-col gap-10" onSubmit={sendEmail}>
            <div className="flex flex-col md:flex-col gap-10">
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="font-extrabold font-poppins">
                  Name
                </label>
                <input
                  className="flex p-5 rounded-2xl bg-[#DDDDDD] focus:outline-none"
                  placeholder="Enter your Name ..."
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="font-bold font-poppins">
                  Email
                </label>
                <input
                  className="flex p-5 rounded-2xl bg-[#DDDDDD] focus:outline-none"
                  placeholder="Enter your Email Address ..."
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email}</div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="font-bold font-poppins">
                  Message
                </label>
                <textarea
                  className="flex px-5 py-8 rounded-2xl bg-[#DDDDDD] h-44 focus:outline-none"
                  placeholder="Enter your Message ..."
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <div className="text-red-500">{errors.message}</div>
                )}
              </div>
              {/* ... (other form fields) */}
              <div className="flex justify-center items-end">
                <button
                  className="focus:ring-4 focus:outline-none uppercase focus:ring-blue-300 font-medium rounded-lg  px-8 py-3 text-center border border-primary ml-4 md:ml-8 bg-gradient-to-r from-[#100F36] to-[#1063DF] text-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
