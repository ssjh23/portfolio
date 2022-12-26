
import {motion} from 'framer-motion'
import {useState} from 'react'
import { Content } from '../models/ProjectItems'
import { ReactComponent as GithubOutlineLogo} from "../assets/GithubOutline2.svg"
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
        return <span className=' flex flex-col justify-center font-robotoMono text-slate-400 text-xs mr-4 xl:text-sm '>{used}</span>
    })
    return(
        <div className="flex flex-col justify-center xl:mb-16 xl:py-8 xl:px-20 xl:grid xl:auto-rows-auto xl:auto-cols-auto">
            <h1 className='font-shareTechMono text-teal-400 xl:text-xl py-8 xl:text-left'> {Title} </h1>
            <motion.img 
                src={hovered ? imgUrl : TintedImgUrl} 
                className="row-start-2 self-center w-1/2 xl:w-full xl:h-5/6 rounded-3xl mb-8 "
                whileHover={{scale:1.2}}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
            ></motion.img>
            <div className='xl:col-start-2 xl:row-start-2'>
            <motion.div 
                className="bg-slate-800 shadow-black row-start-3 rounded-3xl flex-wrap mx-8 md:mx-16 mb-4 lg:mx-24 p-4 xl:col-start-2 xl:row-start-2 xl:self-center"
                >
                <p className='text-left text-slate-400 mb-2 text-xs md:text-sm lg:text-base'>{Content.Description}</p>
                <div>
                    <p className='text-slate-400 text-left text-xs md:text-sm xl:text-base'>Responsibilities:</p>
                    <ul className="text-left list-disc list-inside text-xs md:text-sm xl:text-base">
                        {responsibilities}
                    </ul>
                </div>
            </motion.div>
            <motion.div className='row-start-4 flex flex-wrap flex-row justify-center mb-4 pl-5 xl:pl-5 xl:row-start-2 xl:col-start-2 '>
                {tech}
                <motion.div className='flex flex-row justify-center xl:pl-5 xl:my-auto'>
                    {Content.GithubRepo ? <a href={Content.GithubRepo} target="_blank" rel="noopener noreferrer"><GithubOutlineLogo  className=' stroke-slate-400 hover:stroke-teal-400 xl:h-8 w-8 mr-4'/></a> : null}
                    {Content.ProjectLink? <a href={Content.ProjectLink} target="_blank" rel="noopener noreferrer"><ExternalLinkLogo className=' stroke-slate-400 hover:stroke-teal-400 xl:h-8 w-8'/></a> : null }
                </motion.div>
            </motion.div>
            </div>
            

        </div>
        
    )
}