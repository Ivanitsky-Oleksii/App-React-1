import './Menu.scss'
import MenuItem from 'components/Menu/MenuItem'

type Props = {}

const Menu = (props: Props) => {
return (
    <>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/contact">Contact</MenuItem>
    <MenuItem to="/about">About Me</MenuItem>
    </>
)
}

export default Menu