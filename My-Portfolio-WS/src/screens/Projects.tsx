import { usePageStore } from "../store"
import { useEffect, useRef, useState } from "react"
import { useInView, motion } from "framer-motion"
import Header from "../components/Header"
export default function Projects () {
    const [headerAnimated, setHeaderAnimated] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-100px"
    })
    const [ currentPage, setPage ] = usePageStore((state)=> 
    [state.currentPage, state.setPage]
   )
   const handleSetAnimated = () => {
    setHeaderAnimated(true)
   }
   useEffect(() => {
        if(isInView){
            setPage(3)
            console.log(currentPage)
        }
    }, [isInView])
    return (
        <motion.div 
            ref = {ref}
            className="grid grid-rows-6 grid-cols-6 bg-slate-800 h-screen col-start-2 col-span-6 snap-start" 
            id="Projects"
        >
                     
        <div className="flex flex-col justify-center col-span-6">
            <Header isInView= {isInView} HeaderString="What have I worked on?" Index="03." setHeaderAnimated={handleSetAnimated}/>
        </div>
        </motion.div>
    )
}