import Header from "./Components/Header/Header";
import "./App.scss"
import MainHeader from "./Components/Headings/MainHeader";
import SubHeader from "./Components/Headings/SubHeader";
import { btnList } from "./Components/List/List";
import Card from "./Components/Card/Card";
import { setTitle, toggleDrawer } from "./features/Drawer";
import { useDispatch, useSelector } from "react-redux";
import CardDrawer from "./Components/Drawer/CardDrawer"
import { IconOpenNew } from "./Components/Icons/Icons";
function App() {
  const dispatch = useDispatch()
  const { title, displayDrawer } = useSelector(state => state.drawer)

  return (<>
    <div className="App">
      <Header />
      <div className="App-container">
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
          {/* <Card />
        <Card /> */}
          {displayDrawer && (
            <CardDrawer />
          )}
        </div>
        <div className="note-text-container">
          <span className="note-text">*For all plans, ad spend and <span className="text-link"> Ticketing Fees </span> may apply. Ticketing Fees are paid by ticket buyers unless you choose to cover them.
            <span className="text-link"> Learn more about our pricing <IconOpenNew />.</span> </span>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
