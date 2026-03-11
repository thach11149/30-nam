import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

// Sanity webhook secret (set in .env.local)
const SANITY_WEBHOOK_SECRET = process.env.SANITY_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
    try {
        // Verify webhook secret if set
        if (SANITY_WEBHOOK_SECRET) {
            const authHeader = req.headers.get('authorization')
            if (authHeader !== `Bearer ${SANITY_WEBHOOK_SECRET}`) {
                return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
            }
        }

        const body = await req.json()
        const { _type } = body

        // Revalidate the matching tag based on document type
        // Next.js 16: revalidateTag(tag, profile) - "max" uses stale-while-revalidate strategy
        if (_type) {
            revalidateTag(_type, 'max')
            return NextResponse.json({
                revalidated: true,
                type: _type,
                now: Date.now(),
            })
        }

        // If no type, revalidate all content tags
        revalidateTag('galleryImage', 'max')
        revalidateTag('photoStory', 'max')
        revalidateTag('timelineEvent', 'max')
        revalidateTag('testimonial', 'max')

        return NextResponse.json({
            revalidated: true,
            type: 'all',
            now: Date.now(),
        })
    } catch (err) {
        return NextResponse.json(
            { message: 'Error revalidating', error: String(err) },
            { status: 500 }
        )
    }
}
