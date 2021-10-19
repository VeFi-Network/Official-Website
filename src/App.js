import Header from "./components/header/Header";
import GlobalStyles from "./components/styles/globalStyle.styled";
import Banner from "./components/banner/Banner";
import Subscribe from "./components/subscribe/Subscribe";
import CountDown from "./components/countdown/CountDown";
import HeroBanner from "./components/banner/HeroBanner";
import Features from "./components/banner/Features";
import Exchange from "./components/exchange/Exchange";
import HowItWorks from "./components/exchange/HowItWorks";
import Footer from "./components/footer/Footer";
import CallToAction from "./components/footer/CallToAction";
import Newsletter from "./components/newsletter/Newsletter";
import SmartChain from "./components/smartchain/SmartChain";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Banner />
      <Subscribe />
      <CountDown />
      <HeroBanner />
      <Features />
      <Exchange />
      <HowItWorks />
      <SmartChain />
      <Newsletter />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
