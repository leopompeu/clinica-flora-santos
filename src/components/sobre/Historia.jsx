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
                    <h2 className='title-historia-sobre-mobile'>Lorem ipsum dolor sit</h2>
                </div>
                <p className='text-historia-sobre-mobile'>Lorem ipsum dolor sit amet consectetur. Sapien nunc ac rutrum amet blandit. Massa magna malesuada nunc urna vel cursus tincidunt. Egestas dictum vitae viverra donec sollicitudin elementum. Enim morbi nunc sit auctor et dis diam scelerisque. Amet malesuada a vitae.</p>
            </section>
        )

    } else {
        return (
            <section id='História' className='section-historia-sobre'>
                <img src={clinicaAcupunturaFloraSantosFoto} className='flora-santos-foto-sobre' alt='Imagens da clinica de acupuntura em Santos, a Clinica Flora Santos'/>
                <div className='content-hisotira-sobre'>
                    <div className='div-title-historia-sobre'>
                        <img src={iconAcupuntura}/>
                        <h2 className='title-historia-sobre'>Lorem ipsum dolor sit</h2>
                    </div>
                    <p className='text-historia-sobre'>Lorem ipsum dolor sit amet consectetur. Sapien nunc ac rutrum amet blandit. Massa magna malesuada nunc urna vel cursus tincidunt. Egestas dictum vitae viverra donec sollicitudin elementum. Enim morbi nunc sit auctor et dis diam scelerisque. Amet malesuada a vitae.</p>
                </div>
            </section>
          )
    }
}

export default Historia