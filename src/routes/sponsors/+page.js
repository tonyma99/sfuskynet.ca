export const prerender = true;

export const load = () => {
    return { sponsors }
}

const sponsors = [
    {
        name: 'Altium',
        logo: '/images/Altium.png',
        website: 'https://www.altium.com/',
    },
    {
        name: 'SolidWorks',
        logo: '/images/SolidWorks.png',
        website: 'https://www.solidworks.com/',
    },
];
