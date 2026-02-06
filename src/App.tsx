import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Hero.tsx";

// Registering gsap plugins for the entire application
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
