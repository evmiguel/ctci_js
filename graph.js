class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// let's make a heap
/**
 *             4
 *          /     \
 *         50      7
 *        /  \    /
 *       55   90 87
 */
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

function dfs(node) {
    let visited = [];
    function dfsUtil(node){
        if (node !== null) {
            dfsUtil(node.left);
            dfsUtil(node.right);
            visited.push(node.val);
        }
    }
    dfsUtil(node);
    return visited;
}

function bfs(node) {
    let queue = [];
    let visited = [];
    queue.push(node);
    while (queue.length > 0) {
        let current = queue.shift();
        visited.push(current.val);
        current.visited = true;
        if (current.left && (!(current.left.hasOwnProperty('visited')) || !current.left.visited)) {
            queue.push(current.left);
        }
        if (current.right && (!(current.right.hasOwnProperty('visited')) || !current.right.visited)) {
            queue.push(current.right);
        }
    }
    return visited;
}



console.log(inorderTraversal(root))
console.log(dfs(root));
console.log(bfs(root))