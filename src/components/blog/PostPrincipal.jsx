import React from 'react'
import { isMobile } from 'react-device-detect'
import '../../css/blog/PostPrincipal.css'
import { imagePostPrincipal } from '../../assets'

const PostPrincipal = ({thisArray}) => {

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

    if(isMobile){
        return(
            <section className='section-post-principal-blog-mobile' id='Post principal' onClick={() => {window.open("Blog/posts/" + thisArray[2].title.rendered.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(":", "").replace(/ /g, "-").replace(",", "")),"_self"}}>
                <h1 className='title-post-principal-blog-mobile'>{thisArray[0].title.rendered}</h1>
                <p className='text-post-principal-blog-mobile'>{thisArray[0].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,247) + '...'}</p>
                <p><span className='info-post-principal-blog-mobile'>{setTime(thisArray[0].date)}</span><span className='bold-info-post-principal-blog-mobile'>&nbsp;&nbsp;•&nbsp;&nbsp;10 min de leitura</span></p>
            </section>
        )
    } else {
        return (
            <section className='section-post-principal-blog' id='Post principal' onClick={() => {window.open("Blog/posts/" + thisArray[2].title.rendered.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(":", "").replace(/ /g, "-").replace(",", "")),"_self"}}>
                <div className='content-post-principal-blog'>
                    <h1 className='title-post-principal-blog'>{thisArray[0].title.rendered}</h1>
                    <p className='text-post-principal-blog'>{thisArray[0].content.rendered.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<strong[^>]+?>|<strong>|<\/strong>)/img, "").substring(0,247) + '...'}</p>
                    <div className='div-info-post-principal-blog'>
                        <p className='info-post-principal-blog'>{setTime(thisArray[0].date)}</p>
                        <p className='bold-info-post-principal-blog'>•&nbsp;&nbsp;10 min de leitura</p>
                    </div>
                </div>
                <img className='image-post-principal-blog' loading='lazy' src={imagePostPrincipal} alt='Imagem que representa o post sobre acupuntura e saúde.'/>
            </section>
          )
    }

}

export default PostPrincipal