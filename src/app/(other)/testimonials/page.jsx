import styles from "./page.module.css";

import Image from "next/image";

import IntroSection from "@/app/components/IntroSection/IntroSection";
import SubscribeSection from "@/app/components/SubscribeSection/SubscribeSection";

const testimonials = [
  {
    id: 1,
    src: "/images/profile_1.png",
    name: "Alice Bradley",
    designation: "Backend Developer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.",
    blurImageUrl:
      "data:image/webp;base64,UklGRhwDAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLgEAALAKAJ0BKoIAggA+7XawVamnJCMgarEwHYllbt1Z7x/n+gA32cW2UegWc5lFddk9rrJzE4GpQlCvqO0wl3//F1P1tUlizdePv5+Gdq2f8JT+Bu2ft6BnedWAFc0zLAAA/u0r/+qXfN1Bk3zqnZOMmSBEdcejau97EdqZfEcrVXJKuMAogngc557tGnnf/CWLmnI//+5K5kS/1Kx/zRFBvESiOee5vqSi12rJyEoat+1CHTsBg5niFyiGz9dlJW8yijSb9mOdX7EN9Hf7NkmMTPYD5ok9o1mNG0vckaViuHW6NDfNXCPFyD5smWCvrsS6RuKRl+PF8fbXOVht49PQN3E9xZKC/JbFNlNr7Sl7ZtEHXlR7a/7moax4LEb6jH86oHRVH5FOGig1QNkAAAAA",
  },
  {
    id: 2,
    src: "/images/profile_2.png",
    name: "Alice Bradley",
    designation: "Backend Developer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.",
    blurImageUrl:
      "data:image/webp;base64,UklGRhYDAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggKAEAADANAJ0BKoIAggA+7WysULomJKKoVtyrQB2JaW7gAN9/4TO/GP4x+gfcwALLaWMn58KNH2cFbB8Bn+dyz4Mqfag5pwcGbsYX+TYaT6WxgShf6yTAO3ZIdPhFz/RktaDIdK3/54PTihNRlBCQwNYPnDV/gAD+8GUQ7IgJkc+ktWbYAysECQgBzhHPqFzmZH7WgzW4WfIO+Lz0WmW2HYf5SAV/RQTfBIzC3HO6KB8kwriz67QxG/whKXK56C22dLEXgqHu9mWVjUl36roSPOeAdp9TCc1339GOR+CSctAFBh4rPbG41GDOqT0zS12BsK4Fc+LfI+1ZOM9pVsPFAV7sUGRdvLZsGHxKrxs2JPJuoOWf/3Zbm+e+N6SRJNv068MK46epm6SGAAAA",
  },
  {
    id: 3,
    src: "/images/profile_3.png",
    name: "Alice Bradley",
    designation: "Backend Developer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.",
    blurImageUrl:
      "data:image/webp;base64,UklGRkgDAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggWgEAALAOAJ0BKoIAggA+7WamTam1JCIv1gx6oB2JZ27gPmjv7k10XWT6zNYOJKrjVPYlCY/uxPGy2Dr+k6DOzl5GI5QDWqmio1fWMFEtmTriT7rRxJ4BDwQSc2c80vJRiLrZMzqvTmVcGlLTG35OoNqNzU/PECiTTY3qz9o6qR7IAAD+8NDfsHhkAV6h6hnTarR4mLqSnPzw4aYWKCN2SseGD+v34cyzRW06BIDx3BGXGmb+La3bWUSxRzt7RPX0rsBK/A8i7ERXZEM2EZpPKxmDsyilgoYQg9aQHzKNUTsvtV7QZHaHiT9UTkn7mnDLcz5ZoYz9zFEkDO0ijdyDJqhk31cUMPx6kGcGH5l7arjET2pCfPHpr7mlNeF/xrAF3DpoLSJjVYk0JH/zTGto74eaWAnIFjM/DUkfQfEll0v7m9pIHpIPRDENqZ+BjW6MmKpDkDnkUHgKmU+AAAA=",
  },
  {
    id: 4,
    src: "/images/profile_4.png",
    name: "Alice Bradley",
    designation: "Backend Developer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.",
    blurImageUrl:
      "data:image/webp;base64,UklGRigDAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggOgEAAFAMAJ0BKoIAggA+7XavVamnI6MgauEwHYllbt7CH3/av4KFxgep4m78gHpe4UyWygDQzachtxzw/98t8H3gv7JgxZYqe8n/zi/PNfvbTLk2W8whmzkNwQyY5BWnE/ijBHfxX0pCZLlVhBAgAP7kjP9jo6upBf+H/Sf0mhrudOdrk3St/q/To1uJoeuIPTH58MSb7w57hdR7TYRTEMBN3gAVkKCu5JmC50RkQC0fOSPsMNv+fJ3Y16D2JYtqVdYjTFq9bFvtE44QW+kfW7SHgn1p5DfCzpaMh4IyLd48BHBzfGcd3vJKwfEt3kStDf5fZz56v7NiKiplzDBLDBFGCJPs1vjF5lgFBTwVIHlNmeb9hpk8R9yar51nmxiqYKoljpE2NBb4rXIXvy7dd1xHhPVuJxPczdUxwAAA",
  },
  {
    id: 5,
    src: "/images/profile_5.png",
    name: "Alice Bradley",
    designation: "Backend Developer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.",
    blurImageUrl:
      "data:image/webp;base64,UklGRk4DAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggYAEAAJAMAJ0BKoIAggA+7W6vUymrqagjkcyJcB2JZW7dWVhP4A4lpWEKYNn0NJqbMrHw6IfsfptV7w0X64pfsfrL7LrYbXSp0jf1NlvW/71c1GocmmLA3EbklMy8rKS1bsertzAN0PP/tRPmcryVY7AA/u/uE9/9cTnmzcuSi/QCCG3eCNrnhKGy7hZxu3zW0RuATKI9YTgZi//keF+XQOvKss1UNiuCuVLjWtq4Zz7pjm27sD8xLqH37neeODzYwkYUDcN0flO0BYpjjyRHQlJtGQ5RizBXdge+2V2cnpdkWy6+AE9nW6Qp04PTca+wl9UyD73zgrySXTwlIbgVIgPHqCSxcQhcANq6G2lfxSkFC1p6/36ltyHlMYIgste2fEh3sqo0N109Td8mDHjFyIm+T3cA22OY8w5+XEbRM3Qcx5dNmg7niO/yg0JStrSKo5LibXsEF6vOtVziqFMBSlIkAAA=",
  },
  {
    id: 6,
    src: "/images/profile_6.png",
    name: "Alice Bradley",
    designation: "Backend Developer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.",
    blurImageUrl:
      "data:image/webp;base64,UklGRkoDAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggXAEAANALAJ0BKoIAggA+7WiuVCmlI6Mk0VwJMB2JY27dWeOr4AQHVh6iHqDdLzk3l9Eeu1vJ/+zCLPh4jwPlrbi1V0EZp3ZgI5yYli8KD+/8VgkPOI8yxS97XjquUWu870FLor/+mz2cSwAA/usZ5//ME/9JP+N3ah+3nNncAe+tEzo/khNWg8TaJJLyrg6fAd420W03kcwGNTfyb0IkbavhMiXIy2VTa95lL+2bd2NS/tj7WDz62D5PVsb9DnU/Q/mDa5SWUr8R3OFWm5d+SJEs6E+X9CoV2Z9pAj/QE4b3DnGTeSzPn8vCj+Rxhvep0Mpk87cDRLoSma37wnP9x9KtvVlAMWELw3EPHobpSo9YbrOh7NxtQvgeWcRpUzEpg4dhKqO9Uy7g6t2DBJa0bnZkIjIp7kICY7fIPpaouO2nq2bpaWflEECpxVIFsIT+3fLf/nDc02ThMMXUZAAAAA==",
  },
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
                    <Image className={styles.image} src={testimonial.src} width={256} height={256} alt="Profile picture" placeholder="blur" blurDataURL={testimonial.blurImageUrl} />
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
