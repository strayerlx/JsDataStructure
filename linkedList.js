function LinkedList() {
    function Node(data) {
        this.data = data;
        this.next = null;
    }

    //Attribute

    this.length = 0;
    this.head = null;

    //Method

    //1.添加
    LinkedList.prototype.append = function (data) {
        let newNode = new Node(data)

        if (this.length == 0) {
            this.head = newNode;
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }

        this.length += 1
    }

    //2.toString
    LinkedList.prototype.toString = function () {
        let current = this.head
        let listString = ""

        while (current) {
            listString += current.data + " "
            current = current.next
        }

        return listString
    }

    //3.insert
    LinkedList.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) return false

        let newNode = new Node(data)

        if (position == 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let index = 0;
            let current = this.head

            while (index++ < position - 1) {
                current = current.next
            }

            newNode.next = current.next
            current.next = newNode
        }

        this.length += 1

        return true
    }

    //4.get
    LinkedList.prototype.get = function (position) {
        if (position < 0 || position >= this.length) return null

        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }

        return current.data
    }

    //5.indexOf
    LinkedList.prototype.indexOf = function (data) {
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
    LinkedList.prototype.update = function (position, newData) {
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
    LinkedList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return null

        let current = this.head
        if (position == 0) {
            this.head = this.head.next
        } else {
            let index = 0
            let previous = null

            while (index++ < position) {
                previous = current
                current = current.next
            }

            previous.next = current.next
        }

        this.length -= 1

        return current.data
    }

    //8.remove
    LinkedList.prototype.remove = function (data) {
        let position = this.indexOf(data)

        return this.removeAt(position)
    }

    //9.isEmpty
    LinkedList.prototype.isEmpty = function () {
        return this.length == 0
    }

    //10.size
    LinkedList.prototype.size = function () {
        return this.length
    }
}