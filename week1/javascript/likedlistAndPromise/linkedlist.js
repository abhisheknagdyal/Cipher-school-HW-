class Listnode{
    val;
    next;

    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

class TestClass{
    head;
    constructor(head =null){
        this.head =head;
    }

    hasLast(){
        return this.head !== null;
    }

    getlast(){
        if(!this.hasLast()){
            return null;
        }
        let current = this.head;
        while (current.next !==null){
            current = current.next;
        }
        let finalValue =current.val;

        current =this.head;
        while(current.next.next !==null){
            current = current.next;
        }
        if(current.next !==null && current.next.next !==null){
            this.head = null;
        }
        current.next.next =finalValue;

    return finalValue;
    }
}

let myVariabele = new TestClass (
    new Listnode(1,new Listnode(2,new Listnode(3,new Listnode(4,new Listnode(5)))))
)
console.log(myVariabele.getlast());
console.log(myVariabele.getlast());
console.log(myVariabele.getlast());
console.log(myVariabele.getlast());
console.log(myVariabele.getlast());
