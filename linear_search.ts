const scores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const sorted_scores = [40,60,75,88,90];
const target = 40;

function linersearch(input: number[], target: number): number {
    for (let i=0; i<=input.length; i++){
    const currentElement = input[i];
    if (currentElement === target){
        return i;
    }
}
    return -1;
}

type Result = {
    idx: number,
    numOfIter: number
}

function binary_search(input: number[], target: number): Result{
    let high = input.length - 1; //initial highest index
    let low = 0;
    let mid;

    for(let i = 0; i < input.length; i++){
        mid = Math.floor((high + low) / 2);
        const middleElement = input[mid];

        if(middleElement == target){
            return {numOfIter:i + 1, idx:mid};
        }

        if(middleElement < target){
            low = mid + 1;

        }else{
            high = mid - 1;
        }
    }

    return {numOfIter:-1, idx:-1};
}

//const idx = linersearch(scores, 900);
const idx = binary_search(sorted_scores, target);
console.log("Binary Search => ", idx);