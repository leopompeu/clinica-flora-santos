import { isMobile } from 'react-device-detect'
import "../../css/home/Doutor.css"
import { doutorFoto, doutorFotoMobile, iconDiferencial, iconDiferencial2, iconDiferencial3 } from '../../assets'


const Doutor = () => {

  if(isMobile) {
    return (
        <section id="Doutor" className='section-doutor-mobile'>
            <img alt='Foto de Marcelo Paes e Alcantara Médico acupunturista em Santos' src={doutorFoto} loading='lazy' className='doctor-mobile'/>
            <div className='doctor-content-mobile'>
                <h2 className='doctor-title-mobile'>Dr Marcelo Paes e Alcantara</h2>
                <div className='diferencial-item'>
                    <img src={iconDiferencial} loading='lazy' alt='Ícone que representa um dos diferenciais do médico acupunturista de Santos, Marcelo Paes e Alcantara' className='icon-diferencial'/>
                    <p className='text-diferencial-mobile'>Médico Patologiasta Clínico</p>
                </div>
                <div className='diferencial-item'>
                    <img src={iconDiferencial2} loading='lazy' alt='Ícone que representa um dos diferenciais do médico acupunturista de Santos, Marcelo Paes e Alcantara' className='icon-diferencial'/>
                    <p className='text-diferencial-mobile'>Médico Acupunturista</p>
                </div>
                <p className='text-doctor-mobile'>Especializações em tratamentos: Clínica médica, Acupuntura, Môxa, Ventosa, Eletroacupuntura, Fitoterapia chinesa, Manobras terapêuticas "Nãn Dã"</p>
            </div>
        </section>
    )
  } else {
    return (
        <section id="Doutor" className='section-doutor'>
            <img alt='Foto de Marcelo Paes e Alcantara Médico acupunturista em Santos' src={doutorFoto} loading='lazy' className={window.innerWidth < 1400 ? 'doctor-small' : 'doctor-img-home'}/>
            <div className='doctor-content'>
                <h2 className='doctor-title'>Dr Marcelo Paes e Alcantara</h2>
                <div>
                    <div className='diferencial-item'>
                        <img src={iconDiferencial} loading='lazy' alt='Ícone que representa um dos diferenciais do médico acupunturista de Santos, Marcelo Paes e Alcantara' className='icon-diferencial'/>
                        <p className='text-diferencial'>Médico Patologiasta Clínico</p>
                    </div>
                    <div className='diferencial-item'>
                        <img src={iconDiferencial2} loading='lazy' alt='Ícone que representa um dos diferenciais do médico acupunturista de Santos, Marcelo Paes e Alcantara' className='icon-diferencial'/>
                        <p className='text-diferencial'>Médico Acupunturista</p>
                    </div>
                </div>
                <p className='text-doctor'>Especializações em tratamentos: Clínica médica, Acupuntura, Môxa, Ventosa, Eletroacupuntura, Fitoterapia chinesa, Manobras terapêuticas "Nãn Dã"</p>
            </div>
        </section>
    )
  }
  
}

export default Doutor