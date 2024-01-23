import React from 'react'

export default function Button({children, className,color,theme}) {
let background


if (color ==='maron'){
  background='bg-maron hover:bg-maron-hover'
}
else if (color ==='red'){
  background='bg-red hover:bg-red-hover'
}
else {
  background='bg-yellow hover:bg-yellow-hover'
}

  switch (theme){
    case "small":
  
  return (
    <div>
        <button className={` ${className} ${background} px-4 py-2  uppercase shadow-xl font-medium  text-white  text-xs  animate rounded-md border-1`}>
            {children}
        </button>
    </div>
  )
  case "big":

  return (
    <div>
        <button className={` ${className} ${background} px-10 py-4 uppercase shadow-xl font-medium  text-white  text-base  animate rounded-md border-1`}>
            {children}
        </button>
    </div>
  )
  default : 
  return (
    <div>
    <button className={` ${className} ${background} px-4 py-3 uppercase shadow-xl font-medium  text-white  text-sm  animate rounded-md border-1`}>
        {children}
    </button>
</div>
  )
}
  
}
