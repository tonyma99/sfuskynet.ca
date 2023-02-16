export const prerender = true;

export const load = () => {
    return { sponsors }
}

const sponsors = [
    {
        name: 'Altium',
        logo: '/Altium.jpeg',
        website: 'https://www.altium.com/',
    },
    {
        name: 'SolidWorks',
        logo: '/SolidWorks.jpeg',
        website: 'https://www.solidworks.com/',
    },
];
