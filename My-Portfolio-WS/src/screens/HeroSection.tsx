import { motion, useInView, Variants, useMotionValue, useTransform, animate} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { HashLink } from "react-router-hash-link"
import HeroSectionSVG from "../components/HeroSectionSVG"

import { usePageStore } from "../store"

interface P{
    isRenderOtherPages: Function
}

export default function HeroSection ({isRenderOtherPages} :P) {
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
        isRenderOtherPages(isCompleted)
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
            className="flex bg-slate-900 h-screen justify-start" 
            id="Intro">
            <div>
                <HeroSectionSVG isSVGCompleted={isSVGAnimationComplete}/>
                {isSVGCompleted && (
                    <>
                        <motion.div 
                            initial={{opacity:0, x:-100}} 
                            animate={{opacity:1, x:0}} 
                            transition={{delay:0.5, duration:0.8}} 
                            className="text-xl font-shareTechMono text-center text-teal-400 mt-20 md:text-left md:px-10 lg:px-20 2xl:text-2xl 2xl:px-48">
                                    Hey, Sean here
                        </motion.div>
                        <motion.div 
                        initial={{opacity:0, x:-100}} 
                        animate={{opacity:1, x:0}} 
                        transition={{delay:0.5, duration:0.8}} 
                        className="text-base text-center text-slate-400 px-10 mt-6 max-w-screen-xl md:text-left lg:px-20 2xl:text-xl 2xl:px-48">
                                I am a Computer Science Undergrad in my 3rd year at <a href="https://istd.sutd.edu.sg/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline underline-offset-1">Singapore University of Technology and Design</a>. 
                                An aspiring Software Engineer looking, I enjoy making things work with code.
                                <br></br><br></br>Currently, I am interning at <a href="https://www.voltality.io/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline underline-offset-1">Voltality</a> as a Frontend Engineer
                        </motion.div>
                        <div className="md:flex md:px-10 lg:px-20 2xl:px-48">
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
                            className="border-solid border-teal-400 border-2 p-4 rounded-lg text-teal-400 font-shareTechMono mt-12 md:self-start">
                                Find out more about me!
                        </motion.button>
                        </div>
                    </>
                )}
            </div>
            
        </motion.div>
    )
}