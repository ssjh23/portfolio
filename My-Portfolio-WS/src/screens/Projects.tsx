import { usePageStore } from "../store"
import { useEffect, useRef, useState } from "react"
import { useInView, motion } from "framer-motion"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import { ProjectItems, ProjectItem} from "../models/ProjectItems"
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
   const Projects = ProjectItems.map((ProjectItem: ProjectItem) => {
    return<ProjectCard imgUrl={ProjectItem.ImgUrl} TintedImgUrl={ProjectItem.TintedImgUrl} Title={ProjectItem.Title} Content={ProjectItem.Content}/>
})
   useEffect(() => {
        if(isInView){
            setPage(3)
            console.log(currentPage)
        }
    }, [isInView])
    return (
        <motion.div 
            ref = {ref}
            className="grid auto-rows-max grid-cols-4  bg-slate-900  col-start-2 col-span-6" 
            id="Projects"
        >
            <div className="flex flex-col justify-center col-span-4 xl:p-28">
                <Header isInView= {isInView} HeaderString="What have I worked on?" Index="03." setHeaderAnimated={handleSetAnimated}/>
            </div>
            <div className="flex flex-col justify-center row-start-2 col-span-4">
                {Projects}
            </div>

        </motion.div>
        
    )
}