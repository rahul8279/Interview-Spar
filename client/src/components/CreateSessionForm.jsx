import React, { useState } from 'react'

function SessionForm({closeModal}) {
    const [targetRole, setTargetRole] = useState('');
    const [experience, setExperience] = useState('');
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Log the new form data on submission
        console.log('Form Submitted', { targetRole, experience, topic, description });
        closeModal(); // Close the modal after submission
    };

    return (
        // Modal Overlay: Covers the entire screen
        <div className="fixed inset-0  bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300">
            
            {/* Modal Content */}
            <div className="bg-black text-white p-8 rounded-xl shadow-2xl w-full max-w-lg mx-4 transform transition-all duration-300">
                
                {/* Modal Header */}
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold">Create a New Session</h2>
                    <p className="text-gray-400 mt-2">
                        Fill in the details below to schedule your session. <br/>
                        This information will help others understand the purpose.
                    </p>
                </div>

                {/* Session Form */}
                <form onSubmit={handleSubmit}>
                    {/* Target Role Input */}
                    <div className="mb-4">
                        <label htmlFor="targetRole" className="block text-gray-300 font-semibold mb-2">
                            Target Role
                        </label>
                        <input
                            type="text"
                            id="targetRole"
                            value={targetRole}
                            onChange={(e) => setTargetRole(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            placeholder="e.g., Frontend Developer"
                            required
                        />
                    </div>

                    {/* Experience Input */}
                    <div className="mb-4">
                        <label htmlFor="experience" className="block text-gray-300 font-semibold mb-2">
                            Experience
                        </label>
                        <input
                            type="text"
                            id="experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            placeholder="e.g., 2-4 Years"
                            required
                        />
                    </div>
                    
                    {/* Topic to Focus Input */}
                    <div className="mb-4">
                        <label htmlFor="topic" className="block text-gray-300 font-semibold mb-2">
                            Topic to Focus
                        </label>
                        <input
                            type="text"
                            id="topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            placeholder="e.g., React State Management"
                            required
                        />
                    </div>

                    {/* Description Textarea */}
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-gray-300 font-semibold mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                            rows="4"
                            placeholder="Provide a brief summary of the session..."
                            required
                        ></textarea>
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-black text-white font-semibold rounded-lg border border-white hover:bg-white hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            Create Session
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SessionForm