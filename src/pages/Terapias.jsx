import React from 'react'
import DocumentMeta from 'react-document-meta'
import Div1 from '../components/terapias/Div1'
import Servicos from '../components/terapias/Servicos'
import Footer from "../components/Footer"


const Terapias = () => {

    const meta = {
        title: 'Terapias | Clínica Flora Santos | Acupuntura em Santos',
        description: 'Experimente o alívio natural com Acupuntura, Ventosa, Môxa e mais na Clínica Flora Santos. Transforme sua saúde com a melhor clinica de acupuntura em Santos.',
        canonical: 'https://clinicaflorasantos.com.br/',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'acupuntura, acupuntura em santos, terapia, ventosa, clinica de acupuntura em santos, clinica de acupuntura, môxa, môxa em santos, eletroacupuntura, eletroacupuntura em santos, randã, randã em santos, fitoterapia chinesa, fitoterapia chinesa em santos'
            }
        }
    }

  return (
    <DocumentMeta {...meta}>
        <Div1/>
        <Servicos/>
        <Footer/>
    </DocumentMeta>
  )
}

export default Terapias