import { usePageStore } from "../store"
import { useEffect, useRef } from "react"
import { useInView, motion } from "framer-motion"
export default function Currently () {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-100px"
    })
    const [ currentPage, setPage ] = usePageStore((state)=> 
    [state.currentPage, state.setPage]
   )
   useEffect(() => {
        if(isInView){
            setPage(4)
            console.log(currentPage)
        }
    }, [isInView])
    return (
        <motion.div 
            ref = {ref}
            className=" bg-slate-800 h-screen col-start-2 col-span-7" 
            id="Currently"
        >
            <span className="text-teal-400">Currently</span>
        </motion.div>
    )
}