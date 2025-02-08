import "./App.css";
import "./index.css";
import { UserProvider } from "./providers/UserContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePost from "./pages/CreatePost";
import BlogPostPage from "./pages/BlogPostPage";
import EditBlogPost from "./pages/EditPostPage";
import Footer from "./components/Footer";
import IndexPage from "./pages/IndexPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutMePage } from "./pages/AboutMePage";
import Layout from "./components/Header/Layout";
import { AllBlogsPage } from "./pages/AllBlogsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/blogs" element={<AllBlogsPage />} />
      <Route path="/blogs/:id" element={<BlogPostPage />} />
      <Route path="/edit/:id" element={<EditBlogPost />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="*" element={<IndexPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="">
      <UserProvider>
        <RouterProvider router={router} />
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
