
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'components/Header/Header.scss'
type Props = {}

const Header = (props: Props) => {
    return (
        <>
<Navbar bg="dark" variant="dark" expand="lg" className='nav'>
    <Container fluid="xxl">
        <Navbar.Brand style={{fontSize:'30px'}}>Nemuse.Tatz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link className='home' style={{marginLeft:'70px',color:'red'}} href="/">Home</Nav.Link>
            <Nav.Link className='home' style={{marginLeft:'30px'}} href="/price">Price</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
    )
}

export default Header
