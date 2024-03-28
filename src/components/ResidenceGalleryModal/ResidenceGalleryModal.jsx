import { Container, Image, Modal } from "react-bootstrap"
import { Autoplay, Keyboard } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "./ResidenceGalleryModal.css"

const ResidenceGalleryModal = (props) => {
	return (
		<Modal
			{...props}
			size="xl"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			className="modal-container"
		>
			<Modal.Header closeButton>
				<Modal.Title
					id="contained-modal-title-vcenter"
					className="d-flex justify-content-between align-items-center"
				>
					<h1 className="card__title__heading fs-5">
						{props.title} -{" "}
						<span className="card__title__sub fs-5">{props.location}</span>
					</h1>
					Modal heading
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="modal-body">
				<p className="desc">{props.description}</p>
				{/* Gallery Slider Start */}
				<Container fluid className="px-0">
					<Swiper
						slidesPerView={3}
						spaceBetween={10}
						centeredSlides={true}
						grabCursor={true}
						loop={true}
						autoplay={{
							delay: 3000,
						}}
						keyboard={{ enabled: true }}
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Autoplay, Keyboard]}
						breakpoints={{
							320: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
							1440: {
								slidesPerView: 3,
							},
							1920: {
								slidesPerView: 3,
							},
						}}
					>
						{props.images.map((image, index) => (
							<SwiperSlide key={index}>
								<div
									className="mt-5 mb-3 position-relative"
									style={{ height: "300px" }}
								>
									<Image
										src={image.img}
										className="img-fluid position-absolute"
										style={{
											height: "100%",
											width: "100%",
											objectFit: "cover",
										}}
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</Container>
				{/* Gallery Slider End */}
				{/* <div>
					{props.images.map((image, index) => {
						return <GalleryItem key={index} image={image} />
					})}
				</div> */}
			</Modal.Body>
		</Modal>
	)
}

export default ResidenceGalleryModal
