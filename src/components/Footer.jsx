import { isMobile } from 'react-device-detect'
import "../css/Footer.css"
import { acupunturaFloraSantos, instagramIcon, whatsappIcon } from '../assets'

import { HashLink as Link } from 'react-router-hash-link'

const Footer = () => {

  if(isMobile) {
    return (
      <section id="Footer" className='section-footer-mobile'>
      <Link smooth to='#'>
          <img loading='lazy' src={acupunturaFloraSantos} alt='Acupuntura em Santos é na Flora Santos!' className='logo-footer-mobile'/>
      </Link>
      <img loading='lazy' alt='Linha que separa a logo da Clinica Flora Santos, clinica de acupuntura para as redes sociais da clínica' className='line-mobile'/>
      <div className='social-media'>
          <img src={instagramIcon} loading='lazy' alt='Botão ícone para o instagram da clínica de acupuntura em santos, Flora Santos' onClick={()=>window.open('https://www.instagram.com/clinicaflorasantos/', '_blank')} className='social-media-icon'/>
          <img src={whatsappIcon} loading='lazy' alt='Botão ícone para o whatsapp da clínica de acupuntura em santos, Flora Santos' onClick={()=>window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!')} className='social-media-icon'/>
      </div>
      <a href='https://litteratech.com.br/' target='_blank' className='littera'>Feito com 💜 por Littera</a>
    </section>
    )
  } else {
    return (
        <section id="Footer" className='section-footer'>
            <Link smooth to='#'>
                <img src={acupunturaFloraSantos} loading='lazy' alt='Acupuntura em Santos é na Flora Santos!' className='logo-footer'/>
            </Link>
            <img loading='lazy' alt='Linha que separa a logo da Clinica Flora Santos, clinica de acupuntura para as redes sociais da clínica' className='line'/>
            <div className='social-media'>
                <img src={instagramIcon} loading='lazy' alt='Botão ícone para o instagram da clínica de acupuntura em santos, Flora Santos' onClick={()=>window.open('https://www.instagram.com/clinicaflorasantos/', '_blank')} className='social-media-icon'/>
                <img src={whatsappIcon} loading='lazy' alt='Botão ícone para o whatsapp da clínica de acupuntura em santos, Flora Santos' onClick={()=>window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!')} className='social-media-icon'/>
            </div>
            <a href='https://litteratech.com.br/' target='_blank' className='littera'>Feito com 💜 por Littera</a>
        </section>
    )
  }
  
}

export default Footer