import { BrowserRouter } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export default function SideNavbar () {
    return(
        <div className="h-screen col-start-1 col-span-1 relative top-0">
            <div className="font-shareTechMono flex flex-col">
                <HashLink to='#about'>
                    About
                </HashLink>
                <HashLink to='#skills'>
                    Skills
                </HashLink>
                <HashLink to='#projects'>
                    Projects
                </HashLink>
                <HashLink to='#currently'>
                    Currently
                </HashLink>
                <HashLink to='#contact'>
                    Contact
                </HashLink>
            </div>
        </div>
    )
}