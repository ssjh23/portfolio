import { motion, useInView, Variants, useMotionValue, useTransform, animate} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { HashLink } from "react-router-hash-link"
import { hand } from "../assets/path"
import HeroSectionSVG from "../components/HeroSectionSVG"
import { usePageStore } from "../store"

export default function HeroSection () {
    let[isSVGCompleted, setIsSVGCompleted] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-100px"
    }) 
    const [ currentPage, setPage ] = usePageStore((state)=> 
    [state.currentPage, state.setPage]
   )
   const isSVGAnimationComplete = (isCompleted:boolean) => {
        setIsSVGCompleted(isCompleted)
   }
    useEffect(()=>{
        if (isInView){
           setPage(0)
        }
    },[isInView])

    const handleRedirect = () =>{
        window.location.href = '#About'
    }
    return (
        <motion.div 
            ref={ref} 
            className="flex bg-slate-800 h-screen snap-start" 
            id="Intro">
            <div className="flex flex-col ml-80 pl-32 pt-40">
                <HeroSectionSVG isSVGCompleted={isSVGAnimationComplete}/>
                {isSVGCompleted && (
                    <>
                        <motion.div 
                            initial={{opacity:0, x:-100}} 
                            animate={{opacity:1, x:0}} 
                            transition={{delay:0.5, duration:0.8}} 
                            className="text-xl font-shareTechMono text-left text-teal-400 mt-6">
                                    Hey, Sean here
                            </motion.div>
                        <motion.div 
                        initial={{opacity:0, x:-100}} 
                        animate={{opacity:1, x:0}} 
                        transition={{delay:0.5, duration:0.8}} 
                        className="text-xl font-Inter text-left text-slate-400 mt-6 w-1/2">
                                {/* Hello! My name is Sean Soo and I enjoy making things work with code. Making an Android phone app, working with an Arduino to make a simple RC Robot or building a website, I have tried it all! And 
                                each experience, good or bad, has made me enjoy appreciate my field more.
                                <br></br><br></br>"Learn Smart, Learn Fast" is my own personal motto. It is a reminder that in the ever-changing field of Software Engineering, continuous adaptation while maintaining quality is key. True to the cliche, the journey
                                is just as important as the destination */}
                                I am a Computer Science Undergrad in my 3rd year at <a href="https://istd.sutd.edu.sg/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline underline-offset-1">Singapore University of Technology and Design</a>. 
                                An aspiring Software Engineer looking, I enjoy making things work with code.
                                <br></br><br></br>Currently, I am interning at <a href="https://www.voltality.io/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline underline-offset-1">Voltality</a> as a Frontend Engineer
                        </motion.div>
                        <motion.button 
                            initial={{opacity:0, x:-100}} 
                            animate={{opacity:1, x:0, transition:{delay:0.5, duration:0.8}}}
                            whileHover={{
                                scale:1.2,
                                transition:{duration:0.2}
                            }}
                            whileTap={{
                                scale:1.0,
                                backgroundColor:"#fff"
                            }}
                            onClick={handleRedirect}
                            className="self-start mt-12 border-solid border-teal-400 border-2 p-4 rounded-lg text-teal-400 font-shareTechMono">
                                Find out more about me!
                        </motion.button>
                    </>
                )}
            </div>
            
        </motion.div>
    )
}