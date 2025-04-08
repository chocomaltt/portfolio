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
                <div className="flex flex-col justify-start items-end text-right gap-4 mt-10 2xl:mx-52 2xl:p-14 2xl:items-center 2xl:bg-neutral-50 2xl:rounded-lg">
                        <div className="w-full text-end bg-orange-400 -mr-10 pl-5 pr-20 py-1 sm:py-2 rounded-l-full text-2xl sm:text-4xl font-medium text-white 2xl:text-center 2xl:m-0 2xl:rounded-full">
                            Professional Experience
                        </div>
                        <div className="flex flex-col items-end gap-3 px-10 2xl:items-start">
                            <p className="text-lg sm:text-2xl font-semibold">{experienceDetails.company} <span className="font-light text-base sm:text-xl">| {experienceDetails.location}</span> </p>
                            <div className="bg-red-700 w-fit p-1 rounded-md shadow-lg text-xs sm:text-base text-white">
                                Internship
                            </div>
                            <div className="text-sm sm:text-lg font-semibold 2xl:text-justify">{experienceDetails.position} <p className="text-sm sm:text-lg text-neutral-600 font-medium">{experienceDetails.duration}</p></div>
                            
                            <p className="text-sm sm:text-lg text-justify">{experienceDetails.description}</p>
                            <div className="flex gap-1 justify-between flex-wrap">
                                {experienceDetails.technologies.map((tech) => (
                                    <div className="p-1 sm:p-2 bg-white border-2 border-neutral-300 rounded-md text-sm sm:text-lg shadow-lg">{tech}</div>
                                ))}
                            </div>
                        </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ExperienceMotion;