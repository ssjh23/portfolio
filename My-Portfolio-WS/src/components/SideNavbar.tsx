import { BrowserRouter } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export default function SideNavbar () {
    return(
        <div className="h-screen col-start-1 col-span-1 fixed top-0">
            <HashLink to='#skills'>
                Skills
            </HashLink>
        </div>
    )
}