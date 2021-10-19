import Header from "./components/header/Header";
import GlobalStyles from "./components/styles/globalStyle.styled";
import Banner from "./components/banner/Banner";
import Subscribe from "./components/subscribe/Subscribe";
import CountDown from "./components/countdown/CountDown";
import HeroBanner from "./components/banner/HeroBanner";
import Features from "./components/banner/Features";
import Exchange from "./components/exchange/Exchange";
import HowItWorks from "./components/exchange/HowItWorks";
import Footer from "./components/Footer/Footer";
import CallToAction from "./components/Footer/CallToAction";
import Newsletter from "./components/banner/newsletter/Newsletter";
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
      <Newsletter />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
