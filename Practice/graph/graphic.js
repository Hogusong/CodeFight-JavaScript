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
    this.cities = {};
  }

  addCity(name) {
    if (this.cities[name]) {
      console.log(name, 'exist already in this map.')
    } else {
      this.cities[name] = [];
    }
  }

  addEdge(edge) {
    const src = edge.getSource();
    const dest = edge.getDestination();
    if (!(this.cities[src] && this.cities[dest])) {
      console.log(src, 'or', dest, 'is not found in the map');
    } else if (this.isNewEdge(src, dest)) {
      this.cities[src].push(dest);
      this.edges.push(edge);
    } else {
      console.log(src, ' -> ', dest, 'is already added.')
    }
  }

  getDestinations(city) {
    return this.cities[city];
  }

  isNewEdge(src, dest) {
    return !this.edges.find(e => e.getSource() === src && e.getDestination() === dest);
  }

  isCityInMap(city) {
    return this.cities[city] != undefined;
  }
}

class Graph extends DiGraph {
  addEdge(edge) {
    super.addEdge(edge);
    const rev = new Edge(edge.getDestination(), edge.getSource());
    super.addEdge(rev);
  }
}

function buildGraph(type) {
  g = (type === 'Graph') ? new Graph() : new DiGraph();
  for ( let name of ['Boston', 'Providence', 'New York', 'Chicago', 'Denver', 'Phoenix', 'Los Angeles']) {
    g.addCity(name);
  }
  g.addEdge(new Edge('Boston', 'Providence'))
  g.addEdge(new Edge('Boston', 'New York'))
  g.addEdge(new Edge('Providence', 'Boston'))
  g.addEdge(new Edge('Providence', 'New York'))
  g.addEdge(new Edge('New York', 'Chicago'))
  g.addEdge(new Edge('Chicago', 'Denver'))
  g.addEdge(new Edge('Chicago', 'Phoenix'))
  g.addEdge(new Edge('Denver', 'Phoenix'))
  g.addEdge(new Edge('Denver', 'New York'))
  g.addEdge(new Edge('Los Angeles', 'Boston'))  
  return g;
}

function DFS(graph, start, end, path, shortest) {
  path.push(start);
  if (start === end) {
    console.log('Found a path:', path.join(' -> '))
    return path;
  } else {
    console.log('Current DFS path:', path.join(' -> '));
  }

  for (let city of g.getDestinations(start)) {
    if (path.includes(city)) {
      console.log('Already visited', city);
    } else if (shortest.length < 1 || path.length < shortest.length) {
      const newPath = DFS(graph, city, end, path.slice(), shortest.slice());
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
    const lastCity = tempPath[tempPath.length-1];
    console.log('Current BFS path:', tempPath.join(' -> '));
    if (lastCity === end) {
      return tempPath;
    }

    for (let nextCity of graph.getDestinations(lastCity)) {
      if (!tempPath.includes(nextCity)) {
        const newPath = tempPath.slice();
        newPath.push(nextCity);
        pathQueue.push(newPath);
      }
    }
  }
  return null
}

function findPath(start, end, g_type='DiGraph', s_type='DFS') {
  const g = buildGraph(g_type);
  if (g.isCityInMap(start) && g.isCityInMap(end)) {
    return (s_type === 'DFS') ? DFS(g, start, end, [], []) : BFS(g, start, end);
  }
  return null;  
}

function testFindingPath(start, end, g_type, s_type) {
  const path = findPath(start, end, g_type, s_type);
  if (path) {
    console.log('Shortest path of', start, 'to', end, 'is', path.join(' -> '))
  } else {
    console.log('There is no path of ' + start + ' to ' + end + '.')
  }
}

testFindingPath('Boston', 'Phoenix', 'DiGraph', 'DFS');
testFindingPath('Chicago', 'Boston', 'DiGraph', 'DFS');

testFindingPath('Boston', 'Phoenix', 'DiGraph', 'BFS')
testFindingPath('Chicago', 'Boston', 'DiGraph', 'BFS')

// testFindingPath('Boston', 'Phoenix', 'Graph', 'DFS');
// testFindingPath('Boston', 'Phoenix', 'Graph', 'BFS');

// testFindingPath('Boston', 'Phoenix', 'Graph', 'BFS')
// testFindingPath('Chicago', 'Boston', 'Graph', 'BFS')
