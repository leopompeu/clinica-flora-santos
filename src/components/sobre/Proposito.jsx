import React from 'react'
import { isMobile } from 'react-device-detect'
import '../../css/sobre/Proposito.css'

const Proposito = () => {
    if(isMobile){
        return(
            <section id='Propósito' className='section-proposito-sobre-mobile'>
                <h2 className='subtitle-proposito-sobre-mobile'>Nosso propósito</h2>
                <h3 className='title-proposito-sobre-mobile'>Transformar a vida de nossos pacientes, fazendo com que não sintam dores crônicas ou desequilíbrio em seu corpo ou sua mente.</h3>
            </section> 
        )
    } else{
        return (
            <section id='Propósito' className='section-proposito-sobre'>
                <h2 className='subtitle-proposito-sobre'>Nosso propósito</h2>
                <h3 className='title-proposito-sobre'>Transformar a vida de nossos pacientes, fazendo com que não sintam dores crônicas ou desequilíbrio em seu corpo ou sua mente.</h3>
            </section>
          )
    }

}

export default Proposito