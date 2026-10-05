import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: '24px',
                        height: '24px',
                        alignContent: 'space-between',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Top Left - Inactive (Zinc-600) */}
                    <div style={{ width: '11px', height: '11px', background: '#52525b', borderRadius: '1px' }} />

                    {/* Top Right - Active (Violet-600) */}
                    <div style={{ width: '11px', height: '11px', background: '#7c3aed', borderRadius: '1px' }} />

                    {/* Bottom Left - Inactive */}
                    <div style={{ width: '11px', height: '11px', background: '#52525b', borderRadius: '1px' }} />

                    {/* Bottom Right - Inactive */}
                    <div style={{ width: '11px', height: '11px', background: '#52525b', borderRadius: '1px' }} />
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
