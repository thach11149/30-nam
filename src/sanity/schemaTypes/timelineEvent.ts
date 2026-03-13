export const timelineEvent = {
    name: 'timelineEvent',
    title: 'Sự kiện mốc thời gian 30 năm',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year/Period (e.g. 1996-1997)',
            type: 'string',
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
            name: 'description',
            title: 'Description (VI)',
            type: 'text',
            // validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'descriptionEn',
            title: 'Description (EN)',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Highlight Image',
            type: 'image',
            options: { hotspot: true },
        },
    ],
    preview: {
        select: {
            title: 'year',
            subtitle: 'title',
            media: 'image',
        },
    },
}
