import React,{useState,useEffect} from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/mergeSort.js';
import { getQuickSortAnimations } from '../sortingAlgorithms/quickSort.js';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubbleSort.js';
import { getHeapSortAnimations } from '../sortingAlgorithms/heapSort.js';
import './SortingVisualizer.css';
import { range } from 'lodash';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 10;
// const range = 100;
// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = range;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#66BFBF';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
const PIVOT_COLOR = 'yellow';
const SORTED_COLOR = '#6b5b95';
function SortingVisualizer() {

  const [heights,setArray] = useState([]);
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function resetArray(bars) {
    const array = [];
    for (let i = 0; i < bars; i++) {
      array.push(randomIntFromInterval(30, 500));
    }
    setArray(array);
    // setArray(array);
    
  }
  const [range,setRange] = useState(115);
  function handleChange(e){
    setRange(e.target.value);
    // console.log("e val > ",e.target.value);
    // console.log(range);
  }
  useEffect(()=>{
    resetArray(120);
  },[])

  useEffect(()=>{
    resetArray(range);
  },[range])

  function mergeSort() {
    const animations = getMergeSortAnimations(heights);
    async function done(){
      await new Promise((res,rej)=>{
      for (let i = 0; i < animations.length;i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            // console.log(i);
            // if(i===animations.length-1) res();
            // i++;
          }, 100*i*ANIMATION_SPEED_MS/range);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            if(range<34) arrayBars[barOneIdx].textContent = `${newHeight}`;
            if(i===animations.length-1) res();
            // i++;
          },100*i*ANIMATION_SPEED_MS/range);
        }
        // console.log("i >",i);
        
    }
    
  })
    for(let i=0;i<heights.length;i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      arrayBars[i].style.backgroundColor = SORTED_COLOR;
    }
    setTimeout(()=>{
      for(let i=0;i<heights.length;i++){
        const arrayBars = document.getElementsByClassName('array-bar');
        arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
      }
    },1000);
  }
  done();
  }

  function quickSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
    // console.log("quicksort");
    const pivot = [];
    const animations = getQuickSortAnimations(heights,pivot);
    // console.log("pivot  > ",pivot);
    async function done(){
      await new Promise((res,rej)=>{
        let temp=0;
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 4 < 2;
          // console.log(animations[i]);
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            
            let color ;
            
            if(i%4===0) color=SECONDARY_COLOR;
            else color=PRIMARY_COLOR;
            setTimeout(() => {
              const barPivotStyle = arrayBars[pivot[temp]].style;
              barPivotStyle.backgroundColor = PIVOT_COLOR;
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
              
            }, 100*i*ANIMATION_SPEED_MS/range);
          } else {
              setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                if(range<34) arrayBars[barOneIdx].textContent = `${newHeight}`;
                if(animations[i][0]===pivot[temp]) temp++;
                // console.log(temp);
                if(i===animations.length-1) res();
              }, 100*i*ANIMATION_SPEED_MS/range);
          }
          
        }
    
  })
  for(let i=0;i<heights.length;i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      arrayBars[i].style.backgroundColor = SORTED_COLOR;
    }
    setTimeout(()=>{
      for(let i=0;i<heights.length;i++){
        const arrayBars = document.getElementsByClassName('array-bar');
        arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
      }
    },1000);
  }
  done();
    


  }

  function heapSort() {
    const animations = getHeapSortAnimations(heights);
    // console.log(animations.length);
    async function done(){
      await new Promise((res,rej)=>{
        var n=heights.length;
        for (let i = 0; i < animations.length; i++) {
          // console.log(animations[i]);
          
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 4 < 2;
          if (isColorChange) {
            if(animations[i][0]>=n || animations[i][1]>=n) continue;
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, 100*i*ANIMATION_SPEED_MS/range);
          } else {
            if(animations[i][0]>=n) continue;
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
              if(range<34) arrayBars[barOneIdx].textContent = `${newHeight}`;
              if(i===animations.length-1) res();
            }, 100*i*ANIMATION_SPEED_MS/range);
          }
        }
  })
    for(let i=0;i<heights.length;i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      arrayBars[i].style.backgroundColor = SORTED_COLOR;
    }
    setTimeout(()=>{
      for(let i=0;i<heights.length;i++){
        const arrayBars = document.getElementsByClassName('array-bar');
        arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
      }
    },1000);
  }
  done();
    
  }

  function bubbleSort() {
    const animations = getBubbleSortAnimations(heights);
    // console.log(animations);
    async function done(){
      await new Promise((res,rej)=>{
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 4 < 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, 100*i*ANIMATION_SPEED_MS/range);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
              if(range<34) arrayBars[barOneIdx].textContent = `${newHeight}`;
              if(i===animations.length-1) res();
            }, 100*i*ANIMATION_SPEED_MS/range);
          }
        }
        
  })
    for(let i=0;i<heights.length;i++){
      const arrayBars = document.getElementsByClassName('array-bar');
      arrayBars[i].style.backgroundColor = SORTED_COLOR;
    }
    setTimeout(()=>{
      for(let i=0;i<heights.length;i++){
        const arrayBars = document.getElementsByClassName('array-bar');
        arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
      }
    },1000);

  }
  done();
  }

  function testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
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


  return (
    <div>
    <div className="array-container">
        {heights.map((value, idx) => (
          <div
            className={range<150 ?    "array-bar border border-dark fw-bolder " : "array-bar fw-bolder"}
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width:`${500/range}px`,
              margin: range<50 ? "2px" : "1px",
              fontSize: range<16 ? range<11 ?'24px':'18px' : range <21 ? '12px' : '8px'
            }}>{range<34 ? value : "" }</div>
        ))}
        </div>
        <div className="btn-container">
        <div>
        <input type="range" min="6" max="230" value={range} className="col-md-4 slider mb-2" id="myRange" onChange={handleChange}></input>
        </div>
        <button className="btn text-light rounded-pill fw-bold bg-gradient bg-dark mt-2" onClick={() =>resetArray(range)}>Generate New Array</button>
        
        {/* <button onClick={() =>testSortingAlgorithms()}>
          Test Sorting Algorithms (BROKEN)
        </button> */}
        </div>
        <div className="fixed-top mt-4">
          <button className="btn btn-sm btn-outline-dark rounded-pill m-2 px-3 fw-bold" onClick={() =>mergeSort()}>Merge Sort</button>
          <button className="btn btn-sm btn-outline-dark rounded-pill m-2 px-3 fw-bold" onClick={() =>quickSort()}>Quick Sort</button>
          <button className="btn btn-sm btn-outline-dark rounded-pill m-2 px-3 fw-bold" onClick={() =>heapSort()}>Heap Sort</button>
          <button className="btn btn-sm btn-outline-dark rounded-pill m-2 px-3 fw-bold" onClick={() =>bubbleSort()}>Bubble Sort</button>
        </div>
        {/* <div className="author">
          Developed by Drigesh with ❤.
        </div> */}
        <div className="author">
          <a className="text-dark" href="https://github.com/drigesh/sorting-visualizer/tree/gh-pages"> <i class="fab fa-github"></i> Github Repo</a>
        </div>
        </div>
  )
}

export default SortingVisualizer
