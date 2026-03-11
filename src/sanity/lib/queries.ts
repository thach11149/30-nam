import { client } from './client'

// --- Gallery Images ---
export async function getGalleryImages() {
  if (!client) return []

  return client.fetch(
    `*[_type == "galleryImage"] | order(_createdAt desc) {
      _id,
      title,
      titleEn,
      image,
      category
    }`,
    {},
    { next: { tags: ['galleryImage'] } }
  )
}

// --- Timeline Events ---
export async function getTimelineEvents() {
  if (!client) return []

  return client.fetch(
    `*[_type == "timelineEvent"] | order(year asc) {
      _id,
      year,
      title,
      titleEn,
      description,
      descriptionEn,
      "imageUrl": image.asset->url
    }`,
    {},
    { next: { tags: ['timelineEvent'] } }
  )
}

// --- Testimonials ---
export async function getTestimonials() {
  if (!client) return []

  return client.fetch(
    `*[_type == "testimonial"] {
      _id,
      quote,
      quoteEn,
      author,
      role,
      roleEn,
      "avatarUrl": avatar.asset->url,
      videoUrl
    }`,
    {},
    { next: { tags: ['testimonial'] } }
  )
}

// --- Photo Stories ---
export async function getPhotoStories() {
  if (!client) return []

  return client.fetch(
    `*[_type == "photoStory"] | order(sortOrder asc, _createdAt desc) {
      _id,
      category,
      title,
      titleEn,
      year,
      location,
      locationEn,
      character,
      characterEn,
      image,
      caption,
      captionEn,
      sortOrder
    }`,
    {},
    { next: { tags: ['photoStory'] } }
  )
}
