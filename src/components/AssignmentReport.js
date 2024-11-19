import React from "react";

const AssignmentReport = ({ assignments }) => {
    const totalAssignments = assignments.length;
    const completedAssignments = assignments.filter((a) => a.completed).length;
    const averageGrade =
        assignments.length > 0
            ? (
                  assignments.reduce((sum, a) => sum + (a.completed ? a.grade : 0), 0) /
                  completedAssignments
              ).toFixed(2)
            : 0;

    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Assignment Report</h2>
            <p>Total Assignments: {totalAssignments}</p>
            <p>Completed Assignments: {completedAssignments}</p>
            <p>Average Grade (Completed Assignments): {isNaN(averageGrade) ? 0 : averageGrade}</p>
        </div>
    );
};

export default AssignmentReport;
