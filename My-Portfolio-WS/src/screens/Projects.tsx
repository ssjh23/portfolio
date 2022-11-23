import { usePageStore } from "../store"
import { useEffect, useRef, useState } from "react"
import { useInView, motion } from "framer-motion"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import ScanCartImg from '../assets/ScanCart.png'
import TintedScanCartImg from '../assets/ScanCartColoured.png'
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
            className="grid grid-rows-5 grid-cols-4 bg-slate-800 h-screen col-start-2 col-span-6 snap-start" 
            id="Projects"
        >
            <div className="flex flex-col justify-center col-span-4">
                <Header isInView= {isInView} HeaderString="What have I worked on?" Index="03." setHeaderAnimated={handleSetAnimated}/>
            </div>
            <div className="flex flex-col justify-center row-start-2 row-span-2 col-span-4">
                <ProjectCard imgUrl={ScanCartImg} TintedImgUrl={TintedScanCartImg}/>
            </div>
            <div className="flex flex-col justify-center row-start-4 row-span-2 col-span-4">
                <ProjectCard imgUrl={ScanCartImg} TintedImgUrl={TintedScanCartImg}/>
            </div>
        </motion.div>
    )
}