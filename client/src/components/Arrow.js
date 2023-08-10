import React from "react"
import '../styles/Arrow.css'
/**
 * @function Arrow
 * @desc Componente para flechas interactivas
 * @category Components
 * @returns {JSX.Element} Componente flecha
 * @param {function} clickFunction Funcion ejecutada al hacer click
 * @param {number} element Índice del elemento actual
 * @param {number} max Índice máximo
 * @param {char} pointing Dirección a la que apunta la flecha
 * @param {string} estilo Nombre de clase css 
 */
export default React.memo(
    function Arrow({clickFunction, element, max, pointing, estilo}){

        return(
           <>
           {
            pointing == 'l' ? 
            <div onClick={()=>{clickFunction()}} className={'ArrowCarousel ArrowCarouselLeft '+ estilo} style={{display: element != 0 ? 'flex': 'none'}}>
                <svg width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="ArrowSvgLeft">
                    <path d="M12 26L2.37213 15.3406C1.6844 14.5792 1.6844 13.4208 2.37213 12.6594L12 2" stroke="#F0F2F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            :
            <div onClick={()=>{clickFunction()}} className={'ArrowCarousel ArrowCarouselRight '+ estilo} style={{display: element != max ? 'flex' : 'none'}}>
                <svg width="14" height="28" viewBox="0 0 14 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="ArrowSvgRight">
                    <path d="M2 2L11.6279 12.6594C12.3156 13.4208 12.3156 14.5792 11.6279 15.3406L2 26" stroke="#F0F2F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
           }
           </>
        )
    }
)