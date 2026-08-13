import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1">
        <div className="grid flex-1 md:grid-cols-2 md:divide-x">
          <Hero />
          <ProjectGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
