import styles from "./page.module.css";

import Image from "next/image";

import IntroSection from "@/app/components/IntroSection/IntroSection";
import SubscribeSection from "@/app/components/SubscribeSection/SubscribeSection";

const services = [
  {
    id: 1,
    title: "Build & Launch without problems",
    description: "Increase your team’s productivity and save time with a bot that answers and fields customer inquiries",
    images: [
      { id: 1, src: "/images/project_12.png", width: 1080, height: 495, alt: "Project description" },
      { id: 2, src: "/images/project_13.png", width: 1080, height: 1239, alt: "Project description" },
      { id: 3, src: "/images/project_14.png", width: 1080, height: 1106, alt: "Project description" },
      { id: 4, src: "/images/project_15.png", width: 1080, height: 1146, alt: "Project description" },
    ],
  },
  {
    id: 2,
    title: "Build & Launch without problems",
    description: "Increase your team’s productivity and save time with a bot that answers and fields customer inquiries",
    images: [
      { id: 1, src: "/images/project_16.png", width: 1080, height: 495, alt: "Project description" },
      { id: 2, src: "/images/project_17.png", width: 1080, height: 1239, alt: "Project description" },
      { id: 3, src: "/images/project_18.png", width: 1080, height: 1106, alt: "Project description" },
      { id: 4, src: "/images/project_19.png", width: 1080, height: 1146, alt: "Project description" },
    ],
  },
  {
    id: 3,
    title: "Build & Launch without problems",
    description: "Increase your team’s productivity and save time with a bot that answers and fields customer inquiries",
    images: [
      { id: 1, src: "/images/project_20.png", width: 1080, height: 495, alt: "Project description" },
      { id: 2, src: "/images/project_21.png", width: 1080, height: 1239, alt: "Project description" },
      { id: 3, src: "/images/project_22.png", width: 1080, height: 1106, alt: "Project description" },
      { id: 4, src: "/images/project_23.png", width: 1080, height: 1146, alt: "Project description" },
    ],
  },
  {
    id: 4,
    title: "Build & Launch without problems",
    description: "Increase your team’s productivity and save time with a bot that answers and fields customer inquiries",
    images: [
      { id: 1, src: "/images/project_24.png", width: 1080, height: 495, alt: "Project description" },
      { id: 2, src: "/images/project_25.png", width: 1080, height: 1239, alt: "Project description" },
      { id: 3, src: "/images/project_26.png", width: 1080, height: 1106, alt: "Project description" },
      { id: 4, src: "/images/project_27.png", width: 1080, height: 1146, alt: "Project description" },
    ],
  },
];

const servicePage = () => {
  return (
    <>
      <section id={styles.service}>
        <div className={styles.container}>
          <IntroSection tag="Our All Services">We Provide Best Web Design Services</IntroSection>

          <div id={styles.services}>
            {services.map((service) => {
              return (
                <div key={service.id} className={styles.service_box}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>

                  <div className={styles.image_box}>
                    {service.images.map((image) => {
                      return <Image key={image.id} className={styles.image} src={image.src} width={image.width} height={image.height} alt={image.alt} />;
                    })}
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

export default servicePage;
