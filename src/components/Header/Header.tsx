import 'components/Header/Header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from 'assets/logo4.png'


type Props = {}

const Header = (props: Props) => {
    return (
        <>
<Navbar bg="light" variant="light" expand="lg" className='nav' fixed="top">
    <Container fluid="xxl">
        <Navbar.Brand style={{fontSize:'45px'}} className='brand'><img src={logo} style={{width:'170px',height:'190px'}} />nemuse.tatz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link className='home' href="/">Home</Nav.Link>
            <Nav.Link className='price' href="/price">Price</Nav.Link>
            <Nav.Link className='price' href="/about">About Me</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
    )
}

export default Header
