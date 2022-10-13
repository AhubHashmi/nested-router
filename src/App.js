import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./config/router";
// import DrawerAppBar from "./components/Nav";

function App() {
    return ( <
        div className = "App" > { /* <DrawerAppBar /> */ } <
        AppRouter / >
        <
        /div>
    );
}

export default App;