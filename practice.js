'use strict'


//Write a function that takes an array of integers and 
//returns how many even numbers and odd numbers was there.

function oddeven (arr){
    let arr1=[];
    let even =0;
    let odd = 0;

    for (let i=0; i<arr.length; i++){
        if (arr[i]%2==0){
            even += 1;
        }
        else {
            odd += 1;
        }
    }
    console.log(odd,even);
    arr1[0]="the even num =" + even;
    arr1[1]="the odd num =" + odd;

    return arr1;
}

let oddEvenArray = [9,0,1,2,3,5,7];

//oddeven(oddEvenArray);

//************************************************************* */

// Write a function that takes two arrays of equal length and returns 
// a new array with the sum of the corresponding elements from each array.


function correspondindSum (arr1, arr2){
    let arr=[];
    
    if (arr1.length == arr2.length){
        for (let i=0; i<arr1.length; i++){
            arr[i] = arr1[i]+arr2[i];
        }
        return arr;
    }
    else {
        return "the two arrays are not equal length ";
    }
}

let sumArray1 = [1 ,8 ,4 ,8];
let sumArray2 = [1, 1, 1, 1];

let sumArray = correspondindSum(sumArray1, sumArray2);
//console.log(sumArray);

//************************************************************* */

// Write a function that takes an array of integers 
// and returns the second largest number in the array.


function secondLargest (arr){

    let arr1=arr;
    let index;
    let max = 0;
    let secondMax =0;

    for (let i=0; i<arr.length ; i++){
        if (arr[i] > max){
            max = arr[i];
            index = i;
        }
    }

     for (let j=0; j<arr.length; j++){
       if (arr[j]==max){
       }
        else if (arr[j] > secondMax){
            secondMax = arr[j];
        }
     }
    
     return secondMax;
}

console.log(secondLargest(sumArray1));
console.log(secondLargest(sumArray2));
console.log(secondLargest(oddEvenArray));


//************************************************************* */

// Write a function that takes an array of integers and 
// removes all the duplicates in the array.

function removeDublicates (arr){

    let arr1=arr;

    for (let i=0; i<arr.length ; i++){

        for (let j=0; j<arr.length; j++){
            if (i==j){

            }
            else if (arr1[j]==arr[i]){
                delete arr[i];
                arr[i]='non';
            }
        }
    }
    console.log(arr);
    return arr;
}

let duplicatesArray = [1 ,1 ,1 ,2 ,3 ,2 ,4];

removeDublicates(duplicatesArray);




