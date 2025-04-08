import React, { useEffect, useRef, useState } from 'react';
import type { ProjectMeta } from "@/model/projects";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: ProjectMeta;
    href?: string;
    isReverse?: boolean;
    isFirst?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, href, isReverse, isFirst }) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { amount: 0.2, once: true });
    const [imageExists, setImageExists] = useState<boolean | null>(null);
    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

    // Handle window resize with proper cleanup
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Set initial value
        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Check if image exists
    useEffect(() => {
        if (!href) {
            setImageExists(false);
            return;
        }

        const img = new Image();
        img.onload = () => setImageExists(true);
        img.onerror = () => setImageExists(false);
        img.src = href;
    }, [href]);

    const TechSkills = ({ stack }: { stack: string }) => (
        <div
            className="bg-white rounded-lg p-2 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="relative block">
                <img
                    src={`/assets/icons/${stack}.svg`}
                    alt={stack}
                    width={30}
                    height={30}
                    loading="lazy"
                    className="w-5 h-5 sm:w-7 sm:h-7 transition-transform"
                />
            </div>
            <p className={cn("text-sm sm:text-lg text-neutral-950")}>
                {stack}
            </p>
        </div>
    );

    const GithubLink = ({ url, text }: { url: string, text: string }) => (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-fit gap-2 bg-white text-neutral-950 text-xs sm:text-base border-1 px-2 py-2 hover:scale-105 rounded-lg transition-all duration-300 sm:border-1 border-neutral-950 hover:border-2"
        >
            <img
                src="/assets/icons/Github.svg"
                alt="Github"
                width={24}
                height={24}
                loading="lazy"
                className="w-5 h-5"
            />
            <span className="text-center">{text}</span>
        </a>
    );

    const ColabLink = ({ url, text }: { url: string, text: string }) => (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-fit gap-2 bg-neutral-700 text-white text-xs sm:text-sm px-2 py-2 hover:scale-105 rounded-lg transition-all duration-300"
        >
            <img
                src="/assets/icons/Colab.svg"
                alt="Colab"
                width={24}
                height={24}
                loading="lazy"
                className="w-5 h-5"
            />
            <span className="text-center">{text}</span>
        </a>
    );

    return (
        <>
            {isFirst && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        }
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-neutral-950 py-1 sm:py-2 w-full rounded-full text-2xl sm:text-4xl font-medium text-white text-center"
                >
                    Projects
                </motion.div>
            )}

            <div className="w-full h-full flex justify-center overflow-hidden mt-7">
                <motion.div
                    ref={ref}
                    initial={{ translateX: isReverse ? 50 : -50, opacity: 0 }}
                    animate={inView ? { translateX: 0, opacity: 1 } : {}}
                    transition={{ type: "spring", damping: 50, duration: 0.2, delay: 0.1 }}
                    className="flex items-center justify-center w-full mt-10 max-md:mt-0"
                >
                    <div className={cn(
                        "flex self-center gap-4 max-2xl:flex-col-reverse 2xl:w-full",
                        isReverse ? "flex-row-reverse" : "flex-row"
                    )}>
                        {imageExists && (
                            <>
                                {windowWidth <= 1024 ? (
                                    <div className="w-full flex flex-col gap-4 order-1 2xl:hidden">
                                        <img src={href} alt="cover" className="rounded-lg shadow-xl" loading="eager" />
                                    </div>
                                ) : (
                                    <div className="w-full hidden flex-col gap-4 order-1 2xl:flex">
                                        <img src={href} alt="cover" className="rounded-lg shadow-xl" loading="eager" />
                                        <div className="flex flex-wrap gap-6 pt-2">
                                            {project.stack.map((stack, index) => (
                                                <TechSkills key={index} stack={stack} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                        <div className="w-full text-white flex flex-col gap-2">
                            <p className="font-semibold text-2xl sm:text-4xl text-neutral-950">{project.title}</p>
                            <p className="text-sm sm:text-lg bg-neutral-950 w-fit py-1 px-3 rounded-full text-white">{project.type}</p>
                            <p className="text-sm sm:text-lg text-orange-500 font-semibold">{project.role}</p>
                            <p className="text-sm sm:text-lg text-justify text-neutral-950 mt-2 sm:mt-4 leading-relaxed">{project.description}</p>

                            {(project.sourceClient || project.sourceModel || project.sourceServer || project.sourceColab) && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-2 w-fit mt-4">
                                    {project.sourceClient && (
                                        <GithubLink url={project.sourceClient} text="Client Source" />
                                    )}
                                    {project.sourceServer && (
                                        <GithubLink url={project.sourceServer} text="Server Source" />
                                    )}
                                    {project.sourceModel && (
                                        <GithubLink url={project.sourceModel} text="Model Source" />
                                    )}
                                    {project.sourceColab && (
                                        <ColabLink url={project.sourceColab} text="Open Colab" />
                                    )}
                                </div>
                            )}

                            {project?.contributors && (
                                <div className="mt-4 sm:mt-6 w-full">
                                    <p className="font-semibold text-base sm:text-xl text-neutral-950 mb-3">Contributors</p>
                                    <div className="flex flex-wrap flex-col space-y-2">
                                        {project.contributors.map((contributor, index) => (
                                            <a key={index}
                                                href={contributor.link || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 text-gray-300 hover:text-white bg-[#0077B5] hover:bg-blue-600 p-1 sm:p-2 rounded-lg transition-all duration-300 border-2 border-blue-500/50 hover:border-blue-700/60"
                                            >
                                                <div
                                                    className="flex items-center justify-center w-5 h-5 sm:w-8 sm:h-8 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-5 h-5 sm:w-7 sm:h-7 text-white">
                                                        <path
                                                            d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                                                    </svg>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-white text-sm sm:text-lg">{contributor.name}</span>
                                                    <span className="text-xs sm:text-base text-neutral-300">{contributor.role}</span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {imageExists && windowWidth <= 1024 && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.stack.map((stack, index) => (
                                        <TechSkills key={index} stack={stack} />
                                    ))}
                                </div>
                            )}

                            {!imageExists && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.stack.map((stack, index) => (
                                        <TechSkills key={index} stack={stack} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default ProjectCard;