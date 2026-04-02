class DynamicArray {
    // init an empty array with a capacity of "capacity" > 0
    constructor(capacity = 10) {
        if(capacity <= 0) throw new Error("Capacity must be a positive int.");

        this.capacity = capacity;
        this.size = 0;
        this.array = new Array(this.capacity).fill(undefined);
    }

    // Return the element at the i-th index
    // Assume that the index i is valid
    get(i) { 
        if(i >= this.capacity || i < 0) throw new Error("OutOfBound error");

        return this.array[i];
    }

    set (i, n) {
        if(i >= this.capacity || i < 0) throw new Error("OutOfBound error");

        this.array[i] = n;
    }

    // set the element n to the end of the array
    pushback(n) {
        if (this.size === this.capacity) this.resize();

        this.array[this.size] = n;
        
        this.size += 1;
    }

    // pop and return the element at the end of the array
    // assume that the array is not empty
    popback() {
        const lastElem = this.array[this.size-1];
        this.array[this.size-1] = undefined;
        this.size -= 1;
        return lastElem;
    }

    // double the capacity
    resize() {
        const tempArr = this.array;
        this.capacity *= 2;
        this.array = new Array(this.capacity).fill(undefined);
        for(const i in tempArr) {
            this.array[i] = tempArr[i];
        }
    }

    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.capacity;
    }

}