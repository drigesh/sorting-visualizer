export function getBubbleSortAnimations(myArray) {
    const animations = [];
    if (myArray.length <= 1) return myArray;
    // const array = myArray.slice();
    bubbleSortHelper(myArray, 0, myArray.length - 1, animations);
    // array.sort(function(a,b){
    //     return a-b;
    // });
    // if(arraysAreEqual(array,myArray)){
    //     console.log("yes");
    // }
    // else{
    //     console.log("no");
    // }
    // console.log("main ",array);
    // console.log("auxi ",myArray);
    return animations;
  }

  function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
  
  function swap(myArray,a,b){
      let temp = myArray[a];
      myArray[a]=myArray[b];
      myArray[b]=temp;
  }

  function bubbleSortHelper(
    myArray,
    startIdx,
    endIdx,
    animations,
  ) {

    // animations.push([lastIdx,m])
    
    for(let i=endIdx;i>=0;i--){
        for(let j=startIdx;j<i;j++){
            animations.push([j,j+1]);
            animations.push([j,j+1]);
            if(myArray[j]>myArray[j+1]){
                swap(myArray,j,j+1);
            }
            animations.push([j,myArray[j]]);
            animations.push([j+1,myArray[j+1]]);
            
        }
    }

    
    // quickSortHelper(myArray, startIdx, lastIdx, mainArray, animations);
    // quickSortHelper(myArray, lastIdx + 1, endIdx, mainArray, animations);
    // doMerge(mainArray, startIdx, lastIdx, endIdx, myArray, animations);
  }
  