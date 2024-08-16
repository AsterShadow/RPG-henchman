import { MonstersResponse } from "@/types/monster";

const BASE_URL = "https://api.open5e.com/";

async function fetchMonstersByPage(
  page: number,
  maxRetries: number = 3
): Promise<StatBlockProps[]> {
  const url = `${BASE_URL}monsters/?page=${page}`;
  let retries = 0;
  while (retries < maxRetries) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to load data");
      const data: MonstersResponse = await response.json();
      return data.results;
    } catch (error) {
      console.error(`Attempt ${retries + 1} failed for page ${page}: ${error}`);
      retries += 1;
      if (retries >= maxRetries) {
        console.warn(
          `Skipping page ${page} after ${maxRetries} failed attempts.`
        );
        return [];
      }
    }
  }
  return [];
}

async function fetchAllMonsters(
  startPage: number = 1,
  maxRetries: number = 3
): Promise<StatBlockProps[]> {
  let monsters: StatBlockProps[] = [];
  let currentPage = startPage;

  while (true) {
    try {
      const pageMonsters = await fetchMonstersByPage(currentPage, maxRetries);
      if (pageMonsters.length === 0 && currentPage !== startPage) {
        break;
      }
      monsters = monsters.concat(pageMonsters);
      currentPage += 1;
    } catch (error) {
      console.error(`Failed to fetch page ${currentPage}: ${error}`);
      currentPage += 1;
    }
  }

  return monsters;
}
async function fetchTotalPages(): Promise<number> {
  const response = await fetch(`${BASE_URL}monsters/`);
  if (!response.ok) throw new Error("Failed to load data");
  const data = await response.json();

  const totalItems = data.count;
  const itemsPerPage = data.results.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return totalPages;
}

export { fetchAllMonsters, fetchMonstersByPage, fetchTotalPages };
