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
import { Route, Switch } from "react-router";
import AboutUs from "./pages/about/AboutUs";
import { ThemeProvider } from "styled-components";
import ContactUs from "./pages/contact/ContactUs";

const theme = {
  iphone_x: "375px",
  iPhone_11: "390px",
  iphone_12_pro_max: "428px",
  andriod: "480px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path="/about-us">
            <AboutUs />
            <Newsletter />
            <CallToAction />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
            <CallToAction />
          </Route>
          <Route path="/" exact>
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
          </Route>
        </Switch>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
