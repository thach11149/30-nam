export const testimonial = {
    name: 'testimonial',
    title: 'Chia sẻ cảm nhận',
    type: 'document',
    fields: [
        {
            name: 'category',
            title: 'Nhóm hiển thị',
            type: 'string',
            options: {
                list: [
                    { title: 'Doanh nghiệp 30 năm', value: 'doanh-nghiep' },
                    { title: 'Chuyên gia', value: 'chuyen-gia' },
                    { title: 'Thế hệ trẻ', value: 'the-he-tre' },
                    { title: 'Đại sứ hàng Việt', value: 'dai-su' },
                ],
                layout: 'dropdown',
            },
            initialValue: 'doanh-nghiep',
            validation: (Rule: any) => Rule.required(),
        },
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
