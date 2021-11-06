import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Switch } from "react-router";
import About from "./pages/about/About";
import { ThemeProvider } from "styled-components";
import ContactUs from "./pages/contact/ContactUs";
import Faq from "./pages/faq/Faq";
import Product from "./pages/product/Product";
import HomePage from "./pages/home/Home";
import Privacy from "./pages/policy/Privacy";
import GlobalStyles from "./GlobalStyle.styled";
import Token from "./pages/token/Token";

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
          <Route path="/token">
            <Token />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
