import { isMobile } from 'react-device-detect'
import "../../css/home/FAQ.css"
import Faq from "react-faq-component";


const FAQ = () => {

    const data = {
        title: '',
        rows: [
            {
                title: 'O que é acupuntura e como funciona?',
                content: 'A acupuntura é uma prática terapêutica originária da medicina tradicional chinesa que envolve a inserção de agulhas finas em pontos específicos do corpo, chamados de acupontos. Acredita-se que essa estimulação ajude a equilibrar o fluxo de energia vital (Qi) no corpo, promovendo a cura e alívio de diversos problemas de saúde.',
            },
            {
                title: 'A acupuntura é segura?',
                content: 'Sim, quando realizada por um profissional qualificado, a acupuntura é geralmente segura. Os praticantes usam agulhas esterilizadas e descartáveis, minimizando o risco de infecções. É importante escolher um acupunturista licenciado e experiente para garantir uma sessão segura e eficaz.',
            },
            {
                title: 'Quais são os benefícios da acupuntura?',
                content: 'A acupuntura oferece uma ampla gama de benefícios para a saúde, incluindo alívio da dor (como dores nas costas e enxaquecas), redução do estresse e ansiedade, fortalecimento do sistema imunológico, melhora na qualidade do sono e equilíbrio emocional.',
            },
            {
                title: 'A acupuntura é dolorosa?',
                content: 'A maioria das pessoas relata sensações mínimas ou nenhum desconforto durante as sessões de acupuntura. As agulhas são extremamente finas, e muitos pacientes descrevem apenas uma leve picada ou sensação de pressão quando são inseridas. A maioria das pessoas relaxa durante a sessão.',
            },
            {
                title: 'Quantas sessões de acupuntura são necessárias para ver resultados?',
                content: 'A quantidade de sessões necessárias varia de acordo com a condição tratada e a resposta individual. Alguns problemas de saúde podem mostrar melhora após apenas algumas sessões, enquanto outros podem requerer um tratamento mais longo. Seu acupunturista poderá orientá-lo sobre o plano de tratamento mais adequado para suas necessidades específicas.',
            },
            {
                title: 'Quais os valores por sessão?',
                content: 'Os valores variam de acordo com a necessidade e terapia realizada. Também havendo possibilidade de ressarcimento por convênio e atendimento popular às sextas-feiras, com valores reduzidos.',
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