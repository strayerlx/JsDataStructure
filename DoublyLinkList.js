function DoublyLinkList() {
    function Node(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    //Attribute

    this.length = 0;
    this.head = null;
    this.tail = null;

    //Method

    //1. append
    DoublyLinkList.prototype.append = function (data) {
        let newNode = new Node(data)

        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length += 1
    }

    //2. 2.1 toString
    DoublyLinkList.prototype.toString = function () {
        return this.backwardString()
    }
    //2. 2.2 toString
    DoublyLinkList.prototype.forwardString = function () {
        let current = this.tail
        let resultString = ""

        while (current) {
            resultString += current.data + " "
            current = current.prev
        }

        return resultString
    }
    //2. 2.3 toString
    DoublyLinkList.prototype.backwardString = function () {
        let current = this.head
        let resultString = " "

        while (current) {
            resultString += current.data + " "
            current = current.next
        }

        return resultString
    }

    //3. insert
    DoublyLinkList.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) return false

        let newNode = new Node(data)

        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            if (position == 0) {
                this.head.prev = newNode
                newNode.next = this.head
                this.head = newNode
            } else if (position == this.length) {
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
            } else {
                let current = this.head
                let index = 0

                while (index++ < position) {
                    current = current.next
                }

                newNode.next = current
                newNode.prev = current.prev
                current.prev.next = newNode
                current.prev = newNode
            }
        }

        this.length += 1

        return true
    }

    //4. get
    DoublyLinkList.prototype.get = function (position) {
        if (position < 0 || position >= this.length) return null

        let current
        let index

        if (this.length / 2 > position) {
            current = this.head
            index = 0

            while (index++ < position) {
                current = current.next
            }

        } else {
            current = this.tail
            index = this.length - 1

            while (index-- > position) {
                current = current.prev
            }
        }

        return current.data
    }

    //5.indexOf
    DoublyLinkList.prototype.indexOf = function (data) {
        let current = this.head
        let index = 0

        while (current) {
            if (current.data == data) {
                return index
            }
            current = current.next
            index += 1
        }

        return -1
    }

    //6.update
    DoublyLinkList.prototype.update = function (position, newData) {
        if (position < 0 || position >= this.length) return false

        let current = this.head
        let index = 0

        while (index++ < position) {
            current = current.next
        }
        current.data = newData

        return true
    }

    //7.removeAt
    DoublyLinkList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return null

        let current = this.head

        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            if (position == 0) {
                this.head.next.prev = null
                this.head = this.head.next
            } else if (position == this.length - 1) {
                current = this.tail
                this.tail.prev.next = null
                this.tail = this.tail.prev
            } else {
                let index = 0

                while (index++ < position) {
                    current = current.next
                }

                current.prev.next = current.next
                current.next.prev = current.prev
            }
        }

        this.length -= 1

        return current.data
    }

    //8.remove
    DoublyLinkList.prototype.remove = function (data) {
        let index = this.indexOf(data)

        return this.removeAt(index)
    }

    //9.empty
    DoublyLinkList.prototype.isEmpty = function () {
        return this.length == 0
    }

    //10.size
    DoublyLinkList.prototype.size = function () {
        return this.length
    }

    //11.getHead
    DoublyLinkList.prototype.getHead = function () {
        return this.head.data
    }

    //10.getTail
    DoublyLinkList.prototype.getTail = function () {
        return this.tail.data
    }
}