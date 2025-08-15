import Apropos from "../components/Apropos"
import Footer from "../components/footer"
import Header from "../components/header"
import HeroPage from "../components/heroPage"
import LeProjet from "../components/LeProjet"
export default function Main() {
    return  (
        <main className="min-h-screen flex flex-col">
            <Header/>
            <HeroPage/>
            <Apropos/>
            <LeProjet/>
            <Footer/>
        </main>
  )
}