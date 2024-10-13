usersInput = prompt(`
  Input numbers seperated by commas:
  `)
let array= usersInput.split(`,`);

//console.log(array)

let length= getLength;
function getLength(){
  array.length
  //console.log(array.length)
}

getLength();
  



function getSums(){
  let sum = 0;
for (let i=0; i < length; i++){
    sum += array[i];
  }
  return sum
};
getSums();
//console.log(getSums)

function getMean(){
  let average=0;
  for( let i=0; i < length ; i++){
   let currentNum = array[1];
   average+= currentNum; 
   
  }
  return average
};
getMean();
//console.log(getMean)

function getMax(){
let max= Math.max(...array);}
return getMax
getMax();

function getMin(){
let min= Math.min(...array);
}
return getMin

getMin();

//console.log( `Max: $(max), Min: $(min)`);

function getRange(min, max){
  let range= [];
  for(let i= min; i <= max; i++){
    range.push(i);
    return range;
  }
};
//console.log(getRange)
getRange();

function findEvenNumbers(){
  let newArr= [];
  for (let i=0; i< length; i++){
        if (arr[i] % 2 === 0){
          newArr.push(arr[i]);
        }
  }
  return newArr;
}
findEvenNumbers();
//console.log(findEvenNumbers);

function findOddNumbers(){
  let newArr= [];
  for( let i=0; i < length; i++){
    if (arr[1] %2 !== 0){
      newArr.push(arr[i]);

    }
  }
  return newArr;
}
findOddNumbers();
//console.log(findOddNumbers);

console.log(array);
console.log(getLength);
console.log(getSums);
console.log(getMean);
console.log(getMin);
console.log(getMax);
console.log(getRange);
console.log(findOddNumbers);
console.log(findOddNumbers);