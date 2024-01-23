import React from 'react'

export const HeadingTitle = ({children}) => {
    let variant;
    const classDefault = 'px-7 py-3 bg-yellow uppercase text-maron-hover rounded-lg font-extrabold intline-block';

    switch(variant){
        case "h3":
            return (
            <div className='flex items-center  justify-center my-5'>
                <h3 className={`${classDefault}  text-sm `}>
                {children}
                </h3>
            </div>
          )
          default :
          return (
            <div className='flex items-center justify-center my-5'>
                <h2 className={`${classDefault} `}>
                {children}
                </h2>
            </div>
          )
    }
  
}
