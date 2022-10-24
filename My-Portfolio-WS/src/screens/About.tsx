import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { usePageStore } from "../store"

export default function About () {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const [ currentPage, setPage ] = usePageStore((state)=> 
    [state.currentPage, state.setPage]
   )
    
    useEffect(()=>{
        console.log(isInView)
        if (isInView){
           console.log(currentPage)
           setPage(1)
        }
    },[isInView])
    return (
        <motion.div ref={ref}
            className="bg-slate-800 h-screen col-start-2 col-span-7 snap-start" 
            id="About"
            viewport={{ once:false }}
        >                
            <span>About Me</span>
        </motion.div>
    )
}