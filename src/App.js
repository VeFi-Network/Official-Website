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
import { Switch, Route } from "react-router-dom";
import SmartChain from "./components/smartchain/SmartChain";
function App() {
  return (
    <>
      <Switch>
        <Route path="/about-us">
          <GlobalStyles />
          <Header />
          <CountDown />
          <Newsletter />
          <CallToAction />
          <Footer />
        </Route>
        <Route path="/" exact>
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
        </Route>
      </Switch>
    </>
  );
}

export default App;
