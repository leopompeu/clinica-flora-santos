import { useState } from 'react'
import { clinicaFloraSantosAcupuntura } from '../assets'
import '../css/NavBar.css'

import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

import { isMobile } from 'react-device-detect'
import { HashLink as Link } from 'react-router-hash-link'

import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion'

import { Divide as Hamburger } from 'hamburger-react'


const NavBar = () => {
  const location = useLocation();

  const[isOpen,setOpen] = useState(false)

  let navigate = useNavigate();
  
  if(isMobile) {
    return (
      <div>
        <nav className='background-navbar-mobile'>
        <Accordion className='accordion-base'>
              <AccordionItem>

                <Link smooth to="/" >
                  <img src={clinicaFloraSantosAcupuntura}alt='Clinica de Acupuntura em Santo: Flora Santos' className='logo-mobile'/>
                </Link>

                <AccordionHeader className='header'>

                 <Hamburger hideOutline={true} color='#B7B16C' size={20} toggled={isOpen} toggle={setOpen} rounded />
                </AccordionHeader>
                <AccordionBody className='accordion z10'>
                  <p className='header-link first' onClick={() => {navigate("/Terapias")}}>Serviços</p>
                  <p className='header-link' onClick={() => {navigate("/Blog")}}>Blog</p>
                  <p className='header-link last' onClick={() => {navigate("/Acupuntura-em-Santos")}}>Sobre nós</p>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
        </nav>
      </div>
    )
  } else {
      return (
        <div>
          <nav className='background-navbar'>
            <Link smooth to='/'>
                <img src={clinicaFloraSantosAcupuntura} alt='Clinica de Acupuntura em Santo: Flora Santos' className='logo'/>
            </Link>
            <div className='links'>
                <div className={location.pathname === "/Terapias" ? 'down-bar not-last div-link' : 'not-last div-link'}>
                    <p className={location.pathname === "/Terapias" ? 'selected' : 'header-link'} onClick={() => {navigate("/Terapias")}}>Serviços</p>
                </div>
                <div className={location.pathname === "/Blog" ? 'down-bar not-last div-link' : 'not-last div-link'}>
                    <p className={location.pathname === "/Blog" ? 'selected' : 'header-link' }  onClick={() => {navigate("/Blog")}}>Blog</p>
                </div>
                <div className={location.pathname === "/Acupuntura-em-Santos" ? 'down-bar div-link' : 'div-link'}>
                    <p className={location.pathname === "/Acupuntura-em-Santos" ? 'selected' : 'header-link' }  onClick={() => {navigate("/Acupuntura-em-Santos")}}>Sobre nós</p>
                </div>
            </div>
            <button className='button-agendar' name='Botão para atendimento de acupuntura na Clínica Flora Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Agendar</button>
          </nav>
        </div>
      )
  }
}

export default NavBar