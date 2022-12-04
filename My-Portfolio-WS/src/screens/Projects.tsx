import { usePageStore } from "../store"
import { useEffect, useRef, useState } from "react"
import { useInView, motion, Variants } from "framer-motion"
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
   const ProjectVariants: Variants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition: {
            delay:1,
            duration:1
        }
    }
}
   const Projects = ProjectItems.map((ProjectItem: ProjectItem) => {
    return<ProjectCard imgUrl={ProjectItem.ImgUrl} TintedImgUrl={ProjectItem.TintedImgUrl} Title={ProjectItem.Title} Content={ProjectItem.Content}/>
    })

   useEffect(() => {
        if(isInView){
            setPage(3)
        }
    }, [isInView])
    return (
        <motion.div 
            ref = {ref}
            className="grid auto-rows-max grid-cols-4  bg-slate-900  col-start-2 col-span-6 justify-center" 
            id="Projects"
        >
            <div className="flex flex-col justify-center col-span-4 xl:p-28">
                <Header isInView= {isInView} HeaderString="What have I worked on?" Index="03." setHeaderAnimated={handleSetAnimated}/>
            </div>
            <motion.div 
                className="flex flex-col justify-center row-start-2 col-span-4"
                initial="hidden"
                animate={isInView&&"visible"}
                variants={ProjectVariants}
                >
                {Projects}
            </motion.div>
            
        </motion.div>
        
    )
}