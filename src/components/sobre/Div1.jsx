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
                    <h1 className='title-section-div1-sobre-mobile'>Lorem ipsum dolor sit amet</h1>
                    <p className='text-section-div1-sobre-mobile'>Lorem ipsum dolor sit amet consectetur. Lorem vitae et vitae cursus tincidunt ut diam vel faucibus. Sagittis enim netus in platea fermentum a vitae. Aenean pharetra pharetra lacus porta quisque feugiat. Purus neque proin vitae blandit nunc sociis faucibus. Integer tincidunt venenatis vestibulum vel amet lacus blandit. Ut eu nisl.</p>
                </div>
                <ReactPlayer
                        width="360px"
                        height="200px"
                        className='video'
                        alt="Video sobre clínica de acupuntura em Santos, a Clínica Flora Santos"
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
                    <h1 className='title-section-div1-sobre'>Lorem ipsum dolor sit amet</h1>
                    <p className='text-section-div1-sobre'>Lorem ipsum dolor sit amet consectetur. Lorem vitae et vitae cursus tincidunt ut diam vel faucibus. Sagittis enim netus in platea fermentum a vitae. Aenean pharetra pharetra lacus porta quisque feugiat. Purus neque proin vitae blandit nunc sociis faucibus. Integer tincidunt venenatis vestibulum vel amet lacus blandit. Ut eu nisl.</p>
                </div>
                <ReactPlayer
                        width="570px"
                        height="320px"
                        className='video'
                        alt="Video sobre clínica de acupuntura em Santos, a Clínica Flora Santos"
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        playIcon={<img className='video-playbutton' alt="Botão de play para video da Clínica de acupuntura em Santos" src={playclinicadeacupunturaemsantos}></img>}
                        light={acupunturaEmSantosVideo}
                        playing={true}
                /> 
            </section>
          )
    }

}

export default Div1