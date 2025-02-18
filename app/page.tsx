import Link from "next/link";

import { cn } from "./utils/tailwind.util";
import WorkTabs from "./components/home/worktabs";

import workTabsData from '@/data/home/workspaces.json';
import noTrustIssues from "@/data/home/no-trust-issues.json";
import teamStories from "@/data/home/team-stories.json";

import LinkButton from "./components/link-button";
import ArrowLink from "./components/arrow-link";

export default function Home() {
	const brandRepeater = Array.from({ length: 2 });

	return (
		<main className="
			flex flex-col items-center gap-36
			w-full
			py-16
			mt-20
		">
			<header className="
				flex flex-col-reverse md:flex-row justify-center items-center gap-8
				max-w-7xl w-full
				px-8
			">
				<div className="
					flex flex-col justify-center items-center md:items-start gap-6
					w-full md:max-w-md
				">
					<h1>Take ideas from better to best</h1>
					<p>Miro is your team&apos;s visual platform to connect, collaborate, and create — together.</p>
					
					<div className="
						flex flex-col justify-stretch items-center gap-2
						w-full
					">
						<input type="text" name="work-email" id="work-email-header" placeholder="Enter your work email" className="w-full"/>
						<LinkButton href="#" className="w-full">
							Sign Up Free
						</LinkButton>
					</div>

					<p className="text-neutral-mid block md:max-lg:hidden">Collaborate with your team within minutes</p>
					<HeaderRating className="flex md:max-lg:hidden"/>
				</div>
				<div className="
					flex flex-col justify-center items-center gap-2
				">
					<img src="imgs/home/img-1.png" alt="" />
					<p className="text-neutral-mid hidden md:max-lg:block">Collaborate with your team within minutes</p>
					<HeaderRating className="hidden md:max-lg:flex w-full"/>
				</div>
			</header>

			<section className="
				flex flex-col justify-center items-center gap-16
				w-full max-w-6xl mx-auto
				px-4
			">
				<p>Trusted by 45M+ users</p>
				<div className="
					relative
					flex flex-row items-center justify-start lg:justify-center
					w-full
					overflow-x-clip
				" > 
					{brandRepeater.map((_, i:number) => (
						<span key={i} className={`
							block lg:hidden
							absolute
							h-full w-12
							z-10
							${i == 0 ? 'left-0' : 'right-0'}
							bg-[linear-gradient(to_right,white,transparent)]
							${i == 0 ? '' : 'rotate-180'}
						`}></span>		
					))}
					{brandRepeater.map((_, i: number) => (
						<div key={i} className={`
							${i == 0 ? 'flex' : 'flex lg:hidden'} flex-row justify-between items-center
							min-w-max md:min-w-full
							animate-scrollLeft lg:animate-none
							px-12
						`}>
							<img src="partners/walmart.svg" alt="Walmart" />
							<img src="partners/cisco.svg" alt="Cisco" />
							<img src="partners/volvo.svg" alt="Volvo" />
							<img src="partners/deloitte.svg" alt="Deloitte" />
							<img src="partners/okta.svg" alt="Okta" />
						</div>
					))}
				</div>
			</section>

			<section className="
				flex flex-col justify-center items-start md:items-center gap-8
				w-full max-w-6xl
				mt-16
				px-4
			">
				<div className="relative">
					<span className="
						absolute
						-translate-x-full md:-translate-x-1/2
						-top-10 left-full
						rotate-[10deg]

						w-max
						bg-accent rounded-c-sm

						text-label-s font-bold
						px-2 py-1
					">
						Your idea starts here
					</span>
					<h1 className="text-left md:text-center">Collaborate without <br />constraints</h1>
				</div>

				<div className="
					grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
					w-full
				">
					<div className="
						flex flex-col gap-6
						px-6 py-10
						w-full
					">
						<h2>Free Forever</h2>
						<p>Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <Link href="#">pricing plans</Link> for more features.</p>
					</div>
					<div className="
						flex flex-col gap-6
						px-6 py-10
						w-full
					">
						<h2>Easy Integration</h2>
						<p>Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our <Link href="#">Marketplace.</Link></p>
					</div>
					<div className="
						flex flex-col gap-6
						px-6 py-10
						w-full
					">
						<h2>Security First</h2>
						<p>We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more 
						at our <Link href="#">Trust Center.</Link></p>
					</div>
				</div>

				<LinkButton href="#" className="">
					Sign Up Free
				</LinkButton>
			</section>

			<section className="
				flex flex-col-reverse md:flex-row justify-center items-center gap-16
				w-full max-w-7xl
				px-8
			">
				<div className="
					flex flex-col gap-8
					w-full max-w-md
				">
					<h1>Work together, <br />wherever you work.</h1>
					<p>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
					<ArrowLink href="#">
						Learn More
					</ArrowLink>
				</div>
				<div className="
					flex flex-col justify-center items-center gap-2
				">
					<img src="imgs/home/img-2.png" alt="" />
				</div>
			</section>

			<section className="
				flex flex-col md:flex-row justify-center items-center gap-16
				w-full max-w-7xl
				px-8
			">
				<div className="
					flex flex-col justify-center items-center gap-2
				">
					<img src="imgs/home/img-3.png" alt="" />
				</div>
				<div className="
					flex flex-col gap-8
					w-full max-w-md
				">
					<h1>Connect Your Tools, <br />Close your tabs.</h1>
					<p>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
					<ArrowLink href="#">
						Learn More
					</ArrowLink>
				</div>
			</section>

			<section className="
				relative
				flex flex-row
				w-full max-w-7xl
				overflow-clip
				lg:rounded-c-lg
			">
				<img src="imgs/home/img-4.png" alt="" className="
					absolute
					origin-right
					-right-16 md:right-0
					w-full min-w-[1280px]
					-z-10
				"/>

				<span className="hidden md:block flex-1"></span>

				<div className="
					flex flex-col justify-center items-center gap-8
					px-8 md:px-16 py-32 mt-20
					z-10
					w-full md:w-max
				">
					<h1>The Ways, <br />The Works</h1>
					<p className="text-center">How has our relationship with work changed?</p>
					<LinkButton href="#" className="">
						Sign Up Free
					</LinkButton>
				</div>
			</section>

			<section className="
				flex flex-col justify-stretch items-center gap-8
				w-full max-w-7xl
				px-8
			">
				<h1 className="w-full text-start">Built for the way you work</h1>
				<WorkTabs data={workTabsData} />
			</section>

			<section className="
				flex flex-col justify-center items-start md:items-center gap-8
				w-full
				px-8 py-32
				bg-accent
			">
				<h1>Why companies large <br />
				and small trust Miro</h1>
				<ArrowLink href="#" colors='secondary'>
					Contact Sales to request a demo
				</ArrowLink>

				<div className="
					grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
					place-items-center
					w-full max-w-6xl
					py-4
				">
					{noTrustIssues.map((trust, i) => (
						<div key={i} className="
							flex flex-col justify-start items-center gap-8
							max-w-xs h-56
							pt-16
						">
							<img src={trust.head} alt=""/>
							<p className="text-secondary font-medium text-center">{trust.desc}</p>
						</div>
					))}
				</div>
			</section>

			<section className="
				flex flex-col justify-center items-start md:items-center gap-8
				w-full max-w-7xl
				px-8
			">
				<h1>Loved by the world&apos;s best teams</h1>
				{/* <Link href="#" className="
					flex justify-center items-center 
					px-8 py-2
					bg-neutral-light border border-primary rounded-full
					hover:bg-primary hover:text-neutral-light
					transition
					no-underline
				">See all customer stories</Link> */}
				<LinkButton variant="outlined" href="#" className="">
					See all customer stories
				</LinkButton>

				<div className="
					grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
					auto-rows-max place-items-center
					w-full
					py-8
				">
					{teamStories.map((story, i) => (
						<div key={i} className="
							flex flex-col justify-center items-start md:items-center gap-8
							w-full h-full
							py-0 sm:px-8
						">
							<img src={story.team} alt="" className="w-auto h-auto"/>
							<p className="w-full text-start flex-1">{story.desc}</p>
							<div className="
								flex flex-row justify-center items-center gap-4
								w-full
								py-8
							">
								<img src={story["re-pic"]} alt="" className="h-10 w-auto aspect-square"/>
								<div className="
									flex flex-1 flex-col gap-1
								">
									<p>{story["re-name"]}</p>
									<p>{story["re-title"]}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="
				w-full max-w-7xl
				px-4 md:px-8
			">
				<div className="
					flex flex-col justify-center items-center gap-4
					w-full
					bg-secondary rounded-c-lg
					py-28 px-8
				">
					<h1 className="text-neutral-light text-center">Join 45M+ users today</h1>
					<p className="text-neutral-mid text-center">Start for free — upgrade anytime.</p>
					<Link href="#" className="text-neutral-mid text-center">Joining as an organization? Contact Sales</Link>
					<span className="h-4"></span>
					<LinkButton href="#" className="">
						Sign Up Free
					</LinkButton>
				</div>
			</section>
		</main>
	);
}

function HeaderRating({ className = "flex" }) {
	return (
		<div className={cn(`
			flex-row justify-center items-center gap-4
			w-fit
			p-2
			bg-surface-variant rounded-c-sm
		`, className)}>
			<div className="
				flex flex-col mr-2
			">
				<div className="flex flex-row gap-1">
					<img src="icons/rating-star-full.svg" alt="" />
					<img src="icons/rating-star-full.svg" alt="" />
					<img src="icons/rating-star-full.svg" alt="" />
					<img src="icons/rating-star-full.svg" alt="" />
					<img src="icons/rating-star-half.svg" alt="" />
				</div>
				<p className="text-[11px] text-secondary font-medium">Based on 5149+ reviews:</p>
			</div>
			<img src="logos/logo-g.svg" alt="get-app" />
			<img src="logos/get-app.svg" alt="" />
			<img src="logos/capterra.svg" alt="capterra" />
		</div>
	)
}
