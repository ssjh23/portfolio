
import {motion} from 'framer-motion'
import {useState} from 'react'
interface P {
    imgUrl: string
    TintedImgUrl: string
}
export default function ProjectCard({imgUrl, TintedImgUrl}:P){
    const [hovered, setHovered] = useState(false)
    return(
        <div className="grid grid-cols-2 grid-rows-6 xl:pb-12 px-80 ">
            <motion.img 
                src={hovered ? imgUrl : TintedImgUrl} 
                className="row-span-6 h-80 w-120 rounded-3xl"
                whileHover={{scale:1.2}}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
            ></motion.img>
            <div className="flex flex-row justify-start col-start-2 row-span-5">
                <ul className="list-disc list-inside">
                    <li>hi</li>
                    <li>hi</li>
                </ul>
            </div>
        </div>
        
    )
}