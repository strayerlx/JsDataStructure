let s1 = new Set()

let s2 = new Set()

s1.add("one")
s1.add("two")
s1.add("three")

s2.add("one2")
s2.add("two")
s2.add("three2")


console.log(s1.intersection(s2).values())
console.log(s2.difference(s1).values())
console.log(s1.subset(s2))
console.log(s1.values())