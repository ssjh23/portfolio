export const TimelineItems: TimelineItem[] = [
    {
        DateStartEnd: 'Present to 20 Jan 2023',
        Doing: 'Frontend Engineer Intern at Voltality'
    },
    {
        DateStartEnd: '23rd Jan to 30th Apr 2023',
        Doing: 'Term 6 at SUTD. My projected modules will be related to Machine Learning and Networks',
        CourseLinks: ['https://istd.sutd.edu.sg/undergraduate/courses/50007-machine-learning', 'https://istd.sutd.edu.sg/undergraduate/courses/50012-networks'],
        CourseLinkTag: ['Machine Learning', 'Networks']
    },
    {
        DateStartEnd: '30th Apr to 01 Sep 2023',
        Doing: 'School Break (2nd Internship)'
    },
]

export interface TimelineItem{
    DateStartEnd: string,
    Doing:string,
    CourseLinks?:string []
    CourseLinkTag?: string[]
}