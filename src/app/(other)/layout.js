import Intro from "../components/Intro/Intro";

export default function IntroLayout({ children }) {
  return (
    <>
      <Intro />
      {children}
    </>
  );
}
