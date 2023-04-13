import 'components/Header/Header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from 'assets/logo4.png'
import Menu from 'components/Menu/Menu'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
<Navbar bg="light" variant="light" expand="lg" className='nav'>
    <Container fluid="xxl">
        <Navbar.Brand style={{fontSize:'45px'}} className='brand'><img src={logo} style={{width:'160px',height:'190px'}} alt='logo'/>nemuse.tatz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Menu/>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
    )
}

export default Header
