import React from 'react';

interface ConfirmLeaveModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmLeaveModal({ onConfirm, onCancel }: ConfirmLeaveModalProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white w-72 p-4 rounded shadow-lg text-center">
        <h2 className="text-lg font-bold mb-3">Confirm Leave</h2>
        <p className="text-gray-700 mb-5">
          Are you sure you want to go back? Changes will not be saved.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="px-3 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition-colors"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}