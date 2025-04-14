async function handleSubmit(event){
    //prevent Default
    event.preventDefault();
    //get values
    const idField = document.getElementById("id");
  
    const nameField = document.getElementById("name");
    const departmentField = document.getElementById("dept");
    const ageField = document.getElementById("age");
    
    const id = parseInt(idField.value, 10);
    const name = nameField.value;
    const department = departmentField.value;
    const age = parseInt(ageField.value, 10);
    if (!id || !name || !department || !age) {
        alert("All fields (ID, Name, Department, Age) are required!");
        return; // Stop the function if validation fails
    }

   
    if (isNaN(id) || isNaN(age)) {
        alert("ID and Age must be valid numbers!");
        return;
    }

    const student = { id, name, department, age };
    console.log(student);
    // ageField.value=66
    const baseURL = "http://localhost:8080/student/addStudent";
    try {
        const response = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        if (response.ok) {
            alert("Student Added Successfully");

            // ✅ Clear input fields properly
            idField.value = "";
            nameField.value = "";
            departmentField.value = "";
            ageField.value = "";
        }
    } catch (error) {
        console.log("Error while adding the student: " + error);
    }
}


function redirectToviewStudent(){
    window.location.href="viewStudent.html";
}