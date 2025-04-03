import React, {type ReactNode} from "react";
import {motion} from "motion/react";

const AboutMotion = ({children}: {children: ReactNode}) => {
    return (
        <div className="flex flex-col justify-between items-center w-full h-full gap-7 relative bg-neutral-200">
            <motion.div className="w-full h-full flex justify-center items-center gap-5  left-0 z-10" 
                initial={{opacity: 0, x: -50}}
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
                <div className="flex flex-col justify-start text-justify mt-10 gap-8 px-10">
                    <div className="gap-4 flex flex-col items-center max-md:items-start">
                        <div className="bg-neutral-950 -ml-10 pl-10 pr-5 py-2 rounded-r-full text-4xl font-medium text-white">
                            About Me
                        </div>
                        <p className="text-md  ">
                        3rd-year Informatics Engineering student with a robust background in computer science, software engineering, mathematics, and statistics. Passionate about machine learning research, I'm driven to excel as a machine learning engineer by solving challenging problems and continuously expanding my expertise.
                        <br/>
                        <br/>
                        I've developed deep learning models using TensorFlow, scikit-learn, PyTorch, and Mediapipe that have enhanced efficiency and helped users complete tasks more effectively. Additionally, I bring experience in web development, although my primary focus and strength lie in machine learning and AI. A fast learner with exceptional adaptability, I also excel in communication and teamwork, ensuring collaborative projects achieve impactful results.
                        </p>
                    </div>

                    <div className="gap-4 flex flex-col items-center max-md:items-start">
                        <div className="bg-neutral-950 -ml-10 pl-10 pr-5 py-2 rounded-r-full text-4xl font-medium   text-white">Technical Skills</div>
                        <div className="flex gap-4 flex-wrap justify-center max-md:justify-start">
                            {children}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutMotion;