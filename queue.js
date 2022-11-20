function Queue() {
    //Attribute
    this.items = []

    //Method

    //1.元素添加到队列中
    Queue.prototype.enqueue = function (element) {
        this.items.push(element)
    }

    //2.从队列中删除前端元素
    Queue.prototype.dequene = function () {
        return this.items.shift()
    }

    //3.查看前端的元素
    Queue.prototype.front = function () {
        return this.items[0]
    }

    //4.查看队列是否为空
    Queue.prototype.isEmpty = function () {
        return this.items.length == 0
    }

    //5.查看队列中元素个数
    Queue.prototype.size = function () {
        return this.items.length
    }

    //6.toString方法
    Queue.prototype.size = function () {
        return this.items.join(' ')
    }
}