import React from 'react'
import { withStyles } from 'react-critical-css'
import style from "../css/post/export.css?inline";
import TextPost from '../components/post/TextPost';
import Footer from '../components/Footer';
import DocumentMeta from "react-document-meta"


const Post = ({thisArray}) => {

  const meta = {
    title: thisArray[0] + 'Clínica Flora Santos | Acupuntura em Santos',
    description: 'Acupuntura em Santos é na Clinica Flora Santos. Para dores crônicas e agudas, insônia e afins. Transforme sua saúde e agende já sua consulta!',
    canonical: 'https://clinicaflorasantos.com.br/Blog/posts/' + thisArray[1],
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
        <TextPost thisArray={thisArray}/>
        <Footer/>
      </DocumentMeta>
    )
  )
}

export default Post