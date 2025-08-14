import React from 'react'

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
}

export function PlaceholderImage({ width, height, text, className = '' }: PlaceholderImageProps) {
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" dy=".3em">
        ${text || `${width}x${height}`}
      </text>
    </svg>
  `
  
  const dataUrl = `data:image/svg+xml;base64,${btoa(svgContent)}`
  
  return (
    <img
      src={dataUrl}
      alt={text || 'Placeholder image'}
      width={width}
      height={height}
      className={className}
    />
  )
}

export default PlaceholderImage