
import {motion} from 'framer-motion'
import {useState} from 'react'
import { Content } from '../models/ProjectItems'
import { ReactComponent as GithubOutlineLogo} from "../assets/GitHubOutline.svg"
import { ReactComponent as ExternalLinkLogo} from "../assets/ExternalLink.svg"
interface P {
    imgUrl: string
    TintedImgUrl: string
    Title: string
    Content: Content
}
export default function ProjectCard({imgUrl, TintedImgUrl, Title, Content}:P){
    const [hovered, setHovered] = useState(false)
    const responsibilities = Content.Responsibilities?.map((responsibility) => {
        return <li className='text-slate-400'>{responsibility}</li>
    })
    const tech = Content.Tech.map((used) => {
        return <span className=' flex flex-col justify-center font-robotoMono text-slate-400 xl:text-sm mr-8'>{used}</span>
    })
    return(
        <div className="grid grid-cols-2 grid-rows-6 rxl:py-20 px-80 mb-28">
            <motion.img 
                src={hovered ? imgUrl : TintedImgUrl} 
                className="place-self-center row-span-6 h-80 w-140 rounded-3xl"
                whileHover={{scale:1.2}}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
            ></motion.img>
            <h1 className='font-shareTechMono text-left text-teal-400 xl:text-xl'> {Title} </h1>
            <motion.div 
                className="bg-slate-800 shadow-black rounded-3xl grid col-start-2 row-start-2 row-span-3 xl:p-5"
                >
                <p className='text-left text-slate-400 mb-2'>{Content.Description}</p>
                <div>
                    <p className='text-slate-400 text-left'>Responsibilities:</p>
                    <ul className="text-left list-disc list-inside">
                        {responsibilities}
                    </ul>
                </div>
            </motion.div>
            <motion.div className='flex flex-row col-start-2 row-start-5 xl:pl-5'>
                {tech}
            </motion.div>
            <motion.div className='flex flex-row col-start-2 row-start-6 xl:pl-5'>
                {Content.GithubRepo ? <a href={Content.GithubRepo} target="_blank" rel="noopener noreferrer"><GithubOutlineLogo  className=' stroke-slate-400 hover:stroke-teal-400 xl:h-8 w-8 mr-4'/></a> : null}
                {Content.ProjectLink? <a href={Content.ProjectLink} target="_blank" rel="noopener noreferrer"><ExternalLinkLogo className=' stroke-slate-400 hover:stroke-teal-400 xl:h-8 w-8'/></a> : null }
            </motion.div>
        </div>
        
    )
}