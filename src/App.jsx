import Contact from "./components/contact/Contact";
import Feature from "./components/feature/Feature";
import Footer from "./components/Footer/Footer";
import Intro from "./components/intro/Intro";
import Price from "./components/price/Price";

import Service from "./components/service/Service";

const App = () => {
    return (
        <div>
            <Intro />
            <Feature />
            <Service />
            <Price />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
