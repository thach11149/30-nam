export const assetImage = {
    name: 'assetImage',
    title: 'Logo tài trợ, hình ảnh khác',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Logo tài trợ', value: 'logo-tai-tro' },
                    { title: 'Khác', value: 'other' },
                ],
                layout: 'dropdown',
            },
        },
    ],
};
