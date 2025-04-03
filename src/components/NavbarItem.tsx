// import { set } from 'astro:schema';
import React, {useState, useEffect} from 'react';

interface Props {
    href: string;
    label: string;
}

export default function NavbarItem({href, label}: Props) {
    const [isActive, setIsActive] = useState(false);
    const sectionId = href.replace('#', '');

    useEffect(() => {
        const section = document.getElementById(sectionId);
        if (!section) {
            console.warn(`Section with id ${sectionId} not found`);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsActive(entry.isIntersecting);
            },
            {
                threshold: [0.1,0.2, 0.5, 0.8], // Adjust the threshold as needed
                rootMargin: '-20% 0px -20% 0px', // Adjust the root margin as needed
            }
        );

        observer.observe(section);

        return () => {
            observer.unobserve(section);
            observer.disconnect();
        };
}, [sectionId]);

return (
    <li onClick={() => document.getElementById(sectionId + "1")?.click()}>
        <a 
            id={sectionId + "1"} 
            href={href} 
            className={`px-4 py-1 hover:border-b-2 max-sm:text-sm max-sm:px-2 hover:border-neutral-300 transition duration-500 ease-in-out ${isActive ? 'border-b-2 border-white' : 'border-b-black'}`}
        >
            {label}
        </a>
    </li>
);
}