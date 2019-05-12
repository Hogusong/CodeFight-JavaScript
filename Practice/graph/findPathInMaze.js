const maze = [
  [0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 0],
  [1, 1, 1, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 1, 1]
]

class Edge {
  constructor(s, d) {
    this.source = s;
    this.dest = d;
  }
  getSource() {    return this.source;  }
  getDestination() {   return this.dest;  }
}

class DiGraph {
  constructor() {
    this.edges = [];
    this.nodes = {};
  }

  addNode(name) {
    if (this.nodes[name]) {
      console.log(name, 'exist already in this map.')
    } else {
      this.nodes[name] = [];
    }
  }

  addEdge(edge) {
    const src = edge.getSource();
    const dest = edge.getDestination();
    if (!(this.nodes[src] && this.nodes[dest])) {
      console.log(src, 'or', dest, 'is not found in the map');
    } else if (this.isNewEdge(src, dest)) {
      this.nodes[src].push(dest);
      this.edges.push(edge);
    } else {
      console.log(src, ' -> ', dest, 'is already added.')
    }
  }

  getDestinations(name) {
    return this.nodes[name];
  }

  isNewEdge(src, dest) {
    return !this.edges.find(e => e.getSource() === src && e.getDestination() === dest);
  }

  isNodeInMaze(name) {
    return this.nodes[name] != undefined;
  }

  getNodes() {
    return this.nodes;
  }
}

class Graph extends DiGraph {
  addEdge(edge) {
    super.addEdge(edge);
    const rev = new Edge(edge.getDestination(), edge.getSource());
    super.addEdge(rev);
  }
}

function buildGraph(maze) {
  const g = new DiGraph();
  for (let r=0; r<9; r++) {
    for (let c=0; c<9; c++) {
      if (maze[r][c] === 1) {
        g.addNode(r+':'+c)
      }      
    }
  }

  for (let r=0; r<9; r++) {
    for (let c=0; c<9; c++) {
      if (maze[r][c] === 1) {
        const possibleDestinations = getPossibleNodes(r, c, maze)
        possibleDestinations.forEach(dest => {
          g.addEdge(new Edge(r+':'+c, dest))
        })
      }      
    }
  }
  return g;
}

function getPossibleNodes(r, c, maze) {
  const nodes = [];
  if (isPossibleNode(r, c-1, maze)) {
    nodes.push(r+':'+ (c-1))
  }
  if (isPossibleNode(r, c+1, maze)) {
    nodes.push(r+':'+(c+1))
  }
  if (isPossibleNode(r-1, c, maze)) {
    nodes.push((r-1)+':'+c)
  }
  if (isPossibleNode(r+1, c, maze)) {
    nodes.push((r+1)+':'+c)
  }
  return nodes;
}

function isPossibleNode(r, c, maze) {
  if (r < 0 || r > 8 || c < 0 || c > 8 || maze[r][c] === 0) {
    return false;
  }
  return true;
}

function DFS(graph, start, end, path, shortest) {
  path.push(start);
  if (start === end) {
    console.log('Found a path:', path.join(' -> '))
    return path;
  } else {
    console.log('Current DFS path:', path.join(' -> '));
  }

  for (let node of graph.getDestinations(start)) {
    if (path.includes(node)) {
      console.log('Already visited', node);
    } else if (shortest.length < 1 || path.length < shortest.length) {
      const newPath = DFS(graph, node, end, path.slice(), shortest.slice());
      if (newPath) {
        shortest = newPath;
      }
    }
  }
  return shortest;
}

function BFS(graph, start, end) {
  const pathQueue = [[start]];
  while (pathQueue.length > 0) {
    const tempPath = pathQueue.shift();
    const lastNode = tempPath[tempPath.length-1];
    console.log('Current BFS path:', tempPath.join(' -> '));
    if (lastNode === end) {
      return tempPath;
    }

    for (let nextNode of graph.getDestinations(lastNode)) {
      if (!tempPath.includes(nextNode)) {
        const newPath = tempPath.slice();
        newPath.push(nextNode);
        pathQueue.push(newPath);
      }
    }
  }
  return null
}

function findPath(start, end, s_type) {
  const g = buildGraph(maze);
  if (g.isNodeInMaze(start) && g.isNodeInMaze(end)) {
    return (s_type === 'DFS') ? DFS(g, start, end, [], []) : BFS(g, start, end);
  }
  return null;  
}

[start, end] = ['0:8', '8:8'];
const pathDFS = findPath(start, end, 'DFS');
const pathBFS = findPath(start, end, 'BFS');
if (pathDFS) {
  console.log('Shortest path of', start, 'to', end, 'is', pathDFS.join(' -> '))
} else {
  console.log('There is no path of ' + start + ' to ' + end + '.')
}
if (pathBFS) {
  console.log('Shortest path of', start, 'to', end, 'is', pathBFS.join(' -> '))
} else {
  console.log('There is no path of ' + start + ' to ' + end + '.')
}

