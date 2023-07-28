import {About, Contact, Footer, Hero, Navbar, Projects, Skills} from '../components'

export default function Home() {
    return (
      <main className="min-h-screen bg-white dark:bg-[#1e2020] text-black dark:text-white overflow-hidden">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
      </main>
    );
}
