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
    }
}

let sLL = new SinglyLinkedList();
sLL.add(10);
sLL.add(20);
sLL.add(30);
sLL.add(40);
sLL.printLinkedList();