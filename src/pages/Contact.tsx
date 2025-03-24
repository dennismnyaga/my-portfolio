import React, { useState } from "react";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare, FaLinkedin } from "react-icons/fa";

import { MdEmail } from "react-icons/md";



import Nav from "../components/Nav";
import { RingLoader } from "react-spinners";
import { useAppDispatch } from "../app/hooks";
import { postEmail } from "../features/emails/emailsSlice";

const Contact = () => {
    const [submitting, setSubmitting] = useState<boolean>(false)
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true); // Show loader

        try {
            await dispatch(postEmail(formData)).unwrap();
            alert("Your message has been sent!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Email send error:", error);
            alert("Failed to send message. Try again.");
        } finally {
            setSubmitting(false); // Hide loader after request
        }
    };


    return (
        <div className="min-h-screen bg-gray-100">
            <Nav />
            <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-6">
                    <a
                        href="https://x.com/murildennis7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-x-color text-white py-2 px-4 rounded shadow-md hover:bg-blue-600"
                    >
                        <FaXTwitter size={20} />
                        <span>Twitter</span>
                    </a>
                    <a
                        href="https://facebook.com/dennis.muril"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-facebook-color text-white py-2 px-4 rounded shadow-md hover:bg-blue-800"
                    >

                        <FaSquareFacebook size={20} />
                        <span>Facebook</span>
                    </a>
                    <a
                        href="https://wa.me/+254700200566"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-whatsapp-color text-white py-2 px-4 rounded shadow-md hover:bg-green-600"
                    >
                        <FaWhatsappSquare size={20} />
                        <span>WhatsApp</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dennis-murimi-nyaga-70105329a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-facebook-color text-white py-2 px-4 rounded shadow-md hover:bg-green-600"
                    >
                        <FaLinkedin size={20} />
                        <span>LinkedIn</span>
                    </a>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="bg-gray p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <MdEmail className="mr-2" /> Send an Email
                    </h2>

                    <label className="block mb-4">
                        <span className="text-gray-700">Name:</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded mt-1"
                            required
                        />
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-700">Email:</span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded mt-1"
                            required
                        />
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-700">Message:</span>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border rounded mt-1"
                            rows={4}
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-black text-white py-2 px-4 rounded w-full hover:bg-gray-800 flex justify-center items-center"
                        disabled={submitting}
                    >
                        {submitting ? <RingLoader size={25} color="#ffffff" /> : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
