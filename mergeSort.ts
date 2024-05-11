const mergeSort = (arr:Array<number>):Array<number> => {

    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    return(mergeSort(left),mergeSort(right));

}

    const merge = (left:number[],right:number[])=>{
        let result:number[] = []
        let leftIndex =0;
        let rightIndex =0;

        while(leftIndex < left.length && rightIndex < right.length){
            if(left[leftIndex] < right[rightIndex]){
                result.push(left[leftIndex])
                leftIndex++
            }else{
                result.push(right[rightIndex])
                    rightIndex++
            }

            return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
        }

    }

console.log(mergeSort([10,2,11,8,9]))