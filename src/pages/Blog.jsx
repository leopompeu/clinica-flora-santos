import React from 'react'
import DocumentMeta from 'react-document-meta'
import { useState, useEffect, lazy } from 'react'
import { withStyles } from "react-critical-css";
import style from "../css/blog/export.css";

const Blog = ( {thisArray} ) => {

    const PostPrincipal = lazy(() => import ('../components/blog/PostPrincipal'));
    const CarouselPosts = lazy(() => import ('../components/blog/CarouselPosts'));
    const Footer = lazy(() => import ('../components/Footer'));

    const meta = {
        title: 'Blog | Clínica Flora Santos | Acupuntura em Santos',
        description: 'Acupuntura em Santos é na Clinica Flora Santos. Fique por dentro das novidades do mundo da saúde alternativa, e se mantenha informado sobre sua saúde!',
        canonical: 'https://clinicaflorasantos.com.br/',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'acupuntura,acupuntura em santos,terapia,ventosa,clinica de acupuntura em santos,clinica de acupuntura, blog'
            }
        }
    }
    
    
    return (
        withStyles(style)(
            <div className='blog-page'>
                <DocumentMeta {...meta}>
                    <PostPrincipal thisArray={thisArray}/>
                    <CarouselPosts thisArray={thisArray}/>
                    <Footer/>
                </DocumentMeta>
            </div>
        )

    )

}

export default Blog