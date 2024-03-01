import styles from "./page.module.css";

import Image from "next/image";

import IntroSection from "@/app/components/IntroSection/IntroSection";
import SubscribeSection from "@/app/components/SubscribeSection/SubscribeSection";

const testimonials = [
  { id: 1, src: "/images/profile_1.png", name: "Alice Bradley", designation: "Backend Developer", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare." },
  { id: 2, src: "/images/profile_2.png", name: "Alice Bradley", designation: "Backend Developer", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare." },
  { id: 3, src: "/images/profile_3.png", name: "Alice Bradley", designation: "Backend Developer", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare." },
  { id: 4, src: "/images/profile_4.png", name: "Alice Bradley", designation: "Backend Developer", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare." },
  { id: 5, src: "/images/profile_5.png", name: "Alice Bradley", designation: "Backend Developer", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare." },
  { id: 6, src: "/images/profile_6.png", name: "Alice Bradley", designation: "Backend Developer", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare." },
];

const testimonialsPage = () => {
  return (
    <>
      <section id={styles.testimonial}>
        <div className={styles.container}>
          <IntroSection tag="Testimonial List">Better Agency/SEO Solution At Your Fingertips</IntroSection>

          <div id={styles.testimonials}>
            {testimonials.map((testimonial) => {
              return (
                <div key={testimonial.id} className={styles.testimonial_box}>
                  <span className={styles.image_box}>
                    <Image className={styles.image} src={testimonial.src} width={256} height={256} alt="Profile picture" />
                  </span>

                  <blockquote className={styles.quote}>{testimonial.quote}</blockquote>

                  <h3 className={styles.name}>{testimonial.name}</h3>
                  <span className={styles.designation}>{testimonial.designation}</span>
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

export default testimonialsPage;
