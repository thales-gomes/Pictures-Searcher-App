import React from 'react'

export default function ImageList({ images }) {
  const imageComponent = images.map(image => {
    return <img key={image.id} src={image.urls.regular} alt={image.alt_description}/>
  })

  return (
    <div>
      {imageComponent}
    </div>
  )
}
