'use client'

import { useEffect } from 'react'

const REELS = [
  {
    url: 'https://www.instagram.com/the_wharton_mildmen/reel/DRRE1SljXdF/',
    caption: "Bonner's Goal Leader"
  },
  {
    url: 'https://www.instagram.com/the_wharton_mildmen/reel/DRREuWqjQT3/',
    caption: "Lucy's Secret Weapon"
  }
]

export default function Highlights() {
  useEffect(() => {
    // Load Instagram embed script
    if (typeof window !== 'undefined' && !document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script')
      script.id = 'instagram-embed-script'
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    } else if (typeof window !== 'undefined' && (window as unknown as { instgrm?: { Embeds?: { process?: () => void } } }).instgrm?.Embeds?.process) {
      (window as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm.Embeds.process()
    }
  }, [])

  return (
    <div className="section">
      <h2 className="section-heading">TESTIMONIALS</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {REELS.map((reel, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={reel.url}
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '99.375%'
              }}
            >
              <a href={reel.url} target="_blank" rel="noopener noreferrer">
                View on Instagram
              </a>
            </blockquote>
            {reel.caption && (
              <p style={{
                color: '#001f3f',
                fontWeight: 'bold',
                marginTop: '0.5rem',
                fontSize: '1.1rem'
              }}>
                {reel.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
