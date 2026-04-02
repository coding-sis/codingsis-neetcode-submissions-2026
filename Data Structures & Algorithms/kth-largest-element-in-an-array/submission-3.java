class Solution {
    public Integer findKthLargest(int[] nums, int k) {
        // hashMap { num : count } takes O(n)
        HashMap<Integer, Integer> countMap = new HashMap<>();
        for (int n : nums) {
            Integer count = countMap.get(n);
            if (count == null) {
                countMap.put(n, 1);
            } else {
                countMap.put(n, count + 1);
            }
        }


        // create a maxHeap with a priority by each num value
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[0] - a[0]);
        for(int n : countMap.keySet()){
            pq.add(new int[] {n, countMap.get(n)});
        }
    
        int[] pair = new int[]{2};
        int count = 0;
        while (count < k) {
            pair = pq.remove();
            count += pair[1];
        }

        return pair[0];
    }
}
