class DLNode <T>{
    data: T;
    next:DLNode <T>;
    prev:DLNode <T>;

    constructor(val: T){
        this.data = val;
    }
}

class DoublyLinkedList <T>{
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