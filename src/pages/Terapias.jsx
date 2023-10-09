import React from 'react'
import DocumentMeta from 'react-document-meta'
import { lazy } from 'react'
import { withStyles } from "react-critical-css";
import style from "../css/terapias/export.css?inline";

const Terapias = () => {

    const Div1 = lazy(() => import ('../components/terapias/Div1'));
    const Servicos = lazy(() => import ('../components/terapias/Servicos'));
    const Footer = lazy(() => import ('../components/Footer'));

    const meta = {
        title: 'Terapias | Clínica Flora Santos | Acupuntura em Santos',
        description: 'Experimente o alívio natural com Acupuntura, Ventosa, Môxa e mais na Clínica Flora Santos. Transforme sua saúde com a melhor clinica de acupuntura em Santos.',
        canonical: 'https://clinicaflorasantos.com.br/Terapias',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'acupuntura, acupuntura em santos, terapia, ventosa, clinica de acupuntura em santos, clinica de acupuntura, môxa, môxa em santos, eletroacupuntura, eletroacupuntura em santos, randã, randã em santos, fitoterapia chinesa, fitoterapia chinesa em santos'
            }
        }
    }

  return (
    withStyles(style)(
        <DocumentMeta {...meta}>
            <Div1/>
            <Servicos/>
            <Footer/>
        </DocumentMeta>
    )

  )
}

export default Terapias