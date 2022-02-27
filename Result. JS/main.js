function checkgrade() {

    var mark = document.getElementById("mark").value;
    var grade;
    if (mark < 33 && mark >= 0) {
        grade = "F";
    }
    else if (mark >= 33 && mark < 50) {
        grade = "C";
    }
    else if (mark >= 50 && mark < 60) {
        grade = "B";
    }
    else if (mark >= 60 && mark < 70) {
        grade = "A-";
    }
    else if (mark >= 70 && mark < 80) {
        grade = "A";
    }
    else if (mark >= 80 && mark <= 100) {
        grade = "A+";
    }else{
        document.getElementById("result").innerHTML = "Invalid Number. Please try with the valid one";
        grade = "invalid";
    }

    if(grade != "invalid"){
        document.getElementById("result").innerHTML = "Result is " + grade;
    }
    
}



//  Jquery Code

$

