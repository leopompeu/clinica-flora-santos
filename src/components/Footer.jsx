import { isMobile } from 'react-device-detect'
import "../css/Footer.css"
import { acupunturaFloraSantos, instagramIcon, whatsappIcon } from '../assets'

import { HashLink as Link } from 'react-router-hash-link'

const Footer = () => {

  if(isMobile) {
    return (
      <section id="Footer" className='section-footer-mobile'>
      <Link smooth to='#'>
          <img src={acupunturaFloraSantos} alt='Acupuntura em Santos é na Flora Santos!' className='logo-footer-mobile'/>
      </Link>
      <img className='line-mobile'/>
      <div className='social-media'>
          <img src={instagramIcon} alt='Botão ícone para o instagram da clínica de acupuntura em santos, Flora Santos' onClick={()=>window.open('https://www.instagram.com/clinicaflorasantos/', '_blank')} className='social-media-icon'/>
          <img src={whatsappIcon} alt='Botão ícone para o whatsapp da clínica de acupuntura em santos, Flora Santos' onClick={()=>window.open('')} className='social-media-icon'/>
      </div>
      <a href='https://litteratech.com.br/' target='_blank' className='littera'>Feito com 💜 por Littera</a>
    </section>
    )
  } else {
    return (
        <section id="Footer" className='section-footer'>
            <Link smooth to='#'>
                <img src={acupunturaFloraSantos} alt='Acupuntura em Santos é na Flora Santos!' className='logo-footer'/>
            </Link>
            <img className='line'/>
            <div className='social-media'>
                <img src={instagramIcon} alt='Botão ícone para o instagram da clínica de acupuntura em santos, Flora Santos' onClick={()=>window.open('https://www.instagram.com/clinicaflorasantos/', '_blank')} className='social-media-icon'/>
                <img src={whatsappIcon} alt='Botão ícone para o whatsapp da clínica de acupuntura em santos, Flora Santos' onClick={()=>window.open('')} className='social-media-icon'/>
            </div>
            <a href='https://litteratech.com.br/' target='_blank' className='littera'>Feito com 💜 por Littera</a>
        </section>
    )
  }
  
}

export default Footer