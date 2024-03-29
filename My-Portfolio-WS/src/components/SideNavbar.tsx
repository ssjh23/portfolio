import { BrowserRouter } from "react-router-dom"
import { useRef, useEffect } from "react"
import { motion, useInView, useScroll, Variants } from "framer-motion"

import AnimatedHashLink from "./AnimatedHashLink"
export default function SideNavbar () {
    const screens = ['#About', '#Skills', '#Projects', '#Currently', '#Contact']
    const ref = useRef(null)
    const isInView = useInView(ref)

    const sidebarVariants: Variants = {
        hidden:{
            x: "-100vw", 
            opacity: 0
        },
        visible:{
            x:0, 
            opacity: 1,
            transition: {
                duration:1
            }
        }
    }
    return(
        <div className="h-screen flex flex-col justify-center items-center col-start-1 col-span-1 sticky top-0 z-0 pl-6 bg-slate-900">
            <div ref={ref}>
                <motion.div 
                    className="font-shareTechMono flex flex-col gap-2"
                    initial={"hidden"}
                    animate={isInView && "visible"}
                    variants={sidebarVariants}
                >
                    {screens.map((screen, index) => 
                        <AnimatedHashLink key={index} id={index} LinkName={screen}/>
                    )}
                </motion.div>
            </div>
        </div>
    )
}