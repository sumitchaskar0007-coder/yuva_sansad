import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { programAPI } from "../../api";
import toast from "react-hot-toast";

const ProgramAdmin = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProgram, setEditingProgram] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    venue: "",
  });
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await programAPI.getAll();
      setPrograms(response.data);
    } catch (error) {
      toast.error("Failed to fetch programs");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("venue", formData.venue);
    if (pdfFile) {
      formDataToSend.append("pdf", pdfFile);
    }

    try {
      if (editingProgram) {
        await programAPI.update(editingProgram._id, formDataToSend);
        toast.success("Program updated successfully");
      } else {
        await programAPI.create(formDataToSend);
        toast.success("Program created successfully");
      }

      setShowModal(false);
      resetForm();
      fetchPrograms();
    } catch (error) {
      toast.error(error.response?.data?.message || "Operation failed");
    }
  };

  const handleEdit = (program) => {
    setEditingProgram(program);
    setFormData({
      title: program.title,
      description: program.description,
      date: program.date ? program.date.split("T")[0] : "",
      venue: program.venue || "",
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this program?")) {
      try {
        await programAPI.delete(id);
        toast.success("Program deleted successfully");
        fetchPrograms();
      } catch (error) {
        toast.error("Failed to delete program");
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      venue: "",
    });
    setPdfFile(null);
    setEditingProgram(null);
  };

  return (
    // 🔥 ONLY CHANGE — mt-20 added
    <div className="min-h-screen bg-gray-100 mt-20">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/admin/dashboard"
                className="text-gray-700 hover:text-gray-900"
              >
                ← Back to Dashboard
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">
                Program Management
              </h1>
            </div>
          </div>
        </div>
      </nav>

      {/* EVERYTHING BELOW UNCHANGED */}


            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Manage Programs</h2>
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                            Add New Program
                        </button>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {programs.map((program) => (
                                <div key={program._id} className="bg-white rounded-lg shadow p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
                                            <p className="text-gray-600 mt-1">{program.description}</p>
                                            <div className="mt-2 text-sm text-gray-500">
                                                <span>Date: {new Date(program.date).toLocaleDateString()}</span>
                                                {program.venue && (
                                                    <span className="ml-4">Venue: {program.venue}</span>
                                                )}
                                            </div>
                                            {program.pdfUrl && (
                                                <a
                                                    href={program.pdfUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-800"
                                                >
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    View PDF
                                                </a>
                                            )}
                                        </div>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleEdit(program)}
                                                className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(program._id)}
                                                className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">
                                {editingProgram ? 'Edit Program' : 'Add Program'}
                            </h3>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    resetForm();
                                }}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                ✕
                            </button>
                        </div>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Venue</label>
                                    <input
                                        type="text"
                                        name="venue"
                                        value={formData.venue}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        {editingProgram ? 'New PDF (Leave empty to keep current)' : 'PDF File'}
                                    </label>
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                                        required={!editingProgram}
                                    />
                                </div>
                            </div>
                            
                            <div className="mt-6 flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowModal(false);
                                        resetForm();
                                    }}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700"
                                >
                                    {editingProgram ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProgramAdmin;