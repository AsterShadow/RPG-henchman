// import { Monster, MonstersResponse } from "@/types/monster";

// const BASE_URL = "https://api.open5e.com/";

// async function fetchAllMonsters(): Promise<Monster[]> {
//   let url: string | null = `${BASE_URL}monsters/`;
//   let monsters: Monster[] = [];

//   while (url !== null) {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error("Failed to load data");
//     const data: MonstersResponse = await response.json();
//     monsters = monsters.concat(data.results);
//     url = data.next;
//   }

//   return monsters;
// }

// export const fetchUniqueAttributes = async (attribute: keyof Monster) => {
//   const monsters = await fetchAllMonsters();
//   const uniqueAttributes = Array.from(
//     new Set(monsters.map((monster) => monster[attribute]))
//   ).sort() as string[];
//   return uniqueAttributes;
// };

// export const fetchUniqueCRs = async () =>
//   fetchUniqueAttributes("challenge_rating");
// export const fetchUniqueSizes = async () => fetchUniqueAttributes("size");
// export const fetchUniqueTypes = async () => fetchUniqueAttributes("type");
// export const fetchUniqueAlignments = async () =>
//   fetchUniqueAttributes("alignment");

// export const fetchUniqueEnvironments = async () => {
//   const monsters = await fetchAllMonsters();
//   const environments = monsters.flatMap((monster) => monster.environments);
//   return Array.from(new Set(environments)).sort();
// };
