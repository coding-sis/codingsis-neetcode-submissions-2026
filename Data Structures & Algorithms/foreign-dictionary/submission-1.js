class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
        foreignDictionary(words) {
        if (!words || !words.length) return '';
        if (words.length === 1) return words[0];

        // 1. build a DAG where each char is a vertex, and an edge connects adjacent chars in each word.
        const graph = this.buildGraph(words);

        // 2. sort the vertices (chars) in the graph
        const sorted = this.topSort(graph);

        // 3. check if the graph is acyclic
        const cyclic = this.checkCycle(graph, sorted);

        return cyclic ? '' : sorted.join('');
    }

    topSort(graph, approach = 'recurse') {
        const sortStack = [];
        if (approach === 'iter') {
            // iterative approach
            sortStack = this.topSortIter(graph);
        } else {
            // recursive approach
            const visited = new Set();
            Object.keys(graph).forEach(v => {
                // visit each vertex only once
                if (!visited.has(v)) {
                    this.topSortRecurse(graph, v, visited, sortStack);
                }
            });
        }

        return sortStack.length ? sortStack.reverse() : [];
    }

    // visit vertices in DFS approach (only one visit per vertex)
    topSortRecurse(graph, v, visited, sortStack) {
        // 1. mark the vertex as visited
        visited.add(v);

        // 2. visit any adjVertices
        const adjVertices = graph[v];
        adjVertices && [...adjVertices].forEach(w => {
            // visit each vertex only once
            if (!visited.has(w)) {
                this.topSortRecurse(graph, w, visited, sortStack);
            }
        });

        // 3. after visiting all adjVertices, push the starting vertex to the sorted stack.
        // Note the sortStack contains sorted vertices in reverse order.
        sortStack.push(v);
    }

    // WIP - Kahn's algorithm
    topSortIter(graph) {
        const sorted = [];

        const visited = [];
        vertices.forEach(v => {
            visited.push(v);

            if (!visited.includes(v)) {
                const w = dfsStack.pop();
                dfsStack.push(graph[w][0]);

                visited.push(w);
            }

            sorted.push(v);
        });

        return sorted;
    }

    checkCycle(graph, sorted) {
        const vertices = Object.keys(graph);
        for (const v of vertices) {
            const posV = sorted.indexOf(v);
            const adjacents = graph[v];
            // If a parent vertex (v) doesn't appear before in the sorted order, it's cyclic.
            // v ~> w
            const cyclicVertex = adjacents && [...adjacents].find(w => posV > sorted.indexOf(w));
            if (cyclicVertex) return true;
        }

        return false;
    }

    // Recall that the given words is already lexicographically sorted.
    // At least there are 2 words in the array
    buildGraph(words) {
        const graph = {};
        // init the graph map with chars appearing in the given words array
        words.forEach (word => {
            for(let c of word) {
                graph[c] = new Set();
            }
        });

        // render the graph by iterating the words array
        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];
            const minLength = Math.min(w1.length, w2.length);

            // if w2 is a prefix of w1, it's invalid to order the chars
            // example: [..., apes, ape, ...]
            if (w1.length > w2.length && w1.startsWith(w2)) return {};

            for (let j = 0; j < minLength ; j++) {
                if (w1.charAt(j) !== w2.charAt(j)) {
                    graph[w1[j]].add(w2[j]);
                    break;
                }
            }

        }

        return graph;
    }
}
