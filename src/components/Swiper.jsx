import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';

const CampingImageShowcase = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);

	// Image data for the showcase
	const images = [
		{
			id: 1,
			src: '/camp.jpeg',
			thumb: '/thumbnails/camp.png',
			alt: 'Camping tents overlooking mountains'
		},
		{
			id: 2,
			src: '/birthday.jpeg',
			thumb: '/thumbnails/birthday.png',
			alt: 'Birthday celebration'
		},
		{
			id: 3,
			src: '/flowering.jpeg',
			thumb: '/thumbnails/flowering.png',
			alt: 'Flowering plants'
		},
		{
			id: 4,
			src: '/hiking.jpeg',
			thumb: '/thumbnails/hiking.png',
			alt: 'Forest hiking trail'
		},
		{
			id: 5,
			src: '/shooting.jpeg',
			thumb: '/thumbnails/shooting.png',
			alt: 'Shooting range'
		}
	];

	return (
		<div className="relative w-full mx-auto z-0 overflow-hidden">
			<div className='absolute h-[108%] w-xl bg-white/20 backdrop-blur-xl rounded-full -top-6 -right-[400px] z-10'></div>
			{/* Main Image Swiper */}
			<Swiper
				onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
				spaceBetween={0}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				modules={[FreeMode, Thumbs]}
				className="w-full h-full mb-4"
			>
				{images.map((image) => (
					<SwiperSlide key={image.id}>
						<div className="relative w-full h-[600px]">
							<img
								src={image.src}
								alt={image.alt}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
							<div className="absolute top-1/4 left-16 text-white z-10">
								<h2 className="text-5xl font-bold mb-2">Partagez vos</h2>
								<div className="bg-white text-blue-700 px-6 py-3 rounded-full inline-block mb-4">
									<span className="text-5xl font-bold">moments inoubliables</span>
								</div>
								<h2 className="text-5xl font-bold">avec nous</h2>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Modified Thumbnail Swiper - Right Sidebar */}
			<div className="absolute top-8 right-8 z-20 w-[308px] rounded-full ">
				<div className="curved-slider-container rounded-full ">
					<Swiper
						onSwiper={setThumbsSwiper}
						onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
						centeredSlides={true}
						spaceBetween={20}
						slidesPerView={3}
						direction="vertical"
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Thumbs]}
						className="h-[500px] curved-slider"
					>
						{images.map((image, index) => (
							<SwiperSlide
								key={image.id}
								className={` cursor-pointer`}
							>
								<div className={`${activeIndex == index && 'scale-150'} ${activeIndex < index && 'ml-20'} ${activeIndex > index && 'ml-20'}`}>
									<div className={` hexagon-thumb`}>
										<img
											src={image.thumb}
											alt={`Thumbnail ${image.id}`}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>

							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			{/* Updated CSS */}
			<style jsx>{`
        .hexagon-thumb {
          position: relative;
          width: 90px;
          height: 90px;
          // background-color: #fff;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          overflow: hidden;
          margin: 0 auto;
          transition: transform 0.3s ease;
        }

        .curved-slider-container {
          position: relative;
          height: 500px;
          // perspective: 1000px;
        }

        .curved-slider {
          transform-style: preserve-3d;
          transform: rotateY(15deg);
        }

        .thumb-slide {
          transform-origin: center right;
          transform: translateZ(calc(var(--slide-index) * 10px))
                    rotateY(calc(var(--slide-index) * -5deg))
                    translateX(calc(var(--slide-index) * 5px));
        }

        .hexagon-thumb img {
          width: 100%;
          height: 100%;
          // object-fit: cover;
        }

        .swiper-slide-thumb-active .hexagon-thumb {
          transform: scale(1.1);
          border: 2px solid #60A5FA;
        }
      `}</style>
		</div>
	);
};

export default CampingImageShowcase;