import "./App.css";
import GoogleHome from "./pages/googleHome/GoogleHome.tsx";
import AppRoutes from "../src/route/AppRoutes.tsx";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <GoogleHome></GoogleHome>
    </div>
  );
}

export default App;
