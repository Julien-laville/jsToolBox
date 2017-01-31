/* interface poolable implement register pool */ 
/* pool is an array with a pivot that divide dead element from alive one */
/* AA^DDDDD */

function Pool(size, constructor) {
    this.pool = []
    this.i = 0;
   
    //this.pool = new Array(size).fill(new constructor(false)) ne fonctionne pas :/
    for(this.i = 0; this.i < size; this.i += 1) {
        this.pool[this.i] = new constructor(this.i);
        this.pool[this.i].position = this.i
        this.pool[this.i].pool = this
    }
    this.tmp = this.pool[0]  /*  */
    this.pivot = 0
}

Pool.prototype.kill = function(item) {
    this.tmpPos = item.position
    this.tmp = this.pool[this.pivot]
    this.pool[this.pivot] = item
    this.pool[item.position] = this.tmp
    //item.pool[this.pool.pivot]
    this.pivot--
}

Pool.prototype.revive = function() {
    return this.pool[this.pivot++];
}
/* slow method : don't use */
Pool.prototype.forEach = function(cb) {
    for(var i = 0; i < this.pivot; i ++) {
        cb(this.pool[i])
    }
}

/* tests */

function PoolableNumber(i){this.x = i}
//PoolableNumber.prototype = Number.prototype
PoolableNumber.prototype.revive = function() {
    this.pool.revive(this)
}

PoolableNumber.prototype.kill = function() {
    this.pool.kill(this)
}

var intPool = new Pool(10, PoolableNumber)



