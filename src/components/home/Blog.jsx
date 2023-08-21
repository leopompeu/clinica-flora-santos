import { isMobile } from 'react-device-detect'
import "../../css/home/Blog.css"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FAQ from './FAQ'
import Carousel from 'nuka-carousel'

const Blog = () => {

    const [loading, setLoading] = useState(true)
    const [array, setArray] = useState()
    const [author, setAuthor] = useState('Marcelo Paes e Alcantara')
    const [time, setTime] = useState('10 min de leitura')
    const [image, setImage] = useState('https://cdn.discordapp.com/attachments/1021484845152608278/1131252315668631552/Frame_30.png')
    const [image2, setImage2] = useState('https://cdn.discordapp.com/attachments/1021484845152608278/1131252315668631552/Frame_30.png')
    const [image3, setImage3] = useState('https://cdn.discordapp.com/attachments/1021484845152608278/1131252315668631552/Frame_30.png')

    let navigate = useNavigate(); 
    
    
    const getJson = async () => {
        try {
          const response = await fetch('https://construtorafortcon.com.br/wp-json/wp/v2/posts')
          .then(response => response.json())
          .then(posts => setArray(posts));
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
    };



    useEffect(() => {
        getJson();
    }, []);


    if(!loading){

        function setTime(time) {
            var year = time.substring(0,4)
            var day = time.substring(8,10)
            var month = time.substring(5,7)
            var finalMonth = ''
            switch(month){
                case '01' :
                    finalMonth = 'Janeiro'
                break;
                case '02' :
                    finalMonth = 'Fevereiro'
                break;
                case '03' :
                    finalMonth = 'Março'
                break;
                case '04' :
                    finalMonth = 'Abril'
                break;
                case '05' :
                    finalMonth = 'Maio'
                break;
                case '06' :
                    finalMonth = 'Junho'
                break;
                case '07' :
                    finalMonth = 'Julho'
                break;
                case '08' :
                    finalMonth = 'Agosto'
                break;
                case '09' :
                    finalMonth = 'Setembro'
                break;
                case '10' :
                    finalMonth = 'Outubro'
                break;
                case '11' :
                    finalMonth = 'Novembro'
                break;
                case '12' :
                    finalMonth = 'Dezembro'
                break;
            }
            var finalTime = day + '\xa0de\xa0' + finalMonth + ',\xa0' + year
            return finalTime
        }
    

  if(isMobile) {

    return (
        <section id="Blog" className='section-blog-mobile'>
            <FAQ/>
            <div className='title-div-blog-mobile'>
                <h2 className='title-section-blog-mobile'>Blog</h2>
                <h3 className='text-section-blog-mobile'>Fique por dentro dos nossos artigos!</h3>
            </div>
            <div className='blog-carousel-div-mobile'>
                <Carousel 
                        autoplay= {true}
                        autoplayInterval = {3500}
                        wrapAround = {true}
                        defaultControlsConfig={{
                            pagingDotsClassName: 'dots',
                            pagingDotsStyle: {
                                marginRight: "-5px",
                                position: 'relative',
                                top: '50px',
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
                        <div className='item-div-blog-mobile' onClick={()=>window.open(array[0].link)}>
                            <img src={image} className='image-blog-mobile' alt='Imagem de capa do artigo em evidência sobre a Acupuntura e afins'/>
                            <h4 className='title-post-mobile'>{array[0].title.rendered}</h4>
                            <p className='text-post-mobile'>{array[0].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,247) + '...'}</p>
                            <div className='info-post-mobile'>
                                <p className='info-text-mobile'>{setTime(array[0].date)}</p>
                                <p className='info-text-mobile'>{"| " + author + " |"}</p>
                                <p className='info-text-bold-mobile'>{time}</p>
                            </div>  
                        </div>
                        <div className='item-div-blog-mobile' onClick={()=>window.open(array[1].link)}>
                            <img src={image} className='image-blog-mobile' alt='Imagem de capa do artigo em evidência sobre a Acupuntura e afins'/>
                            <h4 className='title-post-mobile'>{array[1].title.rendered}</h4>
                            <p className='text-post-mobile'>{array[1].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,247) + '...'}</p>
                            <div className='info-post-mobile'>
                                <p className='info-text-mobile'>{setTime(array[1].date)}</p>
                                <p className='info-text-mobile'>{"| " + author + " |"}</p>
                                <p className='info-text-bold-mobile'>{time}</p>
                            </div>  
                        </div>
                        <div className='item-div-blog-mobile' onClick={()=>window.open(array[2].link)}>
                            <img src={image} className='image-blog-mobile' alt='Imagem de capa do artigo em evidência sobre a Acupuntura e afins'/>
                            <h4 className='title-post-mobile'>{array[2].title.rendered}</h4>
                            <p className='text-post-mobile'>{array[2].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,247) + '...'}</p>
                            <div className='info-post-mobile'>
                                <p className='info-text-mobile'>{setTime(array[2].date)}</p>
                                <p className='info-text-mobile'>{"| " + author + " |"}</p>
                                <p className='info-text-bold-mobile'>{time}</p>
                            </div>  
                        </div>
                </Carousel>
            </div>
        </section>
    )
  } else {
    return (
            <section id="Blog" className='section-blog'>
                <FAQ/>
                <h2 className='title-section-blog'>Blog</h2>
                <h3 className='text-section-blog'>Fique por dentro dos nossos artigos!</h3>
                <div className='blog-posts'>
                    <div className='blog-principal' onClick={()=>window.open(array[0].link)}>
                        <div className='text-blog-principal'>
                            <h4 className='title-post-principal'>{array[0].title.rendered}</h4>
                            <p className='text-post-principal'>{array[0].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,247) + '...'}</p>
                            <div className='info-post'>
                                <p className='info-text'>{setTime(array[0].date)}</p>
                                <p className='info-text'>{author}</p>
                                <p className='info-text-bold'>{time}</p>
                            </div>
                        </div>
                        <img src={image} className='image-blog' alt='Imagem de capa do artigo em evidência sobre a Acupuntura e afins'/>
                    </div>
                    <div className='secondary-posts'>
                        <div className='secondary-post' onClick={()=>window.open(array[1].link)}>
                            <img src={image2} className='image-secondary-post' alt='Imagem de capa do artigo secundario sobre a Acupuntura e afins'/>
                            <div className='secondary-post-content'>
                                <h4 className='secondary-post-title'>{array[1].title.rendered}</h4>
                                <p className='secondary-post-text'>{array[1].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,297) + '...'}</p>
                                <div className='info-post secondary'>
                                    <p className='info-text'>{setTime(array[1].date)}</p>
                                    <p className='info-text'>{author}</p>
                                    <p className='info-text-bold'>{time}</p>
                                </div>
                            </div>
                        </div>
                        <div className='secondary-post' onClick={()=>window.open(array[2].link)}>
                            <img src={image2} className='image-secondary-post' alt='Imagem de capa do artigo secundario sobre a Acupuntura e afins'/>
                            <div className='secondary-post-content'>
                                <h4 className='secondary-post-title'>{array[2].title.rendered}</h4>
                                <p className='secondary-post-text'>{array[2].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,297) + '...'}</p>
                                <div className='info-post secondary'>
                                    <p className='info-text'>{setTime(array[2].date)}</p>
                                    <p className='info-text'>{author}</p>
                                    <p className='info-text-bold'>{time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
  }

} else {
    return (

        <div className="loading-container">
            <div className="spinner"></div>
        </div>
    )
}
  
}

export default Blog