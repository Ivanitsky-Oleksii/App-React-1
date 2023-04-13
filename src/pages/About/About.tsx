import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'
import { useState } from 'react'
import 'pages/About/About.scss'

type Props = {}

const About = (props: Props) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="about-btn">
    <h3 className='text-1'>Hello everybody!</h3>
    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus labore, quae qui beatae, vitae earum maiores adipisci aspernatur delectus omnis perferendis. Illo esse dignissimos eos blanditiis corporis, sint architecto molestiae?</p>
        </div>
    )
}

export default About
