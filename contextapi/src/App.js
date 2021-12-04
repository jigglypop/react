import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/Color";

function App() {
    return (
        <ColorContext.Provider value={{ color: "red" }}>
            <ColorBox />
        </ColorContext.Provider>
    );
}

export default App;
