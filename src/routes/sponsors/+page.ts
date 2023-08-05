export const load = () => {
	return { sponsors }
}

const sponsors_large = [
	{
		name: 'IEEE',
		logo: '/images/ieee.png',
		website: 'https://www.ieee.org/'
	},
	{
		name: 'SFU Faculty of Applied Sciences',
		logo: '/images/sfu_fas.png',
		website: 'https://www.sfu.ca/fas.html'
	},
	{
		name: 'SFSS',
		logo: '/images/sfss.png',
		website: 'https://sfss.ca/'
	}
]

const sponsors_medium = [
	{
		name: 'Engineers & GeoScientists British Columbia',
		logo: '/images/egbc.webp',
		website: 'https://www.egbc.ca/'
	},
	{
		name: 'Wighton Engineering Development Fund',
	}
]

const sponsors_small = [
	{
		name: 'Maxon',
		logo: '/images/maxon.png',
		website: 'https://www.maxon.net/en/'
	},
	{
		name: 'Altium',
		logo: '/images/altium.png',
		website: 'https://www.altium.com/'
	},
	{
		name: 'Dassault Systems',
		logo: '/images/dassault.png',
		website: 'https://www.3ds.com/'
	}
]

const sponsors = {
	large: sponsors_large,
	medium: sponsors_medium,
	small: sponsors_small
}
