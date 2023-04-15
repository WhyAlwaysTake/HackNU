import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Info from "./pages/info/Info";
import Payment from "./pages/payment/Payment";
import Courier from "./pages/courier/Courier";
import Authorization from "./pages/authorization/Authorization";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/order" element={<Order/>}></Route>
        <Route exact path="/info" element={<Info/>}></Route>
        <Route exact path="/payment" element={<Payment/>}></Route>
        <Route exact path="/courier" element={<Courier/>}></Route>
        <Route exact path="/authorization" element={<Authorization/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
