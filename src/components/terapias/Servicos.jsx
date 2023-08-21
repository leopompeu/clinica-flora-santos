import React from 'react'
import { isMobile } from 'react-device-detect'
import '../../css/terapias/Servicos.css'
import { iconAcupuntura, imagemAcupunturaServico } from '../../assets'

const Servicos = () => {
    if(isMobile){
        return(
            <section id='Servicos' className='section-servicos-terapias-mobile'>
                <div className='title-section-servicos-div-mobile'> 
                    <h2 className='title-servicos-terapias-mobile'>Serviços</h2>
                    <h3 className='subtitle-servicos-terapias-mobile'>Como podemos tratar sua dor?</h3>
                </div>
                <div className='servico-item-mobile'>
                    <img src={imagemAcupunturaServico} alt='Foto de uma sessão de acupuntura' className='image-servicos-terapias-mobile'/>
                    <div className='div-title-servico-item-mobile'>
                        <img alt='Icone Acupuntura' src={iconAcupuntura}/>
                        <h3 className='title-servico-item-mobile'>Acupuntura</h3>
                    </div>
                    <p className='text-servico-item-mobile'>
                            A Acupuntura é uma terapia milenar que usa agulhas finas e estímulos em pontos específicos do corpo para tratar várias condições. É amplamente reconhecida por aliviar dores agudas e crônicas. No caso de dores agudas, como dores de cabeça, lesões musculares e pós-operatórias, a acupuntura estimula a liberação de substâncias analgésicas naturais, como endorfinas, reduzindo a sensação de dor. Também ajuda a relaxar os músculos tensos, melhorando a circulação sanguínea e acelerando a cicatrização.
                            Para dores crônicas, como artrite, fibromialgia e dores nas costas, a acupuntura promove equilíbrio energético no corpo, reduzindo a inflamação, melhorando a função imunológica e aliviando a dor de forma duradoura. Essa abordagem holística trata não apenas os sintomas, mas também as causas subjacentes da dor.
                            Além do alívio da dor, a acupuntura é eficaz no tratamento de ansiedade, estresse, insônia, enxaquecas, distúrbios digestivos e outras condições. Ela estimula pontos de acupuntura ao longo dos meridianos do corpo, canais por onde a energia vital, chamada de "Qi", flui. Ao equilibrar o fluxo de Qi, a acupuntura promove a harmonia interna e melhora a saúde geral.
                    </p>
                    <button className='button-servico-item' name='Botão para atendimento de acupuntura em Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Agendar</button>
                </div>
                <div className='servico-item-mobile'>
                    <img src={imagemAcupunturaServico} alt='Foto de uma sessão de acupuntura' className='image-servicos-terapias-mobile'/>
                    <div className='div-title-servico-item-mobile'>
                        <img alt='Icone Acupuntura' src={iconAcupuntura}/>
                        <h3 className='title-servico-item-mobile'>Acupuntura</h3>
                    </div>
                    <p className='text-servico-item-mobile'>
                            A Acupuntura é uma terapia milenar que usa agulhas finas e estímulos em pontos específicos do corpo para tratar várias condições. É amplamente reconhecida por aliviar dores agudas e crônicas. No caso de dores agudas, como dores de cabeça, lesões musculares e pós-operatórias, a acupuntura estimula a liberação de substâncias analgésicas naturais, como endorfinas, reduzindo a sensação de dor. Também ajuda a relaxar os músculos tensos, melhorando a circulação sanguínea e acelerando a cicatrização.
                            Para dores crônicas, como artrite, fibromialgia e dores nas costas, a acupuntura promove equilíbrio energético no corpo, reduzindo a inflamação, melhorando a função imunológica e aliviando a dor de forma duradoura. Essa abordagem holística trata não apenas os sintomas, mas também as causas subjacentes da dor.
                            Além do alívio da dor, a acupuntura é eficaz no tratamento de ansiedade, estresse, insônia, enxaquecas, distúrbios digestivos e outras condições. Ela estimula pontos de acupuntura ao longo dos meridianos do corpo, canais por onde a energia vital, chamada de "Qi", flui. Ao equilibrar o fluxo de Qi, a acupuntura promove a harmonia interna e melhora a saúde geral.
                    </p>
                    <button className='button-servico-item' name='Botão para atendimento de acupuntura em Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Agendar</button>
                </div>
            </section>
        )

    } else {
        return (
            <section id='Servicos' className='section-servicos-terapias'>
                <div className='title-section-servicos-div'>
                    <h2 className='title-servicos-terapias'>Serviços</h2>
                    <h3 className='subtitle-servicos-terapias'>Como podemos tratar sua dor?</h3>
                </div>
                <div className='servico-item'>
                    <div>
                        <div className='div-title-servico-item'>
                            <img alt='Icone Acupuntura' src={iconAcupuntura}/>
                            <h3 className='title-servico-item'>Acupuntura</h3>
                        </div>
                        <p className='text-servico-item'>
                            A Acupuntura é uma terapia milenar que usa agulhas finas e estímulos em pontos específicos do corpo para tratar várias condições. É amplamente reconhecida por aliviar dores agudas e crônicas. No caso de dores agudas, como dores de cabeça, lesões musculares e pós-operatórias, a acupuntura estimula a liberação de substâncias analgésicas naturais, como endorfinas, reduzindo a sensação de dor. Também ajuda a relaxar os músculos tensos, melhorando a circulação sanguínea e acelerando a cicatrização.
                            Para dores crônicas, como artrite, fibromialgia e dores nas costas, a acupuntura promove equilíbrio energético no corpo, reduzindo a inflamação, melhorando a função imunológica e aliviando a dor de forma duradoura. Essa abordagem holística trata não apenas os sintomas, mas também as causas subjacentes da dor.
                            Além do alívio da dor, a acupuntura é eficaz no tratamento de ansiedade, estresse, insônia, enxaquecas, distúrbios digestivos e outras condições. Ela estimula pontos de acupuntura ao longo dos meridianos do corpo, canais por onde a energia vital, chamada de "Qi", flui. Ao equilibrar o fluxo de Qi, a acupuntura promove a harmonia interna e melhora a saúde geral.
                        </p>
                        <button className='button-servico-item' name='Botão para atendimento de acupuntura em Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Agendar</button>
                    </div>
                    <img src={imagemAcupunturaServico} alt='Foto de uma sessão de acupuntura'/>
                </div>
                <div className='servico-item'>
                    <img src={imagemAcupunturaServico} alt='Foto de uma sessão de acupuntura'/>
                    <div>
                        <div className='div-title-servico-item left-div'>
                            <h3 className='title-servico-item'>Acupuntura</h3>
                            <img alt='Icone Acupuntura' src={iconAcupuntura}/>
                        </div>
                        <p className='text-servico-item left-text'>
                            A Acupuntura é uma terapia milenar que usa agulhas finas e estímulos em pontos específicos do corpo para tratar várias condições. É amplamente reconhecida por aliviar dores agudas e crônicas. No caso de dores agudas, como dores de cabeça, lesões musculares e pós-operatórias, a acupuntura estimula a liberação de substâncias analgésicas naturais, como endorfinas, reduzindo a sensação de dor. Também ajuda a relaxar os músculos tensos, melhorando a circulação sanguínea e acelerando a cicatrização.
                            Para dores crônicas, como artrite, fibromialgia e dores nas costas, a acupuntura promove equilíbrio energético no corpo, reduzindo a inflamação, melhorando a função imunológica e aliviando a dor de forma duradoura. Essa abordagem holística trata não apenas os sintomas, mas também as causas subjacentes da dor.
                            Além do alívio da dor, a acupuntura é eficaz no tratamento de ansiedade, estresse, insônia, enxaquecas, distúrbios digestivos e outras condições. Ela estimula pontos de acupuntura ao longo dos meridianos do corpo, canais por onde a energia vital, chamada de "Qi", flui. Ao equilibrar o fluxo de Qi, a acupuntura promove a harmonia interna e melhora a saúde geral.
                        </p>
                        <button className='button-servico-item left-button' name='Botão para atendimento de acupuntura em Santos' onClick={() => {window.open('https://wa.me/5513996518092/?text=Ol%C3%A1,%20estou%20interessado%20em%20fazer%20uma%20sess%C3%A3o!', '_blank')}}>Agendar</button>
                    </div>
                </div>
            </section>
          )
    }
 
}

export default Servicos