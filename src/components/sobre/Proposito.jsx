import React from 'react'
import { isMobile } from 'react-device-detect'
import '../../css/sobre/Proposito.css'

const Proposito = () => {
    if(isMobile){
        return(
            <section id='Propósito' className='section-proposito-sobre-mobile'>
                <h2 className='title-proposito-sobre-mobile'>Lorem ipsum dolor sit amet consectetur. Egestas risus et ac euismod duis nec.</h2>
                <h3 className='subtitle-proposito-sobre-mobile'>Nosso propósito</h3>
            </section> 
        )
    } else{
        return (
            <section id='Propósito' className='section-proposito-sobre'>
                <h2 className='title-proposito-sobre'>Lorem ipsum dolor sit amet consectetur. Egestas risus et ac euismod duis nec.</h2>
                <h3 className='subtitle-proposito-sobre'>Nosso propósito</h3>
            </section>
          )
    }

}

export default Proposito