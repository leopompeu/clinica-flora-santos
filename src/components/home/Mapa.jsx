import { isMobile } from 'react-device-detect'
import "../../css/home/Mapa.css"


const Mapa = () => {

  if(isMobile) {
    return (
        <section id="Mapa" className='section-mapa-mobile'>
          <iframe width="100%" height="320" loading='lazy' title='Mapa da clínica de acupuntura em Santos' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=1920&amp;height=560&amp;hl=en&amp;q=Rua%20Goi%C3%A1s,%2084%20-%20Boqueir%C3%A3o,%20Santos+(Clinica%20Flora%20Santos)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
          <h2 className='title-mapa-mobile'>R. Goiás, 84 - Boqueirão - 11050-100 - Santos, SP</h2>
          <button className='button-mapa-mobile' name='Botão para atendimento de acupuntura em Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Conheça</button>
        </section>
    )
  } else {
    return (
        <section id="Mapa" className='section-mapa'>
            <iframe width="100%" loading='lazy' title='Mapa da clínica de acupuntura em Santos' height="560" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=1920&amp;height=560&amp;hl=en&amp;q=Rua%20Goi%C3%A1s,%2084%20-%20Boqueir%C3%A3o,%20Santos+(Clinica%20Flora%20Santos)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
            <div className='under-mapa'>
                <h2 className='title-mapa'>R. Goiás, 84 - Boqueirão - 11050-100 - Santos, SP</h2>
                <button className='button-mapa' name='Botão para atendimento de acupuntura em Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Conheça</button>
            </div>
        </section>
    )
  }
  
}

export default Mapa