import About from "./about";
import Blog from "./blog";
import Contact from "./contact";
import Resume from "./resume";

export const TABS: ComponentName[] = ["About", "Resume", "Blog", "Contact"];

export type ComponentName = "About" | "Resume" | "Contact" | "Blog";

export const COMPONENTS: Record<ComponentName, JSX.Element> = {
    About: <About />,
    Resume: <Resume />,
    Contact: <Contact />,
    Blog: <Blog />,
};
