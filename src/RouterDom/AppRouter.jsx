import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../pages/Blog";
import { UserForm } from "../pages/UserForm";
import { Login } from "../features/Login";
import { SignUp } from "../features/Signup";
import Users from "../User/Users";
import Toast from "../pages/Toast";
import { Cart } from "../pages/Cart";
import DynamicRouting from "../pages/DynamicRouting";
import { Product } from "../pages/Product";



export default function AppRouter() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/userform" element={<UserForm/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/product/:id" element={<DynamicRouting/>} />
      <Route path="/toast" element={<Toast/>}/>
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </>
  );
}