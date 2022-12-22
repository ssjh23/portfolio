import { motion, useInView, Variants } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import { usePageStore } from "../store"

export default function About () {
    const [headerAnimated, setHeaderAnimated] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-100px"
    })
    const [ setPage ] = usePageStore((state)=> 
    [state.setPage]
   )

   const handleSetAnimated = () => {
    setHeaderAnimated(true)
   }
   const sidebarVariants: Variants = {
    hidden_x_img:{
        x: "+100vh", 
        opacity: 0
    },
    visible_x_img:{
        x:0, 
        opacity: 1,
        transition: {
            delay:1,
            duration:1
        }
    },
    hidden_opacity:{
        opacity: 0
    },
    visible_opacity:{
        opacity: 1,
        transition: {
            delay:1,
            duration:1
        }
    }
}
    
   useEffect(() => {
        if(isInView){
            setPage(1)
        }
    }, [isInView])
    return (
        <motion.div ref={ref}
            className="grid place-items-center auto-rows-auto auto-cols-auto xl:auto-rows-min  bg-slate-900 h-screen col-start-2 col-span-6 justify-items-center" 
            id="About"
            viewport={{ once:false }}
        >   
        <div className="flex flex-col justify-center xl:mt-16">
            <Header isInView= {isInView} HeaderString="Who am I?" Index="01." setHeaderAnimated={handleSetAnimated}/>
        </div>
   
            <>
                <motion.div 
                    className=" row-start-2  xl:mt-24 font-shareTechMono text-teal-400 text-lg md:text-xl xl:text-2xl"
                    initial={"hidden_opacity"}
                    animate={isInView && "visible_opacity"}
                    variants={sidebarVariants}
                >
                    A little about me
                </motion.div> 
                <motion.div 
                    className="row-start-4 xl:row-start-3 text-center w-4/6 xl:mt-12 text-slate-400 text-xs sm:text-sm xl:text-base 2xl:text-xl"
                    initial={"hidden_opacity"}
                    animate={isInView && "visible_opacity"}
                    variants={sidebarVariants}
                >
                    Hello! My name is Sean Soo and I enjoy making things work with code. Making an Android phone app, working with an Arduino to make a simple RC Robot or building a website, I have tried it all! And 
                    each experience has made me enjoy appreciate my field more.
                    <br></br><br></br>
                    "Learn Smart, Learn Fast" is my own personal motto. It is a reminder that in the ever-changing field of Software Engineering, continuous adaptation (Fast) while maintaining quality (Smart) is key. True to the cliche, the journey
                    is just as important as the destination
                    <br></br><br></br>
                    In school, I am moving to my specialisation, Internet Of Things and Cloud Computing.
                    If I'm not studying or coding, I'm an avid gamer of all genres.
                </motion.div>
                <motion.img 
                    src="https://www.landedexperts.com/wp-content/uploads/2019/07/placeholder-m.jpg"
                    className="grid row-start-3 xl:col-start-2 justify-center items-center xl:mt-12 xl:mr-20 h-40 sm:h-52 lg:h-60 xl:h-3/6 2xl:h-4/6 "
                    initial={"hidden_x_img"}
                    animate={isInView && "visible_x_img"}
                    variants={sidebarVariants}>

                </motion.img>

            </>

        
        </motion.div>
    )
}