export const prerender = true;

export const load = () => {
    return { people }
}

const execs = [
    {
        name: 'Zach Spencer',
        position: 'President',
        profile: '/zach_spencer.jpeg',
        linkedin: 'https://www.linkedin.com/in/zachary-k-spencer/',
    },
    {
        name: 'Seyed Arad Shojaee',
        position: 'VP of Member Experience',
        profile: '/seyed_arad_shojaee.jpeg',
        linkedin: 'https://www.linkedin.com/in/seyed-arad-shojaee-a8a175222/',
    },
    {
        name: 'Thomas Challis',
        position: 'VP of Public Relations',
        profile: '/thomas_challis.jpeg',
        linkedin: 'https://www.linkedin.com/in/thomas-challis-36460b1ba/',
    },
    {
        name: 'Yu-Xing Lim',
        position: 'VP of Administration',
        profile: '/yu_xing_lim.jpeg',
        linkedin: 'https://www.linkedin.com/in/yu-xing-lim-10706b252/',
    },
    {
        name: 'Adam Spelrem',
        position: 'VP of Finance',
        profile: '/adam_spelrem.jpeg',
        linkedin: 'https://www.linkedin.com/in/adam-spelrem-8b5059256/',
    },
];

const directors = [
    {
        name: 'Ara Christie',
        position: 'Director of Graphic Design',
        linkedin: 'https://www.linkedin.com/in/ara-christie-8a0404261',
    },
    {
        name: 'Matin Keivanloo',
        position: 'Director of Outreach',
        profile: '/martin.jpg',
        linkedin: 'https://www.linkedin.com/in/matin-keivanloo-2152a0204',
    },
]

const leads = [
    {
        name: 'Matthew do Santos-Zounon',
        position: 'Software Team Lead',
        profile: '/matthew.jpeg',
        linkedin: 'https://www.linkedin.com/in/mdsz/',
    },
    {
        name: 'Arvin Amini',
        position: 'Mechanics Team Leader',
        profile: '/arvin.jpeg',
        linkedin: 'https://www.linkedin.com/in/arvin-amini/',
    },
    {
        name: 'Judd Foster',
        position: 'Electronics Team Leader',
        profile: '/judd.jpeg',
        linkedin: 'https://www.linkedin.com/in/judd-foster-568963193/',
    },
]

const heads = [
    {
        name: 'Vlad Nadtochii',
        position: 'Head of Software Development',
        profile: 'vlad.jpeg',
        linkedin: 'https://www.linkedin.com/in/vlad-nadtochii-b451b5175/',
    }
]

const people = { execs, directors, leads, heads }
