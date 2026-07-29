import React, { useState, useEffect } from 'react';
import { programAPI } from '../api';

const Programs = () => {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPrograms();
    }, []);

    const fetchPrograms = async () => {
        try {
            const response = await programAPI.getAll();
            setPrograms(response.data);
        } catch (error) {
            console.error('Failed to fetch programs:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Programs & Events</h1>
                
                <div className="space-y-8">
                    {programs.map((program) => (
                        <div key={program._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="p-8">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">{program.title}</h2>
                                    <div className="mt-2 md:mt-0">
                                        <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
                                            {new Date(program.date).toLocaleDateString('en-US', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>
                                
                                <p className="text-gray-600 mb-6">{program.description}</p>
                                
                                <div className="flex flex-wrap items-center justify-between">
                                    {program.venue && (
                                        <div className="flex items-center mb-4 md:mb-0">
                                            <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="text-gray-700">{program.venue}</span>
                                        </div>
                                    )}
                                    
                                    {program.pdfUrl && (
                                        <a
                                            href={program.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Download Program PDF
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {programs.length === 0 && (
                    <div className="text-center py-12">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="mt-4 text-gray-500 text-lg">No programs available at the moment</p>
                        <p className="text-gray-400">Check back later for upcoming events!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Programs;