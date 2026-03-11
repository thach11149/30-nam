import { client } from './client';

export async function getAssetImages() {
  if (!client) return [];

  return client.fetch(
    `*[_type == "assetImage"] | order(_createdAt desc) {
      _id,
      title,
      image,
      description,
      category
    }`
  );
}

export async function getBackgroundSectionHeroImage() {
  if (!client) return null;

  return client.fetch(
    `*[_type == "assetImage" && title == "Background Section Hero"][0] {
      _id,
      title,
      image,
      description,
      category
    }`
  );
}
