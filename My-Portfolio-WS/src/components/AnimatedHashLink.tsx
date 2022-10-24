import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { motion, Variants } from "framer-motion"
import { forwardRef } from "react"

interface Label {
    LinkName: string
    id: number
}
export default function AnimatedHashLink ({ LinkName, id }:Label) {
    const label = LinkName.slice(1)
    return (
        <>
         <HashLink to= { LinkName }>
            <div>
                {label}
            </div>
         </HashLink>
         {id !== 4 &&
         <>
            <div className="w-0.5 h-20 bg-black self-center"></div>
         </>
        }
        </>
    )
}