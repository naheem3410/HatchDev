class TreeNode<T>{
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T>{
    root: TreeNode<T> | null;

    constructor(){
        this.root = null;
    }

    insert(value: T){
        const newNode = new TreeNode(value);
        if(!this.root){
            this.root = newNode;
            return;
        }

        let queue: TreeNode<T>[] = [];
        queue.push(this.root)

        while(queue.length > 0){
            let curr = queue.shift();
            if(curr!.left === null){
                curr!.left = newNode;
                return;
            }else if(curr!.right === null){
                curr!.right = newNode;
                return;
            }else{
                queue.push(curr!.left);
                queue.push(curr!.right);
            }
        }
    }
}

//complete the implemention of this algorithm using nodes and queue:searching for a value, 1 traversal
//read on breadth first search and depth first search
//implement the binary tree using an array and define functions to get the parents and the children
