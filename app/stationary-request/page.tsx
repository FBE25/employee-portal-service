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
    { name: 'File Folders', quantity: 10 }
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
    <div className="bg-amber-50 min-h-screen p-10">
      <h1 className="text-2xl font-bold text-amber-900">Stationary Request</h1>
      <p className="mb-6 text-sm text-amber-800">Submit your office supplies request</p>

      <div className="bg-white p-6 rounded-xl shadow max-w-5xl">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input disabled value="Fatma Alkuwari" className="input" placeholder="Employee Name" />
          <input disabled value="SR-2024-001" className="input" placeholder="Request Number" />
          <input disabled value="Information System" className="input" placeholder="Department" />
          <input disabled value="Building A - Floor 3 - Room 312" className="input" placeholder="Office Location" />
          <input disabled value="+974 4444 5555 Ext: 312" className="input col-span-2" placeholder="Office Phone" />
        </div>

        <h2 className="text-lg font-semibold text-amber-900 mb-4">Stationary Information</h2>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-3 items-center">
              <input
                value={item.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                className="input col-span-6"
                placeholder="Product"
              />
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleChange(index, 'quantity', +e.target.value)}
                className="input col-span-4"
                placeholder="Quantity"
              />
              <button onClick={() => handleRemoveItem(index)} className="text-red-600 col-span-2">
                🗑
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button onClick={handleAddItem} className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
            + Add Item
          </button>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button className="bg-gray-100 px-6 py-2 rounded border">Save Draft</button>
          <button className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800">Submit Request</button>
        </div>
      </div>
    </div>
  );
}
