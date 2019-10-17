// CODE here for your Lambda Classes
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person{
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak(){
        console.log(`Hello, I am ${this.name}. I am from ${this.location}.`)
    }
}



// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(Student, subject){
        console.log(`${Student.name} receives a perfect score on ${subject}.`);
    }
}

const Dan = new Instructor({
    name: 'Dan',
    age: 32,
    location: 'Raleigh, NC',
    specialty: 'Math',
    favLanguage: 'PHP',
    catchPhrase: 'Ah, zippity, zoop! haha! *finger guns*'
})

const Dorline = new Instructor({
    name: 'Dorline',
    age: 36,
    location: 'Omaha, NB',
    specialty: 'Graphic Design',
    favLanguage: 'React',
    catchPhrase: 'yarhh HARR DUUU!'
})

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person{
    constructor(stu_attrbs){
        super(stu_attrbs);
        this.previousBackground = stu_attrbs.previousBackground;
        this.className = stu_attrbs.className;
        this.favSubjects = stu_attrbs.favSubjects;
    }
    listsSubjects(){
        console.log(`${this.name}'s favorite subjects are: `) + this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge on ${subject}.`);
    }
}


const Abe = new Student({
    name: 'Abe',
    age: 22,
    location: 'Salem, OR',
    previousBackground: 'Carpenter',
    className: 'Web 23',
    favSubjects: ['HTML, Javascript, LESS']
})

const Maria = new Student({
    name: 'Maria',
    age: 20,
    location: 'Dallas, TX',
    previousBackground: 'Graphic Design',
    className: 'DS9',
    favSubjects: ['Python, SQL, Java']
})

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor{
    constructor(pm_attrbs){
        super(pm_attrbs);
            this.gradClassName = pm_attrbs.gradClassName;
            this.favInstructor = pm_attrbs.favInstructor;
    }
        standUp(channel){
            console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
        debugsCode(Student, subject){
            console.log(`${this.name} debugs ${Student.name}'s code on ${subject}.`);
    }
}


const Craig = new ProjectManager({
    name: 'Craig',
    age: 22,
    location: 'Jersey City, NJ',
    gradClassName: 'WebPT14',
    favInstructor: 'Dorline'
})

const Shelby = new ProjectManager({
    name: 'Shelby',
    age: 22,
    location: 'Seattle, WA',
    gradClassName: 'Web17',
    favInstructor: 'Dorline'
})

//* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes
console.log(Abe.name);
console.log(Craig.name);
console.log(Dorline.name);
Craig.standUp('web24_ft_Craig');
Craig.debugsCode(Abe, 'Javascript IV');
Abe.listsSubjects();
Abe.PRAssignment('Javascript III');
Abe.sprintChallenge('Javascript');
Dorline.demo('React II');
Dorline.grade(Maria, 'React II');



