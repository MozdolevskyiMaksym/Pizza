/* eslint-disable no-console */
/* eslint-disable security/detect-object-injection */

// В этом примере мы определяем класс Graph, который имеет узлы и ребра.
// Мы можем добавлять узлы в граф, используя метод addNode, и добавлять ребра между узлами с помощью метода addEdge.
// Мы также можем получать узлы и ребра графа с помощью методов getNodes и getEdges.

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }

  addEdge(node1, node2) {
    this.edges[node1].push(node2);
    this.edges[node2].push(node1);
  }

  getNodes() {
    return this.nodes;
  }

  getEdges(node) {
    return this.edges[node];
  }
}

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
console.log(graph.getNodes()); // Результат: [1, 2, 3]
console.log(graph.getEdges(1)); // Результат: [2, 3]
