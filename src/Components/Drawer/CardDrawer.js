import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { CardListItems } from "../List/List";


const CardDrawer = () => {

  const { title, displayDrawer } = useSelector(state => state.drawer)
  const ComponentToRender = CardListItems[title]?.Component;
  return (
    <>
      {ComponentToRender && <ComponentToRender />}
    </>
  )
}

export default CardDrawer