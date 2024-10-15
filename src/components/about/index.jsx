import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey through web development is fueled by a powerful blend of
            tools and languages, with JavaScript forming the core of my craft. I
            skillfully wield frameworks like React.js and Next.js to forge
            seamless portals (websites) that connect realms (users) across the
            digital universe. On the backend, I masterfully manage databases
            like MongoDB and SQL, ensuring robust and efficient data handling.
            The ancient wisdom of the Jamstack empowers me to conjure fast,
            secure, and dynamic experiences, while my design skills guarantee
            that every creation is both functional and visually captivating.
            Beyond building, I actively contribute to open-source communities on
            GitHub, where collaboration and shared knowledge shape innovation.
            Join me as I continue exploring new spells, frameworks, and backend
            technologies to help shape the future of the web, one project at a
            time.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            15+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3 <sub className="font-semibold text-base">monts of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=Ath47&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=Ath47&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Ath47"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=html,css,js,aws,babel,bootstrap,cloudflare,d3,docker,figma,firebase,git,github,graphql,jquery,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,supabase,tailwind,threejs,vercel,vite,vscode,yarn,cpp,c,java,stackoverflow`}
            alt="Ath47"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
        <img
  className="w-full h-auto"
  src="https://github-readme-streak-stats.herokuapp.com?user=Ath47&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
  alt="Ath47's GitHub Streak"
  loading="lazy"
/>

        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/Ath47"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-profile-trophy.vercel.app/?username=Ath47&theme=radical&no-frame=true&no-bg=true&margin-w=4"
              alt="Ath47's GitHub Trophies"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
