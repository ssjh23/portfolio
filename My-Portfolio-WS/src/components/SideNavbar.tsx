import { BrowserRouter } from "react-router-dom"

import { motion, useScroll } from "framer-motion"

import AnimatedHashLink from "./AnimatedHashLink"
export default function SideNavbar () {
    const screens = ['#About', '#Skills', '#Projects', '#Currently', '#Contact']
    return(
        
            <div
                className="h-screen grid justify-content items-center col-start-1 col-span-1 sticky top-0 z-0">
                <motion.div 
                    className="font-shareTechMono flex flex-col gap-2"
                    animate="visible">
                    {screens.map((screen, index) => 
                        <>
                            <AnimatedHashLink key={index} id={index} LinkName={screen}/>
                        </>
                    )}
                </motion.div>
            </div>
        
        
    )
}