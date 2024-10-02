function houseEnergyScore(housingList) {
    
    function getEnergyGrade(consumption) {
        if (consumption < 51) {return 'A';
        } 
        
     else if (consumption < 90) {
            return 'B';
        } else if (consumption < 150) {
            return 'C';
   }else if (consumption < 230) {
            return 'D';
             } else if (consumption < 330) {
            return 'E';
      } else if (consumption < 450) {
            return 'F';
       } else {
            return 'G';
        }
    }   
    let gradedHouses = housingList.map(house => {let [houseType, consumption] = house;let grade = getEnergyGrade(consumption);
        return [houseType, consumption, grade];
    });
    
    gradedHouses.sort((a, b) => a[1] - b[1]);
    return gradedHouses;
}
if (typeof houseEnergyScore === "function") {
	const scores = [["Hutch", 30], ["Loft", 345], ["Castle", 560], ["Igloo", 12], ["Villa", 232], ["Flat", 212]];
	const result = houseEnergyScore(scores);
	displayResult(result);
}

const housingList = [['Igloo', 12],  ['Hutch', 30],  ['Flat', 212],  ['Villa', 232],  ['Loft', 345],  ['Castle', 560]
];
console.log(houseEnergyScore(housingList));
