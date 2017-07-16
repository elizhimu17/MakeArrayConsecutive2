
function makeArrayConsecutive2(statues) {
    var missing=0;
    var sorted=statues.sort(function(a,b){
        return a-b;
    });  //to sort the numbers
    if(sorted.length===1){ //if array consists of only one element, returns 0
        return 0;
    }else{ 
        var min=sorted[0];
        var max=sorted[sorted.length-1];
        missing=max-min-(sorted.length-1); //count of missing numebrs i calcualted by taking difference between min and max values from sorted array.
        return missing;
        
    }
}

