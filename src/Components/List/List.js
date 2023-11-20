import Card from "../Card/Card"
import FreeCard from "../Card/FreeCard"
import SecondBtnCardContainer from "../Card/SecondBtnCardContainer"
import ThirdBtnCardContainer from "../Card/ThirdBtnCardContainer"
import FourthBtnCardContainer from "../Card/FourthBtnCardContainer"
export const btnList = [
  {
    btnTitle: "Up to 25",
    title: "Upto25",
    tooltip: "Up to 25",
  },
  {
    btnTitle: "Up to 100",
    title: "Upto100",
    tooltip: "Up to 100",
  },
  {
    btnTitle: "Up to 250",
    title: "Upto250",
    tooltip: "Up to 250",
  },
  {
    btnTitle: "Unlimited",
    title: "Unlimited",
    tooltip: "Unlimited",
  },
]

export const CardListItems = {
  Upto25: {
    title: "Upto25",
    Component: FreeCard,
    btnTitle: "Up to 25",
  },
  Upto100: {
    title: "Upto100",
    Component: SecondBtnCardContainer,
    btnTitle: "Up to 100",
  },
  Upto250: {
    title: "Upto250",
    Component: ThirdBtnCardContainer,
    btnTitle: "Up to 250",
  },
  Unlimited: {
    title: "Unlimited",
    Component: FourthBtnCardContainer,
    btnTitle: "Unlimited",
  },

}
