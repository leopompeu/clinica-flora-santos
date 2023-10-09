import React from 'react'
import { isMobile } from 'react-device-detect'
import '../../css/blog/CarouselPosts.css'
import { imagePosts, imagePosts2 } from '../../assets'
import Carousel from 'nuka-carousel'


const CarouselPosts = ({thisArray}) => {

    function setTime(time) {
        var year = time.substring(0,4)
        var day = time.substring(8,10)
        var month = time.substring(5,7)
        var finalTime = day + '/' + month + '/' + year
        return finalTime
    }


    if(isMobile){
        return (
            <section className='section-carousel-posts-blog-mobile' id='Carrossel de posts do blog'>
                <h2 className='title-section-carousel-posts-blog-mobile'>Blog</h2>
                <h3 className='text-section-carousel-posts-blog-mobile'>Fique por dentro dos nossos artigos!</h3>
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
                        <div className='div-carousel-posts-blog-mobile' onClick={() => {window.open(thisArray[1].link),"_self"}}>
                            <img src={imagePosts} loading='lazy' className='image-post-mobile' alt='Imagem que representa o post do blog sobre saúde e acupuntura'/>
                            <h4 className='title-post-item-mobile'>{thisArray[1].title.rendered.substring(0,37) + '...'}</h4>
                            <p className='text-post-item-mobile'>{thisArray[1].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,97) + '...'}</p>
                            <p className='div-info-post-item-mobile'><span className='info-post-item-mobile'>{setTime(thisArray[1].date) + ' • Marcelo Paes •\xa0'}</span><span className='bold-info-post-item-mobile'>10 min de Leitura</span></p>
                        </div>
                        <div className='div-carousel-posts-blog-mobile' onClick={() => {window.open(thisArray[2].link),"_self"}}>
                            <img src={imagePosts2} loading='lazy' className='image-post-mobile' alt='Imagem que representa o post do blog sobre saúde e acupuntura'/>
                            <h4 className='title-post-item-mobile'>{thisArray[2].title.rendered.substring(0,37) + '...'}</h4>
                            <p className='text-post-item-mobile'>{thisArray[2].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,97) + '...'}</p>
                            <p className='div-info-post-item-mobile'><span className='info-post-item-mobile'>{setTime(thisArray[2].date) + ' • Marcelo Paes •\xa0'}</span><span className='bold-info-post-item-mobile'>10 min de Leitura</span></p>
                        </div>

                    </Carousel>
            </section>
          )
    } else {
        return (
            <section className='section-carousel-posts-blog' id='Carrossel de posts do blog'>
                <div className='div-title-section-carousel-posts-blog'>
                    <h2 className='title-section-carousel-posts-blog'>Blog</h2>
                    <h3 className='text-section-carousel-posts-blog'>Fique por dentro dos nossos artigos!</h3>
                </div>
                <div className='div-carousel-posts-blog'>
                    <div className='div-post-container' onClick={() => {window.open("Blog/posts/" + thisArray[1].title.rendered.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(":", "").replace(/ /g, "-").replace(",", "")),"_self"}}>
                        <img src={imagePosts} loading='lazy' alt='Imagem que representa um post sobre acupuntura e saúde.' className='post-item-image'/>
                        <h4 className='title-post-item'>{thisArray[1].title.rendered.substring(0,37) + '...'}</h4>
                        <p className='text-post-item'>{thisArray[1].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,97) + '...'}</p>
                        <div className='div-info-post-item'>
                          <p className='info-post-item'>{setTime(thisArray[1].date) + ' • Marcelo Paes •\xa0'}</p>
                          <p className='bold-info-post-item'>10 min de Leitura</p>
                        </div>
                    </div>
                    <div className='div-post-container' onClick={() => {window.open("Blog/posts/" + thisArray[2].title.rendered.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(":", "").replace(/ /g, "-").replace(",", "")),"_self"}}>
                        <img src={imagePosts2} loading='lazy' alt='Imagem que representa um post sobre acupuntura e saúde.' className='post-item-image'/>
                        <h4 className='title-post-item'>{thisArray[2].title.rendered.substring(0,37) + '...'}</h4>
                        <p className='text-post-item'>{thisArray[2].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,97) + '...'}</p>
                        <div className='div-info-post-item'>
                          <p className='info-post-item'>{setTime(thisArray[2].date) + ' • Marcelo Paes •\xa0'}</p>
                          <p className='bold-info-post-item'>10 min de Leitura</p>  
                        </div>
                    </div>
                </div>
            </section>
          )
    }
}

export default CarouselPosts