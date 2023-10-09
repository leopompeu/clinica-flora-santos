import React, { useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import { clinicaAcupunturaFloraSantosFoto, iconAcupuntura, imageSlide1, imageSlide2, imageSlide3 } from '../../assets'
import '../../css/sobre/Historia.css'

const Historia = () => {
    const images = [clinicaAcupunturaFloraSantosFoto,imageSlide3];

    if(isMobile){
        return(
            <section id='História' className='section-historia-sobre-mobile'>
                <img src={clinicaAcupunturaFloraSantosFoto} loading='lazy' className='flora-santos-foto-sobre-mobile' alt='Imagens da clinica de acupuntura em Santos, a Clinica Flora Santos'/>
                <div className='div-title-historia-sobre-mobile'>
                    <img src={iconAcupuntura} loading='lazy' alt='Icone que representa a historia da clínica de acupuntura Flora Santos' className='icon-historia-page-sobre'/>
                    <h2 className='title-historia-sobre-mobile'>Conheça a nossa clínica.</h2>
                </div>
                <p className='text-historia-sobre-mobile'>Localizada no Boqueirão de Santos, na Rua Goias n. 84, nossa clínica proporciona serenidade e paz para seus momentos de terapia e reconstituição do seu equilíbrio.</p>
            </section>
        )

    } else {
        return (
            <section id='História' className='section-historia-sobre'>
                <div className='content-hisotira-sobre'>
                    <div className='div-title-historia-sobre'>
                        <img src={iconAcupuntura} loading='lazy' alt='Icone que representa a historia da clínica de acupuntura Flora Santos' className='icon-historia-page-sobre'/>
                        <h2 className='title-historia-sobre'>Conheça a nossa clínica.</h2>
                    </div>
                    <p className='text-historia-sobre'>Localizada no Boqueirão de Santos, na Rua Goias n. 84, nossa clínica proporciona serenidade e paz para seus momentos de terapia e reconstituição do seu equilíbrio.</p>
                </div>
                <img src={imageSlide3} loading='lazy' className='flora-santos-foto-sobre' alt='Imagens da clinica de acupuntura em Santos, a Clinica Flora Santos'/>
            </section>
          )
    }
}

export default Historia