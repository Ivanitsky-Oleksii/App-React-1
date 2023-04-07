
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
        <Navbar.Brand>nemuse.tatz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link style={{marginLeft:'70px'}} href="/">HOME</Nav.Link>
            <Nav.Link href="/price">Price</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
    )
}

export default Header
