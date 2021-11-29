export function getRadixSortAnimations(myArray) {
    const animations = [];
    if (myArray.length <= 1) return myArray;
    // const array = myArray.slice();
    radixSortHelper(myArray, 0, myArray.length - 1, animations);
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
    let m = getMax(arr, n);
        for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
            countSort(arr, n, exp);
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

  function getMax(arr,n)
  {
      let mx = arr[0];
          for (let i = 1; i < n; i++)
              if (arr[i] > mx)
                  mx = arr[i];
          return mx;
  }
   
  // A function to do counting sort of arr[] according to
      // the digit represented by exp.
  function countSort(arr,n,exp)
  {
      let output = new Array(n); // output array
          let i;
          let count = new Array(10);
          for(let i=0;i<10;i++)
              count[i]=0;
    
          // Store count of occurrences in count[]
          for (i = 0; i < n; i++)
              count[Math.floor(arr[i] / exp) % 10]++;
    
          // Change count[i] so that count[i] now contains
          // actual position of this digit in output[]
          for (i = 1; i < 10; i++)
              count[i] += count[i - 1];
    
          // Build the output array
          for (i = n - 1; i >= 0; i--) {
              output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
              count[Math.floor(arr[i] / exp) % 10]--;
          }
    
          // Copy the output array to arr[], so that arr[] now
          // contains sorted numbers according to current digit
          for (i = 0; i < n; i++)
              arr[i] = output[i];
  }

  