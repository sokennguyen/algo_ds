const dir = [
    [-1,0],
    [0,1],
    [1,0],
    [0,-1],
]

const  walk = (maze: string[], wall:string, curr: Point, seen: boolean[][], path: Point[], end: Point): boolean => {

    //base case 1: off the map
    if (curr.x < 0 || curr.x >= maze[0].length || 
        curr.y < 0 || curr.y >= maze.length){
        return false;
    }

    //base 2: on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    //base 3: ending
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    //base 4: seen before
    if (seen[curr.x][curr.y]) {
        return false
    }

    //pre
    seen[curr.x][curr.y] = true;
    path.push(curr)

    //recurse
    for (let i = 0; i<dir.length; i++) {
        const [x,y] = dir[i];
        if (walk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y,
        }, seen, path, end)) {
            return true;
        }
    }

    //post
    path.pop()
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i=0; i<maze[0].length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze,  wall, start, seen, path, end)
    return path
}
