package Student_Management_System.Student_Management_System.Controller;

import Student_Management_System.Student_Management_System.Model.Student;
import Student_Management_System.Student_Management_System.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//http://127.0.0.1:5500/index.html
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;
    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student){
       return studentService.addStudent(student);
    }

    @PutMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student student,@RequestParam int id){
        return studentService.updateStudent(student,id);
    }

    @DeleteMapping("/deleteStudent")
    public String deleteStudent(@RequestParam int id){
         return studentService.deleteStudent(id);
    }

    @GetMapping("/viewAllStudents")
    public List<Student> viewAllStudents(){
        return studentService.viewAllStudents();
    }
     @GetMapping("/viewStudentById")
    public Optional<Student> viewStudentById(@RequestParam int id){
        return studentService.viewStudentById(id);
     }


}
