export const testimonial = {
    name: 'testimonial',
    title: 'Chia sẻ cảm nhận',
    type: 'document',
    fields: [
        {
            name: 'quote',
            title: 'Quote (VI)',
            type: 'text',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'quoteEn',
            title: 'Quote (EN)',
            type: 'text',
        },
        {
            name: 'author',
            title: 'Author Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'role',
            title: 'Role/Company (VI)',
            type: 'string',
        },
        {
            name: 'roleEn',
            title: 'Role/Company (EN)',
            type: 'string',
        },
        {
            name: 'avatar',
            title: 'Avatar Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'videoUrl',
            title: 'Youtube Video URL (Optional)',
            type: 'url',
        },
    ],
}
