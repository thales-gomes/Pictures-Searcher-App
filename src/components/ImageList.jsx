import React from 'react'

export default function ImageList({ images }) {
  const imageComponent = images.map(({id, urls, alt_description}) => {
    return <img key={id} src={urls.regular} alt={alt_description}/>
  })

  return (
    <div>
      {imageComponent}
    </div>
  )
}
