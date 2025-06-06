import React from "react";

interface CreateDepartmentModalProps {
  closeModal: () => void;
}

const CreateDepartmentModal: React.FC<CreateDepartmentModalProps> = ({
  closeModal,
}) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Create New Department</h2>
      <form>
        <input
          type="text"
          placeholder="Department Name"
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="bg-gray-200 px-4 py-2 rounded"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDepartmentModal;
