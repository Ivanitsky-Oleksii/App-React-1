import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from 'assets/image/twit1.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'components/Header/Header.scss'
type Props = {}

const Header = (props: Props) => {
    return (
        <>
<Navbar bg="dark" variant="dark" expand="lg" className='nav'>
    <Container fluid="xxl">
        <Navbar.Brand href="/">photoday <img src={logo} alt='Logo' style={{width:'30px',height:'30px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">Photos</Nav.Link>
            <Nav.Link href="#action2">Illustrations</Nav.Link>
            <Nav.Link href="#action2">Vectors</Nav.Link>
            <Nav.Link href="/about">Videos</Nav.Link>
        </Nav>
        <Form className="d-flex" >
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
        </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
    )
}

export default Header
