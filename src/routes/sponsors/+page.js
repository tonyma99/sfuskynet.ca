export const prerender = true;

export const load = () => {
    return { sponsors }
}

const sponsors = [
    {
        name: 'Altium',
        logo: '/images/Altium.webp',
        website: 'https://www.altium.com/',
    },
    {
        name: 'SolidWorks',
        logo: '/images/SolidWorks.webp',
        website: 'https://www.solidworks.com/',
    },
];
