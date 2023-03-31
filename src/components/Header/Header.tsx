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
    <Container fluid>
        <Navbar.Brand href="/">photoday <img src={logo} alt='Logo' style={{width:'30px',height:'30px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">NEWS</Nav.Link>
            <NavDropdown title="PHOTO" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">#1Photographer</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">
                #2Photographer
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
                #3Photographer
            </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">
            ABOUT
            </Nav.Link>
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
