export const prerender = true

export const load = () => {
  return { cards }
}

const cards = [
  {
    heading: 'Teams',
    description: 'Innovative minds, diverse skills - Our Teams',
    page: '/teams'
  },
  {
    heading: 'Execs',
    description: 'Our Executive Team',
    page: '/execs'
  },
  {
    heading: 'Contact',
    description: 'Connect with us, get in touch - Contact Us',
    page: '/contact'
  }
]
