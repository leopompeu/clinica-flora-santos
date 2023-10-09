import React from 'react'
import DocumentMeta from 'react-document-meta'
import { lazy } from 'react'
import style from "../css/sobre/export.css?inline";
import { withStyles } from "react-critical-css";


const Sobre = () => {

  const Div1 = lazy(() => import ('../components/sobre/Div1'));
  const Historia = lazy(() => import ('../components/sobre/Historia'));
  const Proposito = lazy(() => import ('../components/sobre/Proposito'));
  const Doutor = lazy(() => import ('../components/sobre/Doutor'));
  const Footer = lazy(() => import ('../components/Footer'));

  const meta = {
    title: 'Sobre a Clínica Flora Santos | Acupuntura em Santos',
    description: 'Acupuntura em Santos é na Clinica Flora Santos. Para dores crônicas e agudas, insônia e afins. Transforme sua saúde e agende já sua consulta!',
    canonical: 'https://clinicaflorasantos.com.br/Acupuntura-em-Santos',
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
          <Doutor/>
          <Historia/>
          <Proposito/>
          <Footer/>
      </DocumentMeta>
    )
  )
}

export default Sobre