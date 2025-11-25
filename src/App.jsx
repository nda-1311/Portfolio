import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data/portfolioData";
import "./App.css";

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col flex-1">
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <Projects data={portfolioData} />
        <Services data={portfolioData} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer data={portfolioData} />
    </div>
  );
}

export default App;
