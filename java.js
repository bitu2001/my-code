 function addNewWe(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')

    newNode.setAttribute("rows",3)

    newNode.setAttribute('placeholder', 'Enter Here')

    let weOb=document.getElementById("we")
    let weAddButtonOb=document.getElementById('weAddButton')

    weOb.insertBefore(newNode,weAddButtonOb)

 }
 function addNewAq(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add('mt-2')

    newNode.setAttribute("rows",3)

    newNode.setAttribute('placeholder', 'Enter Here')

    let weOb=document.getElementById("aq")
    let weAddButtonOb=document.getElementById('aqAddButton')

    weOb.insertBefore(newNode,weAddButtonOb)
 }
 //Generating cv
 function generatecv(){
   console.log("Generating cv")
 //Name catch
   let nameFieldOb=document.getElementById("nameField").value;
   let nameT1=document.getElementById("nameT1");
   nameT1.innerHTML=nameFieldOb;
   document.getElementById('nameT2').innerHTML=nameFieldOb;
//Contact catch
   let contactfield=document.getElementById("contactField").value;
   let contactT1=document.getElementById("contactT");
   contactT1.innerHTML=contactfield;
//Address catch
   let addressfield=document.getElementById("addrssField").value
   let addresst=document.getElementById('addressT');
   addresst.innerHTML=addressfield
//Link Catch
   document.getElementById('fbT').innerHTML=document.getElementById('fbField').value
   document.getElementById('instaT').innerHTML=document.getElementById('instaField').value
   document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value


   //Objective set
   document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value


   //work exp

   let wes=document.getElementsByClassName('weField');

   let str=""

   for(let e of wes){
      str=str+`<li>${e.value}</li>`;
   }
   document.getElementById('weT').innerHTML=str;


   //Eq

   let aq=document.getElementsByClassName('eqField');
   let str1="";
   
   for(let a of aq){
      str1=str1+`<li>${a.value}</li>`
   }
   document.getElementById('eqT').innerHTML=str1;

   //Code for img 

   let file=document.getElementById('imgField').files[0];
   // console.log(file);

let reader=new FileReader()

if(file){
   reader.readAsDataURL(file);
reader.onloadend=function(){
   document.getElementById('imgT').src=reader.result;
}
} 
// console.log(reader.result)

//set the img to template

document.getElementById('imgT').src=reader.result;

   document.getElementById('cv-form').style.display='none'
   document.getElementById('cvt').style.display='block'

 }

 //printcv

 function printcv(){
   window.print();
 }
 