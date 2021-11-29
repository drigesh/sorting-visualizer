export function getQuickSortAnimations(auxiliaryArray,pivot) {
    const animations = [];
    if (auxiliaryArray.length <= 1) return auxiliaryArray;
    // const auxiliaryArray = array.slice();
    quickSortHelper(auxiliaryArray, 0, auxiliaryArray.length - 1,pivot, animations);
    // array.sort(function(a,b){
    //     return a-b;
    // });
    // if(arraysAreEqual(array,auxiliaryArray)){
    //     console.log("yes");
    // }
    // else{
    //     console.log("no");
    // }
    // console.log("main ",array);
    // console.log("auxi ",auxiliaryArray);
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
  
  function swap(auxiliaryArray,a,b){
      let temp = auxiliaryArray[a];
      auxiliaryArray[a]=auxiliaryArray[b];
      auxiliaryArray[b]=temp;
  }

  function quickSortHelper(
    auxiliaryArray,
    startIdx,
    endIdx,
    pivot,
    animations,
  ) {
    if (startIdx >= endIdx) return;
    const lastIdx = endIdx;
    pivot.push(lastIdx);
    let i=startIdx;

    // animations.push([lastIdx,m])
    

    for(let j=startIdx;j<endIdx;j++){
        animations.push([i,j]);
        animations.push([i,j]);
        if(auxiliaryArray[j]<auxiliaryArray[lastIdx]){
            swap(auxiliaryArray,j,i);
            animations.push([i,auxiliaryArray[i]]);
            animations.push([j,auxiliaryArray[j]]);
            i++;
        }
        else{
          animations.push([i,auxiliaryArray[i]]);
          animations.push([j,auxiliaryArray[j]]);
        }
        
    }
    swap(auxiliaryArray,lastIdx,i);
    animations.push([i,lastIdx]);
    animations.push([i,lastIdx]);
    animations.push([i,auxiliaryArray[i]]);
    animations.push([lastIdx,auxiliaryArray[lastIdx]]);

    quickSortHelper(auxiliaryArray,startIdx,i-1,pivot,animations);
    quickSortHelper(auxiliaryArray,i+1,endIdx,pivot,animations);
    
    
    // quickSortHelper(auxiliaryArray, startIdx, lastIdx, mainArray, animations);
    // quickSortHelper(auxiliaryArray, lastIdx + 1, endIdx, mainArray, animations);
    // doMerge(mainArray, startIdx, lastIdx, endIdx, auxiliaryArray, animations);
  }
  