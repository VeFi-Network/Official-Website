import Header from "./components/header/Header";
import GlobalStyles from "./components/styles/globalStyle.styled";
import Banner from "./components/banner/Banner";
import Subscribe from "./components/subscribe/Subscribe";
import CountDown from "./components/countdown/CountDown";
import HeroBanner from "./components/banner/HeroBanner";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Banner />
      <Subscribe />
      <CountDown />
      <HeroBanner />
    </>
  );
}

export default App;
