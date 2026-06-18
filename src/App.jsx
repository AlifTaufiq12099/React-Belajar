import { Suspense, useState } from 'react'
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Loading from './components/Loading';

import Order from "./pages/Order";
import Customer from './pages/Customer';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import GuestLayout from './layouts/GuestLayout';
import Guest from './pages/Guest';
import Note from './pages/Note';

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guest />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/notes" element={<Note />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
            </Suspense>             
    </>
  )
}

export default App