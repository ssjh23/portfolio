

interface P {
    DateStartEnd: string,
    Doing: string
    CourseLinks?: string[],
    CourseLinkTag?: string[]
}

export default function TimelineCard ({DateStartEnd, Doing, CourseLinks, CourseLinkTag}:P){
    const numberOfCourses = CourseLinks?.length
    return (
        <div className="flex flex-row h-fit">
            <div className="font-shareTechMono text-slate-400 border-r-2 border-slate-400 xl:w-80 p-8">{DateStartEnd}</div>
            <div className="font-shareTechMono text-slate-400 xl:w-80 p-8">{Doing}</div>
        </div>
    )
}
