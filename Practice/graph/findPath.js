class Node {
  constructor(name, pop=0) {
    this._name = name,
    this._population = pop
  }
  getName() {  return this._name  }
  getPopulation() {  return this._population  }
}

class Edge {
  constructor(s, d) {
    this._source = s,
    this._destination = d
  }
  getSource() {  return this._source  }
  getDestination() {  return this._destination  }

  isSameAs(edge) {
    return this._source.getName() === edge.getSource().getName() &&
           this._destination.getName() === edge.getDestination().getName()
  }
}

class DiGraph {
  constructor(title) {
    this._title = title;
    this._nodes = {},
    this._edges = []
  }
  getTitle() {  return this._title  }

  addNode(node) {
    const name = node.getName();
    if (this._nodes[name]) {
      console.log(name, 'was already added in.')
    } else {
      this._nodes[name] = [node];
    }
  }

  addEdge(s_name, d_name) {
    const s_node = this._nodes[s_name] ? this._nodes[s_name][0] : null;
    const d_node = this._nodes[d_name] ? this._nodes[d_name][0] : null;
    if (!s_node || !d_node) {
      console.log(s_name, 'or', d_name, 'is not in this map.')
    } else { 
      const edge = new Edge(s_node, d_node);
      if (!this.isNewEdge(edge)) {
        console.log(s_name, '->', d_name, 'was already added in.')
      } else {
        this._nodes[s_name].push(edge.getDestination());
          this._edges.push(edge);
      }
    }
  }

  isNodeInMap(node) {  return this._nodes[node.getName()] != undefined }

  isNewEdge(edge) {
    return !this._edges.find(e => e.isSameAs(edge));
  }

  getDestinations(node) {
    const name = node.getName();
    return this._nodes[name];
  }

  findNode(name) {
    return this._nodes[name][0];
  }
}

class Graph extends DiGraph {
  constructor(title) {
    super(title);
  }

  addEdge(s_name, d_name) {
    super.addEdge(s_name, d_name);
    super.addEdge(d_name, s_name);
  }
}

function buildGraph(nodes, g_type, title) {
  const graph = g_type === 'DiGraph' ? new DiGraph(title) : new Graph(title);
  addNodeToGraph(graph, nodes);
  addEdgeToGraph(graph);
  return graph
} 

function addNodeToGraph(graph, nodes) {
  nodes.forEach(name => graph.addNode(new Node(name)))
}

function addEdgeToGraph(graph) {
  graph.addEdge('Boston', 'Providence')
  graph.addEdge('Boston', 'New York')
  graph.addEdge('Providence', 'Boston')
  graph.addEdge('Providence', 'New York')
  graph.addEdge('New York', 'Chicago')
  graph.addEdge('Chicago', 'Denver')
  graph.addEdge('Chicago', 'Phoenix')
  graph.addEdge('Denver', 'Phoenix')
  graph.addEdge('Denver', 'New York')
  graph.addEdge('Los Angeles', 'Boston')
}

function findPathDFS(graph, start, end, path, shortest) {
  path.push(start.getName());
  if (start.getName() === end.getName()) {
    console.log('Found a path:', path.join(' -> '))
    return [...path];
  } else {
    console.log('Current DFS path:', path.join(' -> '));
  }

  for (let node of graph.getDestinations(start)) {
    if (path.includes(node.getName())) {
      console.log('Already visited', node.getName());
    } else if (shortest.length < 1 || path.length < shortest.length) {
      const newPath = findPathDFS(graph, node, end, path.slice(), shortest.slice());
      if (newPath) {
        shortest = newPath;
      }
    }
  }
  return [...shortest];
}

function findPathBFS(graph, start, end) {

}

function findPath(cities, from, to, g_type, s_type) {
  if (cities.includes(from) && cities.includes(to)) {
    const graph = buildGraph(cities, g_type, 'City Map');
    const start = graph.findNode(from);
    const end = graph.findNode(to);
    const path = s_type === "DFS" ? findPathDFS(graph, start, end, [], []) : findPathBFS(graph, start, end);
    if (path) {
      console.log('Shortest path of', from, 'to', to, 'is', path.join(' -> '))
    } else {
      console.log('There is no path of ' + from + ' to ' + to + '.')
    }  
  }
  return console.log(from, 'or', to, 'is not in the Map.')
}


const cities = ['Boston', 'Providence', 'New York', 'Chicago', 'Denver', 'Phoenix', 'Los Angeles'];

findPath(cities, 'Boston', 'Phoenix', 'DiGraph', 'DFS');


function printGraph(graph) {
  nodes = graph._nodes;
  edges = graph._edges;
  for (let key in nodes) {
    let nodeStr = '';
    nodes[key].forEach(node => nodeStr += node.getName() + ', ')
    console.log(key, '->', nodeStr);
  }
  edges.forEach(edge => console.log(edge.getSource().getName(), '->', edge.getDestination().getName()));
}