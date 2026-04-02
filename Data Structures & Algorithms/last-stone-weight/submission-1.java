class Solution {
     public static int lastStoneWeight(int[] stones) {
        // max-heapify stones array
        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> Integer.compare(b,a));
        for(int w : stones){
            pq.add(w);
        }
        // keep calculating
        while(pq.size() > 1) {
            int s1 = pq.poll();
            int s2 = pq.poll();
            if (s2 != s1) {
                // push the diff to the heap
                pq.add(Math.abs(s2 - s1));
            }

            if(pq.size() == 0) return 0;
        }
        
        return pq.poll();
    }
}
