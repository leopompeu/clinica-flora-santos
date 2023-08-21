import { isMobile } from 'react-device-detect'
import "../../css/home/Doutor.css"
import { doctorPlaceholder, doutorFotoMobile, iconDiferencial, iconDiferencial2, iconDiferencial3 } from '../../assets'


const Doutor = () => {

  if(isMobile) {
    return (
        <section id="Doutor" className='section-doutor-mobile'>
            <img alt='Foto de Marcelo Paes e Alcantara Médico acupunturista em Santos' src={doutorFotoMobile} className='doctor-mobile'/>
            <div className='doctor-content-mobile'>
                <h2 className='doctor-title-mobile'>Dr Marcelo Paes e Alcantara</h2>
                <p className='text-doctor-mobile'>Dr. Marcelo é um renomado médico acupunturista em Santos, oferecendo tratamentos de alta qualidade. Sua expertise proporciona alívio de dores, bem-estar e equilíbrio para seus pacientes</p>
                <div className='diferencial-item'>
                    <img src={iconDiferencial} alt='Ícone que representa um dos diferenciais do médico acupunturista de Santos, Marcelo Paes e Alcantara' className='icon-diferencial'/>
                    <p className='text-diferencial-mobile'>Experiência comprovada</p>
                </div>
                <div className='diferencial-item'>
                    <img src={iconDiferencial2} alt='Ícone que representa um dos diferenciais do médico acupunturista de Santos, Marcelo Paes e Alcantara' className='icon-diferencial'/>
                    <p className='text-diferencial-mobile'>Qualidade no atendimento</p>
                </div>
                <div className='diferencial-item'>
                    <img src={iconDiferencial3} alt='Ícone que representa um dos diferenciais do médico acupunturista de Santos, Marcelo Paes e Alcantara' className='icon-diferencial'/>
                    <p className='text-diferencial-mobile'>Conhecimento em diversas áreas de atuação</p>
                </div>
            </div>
        </section>
    )
  } else {
    return (
        <section id="Doutor" className='section-doutor'>
            <img alt='Foto de Marcelo Paes e Alcantara Médico acupunturista em Santos' src={doctorPlaceholder} className={window.innerWidth < 1400 ? 'doctor-small' : ''}/>
            <div className='doctor-content'>
                <h2 className='doctor-title'>Dr Marcelo Paes e Alcantara</h2>
                <p className='text-doctor'>Dr. Marcelo é um renomado médico acupunturista em Santos, oferecendo tratamentos de alta qualidade. Sua expertise proporciona alívio de dores, bem-estar e equilíbrio para seus pacientes</p>
                <div>
                    <div className='diferencial-item'>
                        <img src={iconDiferencial} alt='Ícone que representa um dos diferenciais do médico acupunturista de Santos, Marcelo Paes e Alcantara' className='icon-diferencial'/>
                        <p className='text-diferencial'>Experiência comprovada</p>
                    </div>
                    <div className='diferencial-item'>
                        <img src={iconDiferencial2} alt='Ícone que representa um dos diferenciais do médico acupunturista de Santos, Marcelo Paes e Alcantara' className='icon-diferencial'/>
                        <p className='text-diferencial'>Qualidade no atendimento</p>
                    </div>
                    <div className='diferencial-item'>
                        <img src={iconDiferencial3} alt='Ícone que representa um dos diferenciais do médico acupunturista de Santos, Marcelo Paes e Alcantara' className='icon-diferencial'/>
                        <p className='text-diferencial'>Conhecimento em diversas áreas de atuação</p>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  
}

export default Doutor