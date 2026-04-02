class Solution {
        static class Pair {
        int distance;
        int[] point;
        Pair(int distance, int[] point) {
            this.distance = distance;
            this.point = point;
        }

        public String toString(){
            return "{" + this.distance + ", (" + point[0] + ", " + point[1] + ")}";
        }
    }

    // sketch 1: 
    // - compute distance of each point to the origin, 
    // - sort the distances, and 
    // - get the first k points.
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<Pair> pq = new PriorityQueue<Pair>((a, b) -> a.distance - b.distance);
        
        for(int i = 0; i < points.length; i++) {
            int[] point = points[i];
            int dist = (point[0] * point[0]) + (point[1] * point[1]);
            pq.add(new Pair(dist, point));
        }

        int[][] kClosestPoints = new int[k][2];
        int counter = 0;
        while (counter < k) {
            int[] point = pq.poll().point;
            kClosestPoints[counter++] = point;
        }
        return kClosestPoints;
    }
}
