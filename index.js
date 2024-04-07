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

