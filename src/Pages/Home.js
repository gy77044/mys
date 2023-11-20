import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardDrawer from '../Components/Drawer/CardDrawer'
import Header from '../Components/Header/Header'
import MainHeader from '../Components/Headings/MainHeader'
import SubHeader from '../Components/Headings/SubHeader'
import { btnList } from '../Components/List/List'
import { setTitle, toggleDrawer } from '../features/Drawer'

const Home = () => {
  const dispatch = useDispatch()
  const { title, displayDrawer } = useSelector(state => state.drawer)

  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <MainHeader />
        <SubHeader />
      </div>
      <div className="btn-container">
        <div className="btn-wrapper">
          {btnList.map((ele) => {
            return (
              <button className={`btn-actual ${title === ele.title ? "btn-actual-active"
                : ""} `} onClick={() => {
                  if (title === ele.title) {
                    dispatch(toggleDrawer(false));
                    dispatch(setTitle(""));
                  } else {
                    dispatch(setTitle(ele.title));
                    dispatch(toggleDrawer(true));
                  }
                }}>{ele.btnTitle}</button>
            )
          })}
        </div>
      </div>
      <div className="card-container">
        {displayDrawer && (
          <div className="">
            <CardDrawer />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
