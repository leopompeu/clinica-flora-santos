import React from 'react'
import { isMobile } from 'react-device-detect'
import { clinicaAcupunturaFloraSantosFoto, iconAcupuntura } from '../../assets'
import '../../css/sobre/Historia.css'

const Historia = () => {
    if(isMobile){
        return(
            <section id='História' className='section-historia-sobre-mobile'>
                <img src={clinicaAcupunturaFloraSantosFoto} className='flora-santos-foto-sobre-mobile' alt='Imagens da clinica de acupuntura em Santos, a Clinica Flora Santos'/>
                <div className='div-title-historia-sobre-mobile'>
                    <img src={iconAcupuntura}/>
                    <h2 className='title-historia-sobre-mobile'>Conheça a nossa clínica.</h2>
                </div>
                <p className='text-historia-sobre-mobile'>Localizada no Boqueirão de Santos, na Rua Goias n. 84, nossa clínica proporciona serenidade e paz para seus momentos de terapia e reconstituição do seu equilíbrio.</p>
            </section>
        )

    } else {
        return (
            <section id='História' className='section-historia-sobre'>
                <img src={clinicaAcupunturaFloraSantosFoto} className='flora-santos-foto-sobre' alt='Imagens da clinica de acupuntura em Santos, a Clinica Flora Santos'/>
                <div className='content-hisotira-sobre'>
                    <div className='div-title-historia-sobre'>
                        <img src={iconAcupuntura}/>
                        <h2 className='title-historia-sobre'>Conheça a nossa clínica.</h2>
                    </div>
                    <p className='text-historia-sobre'>Localizada no Boqueirão de Santos, na Rua Goias n. 84, nossa clínica proporciona serenidade e paz para seus momentos de terapia e reconstituição do seu equilíbrio.</p>
                </div>
            </section>
          )
    }
}

export default Historia