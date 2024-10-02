// Write your code here...
let housingList=new Map()
function addHousing(housinglist,newHouse,quantity){
if (housingList.has(newHouse)) 
{  housingList.set(newHouse, housingList.get(newHouse) + quantity);} 
else {housingList.set(newHouse, quantity);}
}


addHousing(housingList , "Flat",2)
addHousing(housingList , "Log",3)
addHousing(housingList ,"Flat",3)
addHousing(housingList ,"Hutch",2)

displayResult(housingList)




// Here is some code to test and display your function output:
// (you must modify it to test out your code but /!\ do not deliver it /!\ ). Only deliver your function
