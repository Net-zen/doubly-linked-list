const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        const node = new Node(data);    
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return (this._head !== null) ? this._head.data : null;
    }

    tail() {
        return (this._tail !== null) ? this._tail.data : null;
    }
    
    at(index) {
        let current = this._head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }
        return current.data
    }

    insertAt(index, data) {
        const node = new Node(data);
        if (this.length > 0) {
            let current = this._head;
            let i = 0;
            while (i < index) {
                current = current.next;
                i++;
            }
            if (current.prev !== null) {
                current.prev.next = node;
                node.prev = current.prev;
            }
            if (current !== null) {
                node.next = current;
            }
        } else {
            this._head = node;
            this._tail = node;
        }
        
        this.length++;
        return this;
    }

    isEmpty() {
        return (this.length) ? false : true;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        let current = this._head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }
        if (current.prev !== null) {
            current.prev.next = current.next;
        }
        if (current.next !== null) {
            current.next.prev = current.prev;
        }
        this.length--;
        current = null;
        return this;
    }

    reverse() {
        let current = this._head;
        if (this.length > 1) {
            while (current !== null) {
                let next = current.next;
                current.next = current.prev;
                current.prev = next;
                current = current.prev;
            }
        }
        let head = this._head;
        this._head = this._tail;
        this._tail = head;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        let i = 0;
        while (current.next !== null) {
            if (current.data === data) {
                return i;
            } else {
                current = current.next;
            }
        }
        if (current === this._tail) {
            return (current.data === data) ? this.length - 1 : -1;
        }
    }
}

module.exports = LinkedList;
