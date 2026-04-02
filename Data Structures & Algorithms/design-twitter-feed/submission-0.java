class Twitter {

    int tweetOrderId;
    HashMap<Integer, HashSet<Integer>> followMap;
    PriorityQueue<int[]> postMap;
    public Twitter() {
        tweetOrderId = 0;
        followMap = new HashMap<>();
        postMap = new PriorityQueue<>((a, b) -> b[2] - a[2]); // [userId, tweetId, orderId]
    }
    
    // composes a new tweet with a unique ID (tweetOrderId) by the user (userId)
    public void postTweet(int userId, int tweetId) {
        tweetOrderId += 1;
        int[] postDetails = new int[]{userId, tweetId, tweetOrderId};
        postMap.offer(postDetails);
    }
    
    // retrieves the 10 most recent posts of any following or the user themself
    public List<Integer> getNewsFeed(int userId) {
        List<int[]> toPutBack = new ArrayList<>();
        List<Integer> newsFeed = new ArrayList<>();

        // a set consisting of the userId and other users that the user is following.
        HashSet<Integer> contacts = followMap.getOrDefault(userId, new HashSet<>());
        contacts.add(userId);

        // collect the 10 most recent tweets of only the user (userId)'s posts and its friends.
        while(newsFeed.size() < 10 && !postMap.isEmpty()) {
            int[] details = postMap.poll(); // [userId, tweetId, orderId];
            
            if (contacts.contains(details[0])) {
                newsFeed.add(details[1]);
            }
 
            toPutBack.add(details);
        }

        for(int[] details: toPutBack){
            postMap.offer(details);
        }

        return newsFeed;
    }
    
    public void follow(int followerId, int followeeId) {
        // add the followeeId to the followMap[followerId]
        this.followMap.computeIfAbsent(followerId, k -> new HashSet<>())
        .add(followeeId);
    }
    
    public void unfollow(int followerId, int followeeId) {
        // remove the followeeId to the followMap[followerId]
        this.followMap.computeIfPresent(followerId, (k, v) -> {
            v.remove(followeeId);
            return v;
        });
    }
}
