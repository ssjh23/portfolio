import { usePageStore } from "../store"
import { useEffect, useRef, useState } from "react"
import { useInView, motion } from "framer-motion"
import Header from "../components/Header"
export default function Currently () {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-100px"
    })
    const [headerAnimated, setHeaderAnimated] = useState(false)
    const [ currentPage, setPage ] = usePageStore((state)=> 
    [state.currentPage, state.setPage]
   )
   const handleSetAnimated = () => {
    setHeaderAnimated(true)
   }
   useEffect(() => {
        if(isInView){
            setPage(4)
        }
    }, [isInView])
    return (
        <motion.div 
            ref = {ref}
            className=" bg-slate-900 h-screen col-start-2 col-span-7" 
            id="Currently"
        >
            <div className="flex flex-col justify-center col-span-4 xl:p-28">
                <Header isInView= {isInView} HeaderString="What am I doing now?" Index="04." setHeaderAnimated={handleSetAnimated}/>
            </div>
        </motion.div>
    )
}