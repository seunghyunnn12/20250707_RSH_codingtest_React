// 기능: 랜덤 색상 카드 생성기 - 버튼 클릭 시 새로운 색상 카드가 추가됨

import { useState } from 'react'
import '../styles/Test5.scss'

// 16진수 랜덤 HEX 컬러 생성 함수
const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const Test5 = () => {
  const [colors, setColors] = useState<string[]>([]) // 생성된 색상 카드 목록

  // 카드 추가 - 새로운 랜덤 색상 카드 추가
  const addColorCard = () => {
    const newColor = getRandomColor()
    setColors((prev) => [...prev, newColor])
  }

  return (
    <div className="test5-wrapper">
      {/* 카드 추가 버튼 */}
      <button className="add-btn" onClick={addColorCard}>
        🎨 카드 추가
      </button>

      {/* 색상 카드 리스트 출력 */}
      <div className="card-container">
        {colors.map((color, idx) => (
          <div
            className="color-card"
            key={idx}
            style={{ background: color }}
          >
            <span>{idx + 1}</span>
            <div className="hex">{color}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Test5
