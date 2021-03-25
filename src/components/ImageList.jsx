import React from 'react'
import './ImageList.css'

export default function ImageList({ images }) {
  const imageComponent = images.map(({id, urls, alt_description}) => {
    return <img key={id} src={urls.regular} alt={alt_description}/>
  })

  return <div className="image-list">{imageComponent}</div>
}
