import React, { useContext, useEffect, useRef, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useSwiperSlide } from "swiper/react"
import LayoutContext from "../../context/Layout/layoutContext"
import { setActiveCarouselBg } from "../../features/property/propertySlice"
import BookingModal from "../BookingModal/BookingModal"
import ResidenceGalleryModal from "../ResidenceGalleryModal/ResidenceGalleryModal"
import "./CarouselItem.css"
// import gsap from "gsap";

const CarouselItem = ({ carousel }) => {
	const layoutContext = useContext(LayoutContext)

	const dispatch = useDispatch()

	const cardImgRef = useRef()

	const swiperSlide = useSwiperSlide()

	const { activeCarousel } = layoutContext
	const [show, setShow] = useState(false)
	const [modalShow, setModalShow] = useState(false)
	const onHide = () => {
		setShow(false)
	}

	const activeBackgroundRef = useRef(null)

	// useEffect(() => {
	//   activeBackgroundRef.current = carousel.img;
	//   dispatch(setActiveCarouselBg(activeBackgroundRef.current));
	// }, [carousel.img, carousel.title, dispatch, swiperSlide.isActive]);

	useEffect(() => {
		if (swiperSlide.isActive) {
			// console.log({
			//   carousel: carousel.title,
			//   isActive: swiperSlide.isActive,
			// });
			activeBackgroundRef.current = carousel.img
			dispatch(setActiveCarouselBg(activeBackgroundRef.current))
		}
	}, [carousel.img, carousel.title, dispatch, swiperSlide.isActive])

	// useEffect(() => {
	//   cardImgRef.current.addEventListener("mouseover", () => {
	//     gsap.to(cardImgRef.current, {
	//       duration: 0.2,
	//       ease: "power2.inOut",
	//       scale: 1.1,
	//     });
	//   });
	//   cardImgRef.current.addEventListener("mouseleave", () => {
	//     gsap.to(cardImgRef.current, {
	//       duration: 0.2,
	//       ease: "power2.inOut",
	//       scale: 1,
	//     });
	//   });
	// }, []);
	return (
		<>
			<Card
				className={`rounded-0 carousel__card  px-0 mb-5  ${
					swiperSlide.isActive ? "active__card" : null
				} ${
					!swiperSlide.isActive ? "transparent__content border-1" : "border-0"
				}`}
			>
				<Card.Body className="text-dark d-flex flex-column align-items-center justify-content-center gap-4 px-0">
					<Card.Text>
						<div className="d-flex flex-column align-items-center justify-content-center gap-1 mt-3">
							<h4
								className={`text-uppercase card__title__heading ${
									!swiperSlide.isActive ? "text-white" : "text-dark"
								}`}
							>
								{carousel.title}
							</h4>
							<p
								className={`text-uppercase card__title__sub`}
								// className={`text-uppercase card__title__sub ${
								// 	carousel.title !== activeCarousel.title
								// 		? "invisible"
								// 		: "visible"
								// }`}
							>
								- {carousel.subTitle} -
							</p>
						</div>
					</Card.Text>
					<div
						className={`others ${
							!swiperSlide.isActive ? "invisible" : " visible"
						}`}
					>
						{/* <Link
            to={`property/${carousel.title}`}
            className='rounded-0'
            style={{ textDecoration: "none" }}
          > */}
						<div className="img-box">
							<ResidenceGalleryModal
								show={modalShow}
								onHide={() => setModalShow(false)}
								title={carousel.title}
								location={carousel.subTitle}
								images={carousel.gallery}
								description={carousel.description}
							/>
							<Card.Img
								variant="top"
								src={carousel.img}
								className="rounded-0 card__image"
								ref={cardImgRef}
							/>
						</div>
						{/* </Link> */}

						<div className="amenities">
							<p
								className={`text-uppercase card__title__sub`}
								style={{ marginBottom: "10px" }}
							>
								Price:{" "}
								<span className="fw-bold">
									&#8358;{carousel.minPrice} - &#8358;{carousel.maxPrice}
								</span>
							</p>
							<ul className="d-flex flex-column mx-3 list-unstyled">
								{carousel.amenities.map((amenity, index) => (
									<li className="py-1 d-flex align-items-center" key={index}>
										{amenity.icon}
										<span className="ms-2">{amenity.title}</span>
									</li>
								))}
							</ul>
						</div>
						{swiperSlide.isActive && (
							<div
								className={`btn__group d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mb-4 ${
									!swiperSlide.isActive ? "invisible" : "visible"
								}`}
							>
								<Button
									className="rounded-0 card__btn text-uppercase shadow-none bg-black text-white"
									onClick={() => setShow(!show)}
								>
									Book Now
								</Button>

								<Link
									className="rounded-0 card__btn text-uppercase shadow-none"
									style={{ textDecoration: "none" }}
									onClick={() => setModalShow(true)}
								>
									View
								</Link>
							</div>
						)}
					</div>
				</Card.Body>
			</Card>
			<BookingModal show={show} onHide={onHide} />
		</>
	)
}

export default CarouselItem
