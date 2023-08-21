import { isMobile } from 'react-device-detect'
import "../../css/home/NewsletterBottom.css"
import InputMask from 'react-input-mask';


const NewsletterBottom = () => {

  if(isMobile) {
    return (
      <section id="Apresentacao" className='section-newsletter-bottom-mobile'>
      <h2 className='newsletter-title-mobile'>Fique por dentro de promoções e condições especiais!</h2>
      <form className='form-mobile'>
          <InputMask className='input-newsletter-mobile' 
              type="text" id="celular" mask="(99) 99999-9999" 
              placeholder="(DDD) 9XXXX-XXXX"
              autoComplete="off"
              name='celular' />  
          <input className='button-newsletter-mobile' type="submit" value="Assinar"/>
      </form>
    </section>
    )
  } else {
    return (
        <section id="Apresentacao" className='section-newsletter-bottom'>
            <h2 className='newsletter-title'>Fique por dentro de promoções e condições especiais!</h2>
            <form className='form'>
                <InputMask className='input-newsletter' 
                    type="text" id="celular" mask="(99) 99999-9999" 
                    placeholder="(DDD) 9XXXX-XXXX"
                    autoComplete="off"
                    name='celular' />  
                <input className='button-newsletter' type="submit" value="Assinar"/>
            </form>
        </section>
    )
  }
  
}

export default NewsletterBottom