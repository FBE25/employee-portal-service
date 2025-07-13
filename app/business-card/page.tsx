'use client';

import React from 'react';

export default function BusinessCardRequest() {
  return (
    <div className="bg-amber-50 min-h-screen p-8 font-sans">
      <h1 className="text-2xl font-bold text-[#8A1538] mb-1">Business Card Request</h1>
      <p className="text-sm text-[#5e0f26] mb-6">Request new business cards for your professional needs.</p>

      <div className="bg-white w-full p-8 rounded-xl shadow space-y-8 border border-gray-200">
        {/* Number of Copies */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 border-[#8A1538] bg-amber-50 rounded-md p-6 text-center cursor-pointer">
            <p className="text-xl font-semibold text-[#8A1538]">200</p>
            <p className="text-sm text-gray-700">Copies</p>
          </div>
          <div className="border-2 hover:border-[#8A1538] rounded-md p-6 text-center cursor-pointer">
            <p className="text-xl font-semibold text-[#8A1538]">400</p>
            <p className="text-sm text-gray-700">Copies</p>
          </div>
        </div>

        {/* Employee Info */}
        <section className="bg-gray-50 p-6 rounded-md border">
          <h2 className="text-md font-semibold text-[#8A1538] mb-4">Employee Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Employee Name</label>
              <input type="text" value="Fatma Alkuwari" readOnly className="input" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Job Title</label>
              <input type="text" value="Management Information System" readOnly className="input" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Department</label>
              <input type="text" value="Information System" readOnly className="input" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Office Location</label>
              <input type="text" value="Building A - Floor 3 - Room 312" readOnly className="input" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Phone Number</label>
              <input type="text" value="+974 4444 5555" readOnly className="input" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Extension</label>
              <input type="text" value="312" readOnly className="input" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-gray-700">Email Address</label>
              <input type="text" value="fatma.alkuwari@qnc.gov.qa" readOnly className="input" />
            </div>
          </div>
        </section>

        {/* Preview */}
        <section className="bg-gray-50 p-6 rounded-md border">
          <h2 className="text-md font-semibold text-[#8A1538] mb-4">Business Card Preview</h2>
          <div className="bg-gradient-to-r from-[#8A1538] to-[#a62644] text-white p-6 rounded-lg space-y-1">
            <h3 className="text-lg font-semibold">National Planning Council</h3>
            <p className="text-sm text-orange-200">Excellence in Governance</p>
            <hr className="border-orange-300" />
            <p className="font-semibold">Fatma Alkuwari</p>
            <p className="text-sm">Management Information System</p>
            <p className="text-sm">+974 4444 5555 Ext: 312</p>
            <p className="text-sm">fatma.alkuwari@qnc.gov.qa</p>
            <p className="text-sm">Building A - Floor 3 - Room 312</p>
          </div>
        </section>

        {/* Notes */}
        <section className="bg-gray-50 p-6 rounded-md border">
          <label className="block text-sm text-gray-700 font-medium mb-2">Additional Notes</label>
          <textarea
            className="w-full p-3 border rounded-md text-sm"
            rows={4}
            placeholder="Any special requirements or notes for your business cards..."
          />
        </section>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-6 py-2 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-100">
            Save as Draft
          </button>
          <button className="px-6 py-2 bg-[#8A1538] text-white rounded-md hover:bg-[#6f0f2c]">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
