import Course from './Course'; // assuming component exists
import PropTypes from 'prop-types';

function CourseList(){

    const Courses =[
        {
            name:"Tharsan",
            age:23,
            location:1,
            role:"Developer"
        },
        {
            name:"Sathish",
            age:25,
            location:"Coimbatore",
            role:"Designer"
        },
        {
            name:"Ramesh",
            age:26,
            location:"bangalore",
            role:"Tester"
        },
        {
            name:"Rahul",
            age:25,
            location:"Chinna",
            role:"Debug"
        }
    
    ]

    Courses.sort((x,y)=>x.age-y.age)

    const minorAge =Courses.filter((courses)=>courses.age<25)

    const courseItems = Courses
    
    .map((course,index)=>(
        <Course 
         key={index}
            name={course.name}
            age={course.age}
            location={course.location}
            role={course.role}
        />
    ))

    return(
        <>
            {courseItems}
        </>
    )
}


CourseList.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  location: PropTypes.string,
  role: PropTypes.string
};

export default CourseList;
