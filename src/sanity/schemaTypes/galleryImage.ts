export const galleryImage = {
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title (VI)',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'titleEn',
            title: 'Title (EN)',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Lễ công bố', value: 'le-cong-bo' },
                    { title: 'Hội chợ', value: 'hoi-cho' },
                    { title: 'Nông thôn', value: 'nong-thon' },
                    { title: 'Khác', value: 'khac' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
    ],
}
