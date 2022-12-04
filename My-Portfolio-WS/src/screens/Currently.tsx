import { usePageStore } from "../store"
import { useEffect, useRef, useState } from "react"
import { useInView, motion, Variants} from "framer-motion"
import Header from "../components/Header"
import { TimelineItems, TimelineItem} from "../models/TimelineItems"
import TimelineCard from "../components/TimelineCard"
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
   const Timeline = TimelineItems.map((TimelineItem: TimelineItem) => {
     return <TimelineCard DateStartEnd={TimelineItem.DateStartEnd} Doing={TimelineItem.Doing} CourseLinks={TimelineItem.CourseLinkTag} CourseLinkTag={TimelineItem.CourseLinkTag}/>
   })

   const CurrentVariants: Variants = {
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
   useEffect(() => {
        if(isInView){
            setPage(4)
        }
    }, [isInView])
    return (
        <motion.div 
            ref = {ref}
            className=" grid grid-rows-6 bg-slate-900 h-screen col-start-2 col-span-7 justify-center" 
            id="Currently"
        >
            <div className="flex flex-col justify-center">
                <Header isInView= {isInView} HeaderString="What am I doing now?" Index="04." setHeaderAnimated={handleSetAnimated}/>
            </div>
            <motion.div 
                className="grid auto-cols-max h-fit place-items-center  xl:mt-16 2xl:mt-28"
                initial="hidden"
                animate={isInView&&"visible"}
                variants={CurrentVariants}
            >
                <span className="text-slate-400 font-shareTechMono mb-3">Timeline</span>
                {Timeline}
                <div className="text-slate-400 xl: mt-8 2xl:mt-16">
                    Besides school curriculum and internships, I am always learning new technologies on my own time. <br></br>Currently, I am learning specifically Golang and Backend concepts 
                   via <a href="https://roadmap.sh/backend" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline underline-offset-1">roadmap.sh</a>
                </div>              
            </motion.div>
        </motion.div>
    )
}