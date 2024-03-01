import styles from "./page.module.css";

import Image from "next/image";

import IntroSection from "@/app/components/IntroSection/IntroSection";
import SubscribeSection from "@/app/components/SubscribeSection/SubscribeSection";

const projects = [
  { id: 1, src: "/images/project_6.png", title: "Lorem ipsum dolor sit consectutar" },
  { id: 2, src: "/images/project_7.png", title: "Lorem ipsum dolor sit consectutar" },
  { id: 3, src: "/images/project_8.png", title: "Lorem ipsum dolor sit consectutar" },
  { id: 4, src: "/images/project_9.png", title: "Lorem ipsum dolor sit consectutar" },
  { id: 5, src: "/images/project_10.png", title: "Lorem ipsum dolor sit consectutar" },
  { id: 6, src: "/images/project_11.png", title: "Lorem ipsum dolor sit consectutar" },
];

const projectsPage = () => {
  return (
    <>
      <section id={styles.project}>
        <div className={styles.container}>
          <IntroSection tag="All Project">Better Agency/SEO Solution At Your Fingertips</IntroSection>

          <div id={styles.projects}>
            {projects.map((project) => {
              return (
                <div key={project.id} className={styles.project_box}>
                  <span className={styles.image_box}>
                    <Image className={styles.image} src={project.src} width={1080} height={938} alt={project.title} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNU2BhVDwAD0AGstD8TswAAAABJRU5ErkJggg==" />
                  </span>

                  <h3 className={styles.title}>{project.title}</h3>
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

export default projectsPage;
