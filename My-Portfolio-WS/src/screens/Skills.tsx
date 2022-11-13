import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import { usePageStore } from "../store"
import { ReactComponent as PythonLogo} from "../assets/Python.svg"
import { ReactComponent as JavascriptLogo } from "../assets/Javascript.svg"
import { ReactComponent as TypescriptLogo } from "../assets/Typescript.svg"



export default function Skills () {
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
    useEffect(()=>{
        if (isInView){
           setPage(2)
           console.log(currentPage)
        }
    },[isInView])
    return (
        <motion.div 
            ref={ref} 
            className="grid grid-rows-6 grid-cols-4 bg-slate-800 h-screen col-start-2 col-span-6 snap-start" 
            id="Skills">
            <div className="flex flex-col justify-center col-span-6">
                <Header isInView= {isInView} HeaderString="What can I use?" Index="02." setHeaderAnimated={handleSetAnimated}/>
            </div>
            <motion.div className="row-start-2 row-span-5 grid grid-cols-2 grid-rows-5 items-center">
                <div className="row-start-1 col-span-2 font-shareTechMono text-teal-400 px-5">I have used the following Languages:</div>

                    <div className="row-start-2 col-span-2 flex flex-row justify-between">
                        <div className="pl-8 self-end">
                            <PythonLogo/>
                            <div className="text-slate-400 font-shareTechMono self-end">Python</div>
                        </div>
                        <div className="self-end">
                            <JavascriptLogo className="px-2 h-32"/>
                            <div className="text-slate-400 font-shareTechMono self-end">Javascript</div>
                        </div>
                    </div>

                    <div className="row-start-3 col-span-2 flex flex-row justify-between">
                        <div className="pl-8 self-end">
                            <TypescriptLogo className="h-32"/>
                            <div className="text-slate-400 font-shareTechMono self-end">Typescript</div>
                        </div>
                        <div className="self-end">
                            <JavascriptLogo className="px-2 h-32"/>
                            <div className="text-slate-400 font-shareTechMono self-end">Javascript</div>
                        </div>
                    </div>
                    
            </motion.div>
        </motion.div>
    )
}