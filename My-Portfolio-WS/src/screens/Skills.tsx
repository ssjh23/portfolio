import { motion, useInView, Variants } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import { usePageStore } from "../store"
import { ReactComponent as PythonLogo} from "../assets/Python.svg"
import { ReactComponent as JavascriptLogo } from "../assets/Javascript.svg"
import { ReactComponent as TypescriptLogo } from "../assets/Typescript.svg"
import { ReactComponent as JavaLogo } from "../assets/Java.svg"
import { ReactComponent as TailwindLogo} from "../assets/Tailwind.svg"
import { ReactComponent as ExpressLogo} from "../assets/Express.svg"
import { ReactComponent as VueLogo} from "../assets/Vue.svg"
import { ReactComponent as FramerMotionLogo} from "../assets/FramerMotion.svg"
import { ReactComponent as AxiosLogo} from "../assets/Axios.svg"
import { ReactComponent as ReactLogo} from "../assets/React.svg"
import { ReactComponent as UseQueryLogo} from "../assets/useQuery.svg"
import { ReactComponent as GithubLogo} from "../assets/Github.svg"
import { ReactComponent as MongoDBLogo} from "../assets/MongoDB.svg"
import { ReactComponent as FirebaseLogo} from "../assets/Firebase.svg"
import { ReactComponent as NodeJSLogo} from "../assets/NodeJS.svg"

export default function Skills () {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-100px"
    })
    const [headerAnimated, setHeaderAnimated] = useState(false)
    const [languagesAnimated, setLanguagesAnimated] = useState(false)
    const [frameworkAnimated, setFrameworkAnimated] = useState(false)
    const [librariesAnimated, setLibrariesAnimated] = useState(false)
    const [othersAnimated, setOthersAnimated] = useState(false)
    const [ currentPage, setPage ] = usePageStore((state)=> 
    [state.currentPage, state.setPage]
   )

   const skillVariants: Variants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition: {
            duration:1
        }
    }
}
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
            {/* Language */}
            {headerAnimated &&
                <motion.div
                className="row-start-2 row-span-5 grid grid-cols-2 grid-rows-5 justify-center"
                initial="hidden"
                animate="visible"
                variants={skillVariants}
                onAnimationComplete={() => {setLanguagesAnimated(true)}}
                >
                <div className="flex flex-row items-center justify-center row-start-1 col-span-2 font-shareTechMono text-teal-400">I have used the following Languages:</div>

                <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="flex flex-col justify-center">
                        <PythonLogo className="xl:h-28 xl:w-28"/>
                        <div className="mt- text-slate-400 font-shareTechMono">Python</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <JavascriptLogo className="px-2 w-28 h-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">Javascript</div>
                    </div>
                </div>

                <div className="row-start-3 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="flex flex-col justify-center">
                        <TypescriptLogo className="w-28 h-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">Typescript</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <JavaLogo className="px-2 w-28 h-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">Java</div>
                    </div>
                </div>
            </motion.div>
            }
            {/* Frameworks */}
            {languagesAnimated &&
                <motion.div
                className="row-start-2 col-start-2 row-span-5 grid grid-cols-2 grid-rows-5 items-center"
                initial="hidden"
                animate="visible"
                variants={skillVariants}
                onAnimationComplete={() => {setFrameworkAnimated(true)}}
                >
                <div className="flex flex-row items-center justify-center row-start-1 col-span-2 font-shareTechMono text-teal-400">And the following Frameworks:</div>

                <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="flex flex-col justify-center">
                        <TailwindLogo className="xl:h-28 xl:w-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">TailwindCSS</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <ExpressLogo className="px-2 w-32 h-20"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">ExpressJS</div>
                    </div>
                </div>

                <div className="row-start-3 col-span-2 gap-2 flex flex-row justify-center">
                    <div className="flex flex-col justify-center">
                        <VueLogo className="w-28 h-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">VueJs</div>
                    </div>
                </div>
            </motion.div>
            }
            {/* Libraries */}
            {frameworkAnimated &&
                <motion.div
                className="row-start-2 row-span-5 grid grid-cols-2 grid-rows-5 items-center"
                initial="hidden"
                animate="visible"
                variants={skillVariants}
                onAnimationComplete={() => {setLibrariesAnimated(true)}}
                >
                <div className="flex flex-row items-center justify-center row-start-1 col-span-2 font-shareTechMono text-teal-400">And the following libraries:</div>

                <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="flex flex-col justify-center">
                        <FramerMotionLogo className="xl:h-28 xl:w-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">Framer Motion</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <AxiosLogo className="px-2 w-36 h-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">Axios</div>
                    </div>
                </div>

                <div className="row-start-3 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="flex flex-col justify-center">
                        <ReactLogo className="w-28 h-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">React</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <UseQueryLogo className="px-2 w-36 h-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">React Query</div>
                    </div>
                </div>
            </motion.div>
            }
            {/* Others */}
            {librariesAnimated &&
                <motion.div
                className="row-start-2 row-span-5 grid grid-cols-2 grid-rows-5 items-center"
                initial="hidden"
                animate="visible"
                variants={skillVariants}
                >
                <div className="flex flex-row items-center justify-center row-start-1 col-span-2 font-shareTechMono text-teal-400">Along with other technologies:</div>

                <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="flex flex-col justify-center">
                        <GithubLogo className="xl:h-28 xl:w-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">Github</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <MongoDBLogo className="px-2 w-36 h-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">MongoDB</div>
                    </div>
                </div>

                <div className="row-start-3 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="flex flex-col justify-center">
                        <FirebaseLogo className="w-28 h-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">Firebase</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <NodeJSLogo className="px-2 w-36 h-28"/>
                        <div className="mt-2 text-slate-400 font-shareTechMono">Node JS</div>
                    </div>
                </div>
            </motion.div>
            }
        </motion.div>
    )
}