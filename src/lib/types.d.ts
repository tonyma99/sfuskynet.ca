export interface Person {
	name: string
	position?: string
	image?: string
	linkedin?: string
}

export interface Sponsor {
	name: string
	logo: string
	website: string
}

export interface Team {
	name: string
	headline: string
	image: string
	description: string
	tags: Array<string>
}
