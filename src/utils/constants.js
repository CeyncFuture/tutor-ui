export const countries = {
    SL: {
        key: "SL",
        name: "Sri Lanka",
    },
    IND: {
        key: "IND",
        name: "India",
    },
}

export const educationQualifications = {
    HIGHER_EDUCATION: {
        key: "HE",
        name: "Higher Education (O/L or A/L)",
    },
    DIPLOMA: {
        key: "DIP",
        name: "Diploma (HND,NDT, etc..)",
    },
    BACHELORS: {
        key: "BACH",
        name: "Bachelor's Degree (Bsc, BA, etc..)",
    },
    MASTERS: {
        key: "MAS",
        name: "Master's Degree (Msc, etc..)",
    },
    PHD: {
        key: "PHD",
        name: "Doctoral Degree (PHD)",
    }
}

export const employments = {
    HIGH_SCHOOL_STUDENT: {
        key: "HSS",
        name: "High School Student",
    },
    UNDERGRADUATE: {
        key: "UND",
        name: "University Student",
    },
    EMPLOYEE: {
        key: "EMP",
        name: "Employee",
    },
    MORE_THAN_ONE_JOB: {
        key: "EMPMTOJ",
        name: "Employed in more than one job",
    },
    UNEMPLOYED: {
        key: "UNEMP",
        name: "Unemployed for more than 6 months",
    },
    RETIRED: {
        key: "RET",
        name: "Retired",
    },
    SELF_EMPLOYED: {
        key: "SELFEMP",
        name: "Self-employed",
    },
}

export const options = {
    YES: {
        key: "yes",
        name: "Yes",
    },
    NO: {
        key: "no",
        name: "No",
    },
    NA: {
        key: "N/A",
        name: "Not Applicable",
    }
}

export const devices = {
    MOBILE: {
        key: "mobile",
        name: "Smartphone (android or iPhone)",
    },
    TAB: {
        key: "tab",
        name: "Tablet",
    },
    DESKTOP: {
        key: "desktop",
        name: "Computer",
    },
    LAPTOP: {
        key: "laptop",
        name: "Notebook/Laptop",
    },
}
// export const interests = [
//     "Software Development",
//     "Quality Assurance",
//     "Machine Learning",
//     "Cyber Security",
//     "Chemistry",
//     "Physics",
//     "Biology"
// ]
export const interests = [1,2]


export const questions = [
    {
        id: 1,
        name: "Who is the president of sri lanka?",
        whatsappNo: "0776213875",
        attachment: {
            fileName: "question-01.pdf",
            filePath: "https://icseindia.org/document/sample.pdf"
        }
    },
    {
        id: 2,
        name: "Who is the president of sri lanka?",
        whatsappNo: "0771234567",
        attachment: {
            fileName: "question-02.pdf",
            filePath: "https://icseindia.org/document/sample.pdf"
        }
    },
    {
        id: 3,
        name: "Who is the president of sri lanka?",
        whatsappNo: "0777654321",
        attachment: {
            fileName: "question-03.pdf",
            filePath: "https://icseindia.org/document/sample.pdf"
        }
    }
]

export const tutors = [
    {
        id: 1,
        firstName: "Charith",
        lastName: "Wijebandara",
        email: "charith@gmail.com",
        phoneNumber: "0776213875",
        interestAreas: [
            "Chemistry",
            "Physics",
            "Combined Maths"
        ]
    },
    {
        id: 2,
        firstName: "Thilina",
        lastName: "Pahalagedara",
        email: "thilina@gmail.com",
        phoneNumber: "0711797719",
        interestAreas: [
            "Software Development",
            "Machine Learning",
            "IOT"
        ]
    }
]