class TNode {
    value: number;
    left: TNode | null;
    right: TNode | null;

    constructor(value: number, left: TNode | null = null, right: TNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BTree {

    //preorder - left first then right
    //inorder - left first, then root, then right
    preOrderRecursion(node: TNode | null) {

        if (!node) return [];
        let output: number[] = [];
        output.push(node.value)
        output.push(...this.preOrderRecursion(node.left))
        output.push(...this.preOrderRecursion(node.right))

        return output;
    }

    inOrderRecursion(node: TNode | null) {
        if (!node) return [];
        let output: number[] = [];
        output.push(...this.inOrderRecursion(node.left));
        output.push(node.value);
        output.push(...this.inOrderRecursion(node.right));

        return output;
    }

    postOrderRecursion(node: TNode | null) {
        if (!node) return [];
        let output: number[] = [];
        output.push(...this.postOrderRecursion(node.left));
        output.push(...this.postOrderRecursion(node.right));
        output.push(node.value);

        return output;
    }



}

function preOrderTraversal(root: TNode | null): void {
    if (root === null) {
        return;
    }

    const stack: TNode[] = [root];
    while (stack.length > 0) {
        const node = stack.pop()!;
        console.log(node.value);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
}



const root = new TNode(1);
root.left = new TNode(2);
root.right = new TNode(3);
root.left.left = new TNode(4);
root.left.right = new TNode(5);

preOrderTraversal(root);

/**let out = [1,2,3,4,5];
let inn = [...out]
let dic = {'yu':1,'tr':2,'gh':4}
let yu,data = ...idc
console.log(inn);
console.log(yu,data)**/

//AVL TREE - Self balancing tree, binary search tree
//implement in order and post order in my own way
//in my own way implement in order, pre order and post order