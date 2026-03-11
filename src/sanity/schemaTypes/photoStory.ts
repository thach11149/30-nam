export const photoStory = {
    name: 'photoStory',
    title: 'Photo Story',
    type: 'document',
    fields: [
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Lễ công bố', value: 'ceremony' },
                    { title: 'Hội chợ trong nước', value: 'domestic' },
                    { title: 'Hội chợ quốc tế', value: 'international' },
                    { title: 'Về nông thôn', value: 'rural' },
                    { title: 'Khác', value: 'other' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
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
            name: 'year',
            title: 'Year',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'location',
            title: 'Location (VI)',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'locationEn',
            title: 'Location (EN)',
            type: 'string',
        },
        {
            name: 'character',
            title: 'Character/Unit (VI)',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'characterEn',
            title: 'Character/Unit (EN)',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'caption',
            title: 'Caption (VI)',
            type: 'text',
            rows: 6,
            validation: (Rule: any) => Rule.required().min(30),
        },
        {
            name: 'captionEn',
            title: 'Caption (EN)',
            type: 'text',
            rows: 6,
        },
        {
            name: 'sortOrder',
            title: 'Sort Order',
            type: 'number',
            initialValue: 100,
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'year',
            media: 'image',
        },
        prepare(selection: any) {
            const { title, subtitle, media } = selection
            return {
                title,
                subtitle: subtitle ? `Year: ${subtitle}` : 'No year',
                media,
            }
        },
    },
}
