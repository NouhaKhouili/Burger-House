import React from 'react'

export const Heading = (props) => {

    const {
        children,
        variant,
        theme, //style 'gras' 
        display,// color
        alignement,
        className
    }=props;
    const classDefault = 'uppercase font-bold intline-block ';
    let font,color ,align
    switch(theme){
        case 'gras':
            font = 'font-secondery'
            break
            default :
            font ='traking-tighter'
    };
    switch(display){
        case 'gray':
            color = 'text-gray'
            break
            default :
            color ='text-maron'
    }
    switch(alignement){
        case 'center':
            align = 'justify-center'
            break
            case 'right':
                align = 'justify-end'
                break
            default :
            align ='justify-start'
    }
    switch(variant){
        case "h3":
            return (
            <div className={`flex ${align}`}>
                <h3 className={`${classDefault} ${font} ${color}  ${className}text-2xl`}>
                {children}
                </h3>
            </div>
          )
          case "h4":
            return (
            <div className={`flex ${align}`}>
                <h3 className={`${classDefault} ${font} ${color} ${className} text-xl`}>
                {children}
                </h3>
            </div>
          )
          default :
          return (
            <div className={`flex ${align}`}>
                <h2 className={`${theme} === 'gras' ? 'text-3xl': text-3xl ${classDefault} ${font} ${color}  ${className}`}>
                {children}
                </h2>
            </div>
          )
    }
}
