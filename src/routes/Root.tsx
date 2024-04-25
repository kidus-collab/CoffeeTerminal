import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function Root() {
  return (
    <>
      <Header />
      <main className="w-full h-full min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
