import Link from "next/link";
import Button from "./components/button";
import NavBar from "./components/navbar";
import { cn } from "./utils/tailwind.util";
import WorkTabs from "./components/home/worktabs";

import workTabsData from '@/data/home/workspaces.json';
import noTrustIssues from "@/data/home/no-trust-issues.json";
import teamStories from "@/data/home/team-stories.json";

import footerLinks from "@/data/footer-links.json";

export default function Home() {
	return (
		<div>
			<NavBar />
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
							<Button variant="filled" className="w-full"> 
								<div className="flex flex-row items-center gap-2">
									Sign Up Free
									<img src="icons/arrow.svg" alt="" className="w-5 h-5" />
								</div>
							</Button>
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
					p-8
				">
					<p>Trusted by 45M+ users</p>
					<div className="
						flex flex-row justify-center lg:justify-between items-center flex-wrap basis-64
						w-full
						overflow-x-clip
					">
						<img src="partners/walmart.svg" alt="Walmart" />
						<img src="partners/cisco.svg" alt="Cisco" />
						<img src="partners/volvo.svg" alt="Volvo" />
						<img src="partners/deloitte.svg" alt="Deloitte" />
						<img src="partners/okta.svg" alt="Okta" />
					</div>
				</section>

				<section className="
					flex flex-col justify-center items-center gap-8
					w-full max-w-6xl
					mt-16
					px-4
				">
					<div className="relative">
						<span className="
							absolute
							-translate-x-1/2
							-top-10 left-1/2 md:left-full
							rotate-[10deg]

							w-max
							bg-accent rounded-c-sm

							text-label-s font-bold
							px-2 py-1
						">
							Your idea starts here
						</span>
						<h1 className="text-center">Collaborate without <br />constraints</h1>
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
							<p>Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our 
							<Link href="#">pricing plans</Link> for more features.</p>
						</div>
						<div className="
							flex flex-col gap-6
							px-6 py-10
							w-full
						">
							<h2>Easy Integration</h2>
							<p>Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our 
							<Link href="#">Marketplace.</Link></p>
						</div>
						<div className="
							flex flex-col gap-6
							px-6 py-10
							w-full
						">
							<h2>Security First</h2>
							<p>We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more 
							at our 
							<Link href="#">Trust Center.</Link></p>
						</div>
					</div>

					<Button variant="filled" className="block"> 
						<div className="flex flex-row items-center gap-2">
							Sign Up Free
							<img src="icons/arrow.svg" alt="" className="w-5 h-5" />
						</div>
					</Button>
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
						<Link href="#" className="flex flex-row gap-4 items-center">
							Learn More
							<img src="icons/arrow.svg" alt="" />
						</Link>
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
						<Link href="#" className="flex flex-row gap-4 items-center">
							Learn More
							<img src="icons/arrow.svg" alt="" />
						</Link>
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
						<Button variant="filled" className="block"> 
						<div className="flex flex-row items-center gap-2">
							Sign Up Free
							<img src="icons/arrow.svg" alt="" className="w-5 h-5" />
						</div>
					</Button>
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
					flex flex-col justify-center items-center gap-8
					w-full
					px-8 py-32
					bg-accent
				">
					<h1>Why companies large <br />
					and small trust Miro</h1>
					<Link href="#" className="text-secondary">Contact Sales to request a demo</Link>

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
					flex flex-col justify-center items-center gap-8
					w-full max-w-7xl
					px-8
				">
					<h1>Loved by the world&apos;s best teams</h1>
					<Link href="#" className="
						flex justify-center items-center 
						px-8 py-2
						bg-neutral-light border border-primary rounded-full
						hover:bg-primary hover:text-neutral-light
						transition
						no-underline
					">See all customer stories</Link>

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
						<Button variant="filled"> 
							<div className="flex flex-row justify-center items-center gap-2">
								Sign Up Free
								<img src="icons/arrow.svg" alt="" className="w-5 h-5" />
							</div>
						</Button>
					</div>
				</section>
			</main>
			<footer id="footer" className="
				flex flex-col gap-10
				w-full
				px-8 py-10
				bg-secondary
			">
				<div className="
					grid [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]
					items-start justify-items-start
					auto-rows-max
					w-full
				">
					{footerLinks.map((section, i) => (
						<div key={i} className="
							flex-1 flex flex-col gap-4
							pb-12
						">
							<h3 className="text-white">{section.section}</h3>
							<ul className="
								w-full
							">
								{section.links.map((link) => (
									<li key={link.body} className='w-full'>
										<Link href={""/* link.href */} className={
											link.special ? "link-special" : "" + `
											block
											text-neutral-mid no-underline
											hover:text-primary
											transition

											py-2
											w-full
										`}>{link.body}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<span className="
					block
					h-px w-full
					bg-neutral-mid
				"></span>

				<div className="
					flex flex-col-reverse min-[1300px]:flex-row justify-between items-center gap-8
					w-full
				">
					<div className="
						flex flex-col lg:flex-row items-center gap-8
						w-full lg:w-auto
					">
						<div className="
							flex flex-row gap-6
						">
							<Link href="#">
								<img src="socials/twitter.svg" alt="Twitter" />
							</Link>
							<Link href="#">
								<img src="socials/facebook.svg" alt="Facebook" />
							</Link>
							<Link href="#">
								<img src="socials/indeed.svg" alt="Indeed" />
							</Link>
							<Link href="#">
								<img src="socials/insta.svg" alt="Instagram" />
							</Link>
							<Link href="#">
								<img src="socials/youtube.svg" alt="Youtube" />
							</Link>
						</div>
						<div className="
							flex flex-col md:flex-row gap-6
							items-start justify-start md:justify-center
							w-full lg:w-auto
						">
							<Link href="#" className="
								nav-link flex flex-row items-center gap-1 
								text-neutral-mid no-underline hover:text-primary
							">
								<img src="icons/glob.svg" alt="lang" className="invert w-7 aspect-square"/>
								EN
							</Link>
							<p>@2025 miro</p>
							<Link href="#" className="text-neutral-mid no-underline hover:text-primary transition">Terms of Service</Link>
							<Link href="#" className="text-neutral-mid no-underline hover:text-primary transition">Privacy Policy</Link>
							<Link href="#" className="text-neutral-mid no-underline hover:text-primary transition">Manage Cookies</Link>
						</div>
					</div>
					<div className="
						flex flex-row justify-center items-center gap-4
					">
						<Link href="#">
							<img src="stores/google-play.svg" alt="Google Play" />
						</Link>
						<Link href="#">
							<img src="stores/apple-store.svg" alt="Apple Store" />
						</Link>
						<Link href="#">
							<img src="stores/svg.svg" alt="Don't Know" />
						</Link>
					</div>
				</div>
			</footer>
		</div>
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
