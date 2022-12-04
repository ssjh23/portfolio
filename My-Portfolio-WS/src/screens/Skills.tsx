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
import { ReactComponent as ZustandLogo} from "../assets/Zustand.svg"
import { ReactComponent as AndroidStudioLogo} from "../assets/AndroidStudio.svg"
import { ReactComponent as SeleniumLogo} from "../assets/Selenium.svg"

export default function Skills () {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-100px"
    })
    const [headerAnimated, setHeaderAnimated] = useState(false)
    const [languagesAnimated, setLanguagesAnimated] = useState(false)
    const [frameworkAnimated, setFrameworkAnimated] = useState(false)
    const [librariesAnimated, setLibrariesAnimated] = useState(false)
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
            duration:0.5
        }
    }
}
   const handleSetAnimated = () => {
    setHeaderAnimated(true)
   }
    useEffect(()=>{
        if (isInView){
           setPage(2)
        }
    },[isInView])
    return (
        <motion.div
            ref={ref} 
            className="grid grid-rows-6 grid-cols-4 bg-slate-900 h-screen col-start-2 col-span-6 justify-center" 
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
                <div className="flex flex-row items-center justify-center col-span-2 font-shareTechMono text-teal-400">I have used the following Languages:</div>

                <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="grid place-items-center xl: py-6">
                        <PythonLogo className="xl:h-28 w-28"/>
                        <div className=" text-slate-400 font-shareTechMono self-end">Python</div>
                    </div>
                    <div className="grid place-items-center xl: py-6">
                        <JavascriptLogo className="xl:h-28 w-28"/>
                        <div className="text-slate-400 font-shareTechMono self-end">Javascript</div>
                    </div>
                </div>

                <div className="row-start-3 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="grid place-items-center xl: py-6">
                        <TypescriptLogo className="xl:h-28 w-28 "/>
                        <div className="text-slate-400 font-shareTechMono self-end">Typescript</div>
                    </div>
                    <div className="grid place-items-center xl: py-6">
                        <JavaLogo className="xl:h-28 w-28 "/>
                        <div className=" text-slate-400 font-shareTechMono self-end">Java</div>
                    </div>
                </div>
            </motion.div>
            }
            {/* Frameworks */}
            {languagesAnimated &&
                <motion.div
                className="col-start-2 row-start-2 row-span-5 grid grid-cols-2 grid-rows-5 justify-center"
                initial="hidden"
                animate="visible"
                variants={skillVariants}
                onAnimationComplete={() => {setFrameworkAnimated(true)}}
                >
                <div className="flex flex-row items-center justify-center  col-span-2 font-shareTechMono text-teal-400">And the following Frameworks:</div>

                <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="grid place-items-center xl: py-6">
                        <TailwindLogo className="xl:h-28 w-28"/>
                        <div className=" text-slate-400 font-shareTechMono self-end">TailwindCSS</div>
                    </div>
                    <div className="grid place-items-center xl: py-6">
                        <ExpressLogo className="xl:h-28 w-28"/>
                        <div className=" text-slate-400 font-shareTechMono self-end">ExpressJS</div>
                    </div>
                </div>

                <div className="row-start-3 col-span-2 gap-2 flex flex-row justify-center">
                    <div className="grid place-items-center xl: py-6">
                        <VueLogo className="xl:h-28 w-28"/>
                        <div className=" text-slate-400 font-shareTechMono self-end">VueJs</div>
                    </div>
                </div>
            </motion.div>
            }
            {/* Libraries */}
            {frameworkAnimated &&
                <motion.div
                className="col-start-3 row-start-2 row-span-5 grid grid-cols-2 grid-rows-5 justify-center"
                initial="hidden"
                animate="visible"
                variants={skillVariants}
                onAnimationComplete={() => {setLibrariesAnimated(true)}}
                >
                <div className="flex flex-row items-center justify-center col-span-2 font-shareTechMono text-teal-400">And the following libraries:</div>

                <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="grid place-items-center xl: py-6">
                        <FramerMotionLogo className="xl:h-28 xl:w-28"/>
                        <div className=" text-slate-400 font-shareTechMono self-end">Framer Motion</div>
                    </div>
                    <div className="grid place-items-center xl: py-6">
                        <AxiosLogo className="xl:h-28 w-28"/>
                        <div className=" text-slate-400 font-shareTechMono self-end">Axios</div>
                    </div>
                </div>

                <div className="row-start-3 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="grid place-items-center xl: py-6">
                        <ReactLogo className="xl:h-28 w-28"/>
                        <div className=" text-slate-400 font-shareTechMono self-end">React</div>
                    </div>
                    <div className="grid place-items-center xl: py-6">
                        <UseQueryLogo className="xl:h-28 w-28"/>
                        <div className=" text-slate-400 font-shareTechMono self-end">React Query</div>
                    </div>
                </div>
                <div className="row-start-4 col-span-2 gap-2 flex flex-row justify-center mt-8">
                    <div className="grid place-items-center xl: py-6">
                        <ZustandLogo className="xl:h-28 w-28"/>
                        <div className=" text-slate-400 font-shareTechMono self-end">Zustand</div>
                    </div>
                </div>
            </motion.div>
            }
            {/* Others */}
            {librariesAnimated &&
                <motion.div
                className="col-start-4 row-start-2 row-span-5 grid grid-cols-2 grid-rows-5 justify-center"
                initial="hidden"
                animate="visible"
                variants={skillVariants}
                >
                <div className="flex flex-row items-center justify-center row-start-1 col-span-2 font-shareTechMono text-teal-400">Along with other technologies:</div>

                <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="grid place-items-center xl: py-6">
                        <GithubLogo className="xl:h-28 w-28"/>
                        <div className="text-slate-400 font-shareTechMono self-end">Github</div>
                    </div>
                    <div className="grid place-items-center xl: py-6">
                        <MongoDBLogo className="xl:h-28 w-28"/>
                        <div className="text-slate-400 font-shareTechMono self-end">MongoDB</div>
                    </div>
                </div>

                <div className="row-start-3 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="grid place-items-center xl: py-6">
                        <FirebaseLogo className="xl:h-28 w-28"/>
                        <div className="text-slate-400 font-shareTechMono self-end">Firebase</div>
                    </div>
                    <div className="grid place-items-center xl: py-6">
                        <NodeJSLogo className="xl:h-28 w-28"/>
                        <div className="text-slate-400 font-shareTechMono self-end">Node JS</div>
                    </div>
                </div>

                <div className="row-start-4 col-span-2 gap-4 flex flex-row justify-around">
                    <div className="grid place-items-center xl: py-6">
                        <AndroidStudioLogo className="xl:h-28 w-28"/>
                        <div className="text-slate-400 font-shareTechMono self-end">Android Studio</div>
                    </div>
                    <div className="grid place-items-center xl: py-6">
                        <SeleniumLogo className="xl:h-28 w-28"/>
                        <div className="text-slate-400 font-shareTechMono self-end">Selenium</div>
                    </div>
                </div>
            </motion.div>
            }
        </motion.div>
    )
}