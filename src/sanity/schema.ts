import { type SchemaTypeDefinition } from 'sanity'

import { assetImage } from './schemaTypes/assetImage'
import { galleryImage } from './schemaTypes/galleryImage'
import { timelineEvent } from './schemaTypes/timelineEvent'
import { testimonial } from './schemaTypes/testimonial'
import { photoStory } from './schemaTypes/photoStory'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [assetImage, galleryImage, timelineEvent, testimonial, photoStory],
}
