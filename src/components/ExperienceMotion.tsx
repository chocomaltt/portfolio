import React, {type ReactNode} from "react";
import {motion} from "motion/react";

const experienceDetails = {
    company: "PT Graha Sarana Gresik",
    position: "Machine Learning Engineer",
    duration: "Jan 2025 - Present",
    location: "Gresik, Indonesia",
    description: `Developed an information system website to digitalize mailing activity within the company. The website includes features such as sending, receiving, and tracking mail status. The system is designed to improve efficiency and reduce the use of paper in the company. Making a hand tracking system using OpenCV and Mediapipe to detect hand gestures. The system is designed to be a mouse replacement, allowing users to control the computer using hand gestures. The system is designed to improve accessibility and reduce the use of traditional input devices such as a mouse or keyboard in a warehouse.`,
    technologies: [
        "Python",
        "NumPy",
        "Mediapipe",
        "OpenCV",
        "TensorFlow",
        "PHP",
        "Laravel",
        "TailwindCSS",
        "MySQL",
    ],
};

const ExperienceMotion = () => {
    return (
        <div className="flex flex-col justify-between items-center w-full h-full gap-7 relative bg-neutral-200">
            <motion.div className="w-full h-full flex justify-center items-center gap-5 left-0 z-10" 
                initial={{opacity: 0, x: 50}}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.8,
                        ease: "easeOut"
                    }
                }}
                viewport={{once:true, amount: 0.2}}
            >
                <div className="w-full h-full flex flex-col justify-start text-right gap-8 px-10 mt-10">
                        <div className="bg-orange-400 -mr-10 pr-10 py-2 rounded-l-full text-4xl font-medium text-white">
                            Professional Experience
                        </div>
                        <div className="flex flex-col items-end gap-3">
                            <p className="text-xl font-semibold">{experienceDetails.company} <span className="font-light text-md">| {experienceDetails.location}</span> </p>
                            <div className="bg-red-700 w-fit p-1 rounded-md shadow-lg text-xs text-white">
                                Internship
                            </div>
                            <div className="font-semibold">{experienceDetails.position} <p className="text-sm text-neutral-600 font-medium">{experienceDetails.duration}</p></div>
                            
                            <p className="text-justify">{experienceDetails.description}</p>
                            <div className="flex gap-2 justify-between flex-wrap">
                                {experienceDetails.technologies.map((tech) => (
                                    <div className="p-1 bg-white border-2 border-neutral-300 rounded-md text-sm shadow-lg">{tech}</div>
                                ))}
                            </div>
                        </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ExperienceMotion;