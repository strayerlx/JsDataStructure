function Set() {
    //Attribute
    this.items = {}

    //Method

    //has
    Set.prototype.has = function (value) {
        return this.items.hasOwnProperty(value)
    }

    //add
    Set.prototype.add = function (value) {
        if (this.has(value)) {
            return false
        }

        this.items[value] = value
        return true
    }

    //remove
    Set.prototype.remove = function (value) {
        if (!this.has(value)) {
            return false
        }

        delete this.items[value]
        return true
    }

    //clear
    Set.prototype.clear = function () {
        this.items = {}
    }

    //size
    Set.prototype.size = function () {
        return Object.keys(this.items).length
    }

    //getAllValues
    Set.prototype.values = function () {
        return Object.keys(this.items)
    }

    //union
    Set.prototype.union = function (otherSet) {
        let unionSet = new Set()

        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        return unionSet
    }

    //intersection
    Set.prototype.intersection = function (otherSet) {
        let intersectionSet = new Set()

        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            let item = values[i]
            if (otherSet.has(item)) {
                intersectionSet.add(item)
            }
        }

        return intersectionSet
    }

    //difference
    Set.prototype.difference = function (otherSet) {
        let differenceSet = new Set()

        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            let item = values[i]
            if (!otherSet.has(item)) {
                differenceSet.add(item)
            }
        }

        return differenceSet
    }

    //subset
    Set.prototype.subset = function (otherSet) {
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            let item = values[i]
            if (!otherSet.has(item)) {
                return false
            }
        }
        
        return true
    }
}