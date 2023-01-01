

interface P {
    DateStartEnd: string,
    Doing: string
    CourseLinks?: string[],
    CourseLinkTag?: string[]
}

export default function TimelineCard ({DateStartEnd, Doing, CourseLinks, CourseLinkTag}:P){
    const numberOfCourses = CourseLinks?.length
    return (
        <div className="flex flex-row justify-center w-5/6">
            <div className="font-shareTechMono text-slate-400 border-r-2 border-slate-400 text-xs w-2/6 md:text-sm xl:text-base p-2 xl:p-8">{DateStartEnd}</div>
            <div className="font-shareTechMono text-slate-400 text-xs w-3/6 p-2 xl:p-8 md:text-sm xl:text-base">{Doing}</div>
        </div>
    )
}
