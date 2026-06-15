function ListRendering() {
  const students = ["Rahul", "Amit", "Priya", "Sneha"];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListRendering;