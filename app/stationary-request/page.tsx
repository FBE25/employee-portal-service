'use client';
import { useState } from 'react';

export default function StationaryRequestPage() {
  const [items, setItems] = useState([
    { name: 'A4 Notebooks', quantity: 1 },
    { name: 'Blue Pens', quantity: 5 },
    { name: 'Black Pens', quantity: 5 },
    { name: 'Highlighters', quantity: 3 },
    { name: 'Sticky Notes', quantity: 2 },
    { name: 'Paper Clips', quantity: 1 },
    { name: 'Stapler', quantity: 1 },
    { name: 'File Folders', quantity: 10 },
  ]);

  const handleAddItem = () => {
    setItems([...items, { name: '', quantity: 1 }]);
  };

  const handleRemoveItem = (index: number) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  const handleChange = (index: number, field: string, value: string | number) => {
    const updated = [...items];
    // @ts-ignore
    updated[index][field] = value;
    setItems(updated);
  };

  return (
    <div className="bg-bgLight min-h-screen py-12 px-8 font-sans">
      <div className="bg-white p-10 rounded-xl shadow border border-gray-200 w-full">
        <h1 className="text-2xl font-bold text-primary mb-1">Stationary Request</h1>
        <p className="text-sm text-neutralText mb-6">Submit your office supplies request</p>

        {/* User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input disabled value="Fatma Alkuwari" className="input bg-gray-50" />
          <input disabled value="SR-2024-001" className="input bg-gray-50" />
          <input disabled value="Information System" className="input bg-gray-50" />
          <input disabled value="Building A - Floor 3 - Room 312" className="input bg-gray-50" />
          <input disabled value="+974 4444 5555 Ext: 312" className="input bg-gray-50 md:col-span-2" />
        </div>

        {/* Stationary Info */}
        <h2 className="text-lg font-semibold text-primary mb-4">Stationary Information</h2>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-3 items-center">
              <input
                value={item.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                className="input col-span-12 md:col-span-6"
                placeholder="Product"
              />
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleChange(index, 'quantity', +e.target.value)}
                className="input col-span-8 md:col-span-4"
                placeholder="Quantity"
              />
              <button
                onClick={() => handleRemoveItem(index)}
                className="text-red-600 col-span-4 md:col-span-2 text-sm hover:text-red-800"
              >
                🗑 Remove
              </button>
            </div>
          ))}
        </div>

        {/* Add Item */}
        <div className="mt-5">
          <button
            onClick={handleAddItem}
            className="bg-accent text-white px-4 py-2 rounded hover:bg-[#A7892E] transition"
          >
            + Add Item
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-3">
          <button className="bg-gray-100 text-neutralText px-6 py-2 rounded border hover:bg-gray-200">
            Save Draft
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-[#741234] transition">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
