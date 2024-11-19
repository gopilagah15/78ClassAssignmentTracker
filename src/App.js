
import React, { useState } from "react"; 
import AssignmentForm from "./components/AssignmentForm";
import AssignmentList from "./components/AssignmentList";
import AssignmentReport from "./components/AssignmentReport";

const App = () => {
    const [assignments, setAssignments] = useState([]);

    const addAssignment = (assignment) => {
        setAssignments([...assignments, assignment]);
    };

    const toggleCompletion = (index) => {
        const updatedAssignments = [...assignments];
        updatedAssignments[index].completed = !updatedAssignments[index].completed;
        setAssignments(updatedAssignments);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Class Assignment Tracker</h1>
            <AssignmentForm addAssignment={addAssignment} />
            <AssignmentList assignments={assignments} toggleCompletion={toggleCompletion} />
            <AssignmentReport assignments={assignments} />
        </div>
    );
};

export default App;
