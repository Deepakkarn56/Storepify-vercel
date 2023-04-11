import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';

import usa from '../assets/images/united.png';
import china from '../assets/images/china.png';
import europe from '../assets/images/europe.png';
import japan from '../assets/images/japan.png';

function Nav() {
  return (
    <div className='naav'>
      <Navbar className='nav-one bg-dark'>
        <Container>
          <Navbar.Brand className='nav-brand text-white ' href="#home">Free shipping on all U.S orders $50+</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="English" menuVariant='dark' style={{ color: 'white', marginRight: '30px' }} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/1.1">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">Français</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">日本語</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.4">简体中文</NavDropdown.Item>
            </NavDropdown>
            <div className='usa' style={{ marginRight: '-30px' }}><img src={usa} alt='usa' /></div>
            <NavDropdown title="USD" menuVariant='dark' style={{ color: 'white', marginLeft: '30px' }} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/1.1"><div className='us'><img src={china} alt='china' />CNY</div></NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2"><div className='us'><img src={europe} alt='europe' />EUR</div></NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3"><div className='us'><img src={japan} alt='japan' />jPY</div></NavDropdown.Item>
              <NavDropdown.Item href="#action/1.4"><div className='us'><img src={usa} alt='usa' />USD</div></NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nav
