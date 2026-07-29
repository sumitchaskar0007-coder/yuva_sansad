import React, { useState, useEffect } from 'react';
import { galleryAPI } from '../api';

const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchGalleryItems();
    }, []);

    const fetchGalleryItems = async () => {
        try {
            const response = await galleryAPI.getAll();
            setGalleryItems(response.data);
        } catch (error) {
            console.error('Failed to fetch gallery items:', error);
        } finally {
            setLoading(false);
        }
    };

    const getFilteredItems = () => {
        if (filter === 'all') return galleryItems;
        return galleryItems.filter(item => item.category === filter);
    };

    const categories = ['all', ...new Set(galleryItems.map(item => item.category).filter(Boolean))];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Gallery</h1>
                
                {/* Filter */}
                {categories.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    filter === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {category === 'all' ? 'All' : category}
                            </button>
                        ))}
                    </div>
                )}

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {getFilteredItems().map((item) => (
                        <div key={item._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="relative h-64">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-3">{item.description}</p>
                                {item.category && (
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {getFilteredItems().length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No gallery items found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;