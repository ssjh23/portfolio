import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { motion } from "framer-motion"

interface Label {
    LinkName: string
    id: number
}
export default function AnimatedHashLink ({ LinkName, id }:Label) {
    const label = LinkName.slice(1)
    return (
        <>
         <HashLink to= { LinkName }>
            <motion.div
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x:0, opacity: 1 }}
                transition={{duration: 1}}
            >
                {label}
            </motion.div>
         </HashLink>
         {id !== 4 &&
         <>
            <motion.div 
                className="w-0.5 h-20 bg-black self-center"
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x:0, opacity: 1 }}
                transition={{duration: 1}}
            >
            </motion.div>
        </>
        }
        </>
    )
}