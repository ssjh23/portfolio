import { motion } from "framer-motion"
import { useState } from "react"

interface P{
    hoveredImgUrl: string,
    ImgUrl: string
}

export default function HoveredImage({ hoveredImgUrl, ImgUrl}:P){
    const [hovered, setHovered] = useState(false)
    return(
        <motion.img 
            src={hovered ? hoveredImgUrl : ImgUrl}
            className="place-self-center row-span-6 rounded-3xl 2xl:h-16"
            whileHover={{scale:1.2}}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        ></motion.img>
    )
}