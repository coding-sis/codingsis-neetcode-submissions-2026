class KthLargest {

    private final int k;
    private final PriorityQueue<Integer> stream;
    
    KthLargest (int k, int[] nums){
        this.k = k;
        this.stream = new PriorityQueue<>();

        for(int n : nums){
            this.stream.add(n);

            // The queue (minHeap) is to contain k elements i.e., [e_(n-k+1), ..., e_n] 
            // where its root node will have the smallest value, 
            // For the ongoing stream traffic, the root will be always the k-th largest element.
            if (this.stream.size() > k) {
                this.stream.remove(); 
            }
        }
    }

    // adds the int val to the stream and 
    // returns the k-th largest int in the stream
    public int add(int val) throws Exception {
        this.stream.add(val);
        
        if (this.stream.size() > this.k) {
            this.stream.remove();
        }

        return this.stream.peek();
    }
}
