
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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
            <Nav.Link className='home' href="/">Home</Nav.Link>
            <Nav.Link className='price' href="/price">Price</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
    )
}

export default Header
