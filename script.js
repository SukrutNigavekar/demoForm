function result(){  
    document.getElementById("result1").innerHTML =  "First name: "+document.getElementById("fname").value;
    document.getElementById("result2").innerHTML = "Last name: "+document.getElementById("lname").value;
    var Gender = document.getElementsByName('Gender');
    for(i=0;i< Gender.length;i++){
        if(Gender[i].checked){
            document.getElementById("result3").innerHTML = "Gender: "+ Gender[i].value;
        }
    }   
}