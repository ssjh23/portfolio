import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { usePageStore } from "../store"


export default function Skills () {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-100px"
    })
    const [ currentPage, setPage ] = usePageStore((state)=> 
    [state.currentPage, state.setPage]
   )
    
    useEffect(()=>{
        if (isInView){
           setPage(2)
           console.log(currentPage)
        }
    },[isInView])
    return (
        <motion.div 
            ref={ref} 
            className="bg-slate-800 h-screen col-start-2 col-span-7 snap-start" 
            
            id="Skills">
            <span>Skills </span>
        </motion.div>
    )
}