import ScanCartImg from '../assets/ScanCart.png'
import TintedScanCartImg from '../assets/ScanCartColoured.png'
import WTH from '../assets/WTH.png'
import TintedWTH from '../assets/TintedWTH.png'


export const ProjectItems: any = [
    {
        Title: '01. ScanCart',
        ImgUrl: ScanCartImg,
        TintedImgUrl: TintedScanCartImg,
        Content:{
            Description: "An Android App tailored to aiding the needs of the Elderly",
            Responsibilities: [ 
                "Created the user profile models for the database",
                "Utilised Firebase's Phone authentication and Firestore to create User Authentication",
                "Login Page UX/UI"
                ],
            ProjectLink: 'https://istd.sutd.edu.sg/term4-design-exhibition/50001/scan-cart',
            GithubRepo: 'https://github.com/ssjh23/scancart',
            Tech: ['Android Studio', 'Java', 'Firebase']
        }

    },
    {
        Title: '02. WhatTheHack 2021',
        ImgUrl: WTH,
        TintedImgUrl: TintedWTH,
        Content:{
            Description: "A user-friendly IOT system that aims to boost the efficiencies of the waste-collection process in Singapore by reducing the travelling time and workload of waste-management employees ",
            Responsibilities: [ 
                "Programmed the Telegram bot in Python",
                "Firebase Realtime Database code that communicates with the RPI",
                "Aided in integrating Google Maps API along with route optimisation algorithm"
                ],
            ProjectLink: 'https://devpost.com/software/pickmegarb',
            GithubRepo: 'https://github.com/ssjh23/telegrambotcounter',
            Tech: ['Python', 'Firebase', 'Telegram API', 'Google Maps API']
        }

    }
]

export interface Content {
    Description: string,
    Responsibilities?: string[],
    ProjectLink?: string,
    GithubRepo?:string
    Tech: string[]
}

export interface ProjectItem{
    Title: string,
    ImgUrl: string,
    TintedImgUrl: string,
    Content: Content
}
