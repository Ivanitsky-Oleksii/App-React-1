import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Home from 'components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}
export default App
