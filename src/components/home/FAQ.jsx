import { isMobile } from 'react-device-detect'
import "../../css/home/FAQ.css"
import Faq from "react-faq-component";


const FAQ = () => {

    const data = {
        title: '',
        rows: [
            {
                title: 'Acordeão 1',
                content: 'Lorem ipsum dolor sit amet consectetur. Turpis sed nam vulputate quis ac. Quam hendrerit neque nisi maecenas pellentesque. Volutpat mi vulputate mauris sem porta rhoncus sit viverra. Consequat et et sit malesuada nulla interdum tortor nullam. Leo feugiat sed sapien ultrices posuere massa euismod. Lacus nisi enim arcu integer senectus elementum. Nibh non ultrices odio tempus eu cursus feugiat. Fames integer aliquet nec facilisi dignissim sapien morbi sollicitudin.',
            },
            {
                title: 'Acordeão 2',
                content: 'Lorem ipsum dolor sit amet consectetur. Turpis sed nam vulputate quis ac. Quam hendrerit neque nisi maecenas pellentesque. Volutpat mi vulputate mauris sem porta rhoncus sit viverra. Consequat et et sit malesuada nulla interdum tortor nullam. Leo feugiat sed sapien ultrices posuere massa euismod. Lacus nisi enim arcu integer senectus elementum. Nibh non ultrices odio tempus eu cursus feugiat. Fames integer aliquet nec facilisi dignissim sapien morbi sollicitudin.',
            },
            {
                title: 'Acordeão 3',
                content: 'Lorem ipsum dolor sit amet consectetur. Turpis sed nam vulputate quis ac. Quam hendrerit neque nisi maecenas pellentesque. Volutpat mi vulputate mauris sem porta rhoncus sit viverra. Consequat et et sit malesuada nulla interdum tortor nullam. Leo feugiat sed sapien ultrices posuere massa euismod. Lacus nisi enim arcu integer senectus elementum. Nibh non ultrices odio tempus eu cursus feugiat. Fames integer aliquet nec facilisi dignissim sapien morbi sollicitudin.',
            }
        ]
    }

    const styles = {
        rowTitleColor: 'black',
        bgColor: 'transparent',
        arrowColor: "black",
    };

    const config = {
         openOnload: 0,
         animate: true,
         arrowIcon: "V",
         tabFocus: true
    };

  if(isMobile) {
    return (
        <section id="FAQ" className='section-faq-mobile'>
            <h2 className='title-section-faq-mobile'>FAQ</h2>
            <h3 className='subtitle-section-faq-mobile'>Perguntas frequentes</h3>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </section>
    )
  } else {
    return (
        <section id="FAQ" className='section-faq'>
            <h2 className='title-section-faq'>FAQ</h2>
            <h3 className='subtitle-section-faq'>Perguntas frequentes</h3>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />

        </section>
    )
  }
  
}

export default FAQ