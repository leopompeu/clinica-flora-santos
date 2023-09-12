import { isMobile } from 'react-device-detect'
import "../../css/home/Div1.css"
import ReactPlayer from 'react-player'
import { acupunturaEmSantosVideo, playclinicadeacupunturaemsantos } from '../../assets'


const Div1 = () => {

  if(isMobile) {
    return (
        <section id="Apresentacao" className='section-apresentacao-mobile'>
          <h1 className='title-mobile'>Acupuntura em Santos é na Clínica Flora</h1>
          <p className='subtitle-mobile'>Experimente a acupuntura na Clínica Flora Santos. Agende sua sessão agora mesmo e se livre das dores crônicas e agudas. Cuide do seu bem-estar!</p>
          <button className='button-agendar-div1-mobile' name='Botão para atendimento de acupuntura em Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Agendar</button>
          <ReactPlayer
                        width="360px"
                        height="200px"
                        alt="Video sobre clínica de acupuntura em Santos, a Clínica Flora Santos"
                        url="https://www.youtube.com/embed/TY-iB9r-2Ns"
                        playIcon={<img className='video-playbutton' alt="Botão de play para video da Clínica de acupuntura em Santos" src={playclinicadeacupunturaemsantos}></img>}
                        light={acupunturaEmSantosVideo}
                        playing={true}
          /> 
        </section>
    )
  } else {
    return (
        <section id="Apresentacao" className={`section-apresentacao ${window.innerWidth >= 1400 ? 'bg-big' : 'bg-small'}`}>
          <div className='container-div1'>
            <div className='first-part'>
                <h1 className='title'>Clínica de Acupuntura em Santos é a Flora Santos</h1>
                <p className='subtitle'>Experimente a acupuntura na Clínica Flora Santos. Agende sua sessão agora mesmo e se livre das dores crônicas e agudas. Cuide do seu bem-estar!</p>
                <button className='button-agendar-div1' name='Botão para atendimento de acupuntura em Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Agendar</button>
            </div>
            <div>
                <ReactPlayer
                        width="570px"
                        height="320px"
                        className='video'
                        alt="Video sobre clínica de acupuntura em Santos, a Clínica Flora Santos"
                        url="https://www.youtube.com/embed/TY-iB9r-2Ns"
                        playIcon={<img className='video-playbutton' alt="Botão de play para video da Clínica de acupuntura em Santos" src={playclinicadeacupunturaemsantos}></img>}
                        light={acupunturaEmSantosVideo}
                        playing={true}
                /> 
 
            </div>
          </div>
        </section>
    )
  }
  
}

export default Div1