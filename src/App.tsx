import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import SignPage from "@/pages/sign";
import AdminPage from "@/pages/admin/admin";
import AdminStudentsPage from "@/pages/admin/students/students";
import AdminStudentsAdd from "./pages/admin/students/add";


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<SignPage />} path="/sign" />

      <Route element={<AdminPage />} path="/teacher" />
      {/* <Route element={<AdminStudentsPage />} path="/admin/students" /> */}

      {/* ДОБАВЛЕНИЕ СТУДЕНТА */}
      {/* <Route element={<AdminStudentsAdd />} path="/admin/students/add" /> */}
{/* 
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" /> */}
    </Routes>
  );
}

export default App;
