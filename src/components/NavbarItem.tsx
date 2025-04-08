import React, { useState, useEffect } from 'react';

interface NavbarScrollProps {
    children: React.ReactNode;
}

export function NavbarScroll({ children }: NavbarScrollProps) {
    useEffect(() => {
        let prevScrollPos = window.pageYOffset;
        const navbar = document.getElementById('navbar')?.querySelector('nav');
        
        if (!navbar) return;
        
        // Add transition CSS if not already present in your CSS
        navbar.style.transition = 'transform 0.3s ease-in-out';
        
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            
            // Show when scrolling up or at top, hide when scrolling down
            if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
                navbar.style.transform = 'translateY(0)';
            } else {
                navbar.style.transform = 'translateY(150%)'; // Move down (out of view)
            }
            
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <>{children}</>;
}

// Your existing NavbarItem component remains unchanged
interface NavbarItemProps {
    href: string;
    label: string;
}

export default function NavbarItem({ href, label }: NavbarItemProps) {
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
                threshold: [0.1, 0.2, 0.5, 0.8],
                rootMargin: '-20% 0px -20% 0px',
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
                className={`py-1 sm:py-2 hover:border-b-2 text-base sm:text-xl px-2 sm:px-4 hover:border-neutral-300 transition duration-500 ease-in-out ${isActive ? 'border-b-2 border-white' : 'border-b-black'}`}
            >
                {label}
            </a>
        </li>
    );
}