class Solution {
    public int leastInterval(char[] tasks, int n) {
        if (tasks.length == 0 || n < 1) {
            return 0; // sanity check
        }

        ArrayDeque<int[]> waitingQueue = new ArrayDeque<>(); // an array queue of [#LeftOfTask, nextAvailableCycle] of each task
        PriorityQueue<int[]> taskNumMaxHeap = new PriorityQueue<>((a, b) -> {
           return b[0] == a[0]? a[1] - b[1] : b[0] - a[0];
        });

        HashMap<Character, Integer> frequencyMap = new HashMap<>();
        {
            // Prior to counting, fill in the maxHeap: { task: #appearance in the array }
            for (char task : tasks) {
                frequencyMap.put(task, frequencyMap.getOrDefault(task, 0) + 1);
            }
            for (char task : frequencyMap.keySet()) {
                taskNumMaxHeap.add(new int[]{frequencyMap.get(task), 1});
            }
        }

        int currCycle = 1;
        while (!taskNumMaxHeap.isEmpty() || !waitingQueue.isEmpty()) {

            // Pick an eligible task in this curr cycle from either the heap or queue
            // Note: none can be eligible.
            // Pick an eligible task in this curr cycle from either the heap or queue
            // Note: none can be eligible.
            int[] fromMaxHeap = taskNumMaxHeap.peek();
            int[] fromQueue = waitingQueue.peekFirst();
            if (
                fromQueue != null  && fromQueue[1] <= currCycle && (
                    fromMaxHeap != null && fromMaxHeap[1] <= currCycle && fromQueue[0] > fromMaxHeap[0] ||
                    (fromMaxHeap == null || fromMaxHeap[1] > currCycle || fromQueue[0] >= fromMaxHeap[0])
                )
            ) {
                waitingQueue.removeFirst();
                if(fromQueue[0] > 1) {
                    waitingQueue.offer(new int[]{fromQueue[0] - 1, currCycle + n + 1});
                }
            } else if (
                fromMaxHeap != null && fromMaxHeap[1] <= currCycle && (fromQueue == null || fromQueue[1] > currCycle || fromQueue[0] <= fromMaxHeap[0])
            ) {
                taskNumMaxHeap.poll();
                if(fromMaxHeap[0]> 1) {
                    waitingQueue.add(new int[]{fromMaxHeap[0] - 1, currCycle + n + 1});
                }
            }


            // Increase the currCycle by 1.
            currCycle += 1;
        }

        return currCycle - 1;
    }
}
