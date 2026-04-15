class LRUCache {
    // javascript map is actually an ordered data structure.
    // Hence, no need to have a separate array or linked list to keep track of order.
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if(!this.cache.has(key)) return -1;

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key, value) {
        if(this.cache.has(key)) {
            // update
           this.cache.delete(key); 
        } else if (this.cache.size >= this.capacity) {
            // add new, but cache is full
            const oldestKeyToRemove = this.cache.keys().next().value;
            this.cache.delete(oldestKeyToRemove);
        }
        this.cache.set(key, value); // keep it as most recently used
    }
}