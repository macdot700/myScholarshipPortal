let submtBtn=document.getElementById("submtBtn")
let firstName=document.getElementById("firstName")
let lastName=document.getElementById("lastName")
let age=document.getElementById("age")
let gender=document.getElementById("gender")
let nationality=document.getElementById("nationality")
let phoneNumber=document.getElementById("phoneNumber")
let school=document.getElementById("school")
let subjects=["Biology","Physics","Chemistry","Geography","Government","Commerce","Economics","Agricultural Science","Further Mathematics","Lit-In-English","Financial Accounting","Civic Education"]
let subjects1=document.getElementById("subjects1")
let subjects2=document.getElementById("subjects2")
let subjects3=document.getElementById("subjects3")
let subjects4=document.getElementById("subjects4")
let subjects5=document.getElementById("subjects5")
let subjects6=document.getElementById("subjects6")
let grade1=document.getElementById("grade1")
let grade2=document.getElementById("grade2")
let grade3=document.getElementById("grade3")
let grade4=document.getElementById("grade4")
let grade5=document.getElementById("grade5")
let grade6=document.getElementById("grade6")
let grade7=document.getElementById("grade7")
let grade8=document.getElementById("grade8")
let agePoints=0
let countryPoints=0
let gradePoints=0
let gradeScores





submtBtn.addEventListener('click', function(){
    validateForm();
})


subjects1.addEventListener("change", function () {
    let subjectIndex=subjects1.value
    subjects.splice(subjectIndex, 1)
    loopSubjects2()
    loopSubjects3()
    loopSubjects4()
    loopSubjects5()
    loopSubjects6()
})

subjects2.addEventListener("change", function () {
    let subjectIndex=subjects2.value
    subjects.splice(subjectIndex, 1)
    loopSubjects3()
    loopSubjects4()
    loopSubjects5()
    loopSubjects6()
})

subjects3.addEventListener("change", function () {
    let subjectIndex=subjects3.value
    subjects.splice(subjectIndex, 1)
    loopSubjects4()
    loopSubjects5()
    loopSubjects6()
})

subjects4.addEventListener("change", function () {
    let subjectIndex=subjects4.value
    subjects.splice(subjectIndex, 1)
    loopSubjects5()
    loopSubjects6()
})

subjects5.addEventListener("change", function () {
    let subjectIndex=subjects5.value
    subjects.splice(subjectIndex, 1)
    loopSubjects6()
})

subjects6.addEventListener("change", function () {
    let subjectIndex=subjects6.value
    subjects.splice(subjectIndex, 1)
})



loopSubjects1()
loopSubjects2()
loopSubjects3()
loopSubjects4()
loopSubjects5()
loopSubjects6()
function loopSubjects1() {
    let allOptions=""
    for(let a=0; a< subjects.length; a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
    }
subjects1.innerHTML=` <option value="">Select subject</option> ${allOptions}`
}
function loopSubjects2() {
    let allOptions=""
    for(let a=0; a< subjects.length; a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
    }
subjects2.innerHTML=` <option value="">Select subject</option> ${allOptions}`
}
function loopSubjects3() {
    let allOptions=""
    for(let a=0; a< subjects.length; a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
    }
subjects3.innerHTML=` <option value="">Select subject</option> ${allOptions}`
}
function loopSubjects4() {
    let allOptions=""
    for(let a=0; a< subjects.length; a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
    }
subjects4.innerHTML=` <option value="">Select subject</option> ${allOptions}`
}
function loopSubjects5() {
    let allOptions=""
    for(let a=0; a< subjects.length; a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
    }
subjects5.innerHTML=` <option value="">Select subject</option> ${allOptions}`
}
function loopSubjects6() {
    let allOptions=""
    for(let a=0; a< subjects.length; a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
    }
subjects6.innerHTML=` <option value="">Select subject</option> ${allOptions}`
}


