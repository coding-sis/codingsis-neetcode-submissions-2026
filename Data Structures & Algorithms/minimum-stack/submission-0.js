class MinStack {
    constructor () {
        this.stack = [];
        this.minStack = [];
    }

    top () {
        return this.stack[this.stack.length - 1];
    }

    getMin () {
        return this.minStack[this.minStack.length - 1];
    }

    push (val) {
        this.stack.push(val);

        if (!this.minStack.length || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop() {
        const popped = this.stack.pop();
        
        if (popped == this.getMin()) {
            this.minStack.pop();
        }
    }
}
