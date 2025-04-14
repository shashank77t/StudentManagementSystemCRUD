


const idField = document.getElementById("id");
    const nameField = document.getElementById("name");
    const departmentField = document.getElementById("dept");
    const ageField = document.getElementById("age");
document.addEventListener("DOMContentLoaded", fetchStudent);

 async function fetchStudent() {
    try {
        const response = await fetch("http://localhost:8080/student/viewAllStudents");
        console.log("Fetching student data...");

        if (!response.ok) {
            throw new Error("Failed to fetch students");
        }

        const students = await response.json();
        console.log(students);

        // Call function to display students in the table
        displayStudents(students);

    } catch (error) {
        console.log("Error fetching student data:", error);
    }
}

  function displayStudents(students) {
    const tbody = document.getElementById("tbody");
    if (!tbody) {
        console.error("Element with id 'tbody' not found in the DOM.");
        return;
    }
    tbody.innerHTML =''; // Clear previous entries

    if (students.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5">No students found</td></tr>`;
        return;
    }

    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.department}</td>
            <td>${student.age}</td>
            <td>
                <button class="btn btn-primary" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
<td> 
   
    <button class="btn btn-secondary" 
      onclick="updateStudent(${student.id})">
      Update
    </button>
  
</td>
        `;
        tbody.appendChild(row);
    });
}





async function deleteStudent(id) {
    const baseURL = `http://localhost:8080/student/deleteStudent?id=${id}`; // ✅ Pass as a query param

    try {
        const response = await fetch(baseURL, {
            method: "DELETE", // ✅ Use DELETE request
        });

        if (response.ok) {
            fetchStudent();
            //alert("Student deleted successfully");
            // ✅ Refresh the student list
        } else {
            console.error("Failed to delete student");
            alert("Failed to delete student");
        }
    } catch (error) {
        console.error("Error while deleting the student:", error);
    }
}
window.deleteStudent = deleteStudent;
window.updateStudent=updateStudent;
window.displayStudents=displayStudents;
window.fetchStudent=fetchStudent;
// Updatestudent.jsw0
 function updateStudent(id){
    window.location.href=`updateStudent.html?id=${id}`;
}
function goToHome(){
    window.location.href="index.html";
}