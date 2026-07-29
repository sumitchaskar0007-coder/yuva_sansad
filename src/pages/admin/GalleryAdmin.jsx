import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { galleryAPI } from "../../api";
import toast from "react-hot-toast";

const GalleryAdmin = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const response = await galleryAPI.getAll();
      setGalleryItems(response.data);
    } catch (error) {
      toast.error("Failed to fetch gallery items");
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
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    if (imageFile) {
      formDataToSend.append("image", imageFile);
    }

    try {
      if (editingItem) {
        await galleryAPI.update(editingItem._id, formDataToSend);
        toast.success("Gallery item updated successfully");
      } else {
        await galleryAPI.create(formDataToSend);
        toast.success("Gallery item created successfully");
      }

      setShowModal(false);
      resetForm();
      fetchGalleryItems();
    } catch (error) {
      toast.error(error.response?.data?.message || "Operation failed");
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      category: item.category || "",
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await galleryAPI.delete(id);
        toast.success("Gallery item deleted successfully");
        fetchGalleryItems();
      } catch (error) {
        toast.error("Failed to delete gallery item");
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
    });
    setImageFile(null);
    setEditingItem(null);
  };

  return (
    // 🔥 ONLY CHANGE: mt-20 added
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
                Gallery Management
              </h1>
            </div>
          </div>
        </div>
      </nav>

      {/* rest code unchanged */}


            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Manage Gallery</h2>
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Add New Image
                        </button>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryItems.map((item) => (
                                <div key={item._id} className="bg-white rounded-lg shadow overflow-hidden">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                                        {item.category && (
                                            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                                {item.category}
                                            </span>
                                        )}
                                        <div className="mt-4 flex space-x-2">
                                            <button
                                                onClick={() => handleEdit(item)}
                                                className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item._id)}
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
                                {editingItem ? 'Edit Gallery Item' : 'Add Gallery Item'}
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
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        {editingItem ? 'New Image (Leave empty to keep current)' : 'Image'}
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        required={!editingItem}
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
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                                >
                                    {editingItem ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryAdmin;