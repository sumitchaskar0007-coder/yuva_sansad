import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoutes from "./components/ProtectedRoutes";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Reports = lazy(() => import("./pages/Reports"));
const Academics = lazy(() => import("./pages/Academics"));
const Udan = lazy(() => import("./pages/Udan"));
const Events = lazy(() => import("./pages/Events"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const Placement = lazy(() => import("./pages/Placement"));
const Videos = lazy(() => import("./pages/Videos"));
const Naac = lazy(() => import("./pages/Naac"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const News = lazy(() => import("./pages/News"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Programs = lazy(() => import("./pages/Programs"));
const Login = lazy(() => import("./pages/Login"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const GalleryAdmin = lazy(() => import("./pages/admin/GalleryAdmin"));
const ProgramAdmin = lazy(() => import("./pages/admin/ProgramAdmin"));
const BlogAdmin = lazy(() => import("./pages/admin/BlogAdmin"));
const NewsAdmin = lazy(() => import("./pages/admin/NewsAdmin"));
const EventAdmin = lazy(() => import("./pages/admin/EventAdmin"));

const PageLoader = () => (
  <div className="flex min-h-[55vh] items-center justify-center" role="status">
    <div className="h-11 w-11 animate-spin rounded-full border-4 border-red-100 border-t-[#7b1d1d]" />
    <span className="sr-only">Loading page</span>
  </div>
);

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1 pt-28 md:pt-32">
        <Toaster position="top-right" />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/udan" element={<Udan />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/naac" element={<Naac />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/gallery" element={<GalleryAdmin />} />
              <Route path="/admin/programs" element={<ProgramAdmin />} />
              <Route path="/admin/blogs" element={<BlogAdmin />} />
              <Route path="/admin/news" element={<NewsAdmin />} />
              <Route path="/admin/events" element={<EventAdmin />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
