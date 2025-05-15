import { createClient } from "tinacms/dist/client";
import { queries } from "../../tina/__generated__/types";

export const client = createClient({
  url: process.env.NEXT_PUBLIC_TINA_CLIENT_ID
    ? `https://content.tinajs.io/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${process.env.NEXT_PUBLIC_TINA_BRANCH || 'main'}`
    : 'http://localhost:4001/graphql',
  token: process.env.TINA_TOKEN || '',
  queries,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
});

export async function getMissionData() {
  const missionResult = await client.queries.mission({
    relativePath: "mission.json",
  });
  return missionResult.data.mission;
}

export async function getNewsItems() {
  const newsResult = await client.queries.newsConnection();
  return newsResult.data.newsConnection.edges.map((edge) => edge.node);
}

export async function getNewsItem(relativePath: string) {
  const newsResult = await client.queries.news({
    relativePath,
  });
  return newsResult.data.news;
} 