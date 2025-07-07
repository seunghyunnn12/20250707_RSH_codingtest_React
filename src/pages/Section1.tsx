// 기능: 반응형 이미지 슬라이드 - 자동 재생, 페이지네이션, 네비게이션, 스크롤바 포함
import { Swiper, SwiperSlide } from 'swiper/react' // 슬라이드 구성 요소 import
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules' // Swiper 모듈 
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '../styles/Section1.scss'

const Section1 = () => {
  // 슬라이드에 사용할 이미지 리스트
  const base = import.meta.env.BASE_URL
  const images = [
    `${base}photo_01.jpg`,
    `${base}photo_02.jpg`,
    `${base}photo_03.jpg`,
  ]

  return (
    <div className="section1-wrapper">
      {/* Swiper 슬라이더 설정: 자동재생, 페이지네이션, 네비게이션, 스크롤바 */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Scrollbar]}
        loop={true} // 무한 반복
        autoplay={{ delay: 2000 }} // 2초 간격 자동 재생
        pagination={{ clickable: true, type: 'bullets' }} // 하단 점 클릭 가능
        navigation // 좌우 화살표 네비게이션 활성화
        scrollbar={{ draggable: true }} // 하단 스크롤바 드래그 가능
        className="section1-swiper"
      >
        {/* 이미지 슬라이드 반복 렌더링 */}
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`slide-${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Section1
