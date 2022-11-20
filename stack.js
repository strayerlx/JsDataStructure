function Stack() {
    //Attribute
    this.items = []

    //Method

    //1.元素压入栈
    Stack.prototype.push = function (element) {
        this.items.push(element)
    }

    //2.栈中取出元素
    Stack.prototype.pop = function () {
        return this.items.pop()
    }

    //3.查看栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1]
    }

    //4.判断栈是否空
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0
    }

    //5.获取栈中元素个数
    Stack.prototype.size = function () {
        return this.items.length
    }

    //6.toString
    Stack.prototype.toString = function () {
        return this.items.join(' ')
    }
}