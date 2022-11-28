import ScanCartImg from '../assets/ScanCart.png'
import TintedScanCartImg from '../assets/ScanCartColoured.png'
import WTH from '../assets/WTH.png'
import TintedWTH from '../assets/TintedWTH.png'
import SUTD from '../assets/SUTD.png'
import TintedSUTD from '../assets/TintedSUTD.png'
import Portfolio from '../assets/Portfolio.png'
import TintedPortfolio from '../assets/TintedPortfolio.png'


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

    },
    {
        Title: '03. 50.003 Elements Of Software Engineering Project',
        ImgUrl: SUTD,
        TintedImgUrl: TintedSUTD,
        Content:{
            Description: "A web application for Ascenda Loyalty under SUTD's Software Construction module.",
            Responsibilities: [ 
                "Built Landing Page with Search Bar, Date Selection and Dropdown lists.",
                "Helped in building the backend using Express",
                "Prepared the End to End tests using Selenium Automation in Java"
                ],
            ProjectLink: 'https://docs.google.com/document/d/1Tvkz0S6jCbet_DnLZZyQ6rusQkDBwyJYVeZmpkvzlCM/edit#',
            GithubRepo: 'https://github.com/ssjh23/hotelBookingAscenda',
            Tech: ['React', 'ExpressJS', 'MongoDB', 'NodeJS', 'Selenium', 'Java']
        }

    },
    {
        Title: '04. This Website :D',
        ImgUrl: Portfolio,
        TintedImgUrl: TintedPortfolio,
        Content:{
            Description: "My portfolio website, my first official personal project",
            Responsibilities: [ 
                    "Well, all of it"
                ],
            ProjectLink: null,
            GithubRepo: 'https://github.com/ssjh23/portfolio',
            Tech: ['React', 'Framer Motion', 'Zustand', 'TailwindCSS']
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
