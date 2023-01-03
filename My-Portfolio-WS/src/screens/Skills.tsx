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
import { useMediaQuery } from "react-responsive"

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

   const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1280px)'
   })
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

    if(!isTabletOrMobile){
        return (
        
            <motion.div
                ref={ref} 
                className="grid auto-rows-auto auto-cols-auto h-screen bg-slate-900 col-start-2 col-span-6 place-items-center" 
                id="Skills">
                <div className="xl:col-span-4">
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
                        <div className="flex flex-row items-center justify-center col-span-2 font-shareTechMono xl:text-sm  2xl:text-base text-teal-400">I have used the following Languages:</div>
    
                        <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                            <div className="grid place-items-center xl: py-6">
                                <PythonLogo className="xl:h-28 w-28"/>
                                <div className=" text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Python</div>
                            </div>
                            <div className="grid place-items-center xl: py-6">
                                <JavascriptLogo className="xl:h-28 w-28"/>
                                <div className="text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Javascript</div>
                            </div>
                        </div>
    
                        <div className="row-start-3 col-span-2 gap-4 flex flex-row justify-around 2xl:mt-0 xl:mt-6">
                            <div className="grid place-items-center xl: py-6">
                                <TypescriptLogo className="xl:h-28 w-28 "/>
                                <div className="text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Typescript</div>
                            </div>
                            <div className="grid place-items-center xl: py-6">
                                <JavaLogo className="xl:h-28 w-28 "/>
                                <div className=" text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Java</div>
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
                    <div className="flex flex-row items-center justify-center  col-span-2 font-shareTechMono xl:text-sm  2xl:text-base text-teal-400">And the following Frameworks:</div>
    
                    <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                        <div className="grid place-items-center xl: py-6">
                            <TailwindLogo className="xl:h-28 w-28"/>
                            <div className=" text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">TailwindCSS</div>
                        </div>
                        <div className="grid place-items-center xl: py-6">
                            <ExpressLogo className="xl:h-28 w-28"/>
                            <div className=" text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">ExpressJS</div>
                        </div>
                    </div>
    
                    <div className="row-start-3 col-span-2 gap-2 flex flex-row justify-center 2xl:mt-0 xl:mt-6">
                        <div className="grid place-items-center xl: py-6">
                            <VueLogo className="xl:h-28 w-28"/>
                            <div className=" text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">VueJs</div>
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
                    <div className="flex flex-row items-center justify-center col-span-2 font-shareTechMono xl:text-sm  2xl:text-base text-teal-400">And the following libraries:</div>
    
                    <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                        <div className="grid place-items-center xl: py-6">
                            <FramerMotionLogo className="xl:h-28 xl:w-28"/>
                            <div className=" text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Framer Motion</div>
                        </div>
                        <div className="grid place-items-center xl: py-6">
                            <AxiosLogo className="xl:h-28 w-28"/>
                            <div className=" text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Axios</div>
                        </div>
                    </div>
    
                    <div className="row-start-3 col-span-2 gap-4 flex flex-row justify-around 2xl:mt-0 xl:mt-6">
                        <div className="grid place-items-center xl: py-6">
                            <ReactLogo className="xl:h-28 w-28"/>
                            <div className=" text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">React</div>
                        </div>
                        <div className="grid place-items-center xl: py-6">
                            <UseQueryLogo className="xl:h-28 w-28"/>
                            <div className=" text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">React Query</div>
                        </div>
                    </div>
                    <div className="row-start-4 col-span-2 gap-2 flex flex-row justify-center 2xl:mt-0 xl:mt-6">
                        <div className="grid place-items-center xl: py-6">
                            <ZustandLogo className="xl:h-28 w-28"/>
                            <div className=" text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Zustand</div>
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
                    <div className="flex flex-row items-center justify-center row-start-1 col-span-2 font-shareTechMono xl:text-sm 2xl:text-base text-teal-400">Along with other technologies:</div>
    
                    <div className="row-start-2 col-span-2 gap-4 flex flex-row justify-around">
                        <div className="grid place-items-center xl: py-6">
                            <GithubLogo className="xl:h-28 w-28"/>
                            <div className="text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Github</div>
                        </div>
                        <div className="grid place-items-center xl: py-6">
                            <MongoDBLogo className="xl:h-28 w-28"/>
                            <div className="text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">MongoDB</div>
                        </div>
                    </div>
    
                    <div className="row-start-3 col-span-2 gap-4 flex flex-row justify-around 2xl:mt-0 xl:mt-6">
                        <div className="grid place-items-center xl: py-6">
                            <FirebaseLogo className="xl:h-28 w-28"/>
                            <div className="text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Firebase</div>
                        </div>
                        <div className="grid place-items-center xl: py-6">
                            <NodeJSLogo className="xl:h-28 w-28"/>
                            <div className="text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Node JS</div>
                        </div>
                    </div>
    
                    <div className="row-start-4 col-span-2 gap-4 flex flex-row justify-around 2xl:mt-0 xl:mt-6">
                        <div className="grid place-items-center xl: py-6">
                            <AndroidStudioLogo className="xl:h-28 2xl:w-28 xl:w-20 w-28"/>
                            <div className="text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Android Studio</div>
                        </div>
                        <div className="grid place-items-center xl: py-6">
                            <SeleniumLogo className="xl:h-28 2xl:w-28 xl:w-20"/>
                            <div className="text-slate-400 font-shareTechMono self-end 2xl:mt-0 xl:mt-2">Selenium</div>
                        </div>
                    </div>
                </motion.div>
                }
            </motion.div>
            
        )
    }
    else{
        return(
            <motion.div
            ref={ref} 
                className=" bg-slate-900 col-start-2 col-span-6 place-items-center px-12 h-screen" 
                id="Skills">
                <div className="mt-16 md:mt-28">
                    <Header isInView= {isInView} HeaderString="What can I use?" Index="02." setHeaderAnimated={handleSetAnimated}/>
                </div>
                <div className="grid auto-rows-auto auto-cols-auto gap-x-4 mt-20 sm:mt-40 sm:gap-y-16"> 
                    <div className="flex flex-col items-center">
                        <div className=" font-shareTechMono text-sm text-teal-400 text-left">I have used the following Languages:
                        </div>
                        <ul className="font-shareTechMono text-sm text-slate-400 list-disc text-left mt-4">
                            <li>Python</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center col-start-2 ">
                        <div className=" font-shareTechMono text-sm text-teal-400 text-left ,t-4">And the following Frameworks:</div>
                        <ul className="font-shareTechMono text-sm text-slate-400 list-disc text-left  mt-4">
                            <li>Vue</li>
                            <li>Tailwind</li>
                            <li>Express</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-2">
                        <div className="  font-shareTechMono text-sm text-teal-400 text-left mt-4">And the following libraries:</div>
                        <ul className="font-shareTechMono text-sm text-slate-400 list-disc text-left mt-4">
                            <li>React</li>
                            <li>Axios</li>
                            <li>Framer Motion</li>
                            <li>React Query</li>
                            <li>Zustand</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center row-start-2 col-start-2 mt-4">
                        <div className=" font-shareTechMono text-sm text-teal-400 text-left">Along with other technologies:</div>
                        <ul className="font-shareTechMono text-sm text-slate-400 list-disc text-left mt-4">
                            <li>Github</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                            <li>NodejS</li>
                            <li>Selenium</li>
                            <li>Android Studio</li>
                        </ul>
                    </div>
                        




                </div>

            </motion.div>

        )
    }
    
}