import { isMobile } from 'react-device-detect'
import "../../css/home/Atendimentos.css"
import { acupunturaConvenioEmSantos, acupunturaParticularEmSantos, acupunturaPopularEmSantos } from '../../assets'


const Atendimentos = () => {

  if(isMobile) {
    return (
        <section id="Atendimentos" className='section-atendimentos-mobile'>
            <h2 className='section-name-atendimentos-mobile'>Consultas</h2>
            <h3 className='section-subtitle-atendimentos-mobile'>Acupuntura é para todos</h3>
            <div className='card-atendimento-mobile'>
                <img src={acupunturaParticularEmSantos} loading='lazy' className='img-atendimento' alt='Ícone que representa o atendimento particular de acupuntura em Santos'/>
                <h4 className='title-atendimento-mobile'>Particular</h4>
                <p className='text-atendimento-mobile'>Consulte nossos valores para o atendimento que mais combina com sua necessidade!</p>
                <button className='button-atendimento' name='Botão para atendimento de acupuntura particular' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>AGENDAR</button>
            </div>
            <div className='card-atendimento-mobile'>
                <img src={acupunturaConvenioEmSantos} loading='lazy' className='img-atendimento' alt='Ícone que representa o atendimento por convênio de acupuntura em Santos'/>
                <h4 className='title-atendimento-mobile'>Convênio</h4>
                <p className='text-atendimento-mobile'>Entre em contato e veja se seu convênio faz parte dos nosso parceiros!</p>
                <button className='button-atendimento' name='Botão para atendimento de acupuntura por convênio' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>AGENDAR</button>
            </div>
            <div className='card-atendimento-mobile'>
                <img src={acupunturaPopularEmSantos} loading='lazy' className='img-atendimento' alt='Ícone que representa o atendimento popular de acupuntura em Santos'/>
                <h4 className='title-atendimento-mobile'>Popular</h4>
                <p className='text-atendimento-mobile'>Também oferecemos atendimentos mais simples para você gastar menos!</p>
                <button className='button-atendimento' name='Botão para atendimento de acupuntura popular' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>AGENDAR</button>
            </div>
        </section>
    )
  } else {
    return (
        <section id="Atendimentos" className='section-atendimentos'>
            <h2 className='section-name-atendimentos'>Consultas</h2>
            <h3 className='section-subtitle-atendimentos'>Acupuntura é para todos</h3>
            <div className='atendimentos'>
                <div className='card-atendimento'>
                    <img src={acupunturaParticularEmSantos} loading='lazy' className='img-atendimento' alt='Ícone que representa o atendimento particular de acupuntura em Santos'/>
                    <h4 className='title-atendimento'>Particular</h4>
                    <p className='text-atendimento'>Consulte nossos valores para o atendimento que mais combina com sua necessidade!</p>
                    <button className='button-atendimento' name='Botão para atendimento de acupuntura particular' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>AGENDAR</button>
                </div>
                <div className='card-atendimento'>
                    <img src={acupunturaConvenioEmSantos} loading='lazy' className='img-atendimento' alt='Ícone que representa o atendimento à convênio para acupuntura em Santos'/>
                    <h4 className='title-atendimento'>Convênio</h4>
                    <p className='text-atendimento'>Entre em contato e veja se seu convênio faz parte dos nosso parceiros!</p>
                    <button className='button-atendimento' name='Botão para atendimento de acupuntura via convênio' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>AGENDAR</button>
                </div>
                <div className='card-atendimento'>
                    <img src={acupunturaPopularEmSantos} loading='lazy' className='img-atendimento' alt='Ícone que representa o atendimento popular de acupuntura em Santos'/>
                    <h4 className='title-atendimento'>Popular</h4>
                    <p className='text-atendimento'>Também oferecemos atendimentos mais simples para você gastar menos!</p>
                    <button className='button-atendimento' name='Botão para atendimento de acupuntura popular' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>AGENDAR</button>
                </div>
            </div>
        </section>
    )
  }
  
}

export default Atendimentos