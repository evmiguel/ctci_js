class Node {
    /**
     * This Node class can be both
     *  singly or doubly connected
     */
    constructor(elem) {
        this.elem = elem;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    printLinkedList() {
        let string = '';
        let curr = this.head;
        while (curr) {
            string = string.concat(` ${curr.elem}`);
            curr = curr.next;
        }
        console.log(string);
    }

    get(idx) {
        if (idx > this.size) return -1;
        if (idx === 0) return this.head;
        let currIdx = 0, curr = this.head;
        while(curr && currIdx !== idx) {
            curr = curr.next;
            currIdx++;
        }
        return curr;
    }
}

class SinglyLinkedList extends LinkedList {
    constructor() {
        super();
    }

    add(elem) {
        if(!this.head) {
            this.head = new Node(elem);
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        let last = curr;
        last.next = new Node(elem);
        this.size++;
    }

    // Do we want this function to support adding to the tail?
    insertAt(elem, idx) {
        let newNode = new Node(elem);
        if (idx === 0) {
            let oldHead = this.head;
            newNode.next = oldHead;
            this.head = newNode;
            this.size++;
            return;
        }

        let old = this.get(idx);
        let oldPrev = null;
        if(idx - 1 > -1) oldPrev = this.get(idx - 1)

        if (oldPrev) oldPrev.next = newNode;
        newNode.next = old;
        this.size++;
    }

    reverse() {
        let previous = null;
        let node = this.head;
        let newHead = null;

        while (node) {
            let tmp = node.next;
            node.next = previous;
            previous = node;
            node = tmp;
            if (node !== null) this.head = node;
        }

        return this;
    }
}

let sLL = new SinglyLinkedList();
sLL.add(10);
sLL.add(20);
sLL.add(30);
sLL.add(40);
sLL.printLinkedList();

sLL.reverse();
sLL.printLinkedList();

sLL.reverse();
sLL.printLinkedList();
sLL.insertAt(15, 1);
sLL.printLinkedList();
sLL.insertAt(5, 0);
sLL.printLinkedList();
sLL.insertAt(35, 5);
sLL.printLinkedList();
