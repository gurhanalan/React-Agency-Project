import Feature from "./components/feature/Feature";
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
        </div>
    );
};

export default App;
