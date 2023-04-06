import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from 'assets/twit1.png'
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
        <Navbar.Brand href="/">My Best Tattoo <img src={logo} alt='Logo' style={{width:'30px',height:'30px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/photo">Photos</Nav.Link>

        </Nav>
        <Form className="d-flex" >
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-secondary" href="https//:google.com">Search</Button>
        </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
    )
}

export default Header
