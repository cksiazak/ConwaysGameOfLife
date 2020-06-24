export const getNeighbors = (
  x: number,
  y: number,
  grid: any[][],
  gridSize: {
    rows: number;
    cols: number;
  }
) => {
  let count = 0;

  // top neighbor
  if (x > 0) if (grid[x - 1][y]) count++;
  // top-left neighbor
  if (x > 0 && y > 0) if (grid[x - 1][y - 1]) count++;
  // top right neighbor
  if (x > 0 && y < gridSize.cols - 1) if (grid[x - 1][y + 1]) count++;
  // right neighbor
  if (y < gridSize.cols - 1) if (grid[x][y + 1]) count++;
  // left neighbor
  if (y > 0) if (grid[x][y - 1]) count++;
  // bottom neighbor
  if (x < gridSize.rows - 1) if (grid[x + 1][y]) count++;
  // bottom left neighbor
  if (x < gridSize.rows - 1 && y > 0) if (grid[x + 1][y - 1]) count++;
  // bottom right neighbor
  if (x < gridSize.rows - 1 && y < gridSize.cols - 1)
    if (grid[x + 1][y + 1]) count++;

  return count;
};
