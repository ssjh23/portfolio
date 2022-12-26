import { motion, Variants } from 'framer-motion'

interface P{
    HeaderString: string
    Index: string
    setHeaderAnimated: Function
    isInView: boolean
}

const headerVariants: Variants = {
    hidden_y:{
        x: "100vh", 
        opacity: 0
    },
    visible_y:{
        x:0, 
        opacity: 1,
        transition: {
            duration:1
        }
    }
}
export default function Header({ isInView, Index, HeaderString, setHeaderAnimated } :P){
    return(
        <motion.div
        className="flex col-start-3 col-span-2 bg-slate-900 text-teal-400 items-center justify-center text-xl md:text-3xl xl:text-4xl font-shareTechMono"
        initial={"hidden_y"}
        animate={isInView && "visible_y"}
        variants={headerVariants}
        onAnimationComplete={() => {setHeaderAnimated()}}
    >              
        {Index} <br></br> <span className="font-inter">{HeaderString}</span>
        </motion.div>
    )

}