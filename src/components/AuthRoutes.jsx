import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
import Home from '../pages/Home';

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}