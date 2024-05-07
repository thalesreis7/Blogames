import Card from "./Components/Cards/Card"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import * as S from "./Components/Styles/Styled"


export default function App() {
  return (
    <>
      <S.GlobalStyle/>
      <Header/>
      <Main/>
      <Card/>
      <Footer/>
    </>
  )
}
