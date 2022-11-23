import { usePageStore } from "../store"
import { useEffect, useRef } from "react"
import { useInView, motion } from "framer-motion"
export default function Contact () {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-100px"
    })
    const [ currentPage, setPage ] = usePageStore((state)=> 
    [state.currentPage, state.setPage]
   )
   useEffect(() => {
        if(isInView){
            setPage(5)
        }
    }, [isInView])
    return (
        <motion.div 
            ref = {ref}
            className="bg-slate-800 h-screen col-start-2 col-span-7" 
            id="Contact"
        >
            <span className="text-teal-400">Contact</span>
        </motion.div>
    )
}