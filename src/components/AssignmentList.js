import React from "react";

const AssignmentList = ({ assignments, toggleCompletion }) => {
    return (
        <div>
            <h2>Assignment List</h2>
            {assignments.length === 0 ? (
                <p>No assignments added yet.</p>
            ) : (
                <ul>
                    {assignments.map((assignment, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>
                            <strong>Class:</strong> {assignment.className} <br />
                            <strong>Title:</strong> {assignment.title} <br />
                            <strong>Due Date:</strong> {assignment.dueDate} <br />
                            <strong>Grade:</strong> {assignment.grade} <br />
                            <strong>Status:</strong>{" "}
                            {assignment.completed ? "Completed" : "Pending"} <br />
                            <button onClick={() => toggleCompletion(index)}>
                                {assignment.completed ? "Mark as Pending" : "Mark as Completed"}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AssignmentList;
