import React from 'react'
import { isMobile } from 'react-device-detect'
import { doutorFoto, iconDiferencial, iconDiferencial2, iconDiferencial3 } from '../../assets'
import '../../css/sobre/Doutor.css'

const Doutor = () => {
    if(isMobile){
        return(
            <section id='Sobre o Doutor' className='section-doutor-sobre-mobile'>
                <img src={doutorFoto} loading='lazy' className='doutor-foto-sobre-mobile' alt='Foto do médico Acupunturista Dr. Marcelo Paes e Alcantara'/>
                <h2 className='subtitle-section-doutor-sobre-mobile'>Dr. Marcelo Paes e Alcantara</h2>
                <div className='div-title-item-doutor-sobre-mobile'>
                    <img src={iconDiferencial} loading='lazy' className='icon-item-doutor-sobre'/>
                    <h4 className='title-item-doutor-sobre-mobile'>Lorem</h4>
                </div>
                <p className='text-item-doutor-sobre-mobile'>Lorem ipsum dolor sit amet consectetur. Sapien nunc ac rutrum amet blandit. Massa magna malesuada nunc urna vel cursus tincidunt. Egestas dictum vitae viverra donec sollicitudin elementum. Enim morbi nunc sit auctor et dis diam scelerisque. Amet malesuada a vitae.</p>
                <div className='div-title-item-doutor-sobre-mobile'>
                    <img src={iconDiferencial2} loading='lazy' className='icon-item-doutor-sobre'/>
                    <h4 className='title-item-doutor-sobre-mobile'>Ipsum</h4>
                </div>
                <p className='text-item-doutor-sobre-mobile'>Lorem ipsum dolor sit amet consectetur. Sapien nunc ac rutrum amet blandit. Massa magna malesuada nunc urna vel cursus tincidunt. Egestas dictum vitae viverra donec sollicitudin elementum. Enim morbi nunc sit auctor et dis diam scelerisque. Amet malesuada a vitae.</p>
                <div className='div-title-item-doutor-sobre-mobile'>
                    <img src={iconDiferencial3} loading='lazy' className='icon-item-doutor-sobre'/>
                    <h4 className='title-item-doutor-sobre-mobile'>Dolor</h4>
                </div>
                <p className='text-item-doutor-sobre-mobile'>Lorem ipsum dolor sit amet consectetur. Sapien nunc ac rutrum amet blandit. Massa magna malesuada nunc urna vel cursus tincidunt. Egestas dictum vitae viverra donec sollicitudin elementum. Enim morbi nunc sit auctor et dis diam scelerisque. Amet malesuada a vitae.</p>
            </section>
        )

    } else{
        return (
            <section id='Sobre o Doutor' className='section-doutor-sobre'>
                <img src={doutorFoto} loading='lazy' className='doutor-foto-sobre' alt='Foto do médico Acupunturista Dr. Marcelo Paes e Alcantara'/>
                <div className='div-content-doutor'>
                    <div className='div-title-section-doutor-sobre'>
                        <h2 className='title-section-doutor-sobre'>Sobre</h2>
                        <h3 className='subtitle-section-doutor-sobre'>Dr. Marcelo Paes e Alcantara</h3>
                    </div>
                    <div className='itens-doutor-sobre'>
                        <div className='div-item-doutor-sobre'>
                            <div className='div-title-item-doutor-sobre'>
                                <img loading='lazy' className='icon-item-doutor-sobre' src={iconDiferencial}/>
                                <h4 className='title-item-doutor-sobre'>Médico Patologiasta Clínico</h4>
                            </div>
                            <div className='div-title-item-doutor-sobre second-div'>
                                <img loading='lazy' className='icon-item-doutor-sobre' src={iconDiferencial2}/>
                                <h4 className='title-item-doutor-sobre'>Médico Acupunturista</h4>
                            </div>
                            <p className='text-item-doutor-sobre'>Especializações em tratamentos: Clínica médica, Acupuntura, Môxa, Ventosa, Eletroacupuntura, Fitoterapia chinesa, Manobras terapêuticas "Nãn Dã".</p>
                        </div>
                    </div>
                </div>
            </section>
          )
    }

}

export default Doutor