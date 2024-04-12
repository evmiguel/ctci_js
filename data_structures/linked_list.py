class LinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, value, position):
        if position == 0:
            if self.head is None:
                self.head = LinkedListNode(value)
                return self.head
            else:
                previous = self.head
                current = LinkedListNode(value)
                current.next = previous
                return current
        
        current = self.head
        i = 0
        while (current is not None and i < position):
            previous = current
            current = current.next
            i += 1

        if i < position:
            raise Exception('Index out of bounds!')

        node = LinkedListNode(value)
        node.next = current
        previous.next = node
        return node

    def delete(self, index):
        if self.head is None:
            raise Exception("List is empty!")
        
        position = 0
        
        previous = self.head
        current = self.head
        while position < index:
            previous = current
            current = current.next
            if current is None:
                raise Exception("Index out of bounds!")
            position += 1
        
        # When there is only one item
        if previous == current:
            self.head = None
            return True
        
        previous.next = current.next
        current.next = None

        return True

    def __str__(self) -> str:
        output = ""
        current = self.head
        while current is not None:
            output = output + str(current.value)
            if current.next is not None:
                output = output + " -> "
            current = current.next
        return output
        
        
class DoublyLinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.previous = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def insert(self, value, position):
        if position == 0:
            if self.head is None:
                self.head = DoublyLinkedListNode(value)
                return self.head
            else:
                previous = self.head
                current = DoublyLinkedListNode(value)
                current.next = previous
                previous.previous = current
                return current
        
        current = self.head
        i = 0
        while (current is not None and i < position):
            previous = current
            current = current.next
            i += 1

        if i < position:
            raise Exception('Index out of bounds!')

        node = DoublyLinkedListNode(value)
        node.next = current
        node.previous = previous
        previous.next = node
        
        # When not inserting at the end
        if current is not None:
            current.previous = node
        
        return node

    def delete(self, index):
        if self.head is None:
            raise Exception("List is empty!")
        
        position = 0
        
        previous = self.head
        current = self.head
        while position < index:
            previous = current
            current = current.next
            if current is None:
                raise Exception("Index out of bounds!")
            position += 1

        # When there is only one item
        if previous == current:
            self.head = None
            return True
        
        previous.next = current.next
        current.previous = previous

        current.next = None
        current.previous = None

        return True

    def __str__(self) -> str:
        output = ""
        current = self.head
        while current is not None:
            output = output + str(current.value)
            if current.next is not None:
                output = output + " <-> "
            current = current.next
        return output
        
        
