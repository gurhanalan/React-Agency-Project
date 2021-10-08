import Feature from "./components/feature/Feature";
import Intro from "./components/intro/Intro";
import NavBar from "./components/navbar/NavBar";
import Service from "./components/service/Service";

const App = () => {
    return (
        <div>
            <Intro />
            <Feature />
            <Service />
        </div>
    );
};

export default App;
