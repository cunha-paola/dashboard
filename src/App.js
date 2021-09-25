import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import "./app.css"
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/NewUser/NewUser";
import ProductList from "./components/pages/ProductList/ProductList";
import Product from "./components/pages/Product/Product";
import NewProduct from "./components/pages/NewProduct/NewProduct";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
