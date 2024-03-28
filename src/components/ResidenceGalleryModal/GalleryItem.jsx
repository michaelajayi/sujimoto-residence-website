import React from 'react'

const GalleryItem = ({image}) => {
  return (
		<>
			<img src={image.img1} alt="Residence_img" />
			<img src={image.img2} alt="Residence_img" />
			<img src={image.img3} alt="Residence_img" />
			<img src={image.img4} alt="Residence_img" />
			<img src={image.img5} alt="Residence_img" />
		</>
	)
}

export default GalleryItem