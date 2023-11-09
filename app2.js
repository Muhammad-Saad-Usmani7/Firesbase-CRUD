
document.getElementById("five").addEventListener('submit',(event)=>{
  event.preventDefault();
})

const obj1 = {
    button1 : document.getElementById('btn1'),
    button2 : document.getElementById('btn2'),
    button3 : document.getElementById('btn3'),
    button4 : document.getElementById('btn4'),

    ideez : function(){
      const rollNo = document.getElementById('Roll-no').value;
      const name = document.getElementById('Name').value;
      const department = document.getElementById('Department').value;
      const batch = document.getElementById('Batch').value;    
      
      return {
        rollno1 : rollNo,
        name1 : name,
        department1 : department,
        batch1 : batch,
      }
    }
}

obj1.button1.addEventListener("click",()=>{

    let data = obj1.ideez();

    firebase.database().ref('Student/' + data.rollno1)
    .set({
        Rollno : data.rollno1,
        Name : data.name1,
        department : data.department1,
        batch: data.batch1,
    }) ;  
    alert(" Data inserted successfully!");
    document.getElementById('Roll-no').value = "";
    document.getElementById('Name').value = "";
    document.getElementById('Department').value = "";
    document.getElementById('Batch').value = "";
})

obj1.button2.addEventListener("click",()=>{
 
  let data = obj1.ideez();
  
  firebase.database().ref('Student/' + data.rollno1)
  .on('value',(snap)=>{
    try{
      if(!snap.exists()){throw "Data not found!"}
    document.getElementById('Roll-no').value = snap.val().Rollno;
    document.getElementById('Name').value = snap.val().Name;
    document.getElementById('Department').value = snap.val().department;
    document.getElementById('Batch').value = snap.val().batch;
    
    } catch(mssg){alert(mssg)};
  });
  // alert(" Data read successfully!");

})

obj1.button3.addEventListener("click",()=>{
 
    let data = obj1.ideez();

    firebase.database().ref('Student/' + data.rollno1)
    .update({
        // Rollno : data.rollno1,
        Name : data.name1,
        department : data.department1,
        batch: data.batch1,
    }) ;
    alert("Data updated successfully!");
    document.getElementById('Roll-no').value = "";
    document.getElementById('Name').value = "";
    document.getElementById('Department').value = "";
    document.getElementById('Batch').value = "";

})


obj1.button4.addEventListener("click",()=>{
 
  let data = obj1.ideez();

  firebase.database().ref('Student/' + data.rollno1)
  .remove();
  alert("Data deleted successfully!");
  document.getElementById('Roll-no').value = "";
  document.getElementById('Name').value = "";
  document.getElementById('Department').value = "";
  document.getElementById('Batch').value = "";

})

