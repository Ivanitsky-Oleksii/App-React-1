import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Home from 'pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Contact from 'pages/Contact/Contact'
import About from 'pages/About/About'
import Slide from "components/Slide/Slide"

type Props = {}

const App = (props: Props) => {
    return (
        <BrowserRouter>
        <Header />
        <Slide/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        </BrowserRouter>
        
        
    )
}
export default App
