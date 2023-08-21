import { isMobile } from 'react-device-detect'
import '../../css/home/Terapias.css'
import { arrow, eletroAcupunturaEmSantos, fitoterapiaChinesaEmSantos, iconAcupuntura, iconPlaceholder, iconPlaceholder2, iconVentosa, imageAcupuntura, imagemVentosaterapia, instagramIcon, moxaEmSantos, namdaEmSantos, whatsappIcon } from '../../assets'
import { useRef } from 'react';
import Carousel from 'nuka-carousel'
import { useNavigate } from 'react-router-dom';

const Terapias = () => {

  let navigate = useNavigate();
    
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft -= 1245
  }

  const handleRightClick = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += 1245;
  }

  const handleLeftClickMobile = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= 315
  }

  const handleRightClickMobile = (e) => {
      e.preventDefault();
      carousel.current.scrollLeft += 315;
  }

  if(isMobile) {
    return (
        <section id="Terapias" className='section-terapias-mobile'>
            <h2 className='location-terapia-mobile'>Serviços</h2>
            <h3 className='title-terapia-mobile'>Como podemos tratar sua dor?</h3>
            <div className='carousel-div-mobile'>
                <Carousel 
                        autoplay= {true}
                        autoplayInterval = {3500}
                        wrapAround = {true}
                        defaultControlsConfig={{
                            pagingDotsClassName: 'dots',
                            pagingDotsStyle: {
                                marginRight: "-5px",
                                position: 'relative',
                                top: '20px',
                                fill: '#0B3324',
                            }
                        }}
                        className=".slider-control-bottomcenter button" 
                        renderCenterLeftControls={({ previousSlide }) => (
                            <div className='text-white cursor-pointer'>
                            
                            </div>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                            <div className='text-white cursor-pointer'>
                            
                            </div>
                    )}>
                        <div className='item-div-mobile'>
                            <img src={imageAcupuntura} className='image-mobile' alt='Foto de um sessão de acupuntura'/>
                            <div className='item-text-div-mobile'>
                                <div className='title-item-div-mobile'>
                                    <img src={iconAcupuntura} className='img-item' alt='Icone para representar a acupuntura'/>
                                    <h3 className='title-terapia-item-mobile'>Acupuntura</h3>
                                </div>
                                <p className='text-item-mobile'>A acupuntura é uma terapia que utiliza agulhas finas em pontos específicos do corpo para aliviar dores, tratar doenças e promover bem-estar. A acupuntura é eficaz no tratamento de uma variedade de condições, incluindo dores musculares, dores nas costas, enxaquecas e artrite. Também é utilizada para tratar alergias, ansiedade e insônia.</p>
                                <button className='button-terapia-item-mobile' name='Botão para saber mais sobre a Acupuntura' onClick={() => {navigate("/Terapias")}}>Saiba Mais</button>
                            </div>
                        </div>
                        <div className='item-div-mobile'>
                            <img src={imagemVentosaterapia} className='image-mobile' alt='Foto de um sessão de ventosaterapia'/>
                            <div className='item-text-div-mobile'>
                                <div className='title-item-div-mobile'>
                                    <img src={iconVentosa} className='img-item' alt='Icone para representar a ventosa, ou a ventosaterapia'/>
                                    <h3 className='title-terapia-item-mobile'>Ventosa</h3>
                                </div>
                                <p className='text-item-mobile'>Ventosaterapia é uma terapia que utiliza ventosas para aliviar dores, tratar doenças e promover bem-estar. A sucção das ventosas estimula a circulação sanguínea, relaxa os músculos e libera tensões. Pode ajudar em dores musculares, artrite, fibromialgia e lesões esportivas.</p>
                                <button className='button-terapia-item-mobile' name='Botão para saber mais sobre a Acupuntura' onClick={() => {navigate("/Terapias")}}>Saiba Mais</button>
                            </div>
                        </div>
                        <div className='item-div-mobile'>
                            <img src={moxaEmSantos} className='image-mobile' alt='Foto de um sessão de Môxa'/>
                            <div className='item-text-div-mobile'>
                                <div className='title-item-div-mobile'>
                                    <img src={iconAcupuntura} className='img-item' alt='Icone para representar a Môxa'/>
                                    <h3 className='title-terapia-item-mobile'>Môxa</h3>
                                </div>
                                <p className='text-item-mobile'>A Môxa, técnica terapêutica associada à acupuntura, é eficaz no tratamento de dores agudas e crônicas. Consiste na queima controlada de ervas medicinais próximas aos pontos de acupuntura, estimulando o fluxo de energia vital e promovendo alívio e recuperação. Terapia tradicional asiática com benefícios comprovados.</p>
                                <button className='button-terapia-item-mobile' name='Botão para saber mais sobre a Môxa' onClick={() => {navigate("/Terapias")}}>Saiba Mais</button>
                            </div>   
                        </div>
                        <div className='item-div-mobile'>
                            <img src={eletroAcupunturaEmSantos} className='image-mobile' alt='Foto de um sessão de eletroacupuntura'/>
                            <div className='item-text-div-mobile'>
                                <div className='title-item-div-mobile'>
                                    <img src={iconVentosa} className='img-item' alt='Icone para representar a eletroacupuntura'/>
                                    <h3 className='title-terapia-item-mobile'>Eletroacupuntura</h3>
                                </div>
                                <p className='text-item-mobile'>A eletroacupuntura, técnica baseada na acupuntura, é eficaz no tratamento de dores crônicas e agudas. Ao aplicar estímulos elétricos nos pontos de acupuntura, promove alívio, relaxamento muscular e melhora na circulação sanguínea, proporcionando alívio e bem-estar aos pacientes.</p>
                                <button className='button-terapia-item-mobile' name='Botão para saber mais sobre a eletroacupuntura' onClick={() => {navigate("/Terapias")}}>Saiba Mais</button>
                            </div>
                        </div>
                        <div className='item-div-mobile'>
                            <img src={namdaEmSantos} className='image-mobile' alt='Foto de um sessão de NamDã'/>
                            <div className='item-text-div-mobile'>
                                <div className='title-item-div-mobile'>
                                    <img src={iconAcupuntura} className='img-item' alt='Icone para representar a NamDã'/>
                                    <h3 className='title-terapia-item-mobile'>Técnica de Torção Articular NamDã</h3>
                                </div>
                                <p className='text-item-mobile'>A Técnica de Torção Articular NamDã é uma terapia complementar à acupuntura eficaz no tratamento de dores agudas e crônicas. Ao realizar torções suaves nas articulações, ela promove o alívio das dores, melhora a mobilidade e estimula o equilíbrio energético do corpo. Abordagem terapêutica promissora na busca pelo bem-estar e saúde geral.</p>
                                <button className='button-terapia-item-mobile' name='Botão para saber mais sobre a NamDã' onClick={() => {navigate("/Terapias")}}>Saiba Mais</button>
                            </div>
                        </div>
                        <div className='item-div-mobile'>
                            <img src={fitoterapiaChinesaEmSantos} className='image-mobile' alt='Foto de um sessão de Fitoterapia Chinesa'/>
                            <div className='item-text-div-mobile'>
                                <div className='title-item-div-mobile'>
                                    <img src={iconVentosa} className='img-item' alt='Icone para representar a Fitoterapia Chinesa'/>
                                    <h3 className='title-terapia-item-mobile'>Fitoterapia Chinesa</h3>
                                </div>
                                <p className='text-item-mobile'>A Fitoterapia Chinesa é uma terapia complementar à acupuntura. Utiliza ervas medicinais específicas para equilibrar a energia vital do corpo, aliviar desconfortos e melhorar a saúde geral. Abordagem terapêutica tradicional da medicina chinesa com resultados promissores.</p>
                                <button className='button-terapia-item-mobile' name='Botão para saber mais sobre a Fitoterapia Chinesa' onClick={() => {navigate("/Terapias")}}>Saiba Mais</button>
                            </div>
                        </div>
                    </Carousel>
                </div>
        </section>
    )
  } else {
    return (
        <section id="Terapias" className="section-terapias">
            <h2 className='location-terapia'>Serviços</h2>
            <h3 className='title-terapia'>Como podemos tratar sua dor?</h3>
            <div className='container-carousel'>
                <div className='carousel' ref={carousel}>
                    <div className='carrossel-item first-item'> 
                        <div className='item-div'>
                            <div className='item-text-div'>
                                <div className='title-item-div'>
                                    <img src={iconAcupuntura} className='img-item' alt='Icone para representar a acupuntura'/>
                                    <h2 className='title-terapia-item'>Acupuntura</h2>
                                </div>
                                <p className='text-item'>A acupuntura é uma terapia que utiliza agulhas finas em pontos específicos do corpo para aliviar dores, tratar doenças e promover bem-estar. A acupuntura é eficaz no tratamento de uma variedade de condições, incluindo dores musculares, dores nas costas, enxaquecas e artrite. Também é utilizada para tratar alergias, ansiedade e insônia.</p>
                                <button className='button-terapia-item' name='Botão para saber mais sobre a Acupuntura' onClick={() => {navigate("/Terapias")}}>Saiba mais</button>
                            </div>
                            <img src={imageAcupuntura} style={{marginLeft: 150}} alt='Foto de um sessão de acupuntura'/>
                        </div>
                    </div>
                    <div className='carrossel-item'>
                        <div className='item-div'>
                            <img src={imagemVentosaterapia} style={{marginRight: 150}} alt='Foto de uma sessão de ventosaterapia'/>
                            <div className='item-text-div-right'>
                                <div className='title-item-div-right'>
                                    <h2 className='title-terapia-item'>Ventosa</h2>
                                    <img src={iconVentosa} className='img-item' alt='Icone para representar a ventosa, ou a ventosaterapia'/>
                                </div>
                                <p className='text-item' style={{textAlign: 'right'}}>Ventosaterapia é uma terapia que utiliza ventosas para aliviar dores, tratar doenças e promover bem-estar. A sucção das ventosas estimula a circulação sanguínea, relaxa os músculos e libera tensões. Pode ajudar em dores musculares, artrite, fibromialgia e lesões esportivas.</p>
                                <button className='button-terapia-item' style={{float: 'right'}}  name='Botão para saber mais sobre a Ventosa' onClick={() => {navigate("/Terapias")}}>Saiba mais</button>
                            </div>
                        </div>
                    </div>
                    <div className='carrossel-item'>    
                        <div className='item-div'>
                            <div className='item-text-div'>
                                <div className='title-item-div'>
                                    <img src={iconAcupuntura} style={{marginRight: 150}} className='img-item' alt='Icone para representar a Môxa'/>
                                    <h2 className='title-terapia-item'>Môxa</h2>
                                </div>
                                <p className='text-item'>A Môxa, técnica terapêutica associada à acupuntura, é eficaz no tratamento de dores agudas e crônicas. Consiste na queima controlada de ervas medicinais próximas aos pontos de acupuntura, estimulando o fluxo de energia vital e promovendo alívio e recuperação. Terapia tradicional asiática com benefícios comprovados.</p>
                                <button className='button-terapia-item'  name='Botão para saber mais sobre a Môxa' onClick={() => {navigate("/Terapias")}}>Saiba mais</button>
                            </div>
                            <img src={moxaEmSantos} style={{marginLeft: 150}} alt='Foto de um sessão de Môxa'/>
                        </div>
                    </div>
                    <div className='carrossel-item'>    
                        <div className='item-div'>
                            <img src={eletroAcupunturaEmSantos} style={{marginRight: 150}} alt='Foto de uma sessão de Môxa'/>
                            <div className='item-text-div-right'>
                                <div className='title-item-div-right'>
                                    <h2 className='title-terapia-item'>Eletroacupuntura</h2>
                                    <img src={iconVentosa} className='img-item' alt='Icone para representar a ventosa, ou a ventosaterapia'/>
                                </div>
                                <p className='text-item' style={{textAlign: 'right'}}>A eletroacupuntura, técnica baseada na acupuntura, é eficaz no tratamento de dores crônicas e agudas. Ao aplicar estímulos elétricos nos pontos de acupuntura, promove alívio, relaxamento muscular e melhora na circulação sanguínea, proporcionando alívio e bem-estar aos pacientes.</p>
                                <button className='button-terapia-item' style={{float: 'right'}} name='Botão para saber mais sobre a Eletroacupuntura' onClick={() => {navigate("/Terapias")}}>Saiba mais</button>
                            </div>
                        </div>
                    </div>
                    <div className='carrossel-item'>    
                        <div className='item-div'>
                            <div className='item-text-div'>
                                <div className='title-item-div'>
                                    <img src={iconAcupuntura} className='img-item' alt='Icone para representar a acupuntura'/>
                                    <h2 className='title-terapia-item'>Técnica de Torção Articular NamDã</h2>
                                </div>
                                <p className='text-item'>A Técnica de Torção Articular NamDã é uma terapia complementar à acupuntura eficaz no tratamento de dores agudas e crônicas. Ao realizar torções suaves nas articulações, ela promove o alívio das dores, melhora a mobilidade e estimula o equilíbrio energético do corpo. Abordagem terapêutica promissora na busca pelo bem-estar e saúde geral.</p>
                                <button className='button-terapia-item' name='Botão para saber mais sobre a NamDã' onClick={() => {navigate("/Terapias")}}>Saiba mais</button>
                            </div>
                            <img src={namdaEmSantos} style={{marginLeft: 150}} alt='Foto de um sessão de eltroacupuntura'/>
                        </div>
                    </div>
                    <div className='carrossel-item last'>    
                        <div className='item-div'>
                            <img src={fitoterapiaChinesaEmSantos} style={{marginRight: 150}} alt='Foto de uma sessão de NamDã'/>
                            <div className='item-text-div-right'>
                                <div className='title-item-div-right'>
                                    <h2 className='title-terapia-item'>Fitoterapia Chinesa</h2>
                                    <img src={iconVentosa} className='img-item' alt='Icone para representar a ventosa, ou a ventosaterapia'/>
                                </div>
                                <p className='text-item' style={{textAlign: 'right'}}>A Fitoterapia Chinesa é uma terapia complementar à acupuntura. Utiliza ervas medicinais específicas para equilibrar a energia vital do corpo, aliviar desconfortos e melhorar a saúde geral. Abordagem terapêutica tradicional da medicina chinesa com resultados promissores.</p>
                                <button className='button-terapia-item' style={{float: 'right'}} name='Botão para saber mais sobre a Fitoterapia Chinesa' onClick={() => {navigate("/Terapias")}}>Saiba mais</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                    <button onClick={handleLeftClick}><img src={arrow} alt="Proximo slide"/></button>
                    <button onClick={handleRightClick}><img src={arrow} alt="Último slide"/></button>
                </div>
            </div>
            <button className='button-terapia' name='Botão para atendimento de acupuntura em Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Agendar consulta</button>
        </section>
    )
  }
  
}

export default Terapias