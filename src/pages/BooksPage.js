import React, { useState } from "react";
import Navbar from "../components/Navbar";

const BooksCollection = ({ data, setData }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser({ ...user, isEditing: true });
  };

  const handleEditSubmit = () => {
    // Assuming you have a function to update the data in the parent component
    // Update the data and reset the selectedUser state
    setData((prevData) => {
      const updatedData = prevData.map((user) =>
        user.id === selectedUser.id ? selectedUser : user
      );
      return updatedData;
    });
    setSelectedUser(null);
  };

  const handleDelete = (id) => {
    const updatedData = [...data];
    delete updatedData[id];
    let filteredData = updatedData.filter((data) => data != null);
    setData(filteredData);
  };

  return (
    <div>
      <Navbar/>
      <table className="table mt-3">
        <thead className="bg-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author Name</th>
            <th scope="col">ISBN Number</th>
            <th scope="col">Publication Date</th>
            <th className="col-mt3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, index) => {
            return (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user?.title}</td>
                <td>{user?.author}</td>
                <td>{user?.isbn}</td>
                <td>{user?.date}</td>
                <td>
                  <button
                    className="btn btn-primary ms-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal for Editing */}
      {selectedUser && (
        <div className="modal" style={{ display: "block" }}>
          <div
            className="modal-content"
            style={{
              width: "500px",
              padding: "20px",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h2>Edit User</h2>
            <form>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  value={selectedUser.title}
                  onChange={(e) =>
                    setSelectedUser((prevUser) => ({
                      ...prevUser,
                      title: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label>Author Name:</label>
                <input
                  type="text"
                  value={selectedUser.author}
                  onChange={(e) =>
                    setSelectedUser((prevUser) => ({
                      ...prevUser,
                      author: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label>ISBN Number:</label>
                <input
                  type="text"
                  value={selectedUser.isbn}
                  onChange={(e) =>
                    setSelectedUser((prevUser) => ({
                      ...prevUser,
                      isbn: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label>Publication Date:</label>
                <input
                  type="date"
                  value={selectedUser.date}
                  onChange={(e) =>
                    setSelectedUser((prevUser) => ({
                      ...prevUser,
                      date: e.target.value,
                    }))
                  }
                />
              </div>
              <button
                className="btn btn-primary ms-2"
                onClick={() => handleEditSubmit()}
              >
                Save Changes
              </button>
              <button
                className="btn btn-secondary ms-2"
                onClick={() => setSelectedUser(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksCollection;
