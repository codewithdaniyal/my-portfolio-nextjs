"use client"

import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills", // Changed to a string
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
            </ul>
        )
    },
    {
        title: "Education", // Changed to a string
        content: (
            <ul className='list-disc pl-2'>
                <li>Full Stack Web/App Developer</li>
                <li>Intermediate</li>
            </ul>
        )
    },
    {
        title: "Certification", // Changed to a string
        content: (
            <ul className='list-disc pl-2'>
                <li>Certified Web/App Developer - Governor Sindh IT Initiative</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();

    const handleTabClick = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about" className='text-white py-8 px-4 sm:py-16 xl:px-16'>
            {/* Rest of your component remains unchanged */}
            <div className='grid md:grid-cols-2 gap-8 items-center'>
                {/* Image section */}
                <Image
                    src="/images/360_F_763055587_SEuqTavi5EN0k50NpolteLMagNugDmzt.jpg"
                    width={500}
                    height={500}
                    alt="Profile Image"
                />
                
                {/* Text content section */}
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Hello! I'm Daniyal, a dedicated full-stack web developer with a passion for creating websites that are both visually appealing and highly functional.
                        I have experience building complete web applications, from the front end to the back end, making sure every detail works smoothly and looks great.
                        I take pride in writing clean, efficient code and designing user-friendly interfaces that make websites easy to navigate. My goal is to help clients bring their ideas to life on the web,
                        whether it's a sleek personal site, a dynamic business platform, or a custom web solution.
                        I’m always ready to take on new challenges, work closely with clients, and build something amazing together!
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabClick("Skills")} active={tab === "Skills"}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabClick("Education")} active={tab === "Education"}>
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabClick("Certification")} active={tab === "Certification"}>
                            Certification
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.title === tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
