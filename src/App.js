import Header from "./components/header/Header";
import GlobalStyles from "./components/styles/globalStyle.styled";
import Footer from "./components/footer/Footer";
import CallToAction from "./components/footer/CallToAction";
import { Route, Switch } from "react-router";
import About from "./pages/about/About";
import { ThemeProvider } from "styled-components";
import ContactUs from "./pages/contact/ContactUs";
import Faq from "./pages/faq/Faq";
import Product from "./pages/product/Product";
import HomePage from "./pages/home/Home";
import CountDown from "./components/countdown/CountDown";

const theme = {
  iphone_x: "375px",
  iPhone_11: "390px",
  iphone_12_pro_max: "428px",
  andriod: "480px"
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/products">
            <Product />
            <CountDown />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
        <CallToAction />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
