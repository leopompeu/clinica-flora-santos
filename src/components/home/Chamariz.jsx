import { isMobile } from 'react-device-detect'
import { acupunturaEmSantos } from '../../assets'
import '../../css/home/Chamariz.css'


const Chamariz = () => {

  if(isMobile) {
    return (
        <section id="Chamariz" className='section-chamariz-mobile'>
          <h2 className='title-chamariz-mobile'>Tratamento para dores agudas e crônicas</h2>
          <p className='text-chamariz-mobile'>Você busca alívio de dores e bem-estar? Conheça a Clínica Flora Santos a mais nova clínica de acupuntura em Santos! Agende já sua sessão e descubra os benefícios da acupuntura. Venha cuidar de você!</p>
          <img src={acupunturaEmSantos} loading='lazy' alt='Acupuntura em santos, é na Clínica Flora Santos' className='image-chamariz-mobile'/>
        </section>
    )
  } else {
    return (
        <section id="Chamariz" className="section-chamariz">
            <div className='chamariz-content'>
                <img src={acupunturaEmSantos} loading='lazy' alt='Acupuntura em santos, é na Clínica Flora Santos' className='image-chamariz'/>
                <div>
                    <h2 className='title-chamariz'>Tratamento para dores agudas e crônicas</h2>
                    <p className='text-chamariz'>Você busca alívio de dores e bem-estar? Conheça a Clínica Flora Santos a mais nova clínica de acupuntura em Santos! Agende já sua sessão e descubra os benefícios da acupuntura. Venha cuidar de você!</p>
                </div>
            </div>
        </section>
    )
  }
  
}

export default Chamariz