
export function getHeapSortAnimations(arr)
{
    var n = arr.length;
    const animations = [];
    if (n <= 1) return arr;
    
    // Build heap (rearrange array)
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i,animations);

    // One by one extract an element from heap
    // console.log("my array",arr);
    for (var i = n - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        animations.push([0,i]);
        animations.push([0,i]);
        animations.push([0,arr[0]]);
        animations.push([i,arr[i]]);
        // call max heapify on the reduced heap
        heapify(arr, i, 0,animations);
    }
    // console.log("animations",animations);
    return animations;
}

function heapify(arr, n, i,animations)
{
    // console.log("my array",arr);
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2
    // animations.push([largest,l]);
    
    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;
    // animations.push([i,l]);
    // animations.push([i,l]);
    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;
    animations.push([l,r]);
    animations.push([l,r]);
    // If largest is not root
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        animations.push([i,arr[i]]);
        animations.push([largest,arr[largest]]);
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest,animations);
    }
    else{
        animations.push([l,arr[l]]);
        animations.push([r,arr[r]]);
    }
}