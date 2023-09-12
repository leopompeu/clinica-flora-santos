import React from 'react'
import { isMobile } from 'react-device-detect'
import '../../css/sobre/Div1.css'
import ReactPlayer from 'react-player'
import { acupunturaEmSantosVideo, playclinicadeacupunturaemsantos } from '../../assets'

const Div1 = () => {
    if(isMobile){
        return(
            <section id='Apresentacao Clinica Flora Santos' className='section-div1-sobre-mobile'>
                <div className='div-title-section-div1-sobre'>
                    <h1 className='title-section-div1-sobre-mobile'>Um espaço para seu bem-estar</h1>
                    <p className='text-section-div1-sobre-mobile'>A Clínica Flora Santos abrange terapias da medicina oriental, que visam equilíbrio do corpo e da mente, proporcionando melhor qualidade de vida, mais energia e saúde para a sua rotina.</p>
                </div>
                <ReactPlayer
                        width="360px"
                        height="200px"
                        className='video'
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
            <section id='Apresentacao Clinica Flora Santos' className='section-div1-sobre'>
                <div className='div-title-section-div1-sobre'>
                    <h1 className='title-section-div1-sobre'>Um espaço para seu bem-estar</h1>
                    <p className='text-section-div1-sobre'>A Clínica Flora Santos abrange terapias da medicina oriental, que visam equilíbrio do corpo e da mente, proporcionando melhor qualidade de vida, mais energia e saúde para a sua rotina.</p>
                </div>
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
            </section>
          )
    }

}

export default Div1