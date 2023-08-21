import React from 'react'
import { isMobile } from 'react-device-detect'
import { doutorFoto, iconDiferencial, iconDiferencial2, iconDiferencial3 } from '../../assets'
import '../../css/sobre/Doutor.css'

const Doutor = () => {
    if(isMobile){
        return(
            <section id='Sobre o Doutor' className='section-doutor-sobre-mobile'>
                <img src={doutorFoto} className='doutor-foto-sobre-mobile' alt='Foto do médico Acupunturista Dr. Marcelo Paes e Alcantara'/>
                <h2 className='subtitle-section-doutor-sobre-mobile'>Dr. Marcelo Paes e Alcantara</h2>
                <div className='div-title-item-doutor-sobre-mobile'>
                    <img src={iconDiferencial} className='icon-item-doutor-sobre'/>
                    <h4 className='title-item-doutor-sobre-mobile'>Lorem</h4>
                </div>
                <p className='text-item-doutor-sobre-mobile'>Lorem ipsum dolor sit amet consectetur. Sapien nunc ac rutrum amet blandit. Massa magna malesuada nunc urna vel cursus tincidunt. Egestas dictum vitae viverra donec sollicitudin elementum. Enim morbi nunc sit auctor et dis diam scelerisque. Amet malesuada a vitae.</p>
                <div className='div-title-item-doutor-sobre-mobile'>
                    <img src={iconDiferencial2} className='icon-item-doutor-sobre'/>
                    <h4 className='title-item-doutor-sobre-mobile'>Ipsum</h4>
                </div>
                <p className='text-item-doutor-sobre-mobile'>Lorem ipsum dolor sit amet consectetur. Sapien nunc ac rutrum amet blandit. Massa magna malesuada nunc urna vel cursus tincidunt. Egestas dictum vitae viverra donec sollicitudin elementum. Enim morbi nunc sit auctor et dis diam scelerisque. Amet malesuada a vitae.</p>
                <div className='div-title-item-doutor-sobre-mobile'>
                    <img src={iconDiferencial3} className='icon-item-doutor-sobre'/>
                    <h4 className='title-item-doutor-sobre-mobile'>Dolor</h4>
                </div>
                <p className='text-item-doutor-sobre-mobile'>Lorem ipsum dolor sit amet consectetur. Sapien nunc ac rutrum amet blandit. Massa magna malesuada nunc urna vel cursus tincidunt. Egestas dictum vitae viverra donec sollicitudin elementum. Enim morbi nunc sit auctor et dis diam scelerisque. Amet malesuada a vitae.</p>
            </section>
        )

    } else{
        return (
            <section id='Sobre o Doutor' className='section-doutor-sobre'>
                <img src={doutorFoto} className='doutor-foto-sobre' alt='Foto do médico Acupunturista Dr. Marcelo Paes e Alcantara'/>
                <div className='div-content-doutor'>
                    <div className='div-title-section-doutor-sobre'>
                        <h2 className='title-section-doutor-sobre'>Sobre</h2>
                        <h3 className='subtitle-section-doutor-sobre'>Dr. Marcelo Paes e Alcantara</h3>
                    </div>
                    <div className='itens-doutor-sobre'>
                        <div className='div-item-doutor-sobre'>
                            <div className='div-title-item-doutor-sobre'>
                                <img src={iconDiferencial}/>
                                <h4 className='title-item-doutor-sobre'>Lorem</h4>
                            </div>
                            <p className='text-item-doutor-sobre'>Lorem ipsum dolor sit amet consectetur. Sapien nunc ac rutrum amet blandit. Massa magna malesuada nunc urna vel cursus tincidunt. Egestas dictum vitae viverra donec sollicitudin elementum. Enim morbi nunc sit auctor et dis diam scelerisque. Amet malesuada a vitae.</p>
                        </div>
                        <div className='div-item-doutor-sobre'>
                            <div className='div-title-item-doutor-sobre'>
                                <img src={iconDiferencial2}/>
                                <h4 className='title-item-doutor-sobre'>Ipsum</h4>
                            </div>
                            <p className='text-item-doutor-sobre'>Lorem ipsum dolor sit amet consectetur. Sapien nunc ac rutrum amet blandit. Massa magna malesuada nunc urna vel cursus tincidunt. Egestas dictum vitae viverra donec sollicitudin elementum. Enim morbi nunc sit auctor et dis diam scelerisque. Amet malesuada a vitae.</p>
                        </div>
                        <div className='div-item-doutor-sobre'>
                            <div className='div-title-item-doutor-sobre'>
                                <img src={iconDiferencial3}/>
                                <h4 className='title-item-doutor-sobre'>Dolor</h4>
                            </div>
                            <p className='text-item-doutor-sobre'>Lorem ipsum dolor sit amet consectetur. Sapien nunc ac rutrum amet blandit. Massa magna malesuada nunc urna vel cursus tincidunt. Egestas dictum vitae viverra donec sollicitudin elementum. Enim morbi nunc sit auctor et dis diam scelerisque. Amet malesuada a vitae.</p>
                        </div>
                    </div>
                </div>
            </section>
          )
    }

}

export default Doutor