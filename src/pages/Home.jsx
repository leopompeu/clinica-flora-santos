
import DocumentMeta from "react-document-meta"
import { lazy, Suspense } from "react"
import { withStyles } from "react-critical-css";
import style from "../css/home/export.css?inline";

const Home = ({thisArray}) => {

    const Div1 = lazy(() => import ('../components/home/Div1'));
    const Terapias = lazy(() => import ('../components/home/Terapias'));
    const NewsletterTop = lazy(() => import ('../components/home/NewsletterTop'));
    const Chamariz = lazy(() => import ('../components/home/Chamariz'));
    const Blog = lazy(() => import ('../components/home/Blog'));
    const Doutor = lazy(() => import ('../components/home/Doutor'));
    const Atendimentos = lazy(() => import ('../components/home/Atendimentos'));
    const Mapa = lazy(() => import ('../components/home/Mapa'));
    const NewsletterBottom = lazy(() => import ('../components/home/NewsletterBottom'));
    const Footer = lazy(() => import ('../components/Footer'));

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
        withStyles(style)(
            <DocumentMeta {...meta}>
                <Div1/>
                <NewsletterTop/>
                <Chamariz/>
                <Suspense fallback={
                    <div className="loading-container">
                        <div className="spinner"></div>
                    </div>
                }>
                    <Terapias/>
                    <Doutor/>
                    <Atendimentos/>
                    <Mapa/>
                    <Blog thisArray={thisArray}/>
                    <NewsletterBottom/>
                    <Footer/>
                </Suspense>
            </DocumentMeta>
        )
    )
    
}

export default Home