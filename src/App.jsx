import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ProtectedRoutes from './components/ProtectedRoutes';
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import BlogAdmin from "./pages/admin/BlogAdmin";

// Public Pages
import Gallery from './pages/Gallery';
import Programs from './pages/Programs';
// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import GalleryAdmin from './pages/admin/GalleryAdmin';
import ProgramAdmin from './pages/admin/ProgramAdmin';


// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import AnnouncementTicker from "./components/AnnouncementTicker";
import ScrollToTop from "./components/ScrollToTop";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Reports from "./pages/Reports";
import Academics from "./pages/Academics";
import Udan from "./pages/Udan";
import Events from "./pages/Events";
import Placement from "./pages/Placement";
import Videos from "./pages/Videos";
import Naac from "./pages/Naac";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";


// Protected Routes

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">

      {/* Navbar */}
      <Navbar />

      {/* Announcement */}
      {/* <AnnouncementTicker /> */}

      <ScrollToTop />

      <main className="flex-1 pt-28 md:pt-32">
        <Toaster position="top-right" />
        <Routes>

          {/* ================= PUBLIC ROUTES ================= */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/udan" element={<Udan />} />
          {/* <Route path="/programs" element={<Programs />} /> */}
          <Route path="/events" element={<Events />} />
          <Route path="/placement" element={<Placement />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/videos" element={<Videos />} />
          <Route path="/naac" element={<Naac />} />
          <Route path="/contact" element={<Contact />} />
          
<Route path="/blog" element={<Blog />} />
<Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />

           {/* Public Routes */}
                    <Route path="/" element={<Navigate to="/gallery" />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/programs" element={<Programs />} />
                    
                    {/* Admin Login */}
                    <Route path="/admin/login" element={<AdminLogin />} />
                    
                    {/* Protected Admin Routes */}
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="/admin/gallery" element={<GalleryAdmin />} />
                        <Route path="/admin/programs" element={<ProgramAdmin />} />
                        <Route path="/admin/blogs" element={<BlogAdmin />} />

                    </Route>
                    
                    {/* Catch all route */}
                    <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
