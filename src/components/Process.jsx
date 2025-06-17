import React from 'react';

export default function ProcessComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Process</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Step 1</h3>
            <p className="text-gray-600">
              Process description goes here. This is a placeholder for the actual process content.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Step 2</h3>
            <p className="text-gray-600">
              Process description goes here. This is a placeholder for the actual process content.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Step 3</h3>
            <p className="text-gray-600">
              Process description goes here. This is a placeholder for the actual process content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}