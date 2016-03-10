/**
 * 
 */

function myFunction(){
	
	var ele = document.getElementById("name").value;
	
	prompt("Please Confirm your name:\n",ele);
}

function onSubmit(){
	
	var name = document.getElementById("name").value;
	
	var loc = document.getElementById("location");
	var index = loc.selectedIndex;
	var location = loc.options[index].text;
	
	var payMode;
	if (document.getElementById("net").checked) {
		payMode = document.getElementById("net").value;
		} 
	if (document.getElementById("visa").checked) {
		payMode = document.getElementById("visa").value;
		}
	if (document.getElementById("card").checked) {
		payMode = document.getElementById("card").value;
		}
	
	
	var offer1,offer2,offer3;
    if(document.getElementById("coupons").checked){
    offer1 = (document.getElementById("coupons").value);}
  
    if(document.getElementById("tickets").checked){
    offer2 = (document.getElementById("tickets").value);}
    
    if(document.getElementById("points").checked){
    offer3 = (document.getElementById("points").value);}
    var offers =new Array();
    
     offers[0] =offer1;
     offers[1] =offer2;
     offers[2] =offer3;
  if(confirm("Confirm Your Details \n"+"Customer Name : "+name+"\n Location : "+location+"\n Payment Mode : "+payMode+"\n Gifts : "+offers))
         alert("Thanks For Confirming");
     
     //values = values + "\n" + payMode + "\n" + offers; 
 	
 	alert(values);

} 