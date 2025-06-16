import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-800 text-white px-[10%]">
        <Nav/>
        <Mainroutes/>
      </div>
    </>
  );
}

export default App;
