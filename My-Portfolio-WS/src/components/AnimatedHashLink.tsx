import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { AnimatePresence, motion, Variants } from "framer-motion"
import { forwardRef, useEffect } from "react"
import { usePageStore } from "../store"

interface Label {
    LinkName: string
    id: number
}
export default function AnimatedHashLink ({ LinkName, id }:Label) {
    const label = LinkName.slice(1)
    const [currentPage] = usePageStore((state)=> 
    [state.currentPage]
   )
    
   useEffect(()=> {
    console.log(currentPage < id+1)
   },[currentPage])
    return (
        <>
        {id !== 0 &&
         <> 
         {
            currentPage < id+1 ? (
                <div className="w-0.5 h-10 max-h-20 bg-slate-400 self-center"></div>
            ) 
            :
            (
                <div className="w-0.5 h-10 max-h-20 bg-teal-400 self-center dashed"></div>
            )
         }
            
         </>
        }
         <HashLink to= { LinkName }>
            <motion.div
             className="flex flex-col"
             whileHover={{
                scale: 1.2
             }}
            >
                <span className="text-teal-400 text-xs lg:text-sm xl:text-base 2xl:text-lg">{id+1}. </span>
                    <motion.span className="text-xs lg:text-sm xl:text-base 2xl:text-lg"
                        style={{ color: currentPage < id+1 ? "rgb(148 163 184)" : "rgb(45 212 191" }}
                    >
                        {label}
                    </motion.span>
            </motion.div>
         </HashLink>
        </>
    )
}