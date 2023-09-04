import { isMobile } from 'react-device-detect'
import "../../css/home/NewsletterTop.css"
import InputMask from 'react-input-mask';
import { useState } from 'react';
import emailjs from '@emailjs/browser'



const NewsletterTop = () => {

  const [telefone, setTelefone] = useState('')
  const [loading, setLoading] = useState('')


  const templateParams = {
    telefone: telefone
  }


  function sendEmail(e){

    e.preventDefault();
    if(telefone === ''){
      alert("Preencha todos os campos obrigatórios.");
      return;
    } 
    setLoading(true)
    emailjs.send('service_yh79iak','template_4fwxqms', templateParams, 'l1iWpUTBrkdqjWO16')
    .then((response) => {
      alert("Newsletter assinada!")
      setTelefone('')
      setLoading(false)
    }, (err) => {
      console.log("ERRO: " + err)
      alert("Erro! Tente novamente mais tarde.")
    })

  }


  if(loading){
    
  }
  if(isMobile) {
    return (
        <section id="">
        </section>
    )
  } else {
    return (
        <section id="Apresentacao" className='section-newsletter-top'>
          {loading ? (
            <div>
              <div className="spinner"></div>
            </div>
          ) : (
            <div className='div-content-newletter-top'>
            <h2 className='newsletter-title'>Fique por dentro de promoções e condições especiais!</h2>
              <form onSubmit={sendEmail} className='form'>
                  <InputMask 
                      className='input-newsletter' 
                      type="text" 
                      id="celular" 
                      mask="(99) 99999-9999"
                      placeholder="(DDD) 9XXXX-XXXX"
                      autoComplete="off"
                      name='celular' 
                      onChange={(e) => setTelefone(e.target.value)}
                      value={telefone}/>  
                  <input className='button-newsletter' type="submit" value="Assinar"/>
              </form>
              </div>
          )}
            
        </section>
    )
  }
  
}

export default NewsletterTop