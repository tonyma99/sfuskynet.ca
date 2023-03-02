import type { Person } from '$lib/types'

export const load = () => {
	return { executives, directors, leads, heads, alumni }
}

const executives: Array<Person> = [
	{
		name: 'Zach Spencer',
		position: 'President',
		image: '/images/profile/zach_spencer.webp',
		linkedin: 'https://www.linkedin.com/in/zachary-k-spencer/'
	},
	{
		name: 'Seyed Arad Shojaee',
		position: 'VP of Member Experience',
		image: '/images/profile/seyed_arad_shojaee.webp',
		linkedin: 'https://www.linkedin.com/in/seyed-arad-shojaee-a8a175222/'
	},
	{
		name: 'Thomas Challis',
		position: 'VP of Public Relations',
		image: '/images/profile/thomas_challis.webp',
		linkedin: 'https://www.linkedin.com/in/thomas-challis-36460b1ba/'
	},
	{
		name: 'Yu-Xing Lim',
		position: 'VP of Operation',
		image: '/images/profile/yu_xing_lim.webp',
		linkedin: 'https://www.linkedin.com/in/yu-xing-lim-10706b252/'
	},
	{
		name: 'Adam Spelrem',
		position: 'VP of Finance',
		image: '/images/profile/adam_spelrem.webp',
		linkedin: 'https://www.linkedin.com/in/adam-spelrem-8b5059256/'
	}
]

const directors: Array<Person> = [
	{
		name: 'Ara Christie',
		position: 'Director of Graphic Design',
		image: '/images/profile/ara.webp',
		linkedin: 'https://www.linkedin.com/in/ara-christie-8a0404261'
	},
	{
		name: 'Matin Keivanloo',
		position: 'Director of Outreach',
		image: '/images/profile/martin.webp',
		linkedin: 'https://www.linkedin.com/in/matin-keivanloo-2152a0204'
	},
	{
		name: 'Mani Samet',
		position: 'Director of Administration',
		image: '/images/profile/mani.webp',
		linkedin: 'https://www.linkedin.com/in/mani-samet-6b7288260/'
	}
]

const leads: Array<Person> = [
	{
		name: 'Arvin Amini',
		position: 'Mechanics Team Lead',
		image: '/images/profile/arvin.webp',
		linkedin: 'https://www.linkedin.com/in/arvin-amini/'
	},
	{
		name: 'Matthew do Santos-Zounon',
		position: 'Software Team Lead',
		image: '/images/profile/matthew.webp',
		linkedin: 'https://www.linkedin.com/in/mdsz/'
	},
	{
		name: 'Judd Foster',
		position: 'Electronics Team Lead',
		image: '/images/profile/judd.webp',
		linkedin: 'https://www.linkedin.com/in/judd-foster-568963193/'
	}
]

const heads: Array<Person> = [
	{
		name: 'Vlad Nadtochii',
		position: 'Head of Software Development',
		image: '/images/profile/vlad.webp',
		linkedin: 'https://www.linkedin.com/in/vlad-nadtochii-b451b5175/'
	}
]

const alumni: Array<Person> = [
	{
		name: 'Arvin Amini',
		position: 'President',
		image: '/images/profile/arvin.webp',
		linkedin: 'https://www.linkedin.com/in/arvin-amini/'
	},
	{
		name: 'George Lertzman Lepofsky',
		position: 'VP of Administration',
		image: '/images/profile/george.webp',
		linkedin: 'https://www.linkedin.com/in/georgelertzmanlepofsky/'
	},
	{
		name: 'Amitis Haghdadi',
		position: 'Vice President',
		image: '/images/profile/amitis.webp',
		linkedin: 'https://www.linkedin.com/in/amitis-haghdadi-397ba5140/'
	},
	{
		name: 'Tara Kazemi',
		position: 'VP of Finance',
		image: '/images/profile/tara.webp',
		linkedin: 'https://www.linkedin.com/in/tarahk/'
	},
	{
		name: 'Jordan Lei',
		position: 'VP of Finance',
		image: '/images/profile/jordan.webp',
		linkedin: 'https://www.linkedin.com/in/jordanlei/'
	},
	{
		name: 'Damoon Tahmasbi',
		position: 'Software Team Lead',
		image: '/images/profile/damoon.webp',
		linkedin: 'https://www.linkedin.com/in/damoon-tahmasbi/'
	},
	{
		name: 'Carlo Clores',
		position: 'Mechanics Team Lead',
		image: '/images/profile/carlo.webp',
		linkedin: 'https://www.linkedin.com/in/carloclores/'
	},
	{
		name: 'Dylan Reviczky',
		position: 'Software Team Lead',
		image: '/images/profile/dylan.webp',
		linkedin: 'https://www.linkedin.com/in/dylanrev/'
	},
	{
		name: 'Aidan Gerrebos',
		position: 'Mechanics Team Lead',
		image: '/images/profile/aidan.webp',
		linkedin: 'https://www.linkedin.com/in/aidan-gerrebos/'
	}
]
