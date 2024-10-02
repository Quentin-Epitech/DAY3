// Write your code here...
function findHousing(housingToFind, housingList) {
    
    let ind = 0;

    while (ind < housingList.length) {
        	if (housingList[ind] === housingToFind)
        
        {
            	return [ind, housingList[ind]];
        }
        ind++;
    }

   		return [-1, null];
}

//Use console.log to debug you're code ! It is very useful
console.log("I'm debugging")

//Some code to display your function output: (you must modify it but /!\ do not deliver it /!\ ). Only deliver your function
displayResult([9, "House"])
