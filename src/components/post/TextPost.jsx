import React from 'react'
import { isMobile } from 'react-device-detect'
import '../../css/post/TextPost.css'

const TextPost = ({thisArray}) => {

    function setTime(time) {
        var year = time.substring(0,4)
        var day = time.substring(8,10)
        var month = time.substring(5,7)
        var finalTime = day + '/' + month + '/' + year
        return finalTime
    }

    if(isMobile){
        return(
            <section id='Texto posts' className='section-text-posts-mobile'>
                <img className='image-post-section-text-posts-mobile' src='https://cdn.discordapp.com/attachments/1021484845152608278/1160895623764131850/Frame_49.png?ex=6536534d&is=6523de4d&hm=b51771702a677981e19a7e214e4ef70a6537074329e475604375e51440adcd92&'/>
                <h1 className='title-post-section-text-posts-mobile'>{thisArray[0]}</h1>
                <h2 className='subtitle-post-section-text-post-mobile'>Por: Doutor Marcelo Paes • {setTime(thisArray[4])}</h2>
                <p className='text-post-section-text-posts-mobile'>{thisArray[3]}</p>
            </section>
        )

    } else {
        return (
            <section id='Texto posts' className='section-text-posts'>
                <img className='image-post-section-text-posts' src='https://cdn.discordapp.com/attachments/1021484845152608278/1160895623764131850/Frame_49.png?ex=6536534d&is=6523de4d&hm=b51771702a677981e19a7e214e4ef70a6537074329e475604375e51440adcd92&'/>
                <div className='div-text-section-text-posts'>
                    <h1 className='title-post-section-text-posts'>{thisArray[0]}</h1>
                    <h2 className='subtitle-post-section-text-post'>Por: Doutor Marcelo Paes • {setTime(thisArray[4])}</h2>
                    <p className='text-post-section-text-posts'>{thisArray[3]}</p>
                </div>
            </section>
          )
    }

}

export default TextPost