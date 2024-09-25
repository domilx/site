import Link from "next/link";
import AnimatedName from "@/components/animate-name";

const highlight = 'text-[#FFD700]';

export default function Home() {
  return (
    <>
      <AnimatedName />
      <div className="text-white space-y-4 leading-snug font-light">
        <p>
          I'm a computer science student at Dawson College in Montréal Québec, dean's list semi-finalist FRC Alumn, full stack developer, robotics mentor at{' '}
            <Link href="https://team3990.com" className={highlight}>
            Tech For Kids
            </Link>
          , where I teach students{' '}
          <Link href="https://docs.wpilib.org/en/stable/index.html" className={highlight}>
            WPILib and Java
          </Link>{' '}
          from the ground up.
        </p>
        <p>
          I'm a software engineer for my team where I build projects and tools for the team, such as a{' '}
          <Link href="https://apps.apple.com/us/app/tech-scout/id6446188906" className={highlight}>
            scouting app
          </Link>{' '}
          for the team to use during competitions, or an{' '}
          <Link href="https://apps.apple.com/us/app/tech-insights/id6477985456" className={highlight}>
            insights app
          </Link>{' '}
          for the team to use to analyze that scouting data.
        </p>
        <p>
          I work on passion projects like{' '}
          <Link href="https://cnvyapp.com" className={highlight}>
            CNVY
          </Link>
          , an app that turns driving into an adventure with real-time group alerts, smooth communication, and synchronized tunes.
        </p>
        <p>
          I'm always looking for new opportunities to learn and grow, so feel free to reach out to me. Or feel free to check out and support my work. It would mean the 🌍
        </p>
      </div>
    </>
  );
}
