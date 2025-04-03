import React from 'react';
import {Mail, FileUser} from "lucide-react";
import cv from "@/assets/CV_Machine Learning Engineer Intern_Reza Arya Wijaya_Revised.pdf";

const social = [
    {
        href: "mailto:wijayarezaarya@gmail.com",
        title: "email",
        ariaLabel: "email",
        icon: "Mail",
    },
    {
        href: "https://www.linkedin.com/in/rezaaryawijaya/",
        title: "linkedIn",
        ariaLabel: "linkedIn",
        icon: "Linkedin",
    },
    {
        href: "https://github.com/chocomaltt",
        title: "github",
        ariaLabel: "github",
        icon: "Github",
    },
    {
        href: cv,
        title: "cv",
        ariaLabel: "cv",
        icon: FileUser,
    },
];

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-3 sm:gap-6">
            <a
                href={social.find(({title}) => title === "cv")?.href}
                download
                className="mt-2 px-3 sm:mt-4 sm:px-6 py-2 text-xs sm:text-xl bg-white text-black rounded-md flex gap-1 sm:gap-5 items-center transition-transform duration-300 ease-in-out hover:-translate-y-1"
            >
                Check Out My CV!
                <FileUser size={20} className='w-4 h-4'/>
            </a>
            <div className="flex gap-6 sm:gap-14">
                {social.map(({href, title, ariaLabel, icon: Icon}) => (
                    title !== "cv" &&
                    <a
                        key={title}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={ariaLabel}
                        className={`flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 border-2 ${Icon === 'Github'? 'border-neutral-950 bg-white':''} ${Icon === 'Linkedin'? 'border-blue-500/50 bg-[#0077B5]':''} ${Icon === 'Mail'? 'bg-white':''} rounded text-white transition-transform duration-300 ease-in-out hover:-translate-y-1`}
                    >
                        {Icon !== 'Linkedin' && (
                            <img
                                src={`/assets/icons/${Icon}.svg`}
                                alt={`${Icon}`}
                                width={24}
                                height={24}
                                loading="lazy"
                            />
                        )}
                        {Icon === 'Linkedin' && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-white">
                           <path
                               d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                       </svg>
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Contact;