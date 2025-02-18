import footerLinks from "@/data/footer-links.json";
import ArrowLink from "../arrow-link";
import Link from "next/link";

export default function Footer() {
    return (
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
                                    {link.special && <ArrowLink href="#" colors="dull">
                                        {link.body}
                                    </ArrowLink>}
                                    {!link.special && <Link href={""/* link.href */} className={
                                        link.special ? "link-special" : "" + `
                                        block
                                        text-neutral-mid no-underline
                                        hover:text-primary
                                        transition

                                        py-2
                                        w-full
                                    `}>{link.body}</Link>}
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
    )
}