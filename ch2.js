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

    delete(node) {
        let previous = null;

        let n = this.head;
        if(node === this.head) {
            this.head = node.next;
            return;
        }

        while (n !== node) {
            previous = n;
            n = n.next;
        }

        if (node.next !== null) {
            let tmp = node.next;
            node.next = null;
            previous.next = tmp;
        } else {
            previous.next = null;
        }

        return;
    }
}

// functions

function reverseLinkedList(l) {
    let previous = null;
    let node = l.head;

    while (node) {
        let tmp = node.next;
        node.next = previous;
        previous = node;
        node = tmp;
        if (node !== null) l.head = node;
    }

    return l;
}

function printLinkedList(l) {
    let string = '';
    let curr = l.head;
    while (curr) {
        string = string.concat(` ${curr.elem}`);
        curr = curr.next;
    }
    console.log(string);
}

function removeDupes(l) {
    let p1 = l.head, p2;
    while (p1) {
        p2 = p1.next;
        while (p2) {
            if (p2.elem === p1.elem) {
                let curr = p2;
                p2 = curr.next;
                l.delete(curr);
            } else {
                p2 = p2.next;
            }
        }
        p1 = p1.next;
    }
}

let sLL = new SinglyLinkedList();
sLL.add(10);
sLL.add(20);
sLL.add(30);
sLL.add(40);
printLinkedList(sLL);

printLinkedList(reverseLinkedList(sLL));
reverseLinkedList(sLL)

printLinkedList(sLL);
sLL.insertAt(15, 1);
printLinkedList(sLL);
sLL.insertAt(5, 0);
printLinkedList(sLL);
sLL.insertAt(35, 5);
printLinkedList(sLL);

sLL.delete(sLL.head);
printLinkedList(sLL);

sLL.delete(sLL.head.next);
printLinkedList(sLL);

sLL.delete(sLL.head.next.next.next);
printLinkedList(sLL);

sLL.delete(sLL.head.next.next.next);
printLinkedList(sLL);
sLL.insertAt(40, 3);
printLinkedList(sLL);

removeDupes(sLL);
printLinkedList(sLL);

sLL.insertAt(40, 4);
sLL.insertAt(30, 1);
printLinkedList(sLL);
removeDupes(sLL);
printLinkedList(sLL);