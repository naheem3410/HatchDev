class LNode <T>{
    data: T;
    next: LNode <T>;

    constructor(val: T){
        this.data = val;
    }
}

class LinkedList <T>{
    head: LNode<T>;

    add(val: T){
        const newNode = new LNode(val);
        //if no head already
        if(!this.head){
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next != undefined){
            currentNode = currentNode.next;

        }
        currentNode.next = newNode;
    }

    print(){
        let currentNode = this.head;
        while(currentNode.next != undefined){
            currentNode = currentNode.next;
            console.log(currentNode)

        }
    }

    print2(){
        let arr: T[] = [];
        if(!this.head){
            return
        }

        let currentNode = this.head;
        while(currentNode){
            arr.push(currentNode.data);
            currentNode = currentNode.next
        }

        console.log(arr)

    }

    prepend(val: T){
        let newNode = new LNode<T>(val)
        const oldHead = this.head;
        this.head = newNode;
        newNode.next = oldHead;



    }

    search(val: T): number{

        if(!this.head){
            return -1
        }
        let currentNode = this.head;
        let pos = 1
        while(currentNode){
            if(currentNode.data == val){
                return pos
            }
            currentNode = currentNode.next
            pos++;
        }

        return -1
    }
}


const l = new LinkedList<number>();
l.add(1);
l.add(2);
l.add(3);
console.log(l);
l.print2();
l.prepend(12)
l.print2();
console.log("position: ", l.search(2));


interface IStack<T>{
    pop(): T | undefined;
    push(item:T): void;
    peek(): T | undefined;
    size(): number
}

const factorial = (n:number):number=>{
    if(n<=1)return 1;
    return n*factorial(n-1);
}

console.log(factorial(4));

//using recursion fibonnaci
const fibonacci = (n: number): number => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
const fibon = (n:number)=>{
    if(n<1) return "invalid";
    if(n===1 || n===2) return 1;
    return fibon(n-1)+fibon(n-2);
}

console.log("Fibonacci: ",fibonacci(5))
*/

interface IQueue<T>{
    enqueue(item: T): void;
    dequeue(): T;
    size(): number;
}

class Queue<T> implements IQueue<T>{
    arr: T[];
    start:number;

    constructor(capacity:number = Infinity){
        this.arr = []
        this.start = 0;
    }
    enqueue(item: T){
        
    }

    dequeue(): T{
        
    }

    size():number {
        
        return -1
    }
}




