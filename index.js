class someClass {
    constructor(type){
        this.type = type 
        this.size = 'big'
        this.color = 'black'
    }
}

const element1 = new someClass('medium')
//console.log(element1)


class anotherClass extends someClass {
    constructor(options){
        super(options)
        this.color = 'red'
        this.level = options.level
        this.type = options.type
    }
}
const element2 = new anotherClass({ level:'top',type:'premium'})
//console.log(element2)


class lastCLass extends someClass {
    constructor(options){
        super(options)
        this.name = 'last'
        this.speed = options.speed
        this.type = options.type
    }
}
const element3 = new lastCLass({speed:'2', type:'super-premium'})
console.log(element3)

//---------------------------------------------------------------------//

const obj = {
    a: 'first',
    b: 'second',
    c: 'last'
}

const {a,b,c} = obj
console.log(a)
console.log(b)
console.log(c)

//---------------------------------------------------------------------//

function func({name, age}) {
    return `his name is ${name}, age ${age}`
}

const obj1 = {name:'Alex', age: 24}

console.log(func(obj1))