function validateForm() {
    if (firstName.value==""){
        alert("Input your first name")
        }else if(lastName.value==""){
            alert("Input your last name")
        }else if(age.value==""){
            alert("How old are you?")
        }else if(gender.value==""){
            alert("What is your gender?")
        }else if(nationality.value==""){
            alert("What is your nationality?")
        }else if(phoneNumber.value==""){
            alert("Input your phone number")
        }else if(school.value==""){
            alert("Number 7 can't be blank")
          }
         else if(subjects==""){
            alert("Select your subjects completely")
          
        }else{
            ageAction()
        }
    }
        
function ageAction() {
    if (age.value=="18Years") {
        agePoints= agePoints + 100
        console.log("100 age points")
        }
        else if(age.value=="25Years"){
        agePoints= agePoints + 80
        console.log("80 age points")
        }
        else if(age.value=="31Years"){
        agePoints= agePoints + 50
        console.log("50 age points")
        }
        else if (age.value=="36Years"){
        agePoints= agePoints + 30
        console.log("30 age points")
        }
        else if (age.value=="41Years"){
        agePoints= agePoints + 10
        console.log("10 age points")
        }
        
        validateCountry()
        
    }
    

function validateCountry() {
    if (nationality.value=="africa"){
        countryPoints=countryPoints + 50
        console.log("50 country points")
    }
    else if (nationality.value=="asia"){
        countryPoints=countryPoints + 40
        console.log("40 country points")
    }
    else if (nationality.value=="southAmerica"){
        countryPoints=countryPoints + 30
        console.log("30 country points")
    }
    else if (nationality.value=="northAmerica"){
        countryPoints=countryPoints + 20
        console.log("20 country points")
    }
    else if (nationality.value=="rWorld"){
        countryPoints=countryPoints + 10
        console.log("10 country points")

    }
    
        validateGrade()
    
    }

    function validateGrade() {
        let gradeScores
    
        gradeScores= parseInt(grade1.value) + parseInt(grade2.value) + parseInt(grade3.value) + parseInt(grade4.value) + parseInt(grade5.value) + parseInt(grade6.value) + parseInt(grade7.value) + parseInt(grade8.value)
        console.log("Student grade scores=" +gradeScores);
    
        averageScores = (gradeScores)/8
        console.log("Average grade is:" + averageScores); 
    
        if (averageScores >= 90 && averageScores <= 101) {
            gradePoints=gradePoints + 150;
            console.log("150 grade points")
        }else if (averageScores>=85 && averageScores <=90) {
            gradePoints=gradePoints + 140;
            console.log("140 grade points");
        }else if (averageScores>=75 && averageScores<=85) {
            gradePoints=gradePoints + 120;
            console.log("120 grade points");
        }else if (averageScores>=65 && averageScores <=75) {
            gradePoints=gradePoints + 100;
            console.log("100 grade points");
        }else if (averageScores>=60 && averageScores<=65) {
            gradePoints=gradePoints + 80;
            console.log("80 grade points");
        }else if (averageScores>=50 && averageScores<=60) {
            gradePoints=gradePoints + 50;
            console.log("50 grade points");
        }else if (averageScores>=40 && averageScores<=50) {
            gradePoints=gradePoints + 20;
            console.log("20 grade points");
        }
            conclusion()
        
    }


    function myChart() {

        const labels = [
            'Age Points',
            'Country Points',
            'Grade Points',  
          ];
          const data = {
            labels: labels,
            datasets: [{
              label: 'Student qualification points',
              backgroundColor:['rgb(255, 99, 132)', 'rgb(0,128,0)', 'rgb(0,128,128)'],
              borderColor: 'rgb(255, 99, 132)',
              data: [agePoints, countryPoints, gradePoints],
            }]
          };
          const config = {
            type: 'bar',
            data: data,
            options: {}
          };
          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );          
        }

    function conclusion() {
        if (agePoints + countryPoints + gradePoints >= 180){
            alert("Hooray!! You are qualified for this scholarship")
            totalPoints = (agePoints) + (countryPoints) + (gradePoints)
            console.log("Student total points is:" +totalPoints)
            myChart()
        }
        else if (agePoints + countryPoints + gradePoints < 180){
            alert("Sorry, you are not qualified. You can try applying again next year")
            console.log("Student total points is:" +totalPoints)
        }
    }


    
