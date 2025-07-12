import React from 'react';

export default function BusinessCardRequest() {
  return (
    <div className="bg-yellow-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-amber-800 mb-1">Business Card Request</h1>
        <p className="text-sm text-gray-600 mb-6">Request new business cards for your professional needs.</p>

        {/* Number of Copies */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="border-2 border-amber-500 bg-yellow-50 rounded-md p-6 text-center cursor-pointer">
            <p className="text-xl font-semibold text-amber-700">200</p>
            <p className="text-sm text-gray-700">Copies</p>
          </div>
          <div className="border-2 rounded-md p-6 text-center cursor-pointer hover:border-amber-500">
            <p className="text-xl font-semibold text-amber-700">400</p>
            <p className="text-sm text-gray-700">Copies</p>
          </div>
        </div>

        {/* Employee Information */}
        <div className="bg-gray-50 p-6 rounded-md border mb-6">
          <h2 className="text-md font-semibold mb-4">Employee Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">Employee Name</label>
              <input type="text" value="Fatma Alkuwari" readOnly className="input" />
            </div>
            <div>
              <label className="text-sm">Job Title</label>
              <input type="text" value="Management Information System" readOnly className="input" />
            </div>
            <div>
              <label className="text-sm">Department</label>
              <input type="text" value="Information System" readOnly className="input" />
            </div>
            <div>
              <label className="text-sm">Office Location</label>
              <input type="text" value="Building A - Floor 3 - Room 312" readOnly className="input" />
            </div>
            <div>
              <label className="text-sm">Phone Number</label>
              <input type="text" value="+974 4444 5555" readOnly className="input" />
            </div>
            <div>
              <label className="text-sm">Extension</label>
              <input type="text" value="312" readOnly className="input" />
            </div>
            <div className="col-span-2">
              <label className="text-sm">Email Address</label>
              <input type="text" value="fatma.alkuwari@qnc.gov.qa" readOnly className="input" />
            </div>
          </div>
        </div>

        {/* Business Card Preview */}
        <div className="bg-gray-50 p-6 rounded-md border mb-6">
          <h2 className="text-md font-semibold mb-4">Business Card Preview</h2>
          <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Qatar National Council</h3>
            <p className="text-sm text-orange-200 mb-2">Excellence in Governance</p>
            <hr className="border-orange-300 mb-2" />
            <p className="font-semibold">Fatma Alkuwari</p>
            <p className="text-sm">Management Information System</p>
            <p className="text-sm">+974 4444 5555 Ext: 312</p>
            <p className="text-sm">fatma.alkuwari@qnc.gov.qa</p>
            <p className="text-sm">Building A - Floor 3 - Room 312</p>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="bg-gray-50 p-6 rounded-md border mb-6">
          <label className="block text-sm font-medium mb-2">Additional Notes</label>
          <textarea
            className="w-full p-3 border rounded-md"
            rows={4}
            placeholder="Any special requirements or notes for your business cards..."
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 border border-gray-400 rounded-md text-gray-700">Save as Draft</button>
          <button className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800">Submit Request</button>
        </div>
      </div>
    </div>
  );
}
