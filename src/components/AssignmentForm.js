import React, { useState } from "react";

const AssignmentForm = ({ addAssignment }) => {
    const [className, setClassName] = useState("");
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [grade, setGrade] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!className || !title || !dueDate || !grade) {
            alert("Please fill all fields!");
            return;
        }
        addAssignment({
            className,
            title,
            dueDate,
            grade: parseFloat(grade),
            completed: false,
        });
        setClassName("");
        setTitle("");
        setDueDate("");
        setGrade("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Class Name"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Assignment Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
            <input
                type="number"
                placeholder="Grade (0-100)"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
            <button type="submit">Add Assignment</button>
        </form>
    );
};

export default AssignmentForm;
