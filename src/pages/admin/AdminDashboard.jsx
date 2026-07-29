import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/admin/login");
  };

  return (
    // 🔥 ONLY THIS LINE CHANGED (mt-20 added)
    <div className="min-h-screen bg-gray-100 mt-20">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Admin Dashboard
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-700">{user.email}</span>

              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Welcome to Admin Panel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gallery Management Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <div className="ml-5 w-0 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      Gallery Management
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Manage your gallery images
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/admin/gallery"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Manage Gallery
                  </Link>
                </div>
              </div>
            </div>


            {/* Add this card to the existing grid in AdminDashboard.jsx */}
<div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-6">
        <div className="flex items-center">
            <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
                <h3 className="text-lg font-medium text-gray-900">Blog Management</h3>
                <p className="mt-1 text-sm text-gray-500">Manage your blog posts</p>
            </div>
        </div>
        <div className="mt-6">
            <Link
                to="/admin/blogs"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
            >
                Manage Blogs
            </Link>
        </div>
    </div>
</div>

            {/* Program Management Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>

                  <div className="ml-5 w-0 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      Program Management
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Manage your programs and PDFs
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/admin/programs"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                  >
                    Manage Programs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
