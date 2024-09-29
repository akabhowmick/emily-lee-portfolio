import "./App.css";
import "./index.css";
import { UserProvider } from "./providers/UserContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePost from "./pages/CreatePost";
import BlogPostPage from "./pages/BlogPostPage";
import EditBlogPost from "./pages/EditPostPage";
import Footer from "./components/Footer";
import IndexPage from "./pages/IndexPage";
import { ContactPage } from "./pages/ContactPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/post/:id" element={<BlogPostPage />} />
      <Route path="/edit/:id" element={<EditBlogPost />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<IndexPage />} />
    </Route>
  )
);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
      <Footer />
    </UserProvider>
  );
}

export default App;
