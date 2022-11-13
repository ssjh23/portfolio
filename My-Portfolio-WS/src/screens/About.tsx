import { motion, useInView, Variants } from "framer-motion"
import { useEffect, useRef } from "react"
import { usePageStore } from "../store"

export default function About () {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-100px"
    })
    const [ currentPage, setPage ] = usePageStore((state)=> 
    [state.currentPage, state.setPage]
   )

   const sidebarVariants: Variants = {
    hidden:{
        y: "-100vh", 
        opacity: 0
    },
    visible:{
        y:0, 
        opacity: 1,
        transition: {
            duration:1
        }
    }
}
    
   useEffect(() => {
        if(isInView){
            setPage(1)
        }
    }, [isInView])
    return (
        <motion.div ref={ref}
            className="grid grid-rows-6 bg-slate-800 h-screen col-start-2 col-span-7 snap-start" 
            id="About"
            viewport={{ once:false }}
        >   
        <div className="grid grid-cols-6 col-start-1 row-start-1 col-span-6">
            <motion.div 
                className="flex col-start-3 col-span-2 bg-slate-800 text-teal-400 items-center justify-center text-4xl font-shareTechMono"
                initial={"hidden"}
                animate={isInView && "visible"}
                variants={sidebarVariants}
            >              
                01. <br></br> <span className="font-inter">Who am I?</span>
            </motion.div>
        </div>    
        <motion.div className="row-start-2 col-span-2 font-shareTechMono text-teal-400 text-2xl">
            A little about me
        </motion.div>        
        </motion.div>
    )
}