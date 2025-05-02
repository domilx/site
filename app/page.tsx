import Link from "next/link";
import AnimatedName from "@/components/animate-name";
import BlurFade, { BlueFadeStaggerChildren } from "@/components/blur-fade";

const highlight = "text-[#FFD700]";

export default function Home() {
  return (
    <>
      <BlurFade delay={0.2}>
        <AnimatedName />
      </BlurFade>
      <BlueFadeStaggerChildren
        delay={0.5}
        staggerDelay={0.04}
        yOffset={8}
        className="space-y-4 font-light leading-snug text-white"
      >
        <p>
          I&apos;m a computer science student at Dawson College in Montréal
          Québec, dean&apos;s list semi-finalist FRC Alumn, full stack
          developer, robotics mentor at{" "}
          <Link href="https://team3990.com" className={`${highlight} hover:text-[rgb(255,251,0)]`}>
            Tech For Kids
          </Link>
          , where I teach students{" "}
          <Link
            href="https://docs.wpilib.org/en/stable/index.html"
            className={`${highlight} hover:text-[rgb(255,251,0)]`}
          >
            WPILib and Java
          </Link>{" "}
          from the ground up.
        </p>
        <p>
          I&apos;m a software engineer for my team where I build projects and
          tools for the team, such as a{" "}
          <Link
            href="https://apps.apple.com/us/app/tech-scout/id6446188906"
            className={`${highlight} hover:text-[rgb(255,251,0)]`}
          >
            scouting app
          </Link>{" "}
          for the team to use during competitions, or an{" "}
          <Link
            href="https://apps.apple.com/us/app/tech-insights/id6477985456"
            className={`${highlight} hover:text-[rgb(255,251,0)]`}
          >
            insights app
          </Link>{" "}
          for the team to use to analyze that scouting data.
        </p>
        <p>
          I love reverse engineering old videogame DRMs.
          Recently, I {" "}
          <Link
            href="https://github.com/domilx/NoReelsInstgram/"
            className={`${highlight} hover:text-[rgb(255,251,0)]`}
          >
            reverse engineered Instagram to remove Reels
          </Link>.
        </p>
        <p>
          Always excited to break down barriers and discover new ways to innovate.
        </p>

      </BlueFadeStaggerChildren>
    </>
  );
}
