import React from 'react'
import PostPrincipal from '../components/blog/PostPrincipal'
import DocumentMeta from 'react-document-meta'
import { useState } from 'react'
import { useEffect } from 'react'
import CarouselPosts from '../components/blog/CarouselPosts'
import Footer from '../components/Footer'

const Blog = () => {

    const [loading, setLoading] = useState(true)
    const [array, setArray] = useState()
  
    const getJson = async () => {
      try {
        const response = await fetch('https://blog.clinicaflorasantos.com.br/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(posts => setArray(posts));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getJson(array);
    }, []);

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
    

    if(!loading) {
        return (
            <div className='blog-page'>
                <DocumentMeta {...meta}>
                    <PostPrincipal thisArray={array}/>
                    <CarouselPosts thisArray={array}/>
                    <Footer/>
                </DocumentMeta>
            </div>
        )
    } else {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
            </div>
        )
    }

}

export default Blog