import React from 'react'
import DocumentMeta from 'react-document-meta'
import Footer from '../components/Footer'
import Div1 from '../components/sobre/Div1'
import Doutor from '../components/sobre/Doutor'
import Historia from '../components/sobre/Historia'
import Proposito from '../components/sobre/Proposito'

const meta = {
    title: 'Sobre a Clínica Flora Santos | Acupuntura em Santos',
    description: 'Acupuntura em Santos é na Clinica Flora Santos. Para dores crônicas e agudas, insônia e afins. Transforme sua saúde e agende já sua consulta!',
    canonical: 'https://clinicaflorasantos.com.br/',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'acupuntura,acupuntura em santos,terapia,ventosa,clinica de acupuntura em santos,clinica de acupuntura'
        }
    }
}


const Sobre = () => {
  return (
    <DocumentMeta {...meta}>
        <Div1/>
        <Doutor/>
        <Historia/>
        <Proposito/>
        <Footer/>
    </DocumentMeta>
  )
}

export default Sobre