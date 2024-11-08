"use client";
import React, { useState } from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedIn from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.Subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
    
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if (response.ok) {
            console.log("Message sent successfully.");
            setEmailSubmitted(true);
        } else {
            console.error("Failed to send message:", resData.error);
        }
    };

    // Adding the scroll functionality
    const handleHireMeClick = () => {
        document.getElementById("emailSection").scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section id="emailSection" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    Have an idea or need help with a website? I’m here to chat! Whether you have a question or want to talk about a project, just send me a message. I love creating things online and am excited to work together. Reach out, and I’ll reply soon – let’s make something great!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/codewithdaniyal">
                        <Image src={GithubIcon} alt="GitHub Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/daniyal3650">
                        <Image src={LinkedIn} alt="LinkedIn Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA289] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="example@gmail.com"
                            />
                        </label>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Subject" className="text-white block mb-2 text-sm font-medium">Subject
                            <input
                                name="Subject"
                                type="text"
                                id="Subject"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA289] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Enter the subject of your message"
                            />
                        </label>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA289] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Write your message here"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-5 py-2.5 rounded-lg w-full bg-white hover:bg-slate-200 text-black font-medium"
                    >
                        Send Message
                    </button>
                    {emailSubmitted && (
                        <p className="text-white text-sm font-medium mt-2">Message sent successfully. I'll get back to you shortly.</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
