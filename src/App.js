import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import CardDrawer from "./Components/Drawer/CardDrawer";
import Header from "./Components/Header/Header";
import MainHeader from "./Components/Headings/MainHeader";
import SubHeader from "./Components/Headings/SubHeader";
import { IconOpenNew } from "./Components/Icons/Icons";
import { btnList } from "./Components/List/List";
import { setTitle, toggleDrawer } from "./features/Drawer";
function App() {
  const dispatch = useDispatch()
  const { title, displayDrawer } = useSelector(state => state.drawer)

  const handleSelectChange = (selectedTitle) => {
    if (title === selectedTitle) {
      dispatch(toggleDrawer(false));
      dispatch(setTitle(""));
    } else {
      dispatch(setTitle(selectedTitle));
      dispatch(toggleDrawer(true));
    }
  };

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
                  : ""} `} onClick={() =>
                    //    {
                    //   if (title === ele.title) {
                    //     dispatch(toggleDrawer(false));
                    //     dispatch(setTitle(""));
                    //   } else {
                    //     dispatch(setTitle(ele.title));
                    //     dispatch(toggleDrawer(true));
                    //   }
                    // }
                    handleSelectChange(ele.title)
                  }
                >{ele.btnTitle}</button>
              )
            })}
          </div>
          <div className="new-btn-wrapper">
            <select className="select-container"
              value={title}
              onChange={(e) => handleSelectChange(e.target.value)}
            >
              {btnList.map((ele) => (
                <option className="select-dropdown" key={ele.title} value={ele.title}>
                  {ele.btnTitle}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="card-container">
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
