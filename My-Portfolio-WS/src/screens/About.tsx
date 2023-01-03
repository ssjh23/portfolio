import { motion, useInView, Variants } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import { usePageStore } from "../store"

export default function About () {
    const [headerAnimated, setHeaderAnimated] = useState(false)
    const [hovered, setHovered] = useState(false)
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
       
        opacity: 0
    },
    visible_x_img:{
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
            className="grid h-screen place-items-center auto-rows-auto auto-cols-auto xl:auto-rows-min  bg-slate-900 col-start-2 col-span-6 justify-items-center" 
            id="About"
            viewport={{ once:false }}
        >   
        <div className="flex flex-col justify-center xl:mt-16 xl:col-span-2">
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
                    each experience has made me  appreciate my field more.
                    <br></br><br></br>
                    "Learn Smart, Learn Fast" is my own personal motto. It is a reminder that in the ever-changing field of Software Engineering, continuous adaptation (Fast) while maintaining quality (Smart) is key. True to the cliche, the journey
                    is just as important as the destination
                    <br></br><br></br>
                    In school, I am moving on to my specialisation, Internet Of Things and Cloud Computing.
                    If I'm not studying or coding, I'm an avid gamer of all genres.
                </motion.div>
                <motion.img 
                    src={hovered ? 'src/assets/ProfilePic.jpg' : 'src/assets/TintedProfilePic.jpg'} 
                    className="grid row-start-3 xl:col-start-2 justify-center items-center self-center w-2/6 xl:w-1/2 xl:mt-12 xl:mr-20 "
                    whileHover={{scale:1.2}}
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                ></motion.img>

            </>

        
        </motion.div>
    )
}