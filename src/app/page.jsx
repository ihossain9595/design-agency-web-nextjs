import styles from "./page.module.css";

import Link from "next/link";
import Image from "next/image";

import IntroSection from "@/app/components/IntroSection/IntroSection";
import SubscribeSection from "@/app/components/SubscribeSection/SubscribeSection";

const images = [
  { id: 1, src: "/images/project_28.png", width: 1080, height: 718, alt: "Project image" },
  { id: 2, src: "/images/project_29.png", width: 1080, height: 1626, alt: "Project image" },
  { id: 3, src: "/images/project_30.png", width: 1080, height: 720, alt: "Project image" },
  { id: 4, src: "/images/project_31.png", width: 1080, height: 514, alt: "Project image" },
];

const works = [
  {
    id: 1,
    title: "Grow Your Business",
    description: "We help identify the best ways to improve your business",
    link: "https://www.google.com",
    icon: { src: "/icons/icon_activity.svg", width: 34, height: 34, alt: "Activity icon" },
  },
  {
    id: 2,
    title: "Improve brand loyalty",
    description: "We help identify the best ways to improve your business",
    link: "https://www.google.com",
    icon: { src: "/icons/icon_heart.svg", width: 34, height: 34, alt: "Heart icon" },
  },
  {
    id: 3,
    title: "Improve Business Model",
    description: "We help identify the best ways to improve your business",
    link: "https://www.google.com",
    icon: { src: "/icons/icon_work.svg", width: 34, height: 34, alt: "Work icon" },
  },
];

const logos = [
  { id: 1, src: "/logos/logo_google.png", width: 512, height: 185, alt: "Google logo" },
  { id: 2, src: "/logos/logo_trello.png", width: 512, height: 185, alt: "Trello logo" },
  { id: 3, src: "/logos/logo_monday.png", width: 512, height: 185, alt: "Monday logo" },
  { id: 4, src: "/logos/logo_notion.png", width: 512, height: 185, alt: "Notion logo" },
  { id: 5, src: "/logos/logo_slack.png", width: 512, height: 185, alt: "Slack logo" },
];

const insights = [
  {
    id: 1,
    title: "Followers",
    number: "240452",
    icon: { src: "/icons/icon_group.svg", width: 40, height: 40, alt: "Group icon" },
  },
  {
    id: 2,
    title: "Solved Problems",
    number: "6300",
    icon: { src: "/icons/icon_like.svg", width: 40, height: 40, alt: "Like icon" },
  },
  {
    id: 3,
    title: "Happy Customers",
    number: "25000",
    icon: { src: "/icons/icon_happy.svg", width: 40, height: 40, alt: "Happy icon" },
  },
  {
    id: 4,
    title: "Projects",
    number: "360452",
    icon: { src: "/icons/icon_scan.svg", width: 40, height: 40, alt: "Scan icon" },
  },
];

const feature = [
  {
    id: 1,
    title: "App Redesign",
    tag: "App Design - June 20, 2022",
    image: { src: "/images/project_1.png", width: 1080, height: 952, alt: "Projcet image" },
  },
];

const features = [
  {
    id: 1,
    title: "Redesign channel web Copy",
    tag: "App Design - June 20, 2022",
    image: { src: "/images/project_2.png", width: 1080, height: 952, alt: "Projcet image" },
  },
  {
    id: 2,
    title: "Redesign channel web Copy",
    tag: "App Design - June 20, 2022",
    image: { src: "/images/project_3.png", width: 1080, height: 952, alt: "Projcet image" },
  },
  {
    id: 3,
    title: "Redesign channel web Copy",
    tag: "App Design - June 20, 2022",
    image: { src: "/images/project_4.png", width: 1080, height: 952, alt: "Projcet image" },
  },
  {
    id: 4,
    title: "Redesign channel web Copy",
    tag: "App Design - June 20, 2022",
    image: { src: "/images/project_5.png", width: 1080, height: 952, alt: "Projcet image" },
  },
];

const homePage = () => {
  return (
    <>
      <section id={styles.hero}>
        <div className={styles.container}>
          <div id={styles.heros}>
            <div className={styles.left_box}>
              <h1 className={styles.title}>Increase Your Customers Loyalty and Satisfaction</h1>
              <p className={styles.description}>We help businesses like yours earn more customers, standout from competitors, make more money</p>

              <Link className={styles.link} href={"#"}>
                Get Started
              </Link>
            </div>

            <div className={styles.right_box}>
              <div className={styles.image_box}>
                {images.map((image) => {
                  return <Image key={image.id} className={styles.image} src={image.src} width={image.width} height={image.height} alt={image.alt} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNU2BhVDwAD0AGstD8TswAAAABJRU5ErkJggg==" />;
                })}
              </div>
            </div>
          </div>
        </div>

        <div id={styles.logo}>
          <div className={styles.container}>
            <div className={styles.logo_box}>
              {logos.map((logo) => {
                return <Image key={logo.id} className={styles.logo} src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8Gi9bDwAFtAHyodATsgAAAABJRU5ErkJggg==" />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id={styles.work}>
        <div className={styles.container}>
          <IntroSection tag="Work List">We provide the Perfect Solution to your business growth</IntroSection>

          <div id={styles.works}>
            {works.map((work) => {
              return (
                <div key={work.id} className={styles.work_box}>
                  <span className={styles.icon_box}>
                    <Image key={work.id} className={styles.icon} src={work.icon.src} width={work.icon.width} height={work.icon.height} alt={work.icon.alt} />
                  </span>

                  <h3 className={styles.title}>{work.title}</h3>
                  <p className={styles.description}>{work.description}</p>

                  <Link className={styles.link} href={"#"}>
                    Learn More &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id={styles.insight}>
        <div className={styles.container}>
          <div id={styles.insights}>
            {insights.map((insight) => {
              return (
                <div key={insight.id} className={styles.insight_box}>
                  <span className={styles.icon_box}>
                    <Image key={insight.id} className={styles.icon} src={insight.icon.src} width={insight.icon.width} height={insight.icon.height} alt={insight.icon.alt} />
                  </span>

                  <h3 className={styles.title}>{insight.number}</h3>
                  <p className={styles.description}>{insight.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id={styles.feature}>
        <div className={styles.container}>
          <IntroSection tag="Featured Project">We provide the Perfect Solution to your business growth</IntroSection>

          <div id={styles.features}>
            <div className={styles.feature_left_box}>
              <div className={styles.image_box}>
                <Image className={styles.image} src={feature[0].image.src} width={feature[0].image.width} height={feature[0].image.height} alt={feature[0].image.alt} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNU2BhVDwAD0AGstD8TswAAAABJRU5ErkJggg==" />
              </div>

              <div className={styles.info_box}>
                <p className={styles.tag}>{feature[0].tag}</p>
                <h3 className={styles.title}>{feature[0].title}</h3>
              </div>
            </div>

            <div className={styles.feature_right_boxes}>
              {features.map((feature) => {
                return (
                  <div key={feature.id} className={styles.feature_right_box}>
                    <div className={styles.image_box}>
                      <Image className={styles.image} src={feature.image.src} width={feature.image.width} height={feature.image.height} alt={feature.image.alt} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNU2BhVDwAD0AGstD8TswAAAABJRU5ErkJggg==" />
                    </div>

                    <div className={styles.info_box}>
                      <p className={styles.tag}>{feature.tag}</p>
                      <h3 className={styles.title}>{feature.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SubscribeSection />
    </>
  );
};

export default homePage;
