// 기능: 3번 박스 인터랙션 - 전체 페이지 클릭 수 / 박스 클릭 수 분리 표시
// - box3-1: 페이지 내 클릭 횟수 (박스 클릭 제외) → ::before로 표시
// - box3-2: box3 클릭 횟수 → ::after로 표시

import { useEffect, useRef, useState } from 'react'
import '../styles/Section3.scss'

const Section3 = () => {
  const [globalClickCount, setGlobalClickCount] = useState(0) // 전체 페이지 클릭 횟수
  const [boxClickCount, setBoxClickCount] = useState(0) // box3 클릭 횟수
  const boxRef = useRef<HTMLDivElement>(null) // box3 참조

  //  박스 외 영역 클릭 시 globalClickCount 증가
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (boxRef.current && boxRef.current.contains(e.target as Node)) {
        // box3 클릭은 무시 (boxClickCount만 증가해야 함)
        return
      }
      setGlobalClickCount((prev) => prev + 1)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="section3-wrapper">
      {/* 배경 박스 */}
      <div className="box box1">
        <div className="overlay">Hello World</div>
      </div>

      {/* 빈 박스 */}
      <div className="box box2"></div>

      {/* box3: 클릭 이벤트 감지 박스 */}
      <div
        className="box box3"
        ref={boxRef}
        onClick={() => setBoxClickCount((prev) => prev + 1)}
      >
        {/* ::before에 globalClickCount 표시 */}
        <div className="box3-1" data-count={globalClickCount}></div>

        {/* ::after에 boxClickCount 표시 */}
        <div className="box3-2" data-count={boxClickCount}></div>
      </div>
    </div>
  )
}

export default Section3
