import styles from "./page.module.css";

import Image from "next/image";

import IntroSection from "@/app/components/IntroSection/IntroSection";
import SubscribeSection from "@/app/components/SubscribeSection/SubscribeSection";

const teams = [
  {
    id: 1,
    name: "Devon Lane",
    picture: { src: "/images/team_1.png", width: 1080, height: 1067, alt: "Devon Lane" },
    socials: [
      {
        id: 1,
        title: "Facebook",
        icon: {
          src: "/icons/icon_team_facebook.svg",
          width: 10,
          height: 16,
          alt: "Facebook icon",
        },
        link: "www.google.com",
      },
      {
        id: 2,
        title: "Twitter",
        icon: {
          src: "/icons/icon_team_twitter.svg",
          width: 16,
          height: 14,
          alt: "Twitter icon",
        },
        link: "www.google.com",
      },
      {
        id: 3,
        title: "Instagram",
        icon: {
          src: "/icons/icon_team_instagram.svg",
          width: 15,
          height: 15,
          alt: "Instagram icon",
        },
        link: "www.google.com",
      },
    ],
  },
  {
    id: 2,
    name: "Danny Bailey",
    picture: { src: "/images/team_2.png", width: 1080, height: 1067, alt: "Danny Bailey" },
    socials: [
      {
        id: 1,
        title: "Facebook",
        icon: {
          src: "/icons/icon_team_facebook.svg",
          width: 10,
          height: 16,
          alt: "Facebook icon",
        },
        link: "www.google.com",
      },
      {
        id: 2,
        title: "Twitter",
        icon: {
          src: "/icons/icon_team_twitter.svg",
          width: 16,
          height: 14,
          alt: "Twitter icon",
        },
        link: "www.google.com",
      },
      {
        id: 3,
        title: "Instagram",
        icon: {
          src: "/icons/icon_team_instagram.svg",
          width: 15,
          height: 15,
          alt: "Instagram icon",
        },
        link: "www.google.com",
      },
    ],
  },
  {
    id: 3,
    name: "Alex Lov",
    picture: { src: "/images/team_3.png", width: 1080, height: 1067, alt: "Alex Lov" },
    socials: [
      {
        id: 1,
        title: "Facebook",
        icon: {
          src: "/icons/icon_team_facebook.svg",
          width: 10,
          height: 16,
          alt: "Facebook icon",
        },
        link: "www.google.com",
      },
      {
        id: 2,
        title: "Twitter",
        icon: {
          src: "/icons/icon_team_twitter.svg",
          width: 16,
          height: 14,
          alt: "Twitter icon",
        },
        link: "www.google.com",
      },
      {
        id: 3,
        title: "Instagram",
        icon: {
          src: "/icons/icon_team_instagram.svg",
          width: 15,
          height: 15,
          alt: "Instagram icon",
        },
        link: "www.google.com",
      },
    ],
  },
];

const teamPage = () => {
  return (
    <>
      <section id={styles.team}>
        <div className={styles.container}>
          <IntroSection tag="Our Team Member">Check our awesome team members</IntroSection>

          <div id={styles.teams}>
            {teams.map((team) => {
              return (
                <div key={team.id} className={styles.team_box}>
                  <div className={styles.image_box}>
                    <Image key={team.id} className={styles.image} src={team.picture.src} width={team.picture.width} height={team.picture.height} alt={team.picture.alt} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNU2BhVDwAD0AGstD8TswAAAABJRU5ErkJggg==" />
                    <div className={styles.icon_boxes}>
                      {team.socials.map((social) => {
                        return (
                          <div className={styles.icon_box}>
                            <Image key={social.id} className={styles.icon} src={social.icon.src} width={social.icon.width} height={social.icon.height} alt={social.icon.alt} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.title_box}>
                    <h3 className={styles.name}>{team.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id={styles.subscribe}>
        <div className={styles.container}>
          <SubscribeSection />
        </div>
      </section>
    </>
  );
};

export default teamPage;
