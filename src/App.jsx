import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <main className="container">
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};
export default App;
