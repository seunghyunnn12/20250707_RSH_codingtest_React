// 기능: 반응형 2뎁스 GNB 헤더 - 모바일 toggle, PC hover, 외부 영역 클릭 시 닫힘

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from '../styles/Header.module.scss'

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280) // 화면 크기 체크
  const [gnbOpen, setGnbOpen] = useState(false) // 모바일 GNB 열림 여부
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // 활성화된 메뉴 인덱스

  // 화면 크기 변경 시 isMobile 상태 업데이트
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1280)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleGnb = () => setGnbOpen(!gnbOpen) // 햄버거 버튼 클릭 시 GNB 열기/닫기
  const closeGnb = () => {
    setGnbOpen(false)        // 전체 GNB 닫기
    setActiveIndex(null)     // 열린 서브메뉴 초기화
  }

  // 메뉴 및 하위 메뉴 구성 데이터
  const menuData = [
    {
      title: '메뉴1',
      sub: [
        { name: '섹션1', link: '/section1' },
        { name: '섹션2', link: '/section1' },
      ],
    },
    {
      title: '메뉴2',
      sub: [
        { name: 'test1', link: '/test1' },
        { name: 'test2', link: '/test1' },
      ],
    },
    {
      title: 'menu3',
      sub: [
        { name: 'section3', link: '/section3' },
        { name: 'test5', link: '/test5' },
      ],
    },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* 로고 클릭 시 홈으로 이동 */}
        <Link to="/" className={styles.logo}>
          <img src="./logo.png" alt="logo" />
        </Link>

        {isMobile ? (
          <>
            {/* 모바일 햄버거 토글 */}
            <button onClick={toggleGnb} className={styles.toggle}>☰</button>


            {gnbOpen && (
              <div className={styles.gnbWrap}>
                {/* 검은 투명 배경 클릭 시 닫힘 */}
                <div className={styles.dim} onClick={closeGnb} />

                {/* 모바일 GNB */}
                <nav className={styles.gnb}>
                  <ul>
                    {menuData.map((menu, index) => (
                      <li key={index}>
                        {/* 1뎁스 메뉴 버튼 - 클릭 시 해당 서브 메뉴 열기 */}
                        <button
                          className={styles.menuBtn}
                          onClick={() =>
                            setActiveIndex(activeIndex === index ? null : index)
                          }
                        >
                          {menu.title}
                        </button>

                        {/* 2뎁스 메뉴 리스트 */}
                        <ul
                          className={`${styles.subMenu} ${
                            activeIndex === index ? styles.open : ''
                          }`}
                        >
                          {menu.sub.map((item, subIdx) => (
                            <li key={subIdx}>
                              <Link to={item.link} onClick={closeGnb}>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          // PC용 GNB - hover 시 서브메뉴 노출
          <nav className={styles.pcMenu}>
            <ul>
              {menuData.map((menu, index) => (
                <li key={index}>
                  {menu.title}
                  <div className={styles.subMenu}>
                    {menu.sub.map((item, idx) => (
                      <Link to={item.link} key={idx}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
