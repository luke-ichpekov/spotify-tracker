import React from 'react'
import {FaArrowLeft} from "react-icons/fa"
import {FaArrowRight} from "react-icons/fa"

export default function CardComponent(props) {
    const{colStart, colEnd, rowStart, rowEnd, title, description, imgSrc, leftArr, rightArr, curIndex, setCurIndex, lastIndex} = {...props}
    const incrementIndex = ()=>{
      curIndex==lastIndex-1 ?setCurIndex(0):setCurIndex(curIndex+1)
    }
    const decrementIndex = ()=>{
      curIndex==0 ?setCurIndex(lastIndex-1):setCurIndex(curIndex-1)
    } 
    return (
        <div className='grid_item' 
        style= {
            {
              gridColumnStart: colStart, 
              gridColumnEnd: colEnd,
              gridRowStart:rowStart,
              gridRowEnd: rowEnd,
              backgroundImage: `url("${imgSrc}")`,
              backgroundRepeat: "no-repeat", 
              backgroundSize:"cover", 
              transform: "scale(0.85)" ,
              backgroundPosition: "center",
              borderRadius: "1.5rem"              
            }
            }>
                <div className='inside_grid'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <img src={imgSrc}/>
                    {leftArr ? <FaArrowLeft onClick={() => decrementIndex()} className="icon-left-arrow" />: null}
                    {rightArr ? <FaArrowRight onClick={() => incrementIndex()} className="icon-right-arrow" /> : null}
                </div>


        </div>
      )
}
