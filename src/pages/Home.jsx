
import DocumentMeta from "react-document-meta"
import Div1 from "../components/home/Div1"
import NewsletterTop from "../components/home/NewsletterTop"
import Chamariz from "../components/home/Chamariz"
import Terapias from "../components/home/Terapias"
import Doutor from "../components/home/Doutor"
import Atendimentos from "../components/home/Atendimentos"
import Mapa from "../components/home/Mapa"
import Blog from "../components/home/Blog"
import NewsletterBottom from "../components/home/NewsletterBottom"
import Footer from "../components/Footer"


const Home = () => {

    const meta = {
        title: 'Clínica Flora Santos | Acupuntura em Santos',
        description: 'Acupuntura em Santos é na Clinica Flora Santos. Para dores crônicas e agudas, insônia e afins. Transforme sua saúde e agende já sua consulta!',
        canonical: 'https://clinicaflorasantos.com.br/',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'acupuntura,acupuntura em santos,terapia,ventosa,clinica de acupuntura em santos,clinica de acupuntura'
            }
        }
    }
    
    return (
        <DocumentMeta {...meta}>
            <Div1/>
            <NewsletterTop/>
            <Chamariz/>
            <Terapias/>
            <Doutor/>
            <Atendimentos/>
            <Mapa/>
            <Blog/>
            <NewsletterBottom/>
            <Footer/>
        </DocumentMeta>
      )
    
}

export default Home