
interface P {
    imgUrl: string
}
export default function ProjectCard({imgUrl}:P){

    return(
        <div className="grid grid-cols-3 grid-rows-6 xl: pb-12">
            <img src={imgUrl} className="row-span-6"></img>
            <div className="col-start-2 row-span-5">
                <ul className="list-disc list-inside">
                    <li>hi</li>
                    <li>hi</li>
                </ul>
            </div>
        </div>
        
    )
}