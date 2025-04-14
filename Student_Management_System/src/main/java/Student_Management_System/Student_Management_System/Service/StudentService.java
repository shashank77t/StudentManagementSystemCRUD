package Student_Management_System.Student_Management_System.Service;

import Student_Management_System.Student_Management_System.Model.Student;
import Student_Management_System.Student_Management_System.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student addStudent(Student student){


        return studentRepository.save(student);
    }

    public Student updateStudent(Student student,int id){
         Student s=studentRepository.findById(id).orElse(null);
         if(s==null)
             return null;
        s.setAge(student.getAge());
        s.setName(student.getName());
        s.setDepartment(student.getDepartment());
        return studentRepository.save(s);
    }

    public String deleteStudent(int id){
        studentRepository.deleteById(id);
        return "student deleted successfully";
    }

    public List<Student> viewAllStudents(){


        return studentRepository.findAll();
    }
    public Optional<Student> viewStudentById(int id){
        return studentRepository.findById(id);
    }

}
