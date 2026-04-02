class Solution {
    public boolean isNStraightHand(int[] hand, int groupSize) {
        if (hand.length % groupSize != 0) return false;

        PriorityQueue<Integer> queue = new PriorityQueue<>();
        for(int i: hand) {
            queue.add(i);
        }

        while (!queue.isEmpty()){
            Integer curr = queue.peek();

            for (int i = 0; i < groupSize; i++) {
                if(!queue.remove(curr)) {
                    return false;
                }
                curr++;
            }
        }
        
        return queue.isEmpty();
    }
}
