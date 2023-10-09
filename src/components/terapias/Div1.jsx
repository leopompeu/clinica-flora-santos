import React from 'react'
import { isMobile } from 'react-device-detect'
import '../../css/terapias/Div1.css'
import { terapiaEmSantosArte } from '../../assets'

const Div1 = () => {
    if(isMobile){
        return(
            <section id='Terapias' className='section-div1-terapias-mobile'>
                <h1 className='title-div1-terapias-mobile'>Tudo para tratar suas dores</h1>
                <button className='button-agendar-div1-terapias-mobile' name='Botão para atendimento de acupuntura em Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Agendar</button>
                <img src={terapiaEmSantosArte} loading='lazy' className='arte-terapia-div1-mobile' alt='Placa da clinica de acupuntura em Santos: Clinica Flora Santos'/>
            </section>
        )
    } else {
        return (
            <section id='Terapias' className='section-div1-terapias'>
                <div className='container-div1-terapias'>
                    <div>
                        <h1 className='title-div1-terapias'>Tudo para tratar suas dores</h1>
                        <button className='button-agendar-div1-terapias' name='Botão para atendimento de acupuntura em Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Agendar</button>
                    </div>
                    <img src={terapiaEmSantosArte} loading='lazy' className='arte-terapia-div1' alt='Placa da clinica de acupuntura em Santos: Clinica Flora Santos'/>
                </div>
            </section>
          )
    }

}

export default Div1