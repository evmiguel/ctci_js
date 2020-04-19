class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// let's make a heap
let root = new BinaryTreeNode(4);
root.left = new BinaryTreeNode(50);
root.left.left = new BinaryTreeNode(55);
root.left.right = new BinaryTreeNode(90);
root.right = new BinaryTreeNode(7);
root.right.left = new BinaryTreeNode(87);

function inorderTraversal(node) {
    let arr = [];
    function traverse(node) {
        if(node !== null) {
            traverse(node.left, arr);
            arr.push(node.val);
            traverse(node.right, arr);
        }
    }
    traverse(node, arr);
    return arr;
}



console.log(inorderTraversal(root))