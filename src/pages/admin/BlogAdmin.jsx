import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blogAPI } from '../../api';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogAdmin = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        excerpt: '',
        author: '',
        category: 'General',
        tags: '',
        isPublished: 'true'
    });
    const [imageFile, setImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState('');

    // Quill editor configuration
    const quillModules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ]
    };

    const quillFormats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet',
        'link', 'image'
    ];

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await blogAPI.getAllAdmin();
            setBlogs(response.data);
        } catch (error) {
            toast.error('Failed to fetch blogs');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleContentChange = (content) => {
        setFormData({
            ...formData,
            content
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('content', formData.content);
        formDataToSend.append('excerpt', formData.excerpt);
        formDataToSend.append('author', formData.author);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('tags', formData.tags);
        formDataToSend.append('isPublished', formData.isPublished);
        
        if (imageFile) {
            formDataToSend.append('featuredImage', imageFile);
        }

        try {
            if (editingBlog) {
                await blogAPI.update(editingBlog._id, formDataToSend);
                toast.success('Blog updated successfully');
            } else {
                await blogAPI.create(formDataToSend);
                toast.success('Blog created successfully');
            }
            
            setShowModal(false);
            resetForm();
            fetchBlogs();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Operation failed');
        }
    };

    const handleEdit = (blog) => {
        setEditingBlog(blog);
        setFormData({
            title: blog.title,
            content: blog.content,
            excerpt: blog.excerpt || '',
            author: blog.author,
            category: blog.category,
            tags: blog.tags ? blog.tags.join(', ') : '',
            isPublished: blog.isPublished.toString()
        });
        setPreviewImage(blog.featuredImage || '');
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                await blogAPI.delete(id);
                toast.success('Blog deleted successfully');
                fetchBlogs();
            } catch (error) {
                toast.error('Failed to delete blog');
            }
        }
    };

    const handleTogglePublish = async (blog) => {
        try {
            const updatedData = new FormData();
            updatedData.append('title', blog.title);
            updatedData.append('content', blog.content);
            updatedData.append('excerpt', blog.excerpt || '');
            updatedData.append('author', blog.author);
            updatedData.append('category', blog.category);
            updatedData.append('tags', blog.tags ? blog.tags.join(', ') : '');
            updatedData.append('isPublished', (!blog.isPublished).toString());
            
            await blogAPI.update(blog._id, updatedData);
            toast.success(`Blog ${blog.isPublished ? 'unpublished' : 'published'} successfully`);
            fetchBlogs();
        } catch (error) {
            toast.error('Failed to update blog status');
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            content: '',
            excerpt: '',
            author: '',
            category: 'General',
            tags: '',
            isPublished: 'true'
        });
        setImageFile(null);
        setPreviewImage('');
        setEditingBlog(null);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link to="/admin/dashboard" className="text-gray-700 hover:text-gray-900">
                                ← Back to Dashboard
                            </Link>
                            <h1 className="text-xl font-semibold text-gray-900">Blog Management</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600 text-sm">
                                Total: {blogs.length} blogs
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Manage Blogs</h2>
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Create New Blog
                        </button>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
                        </div>
                    ) : (
                        <div className="bg-white shadow overflow-hidden rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Author
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {blogs.map((blog) => (
                                        <tr key={blog._id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    {blog.featuredImage && (
                                                        <div className="h-10 w-10 flex-shrink-0 mr-3">
                                                            <img
                                                                className="h-10 w-10 rounded object-cover"
                                                                src={blog.featuredImage}
                                                                alt={blog.title}
                                                            />
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {blog.title}
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            Views: {blog.views}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {blog.author}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    {blog.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    blog.isPublished 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                    {blog.isPublished ? 'Published' : 'Draft'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {formatDate(blog.createdAt)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleEdit(blog)}
                                                        className="text-blue-600 hover:text-blue-900"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleTogglePublish(blog)}
                                                        className="text-green-600 hover:text-green-900"
                                                    >
                                                        {blog.isPublished ? 'Unpublish' : 'Publish'}
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(blog._id)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Delete
                                                    </button>
                                                    <Link
                                                        to={`/blog/${blog.slug || blog._id}`}
                                                        target="_blank"
                                                        className="text-purple-600 hover:text-purple-900"
                                                    >
                                                        View
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-4 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">
                                {editingBlog ? 'Edit Blog' : 'Create New Blog'}
                            </h3>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    resetForm();
                                }}
                                className="text-gray-400 hover:text-gray-500 text-2xl"
                            >
                                ×
                            </button>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Title *</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Author *</label>
                                        <input
                                            type="text"
                                            name="author"
                                            value={formData.author}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Category</label>
                                        <input
                                            type="text"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
                                        <input
                                            type="text"
                                            name="tags"
                                            value={formData.tags}
                                            onChange={handleInputChange}
                                            placeholder="technology, education, college"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Featured Image
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                                        />
                                        {previewImage && (
                                            <div className="mt-2">
                                                <img
                                                    src={previewImage}
                                                    alt="Preview"
                                                    className="h-32 w-full object-cover rounded-md"
                                                />
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Excerpt</label>
                                        <textarea
                                            name="excerpt"
                                            value={formData.excerpt}
                                            onChange={handleInputChange}
                                            rows="3"
                                            placeholder="Brief summary of the blog..."
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Status</label>
                                        <select
                                            name="isPublished"
                                            value={formData.isPublished}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                                        >
                                            <option value="true">Published</option>
                                            <option value="false">Draft</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
                                <ReactQuill
                                    theme="snow"
                                    value={formData.content}
                                    onChange={handleContentChange}
                                    modules={quillModules}
                                    formats={quillFormats}
                                    className="h-64 mb-12"
                                />
                            </div>
                            
                            <div className="flex justify-end space-x-3 pt-4 border-t">
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
                                    className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700"
                                >
                                    {editingBlog ? 'Update Blog' : 'Create Blog'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogAdmin;