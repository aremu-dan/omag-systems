import React from 'react'
import CardStyle from './CardComp.module.css'

function CardComp({children, Title}) {
  const showCardTitle = Title !== undefined
    ? <div className={CardStyle.CardTitle}><h3>{Title}</h3></div>
    : null

  return (
    <div className={CardStyle.Card}>
      {showCardTitle}

      <div className={CardStyle.CardContent}>
        {children}
      </div>
    </div>
  )
}

export default CardComp