<script lang="ts">
	import { Container, PageCard, PageCardContainer } from '$lib/components'

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
</script>

<svelte:head>
	<title>SFU Robot Soccer</title>
</svelte:head>

<Container>
	<section id="heading">
		<div
			style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/background.webp');"
		>
			<img src="/images/logo.png" alt="SFU Robot Socccer Club team logo" width="128" height="128" />
			<h1>SFU Robot Soccer</h1>
			<p>Build a legacy and tradition of extracurricular innovation and engineering engagement.</p>
		</div>
	</section>

	<section>
		<p>
			SFU's first Robot Soccer club aims to combine the excitement of soccer with the future of
			automated technology as we compete in RoboCup Soccer competitions. Our team encourages
			students from all programs to come together and learn concepts that are not taught in class
			and get hands-on experience with robotics, artificial intelligence, and teamwork.
		</p>
	</section>

	<section id="cards">
		<PageCardContainer>
			{#each cards as card}
				<PageCard heading={card.heading} description={card.description} page={card.page} />
			{/each}
		</PageCardContainer>
	</section>

	<section id="about">
		<h2>About SFU Robot Soccer</h2>
		<p>
			Welcome to the Simon Fraser University Robot Soccer Club! Our club is dedicated to promoting
			an interest in robotics and soccer among students by combining the knowledge of software,
			electronics, and mechanics.<br />
			<br />
			We believe that robotics and soccer are a perfect match - both require teamwork, strategy, and
			problem-solving. Our club members learn about robotics and programming by building and programming
			robots to compete in robot soccer matches against other schools.<br />
			<br />
			Our club is divided into three teams, software, electronics, and mechanics, each responsible for
			different aspects of the robot design and performance. The software team develops and programs
			the robot's control systems and AI, the electronics team designs and builds the robot's power and
			communication systems, and the mechanics team designs and fabricates the robot's body and actuators.<br
			/>
			<br />
			Our club is open to students of all skill levels, from those who have never worked with robots
			before to those who have prior experience. We provide training and resources to help our members
			learn and improve in their respective teams.<br />
			<br />
			We participate in various local, regional, and national robotics competitions and events throughout
			the year, where we get to showcase our robots and compete against other teams. We also hold regular
			meetings and practice sessions, where we work on building and programming our robots, as well as
			refining our strategies for competition.<br />
			<br />
			We are more than just a robotics club, we are a community of students who share a passion for robotics
			and soccer. We encourage and support each other to learn, grow, and succeed. Join us today and
			be part of a winning team!
		</p>
	</section>

	<section id="join">
		<h2>Join Us!</h2>
		<p>
			Are you interested in robotics and soccer? Do you want to be part of a winning team? Then come
			and join us at the Simon Fraser University Robot Soccer Club! We are always looking for new
			members to join our software, electronics, and mechanics teams. We provide training and
			resources to help our members learn and improve, and we participate in various local,
			regional, and national robotics competitions and events throughout the year. Join us today and
			experience the excitement of building and programming robots to compete in robot soccer
			matches!
		</p>
		<div>
			<a href="https://go.sfss.ca/clubs/721/info"
				>Join Us <i
					class="fa-solid fa-arrow-up-right-from-square"
					style="font-size: 0.85rem; margin-left: 4px;"
				/></a
			>
		</div>
	</section>
</Container>

<style>
	section#heading div {
		background-size: cover;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: 70vh;
		justify-content: center;
		left: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		max-height: 1024px;
		position: relative;
		right: 50%;
		width: 100vw;
	}

	section#heading img {
		margin: 0 auto;
		width: 128px;
	}

	section#heading h1 {
		font-family: 'Helvetica Now Display', sans-serif;
		font-size: 4rem;
		font-weight: 900;
		text-shadow: 0px 1.5px 0px #1f1f1f;
	}

	section#heading p {
		font-size: 1.2rem;
		margin-top: 1rem;
		text-shadow: 0px 1px 0px #1f1f1f;
	}

	section#heading h1,
	section#heading p {
		color: #f0f0f0;
		line-height: 1;
		margin: 0 auto;
		max-width: 64rem;
		padding: 0 1rem;
	}

	section#join a {
		align-items: center;
		background-color: #a6192e;
		border-radius: 0.5em;
		color: #f0f0f0;
		display: inline-flex;
		font-weight: bold;
		gap: 4px;
		padding: 0.5rem 1rem;
		transition: 0.3s;
	}

	section#join a:hover {
		background-color: #cc0633;
	}

	section#join div {
		margin-top: 1.5em;
	}

	section + section {
		margin-top: 3rem;
	}

	@media only screen and (max-width: 768px) {
		section#heading h1 {
			font-size: 3rem;
			line-height: 1;
		}

		section#heading p {
			font-size: 1rem;
			line-height: 1.2;
		}
	}
</style>
