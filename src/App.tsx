import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap";

// Registering gsap plugins for the entire application
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <div>
            <h1 className="text-3xl text-indigo-300">Hello, World!</h1>
        </div>
    );
};

export default App;
