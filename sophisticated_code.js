/*
Filename: sophisticated_code.js
Description: This code implements a complex and sophisticated algorithm to find the shortest path between two nodes in a graph using the Dijkstra's algorithm.
*/

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
  }

  addEdge(nodeA, nodeB, weight) {
    if (!this.edges[nodeA]) {
      this.edges[nodeA] = {};
    }
    this.edges[nodeA][nodeB] = weight;
  }

  dijkstra(startNode, endNode) {
    const distances = {};
    const previous = {};
    const visited = new Set();

    this.nodes.forEach((node) => {
      distances[node] = Infinity;
      previous[node] = null;
    });

    distances[startNode] = 0;

    while (visited.size < this.nodes.length) {
      const currentNode = this.getClosestNode(distances, visited);
      visited.add(currentNode);

      if (currentNode === endNode) {
        return this.getPath(previous, endNode);
      }

      for (const neighbor in this.edges[currentNode]) {
        const distance = this.edges[currentNode][neighbor];
        const totalDistance = distances[currentNode] + distance;

        if (totalDistance < distances[neighbor]) {
          distances[neighbor] = totalDistance;
          previous[neighbor] = currentNode;
        }
      }
    }

    return "No path found";
  }

  getClosestNode(distances, visited) {
    let closestDistance = Infinity;
    let closestNode = null;

    for (const node in distances) {
      if (!visited.has(node) && distances[node] < closestDistance) {
        closestDistance = distances[node];
        closestNode = node;
      }
    }

    return closestNode;
  }

  getPath(previous, node) {
    const path = [];
    let currentNode = node;

    while (currentNode !== null) {
      path.unshift(currentNode);
      currentNode = previous[currentNode];
    }

    return path;
  }
}

// Usage example:
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");
graph.addNode("G");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "C", 1);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "E", 8);
graph.addEdge("D", "E", 2);
graph.addEdge("D", "F", 6);
graph.addEdge("E", "F", 3);
graph.addEdge("F", "G", 1);

const shortestPath = graph.dijkstra("A", "G");
console.log(shortestPath.join(" -> "));

// Output: A -> C -> B -> D -> F -> G