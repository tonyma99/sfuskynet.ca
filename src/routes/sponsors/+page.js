export const prerender = true;

export const load = () => {
    return { sponsors }
}

const sponsors = [
    {
        name: 'Altium',
        logo: '/images/Altium.jpeg',
        website: 'https://www.altium.com/',
    },
    {
        name: 'SolidWorks',
        logo: '/images/SolidWorks.jpeg',
        website: 'https://www.solidworks.com/',
    },
];
