// 기능: 반응형 Swiper 아이콘 슬라이더 - 뷰포트 크기에 따라 슬라이드 개수 및 autoplay 조절
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/Test1.scss'

const Test1 = () => {
  // 사용할 아이콘 이미지 배열
  const base = import.meta.env.BASE_URL // GitHub Pages 배포용 기본 경로

  // 사용할 아이콘 이미지 배열
  const icons = [
    `${base}icon_01.png`,
    `${base}icon_02.png`,
    `${base}icon_03.png`,
    `${base}icon_04.png`,
    `${base}icon_05.png`,
  ]

  return (
    <div className="test1-wrapper">
      {/* Swiper 슬라이더 설정 */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // 사용 모듈
        loop={true} // 무한 반복
        pagination={{ clickable: true }} // 페이지네이션 (dots)
        navigation // 좌우 네비게이션 버튼

        //  반응형 breakpoints 설정
        breakpoints={{
          0: {
            slidesPerView: 1,
            autoplay: { delay: 2000 }, // 모바일: 자동 슬라이드 ON
          },
          768: {
            slidesPerView: 2,
            autoplay: false, // 태블릿: 자동 슬라이드 OFF
          },
          1280: {
            slidesPerView: 3,
            autoplay: { delay: 2000 }, // PC: 자동 슬라이드 ON
          },
        }}
        className="test1-swiper"
      >
        {/* 아이콘 슬라이드 렌더링 */}
        {icons.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`icon-${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Test1
