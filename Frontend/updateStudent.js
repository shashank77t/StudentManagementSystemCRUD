
async function handleSubmit(){
  //  e.preventDefault();
  //  window.location.href="viewStudent.html";
 //const id=  parseInt(document.getElementById("updateId").value);

  const urlParams=new URLSearchParams(window.location.search);
  const id=urlParams.get('id');

 
 const name=  document.getElementById("updateName").value;
 const department=  document.getElementById("updateDept").value;
  const age= parseInt(document.getElementById("updateAge").value);
 

  if (!id || !name || !department || !age) {
    alert("All fields (ID, Name, Department, Age) are required!");
    return; // Stop the function if validation fails
}


if (isNaN(id) || isNaN(age)) {
    alert("ID and Age must be valid numbers!");
    return;
}
   const student={id,name,department,age};
  console.log(student);
    try {
      const response = await fetch(`http://localhost:8080/student/updateStudent?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
    
      if (response.ok) {
        alert("Student updated successfully!");
        window.location.href = "viewStudent.html";
      
      
      } else {
        alert("Failed to update student.");
      }

    } catch (error) {
      console.error("Update error:", error);
    }
  }
  document.addEventListener("DOMContentLoaded",()=>{
    const urlParams=new URLSearchParams(window.location.search);
     getStudentById(urlParams.get('id'));

  })
async function getStudentById(id){
  const baseURL=`http://localhost:8080/student/viewStudentById?id=${id}`;
  try{
   const response= await fetch(baseURL);
   if (response.ok) {
    console.log("Fetched successfully");
    const data = await response.json(); // await json() as well
    console.log(data);

    // Populate form fields with data
    document.getElementById("studentid").textContent = id;
    document.getElementById("updateName").value = data.name;
    document.getElementById("updateDept").value = data.department;
    document.getElementById("updateAge").value = data.age;

  } else {
    console.error("Failed to fetch: ", response.status);
  }
} catch (error) {
  console.log("Error: Can't fetch student with the ID: " + error);
}
}

