import CustomModal from "@/components/CustomModal";
import { Autoplay, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ResidenceGalleryModal = (props) => {
  return <div>hi there</div>
};

export default ResidenceGalleryModal;

{
  /* <Swiper
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
                  className='mt-5 mb-3 position-relative'
                  style={{ height: "300px" }}
                >
                  <Image
                    src={image.img}
                    className='img-fluid position-absolute'
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt='gallery image'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */
}

// .modal-container{
//     background-color: rgba(0,0,0,0.4);
//     height: 100vh;
// }

// .modal-body{
//     height: fit-content !important;
// }
// .card__title__heading {
// 	font-family: "Work Sans", sans-serif;
// 	font-style: normal;
// 	font-weight: 700;
// 	font-size: 14px;
// 	line-height: 114.49%;
// 	letter-spacing: 0.26em;
// 	color: #070808;
// }

// .card__title__sub {
// 	font-family: "Work Sans", sans-serif;
// 	font-style: normal;
// 	font-weight: 400;
// 	font-size: 12px;
// 	line-height: 114.49%;
// 	letter-spacing: 0.26em;
// 	text-align: center;
// 	color: #030202;
//   margin-top: 5px;
// }
// .desc{
// 	font-family: "Cormorant Garamond", serif;
// 	font-style: normal;
// 	font-weight: 400;
// 	font-size: 1.1rem;
// 	line-height: 128.5%;
// 	color: #100707;
// 	text-align: center !important;
// }
