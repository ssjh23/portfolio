import { usePageStore } from "../store"
import { useEffect, useRef, useState } from "react"
import { useInView, motion, Variants } from "framer-motion"
import LinkedinLogo from "../assets/Linkedin.png"
import BlackLinkedinLogo from "../assets/LinkedinBlack.png"
import GithubLogo from "../assets/GithubLight.png"
import BlackGithubLogo from "../assets/GithubOutline.png"
import BlackInstagramLogo from "../assets/BlackInstagram.png"
import InstagramLogo from "../assets/Instagram.png"
import BlackEnvelopeLogo from "../assets/BlackEnvelope.png"
import EnvelopeLogo from "../assets/Envelope.png"
import Header from "../components/Header"

import HoveredImage from "../components/HoveredImage"
export default function Contact () {
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
   const [headerAnimated, setHeaderAnimated] = useState(false)
   useEffect(() => {
        if(isInView){
            setPage(5)
        }
    }, [isInView])
    return (
        <motion.div 
            ref = {ref}
            className="grid auto-cols-auto auto-rows-auto bg-slate-900 h-screen col-start-2 col-span-7 justify-center" 
            id="Contact"
        >
            <div className="flex flex-col justify-center">
                <Header isInView= {isInView} HeaderString="Where can you find me?" Index="05." setHeaderAnimated={handleSetAnimated}/>
            </div>
            <motion.div 
                className="flex flex-col h-fit w-full justify-center"
                initial="hidden"
                animate={isInView&&"visible"}
                variants={CurrentVariants}
            >
                <span className="text-teal-400 text-sm font-shareTechMono md:text-base">Get in touch with me at:</span>
                <div className="flex flex-row justify-between place-self-center mt-8 md:mt-20 w-5/6">
                    <a href="https://www.linkedin.com/in/seansoo/" target="_blank" rel="noopener noreferrer">
                    <HoveredImage ImgUrl={BlackLinkedinLogo} hoveredImgUrl ={LinkedinLogo} />
                    </a>
                    <a href="https://github.com/ssjh23" target="_blank" rel="noopener noreferrer">
                        <HoveredImage ImgUrl={BlackGithubLogo} hoveredImgUrl ={GithubLogo} />
                    </a>
                    <a href="https://www.instagram.com/ssjh23/" target="_blank" rel="noopener noreferrer">
                        <HoveredImage ImgUrl={BlackInstagramLogo} hoveredImgUrl ={InstagramLogo} />
                    </a>
                    <a href="mailto:seansoojh23@gmail.com">
                        <HoveredImage ImgUrl={BlackEnvelopeLogo} hoveredImgUrl ={EnvelopeLogo} />
                    </a>
                </div>
                <span className="text-teal-400 text-sm font-shareTechMono mt-8 md:text-base">For My Resume:</span>
                <a
                  //this will save the file as "your_cv.pdf"
                  download="Resume Sean Soo"
                  //put the path of your pdf file
                  href="src/assets/Sean_Soo_-_Software_Engineer_Intern.pdf"
                >
                    
                    <motion.button 
                        initial={{opacity:0, x:-100}} 
                        animate={{opacity:1, x:0, transition:{delay:0.5, duration:0.8}}}
                        whileHover={{
                            scale:1.2,
                            transition:{duration:0.2}
                        }}
                        whileTap={{
                            scale:1.0,
                            backgroundColor:"#fff"
                        }}
                        className="self-start border-solid border-teal-400 border-2 rounded-lg text-teal-400 font-shareTechMono p-2 md:p-4 mt-6 md:mt-12">
                            PDF Here!
                    </motion.button>
                </a>
                <span className="font-shareTechMono italic text-slate-400 mt-8 md:mt-32 md:text-base text-xs place-self-center ">"What I cannot create, I do not understand" <br></br> ~Richard Feynman</span>
                <span className="font-shareTechMono text-slate-400 text-xs mt-12 md:text-sm xl:text-base xl:mt-24 2xl:mt-40">Designed and Built by Sean Soo</span>
             
            </motion.div>

        </motion.div>
    )
}