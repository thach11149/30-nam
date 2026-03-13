export const homeContent = {
  name: 'homeContent',
  title: 'Nội dung trang chủ',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tên cấu hình',
      type: 'string',
      initialValue: 'Trang chủ mặc định',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'configKey',
      title: 'Khóa cấu hình',
      type: 'string',
      initialValue: 'default-home',
      readOnly: true,
      hidden: true,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'event2026',
      title: 'Khối Sự kiện 2026',
      type: 'object',
      fields: [
        { name: 'kicker', title: 'Nhãn nhỏ', type: 'string' },
        { name: 'subtitle', title: 'Tiêu đề phụ', type: 'string' },
        { name: 'titleLine1', title: 'Tiêu đề dòng 1', type: 'string' },
        { name: 'titleLine2', title: 'Tiêu đề dòng 2', type: 'string' },
        { name: 'venue', title: 'Địa điểm', type: 'string' },
        { name: 'schedule', title: 'Thời gian', type: 'string' },
        { name: 'description', title: 'Mô tả', type: 'text', rows: 4 },
        {
          name: 'activities',
          title: 'Hoạt động nổi bật',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'text', title: 'Nội dung', type: 'string', validation: (Rule: any) => Rule.required() },
                {
                  name: 'iconClass',
                  title: 'Màu icon',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Xanh dương', value: 'event2026-card-icon--blue' },
                      { title: 'Vàng', value: 'event2026-card-icon--gold' },
                      { title: 'Xanh lá', value: 'event2026-card-icon--green' },
                    ],
                  },
                },
              ],
            },
          ],
        },
        { name: 'ctaLabel', title: 'Nút chính - Nhãn', type: 'string' },
        { name: 'ctaHref', title: 'Nút chính - Đường dẫn', type: 'string' },
        { name: 'secondaryCtaLabel', title: 'Nút phụ - Nhãn', type: 'string' },
      ],
    },
    {
      name: 'vision2026',
      title: 'Khối Tầm nhìn 2026',
      type: 'object',
      fields: [
        { name: 'titleYear', title: 'Tiêu đề năm', type: 'string' },
        { name: 'titleLine1', title: 'Tiêu đề dòng 1', type: 'string' },
        { name: 'titleLine2', title: 'Tiêu đề dòng 2', type: 'string' },
        { name: 'noteLabel', title: 'Nhãn ghi chú', type: 'string' },
        { name: 'noteTitle', title: 'Tiêu đề ghi chú', type: 'string' },
        { name: 'noteDesc', title: 'Mô tả ghi chú', type: 'text', rows: 3 },
        {
          name: 'pillars',
          title: 'Trụ cột chiến lược',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'tag', title: 'Tag', type: 'string' },
                { name: 'title', title: 'Tiêu đề', type: 'string', validation: (Rule: any) => Rule.required() },
                { name: 'desc', title: 'Mô tả', type: 'text', rows: 3 },
              ],
            },
          ],
        },
        { name: 'roadmapTitle', title: 'Tiêu đề Roadmap', type: 'string' },
        { name: 'roadmapSubtitle', title: 'Phụ đề Roadmap', type: 'string' },
        { name: 'standardLabel', title: 'Nhãn chuẩn', type: 'string' },
        {
          name: 'quarters',
          title: 'Mốc theo quý',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'q', title: 'Quý', type: 'string', validation: (Rule: any) => Rule.required() },
                { name: 'event', title: 'Sự kiện', type: 'string', validation: (Rule: any) => Rule.required() },
                { name: 'theme', title: 'Chủ đề', type: 'string' },
              ],
            },
          ],
        },
        { name: 'ctaTag', title: 'Tag CTA', type: 'string' },
        { name: 'ctaTitleLine1', title: 'CTA tiêu đề dòng 1', type: 'string' },
        { name: 'ctaTitleLine2', title: 'CTA tiêu đề dòng 2', type: 'string' },
        { name: 'ctaDesc', title: 'CTA mô tả', type: 'text', rows: 3 },
        { name: 'ctaPrimaryLabel', title: 'CTA chính', type: 'string' },
        { name: 'ctaSecondaryLabel', title: 'CTA phụ', type: 'string' },
      ],
    },
    {
      name: 'statistics',
      title: 'Khối Thống kê',
      type: 'object',
      fields: [
        { name: 'sectionTitle', title: 'Tiêu đề', type: 'string' },
        {
          name: 'items',
          title: 'Các chỉ số',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'target', title: 'Giá trị', type: 'number', validation: (Rule: any) => Rule.required() },
                { name: 'suffix', title: 'Hậu tố (ví dụ +, %)', type: 'string' },
                { name: 'label', title: 'Nhãn', type: 'string', validation: (Rule: any) => Rule.required() },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'ebookArchive',
      title: 'Khối Ebook',
      type: 'object',
      fields: [
        { name: 'kicker', title: 'Nhãn nhỏ', type: 'string' },
        { name: 'titleLine1', title: 'Tiêu đề dòng 1', type: 'string' },
        { name: 'titleLine2', title: 'Tiêu đề dòng 2', type: 'string' },
        { name: 'subtitle', title: 'Mô tả', type: 'text', rows: 4 },
        { name: 'chapterListTitle', title: 'Tiêu đề danh mục chương', type: 'string' },
        { name: 'authorName', title: 'Tên tác giả', type: 'string' },
        { name: 'authorRole', title: 'Chức danh tác giả', type: 'string' },
        { name: 'authorAvatar', title: 'Ảnh tác giả (URL)', type: 'url' },
        { name: 'primaryCtaLabel', title: 'Nút chính', type: 'string' },
        { name: 'secondaryCtaLabel', title: 'Nút phụ', type: 'string' },
        {
          name: 'chapters',
          title: 'Danh sách chương',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'id', title: 'Mã chương', type: 'string', validation: (Rule: any) => Rule.required() },
                { name: 'title', title: 'Tiêu đề', type: 'string', validation: (Rule: any) => Rule.required() },
                { name: 'tag', title: 'Nhãn', type: 'string' },
                { name: 'cover', title: 'Ảnh bìa (URL)', type: 'url' },
                { name: 'coverNote', title: 'Ghi chú bìa', type: 'string' },
                { name: 'description', title: 'Mô tả', type: 'text', rows: 4 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'historyTimelineSection',
      title: 'Khối Hành trình 30 năm',
      type: 'object',
      fields: [
        { name: 'sectionTitle', title: 'Tiêu đề', type: 'string' },
        { name: 'sectionSubtitle', title: 'Phụ đề', type: 'string' },
        { name: 'detailCtaLabel', title: 'Nhãn nút xem chi tiết', type: 'string' },
        { name: 'detailCtaPath', title: 'Đường dẫn nút xem chi tiết', type: 'string' },
      ],
    },
    {
      name: 'testimonialSection',
      title: 'Khối Họ đã nói',
      type: 'object',
      fields: [
        { name: 'kicker', title: 'Nhãn nhỏ', type: 'string' },
        { name: 'titleMain', title: 'Tiêu đề chính', type: 'string' },
        { name: 'titleHighlight', title: 'Tiêu đề nhấn mạnh', type: 'string' },
        { name: 'subtitle', title: 'Mô tả', type: 'text', rows: 3 },
        {
          name: 'tabs',
          title: 'Tab lọc',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'id',
                  title: 'ID tab',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Tất cả', value: 'all' },
                      { title: 'Doanh nghiệp 30 năm', value: 'doanh-nghiep' },
                      { title: 'Chuyên gia', value: 'chuyen-gia' },
                      { title: 'Thế hệ trẻ', value: 'the-he-tre' },
                      { title: 'Đại sứ hàng Việt', value: 'dai-su' },
                    ],
                    layout: 'dropdown',
                  },
                  validation: (Rule: any) => Rule.required(),
                },
                { name: 'label', title: 'Nhãn tab', type: 'string', validation: (Rule: any) => Rule.required() },
              ],
            },
          ],
        },
        { name: 'durationLabel', title: 'Nhãn thời lượng video', type: 'string' },
        { name: 'moreStoriesLabel', title: 'Nhãn link xem thêm', type: 'string' },
        { name: 'moreStoriesHref', title: 'Đường dẫn link xem thêm', type: 'string' },
      ],
    },
    {
      name: 'photoGallerySection',
      title: 'Khối Ống kính di sản',
      type: 'object',
      fields: [
        { name: 'titlePrimary', title: 'Tiêu đề chính', type: 'string' },
        { name: 'titleMuted', title: 'Tiêu đề phụ', type: 'string' },
        { name: 'brandLabel', title: 'Nhãn thương hiệu', type: 'string' },
        {
          name: 'filters',
          title: 'Bộ lọc',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'id',
                  title: 'ID bộ lọc',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Tất cả', value: 'all' },
                      { title: 'Lễ công bố', value: 'ceremony' },
                      { title: 'Hội chợ trong nước', value: 'domestic' },
                      { title: 'Hội chợ quốc tế', value: 'international' },
                      { title: 'Về nông thôn', value: 'rural' },
                      { title: 'Khác', value: 'other' },
                    ],
                    layout: 'dropdown',
                  },
                  validation: (Rule: any) => Rule.required(),
                },
                { name: 'label', title: 'Nhãn bộ lọc', type: 'string', validation: (Rule: any) => Rule.required() },
              ],
            },
          ],
        },
        { name: 'infoTitle', title: 'Tiêu đề thông tin ảnh', type: 'string' },
        { name: 'locationLabel', title: 'Nhãn vị trí', type: 'string' },
        { name: 'characterLabel', title: 'Nhãn nhân vật', type: 'string' },
        { name: 'expandLabel', title: 'Nhãn nút mở rộng', type: 'string' },
        { name: 'reelTitle', title: 'Tiêu đề cuộn phim', type: 'string' },
        { name: 'closeLensLabel', title: 'Nhãn đóng modal', type: 'string' },
      ],
    },
  ],
};
