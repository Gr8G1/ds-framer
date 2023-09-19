'use client'
import * as React from "react";

import Accordion from '@/framer/accordion';
import Banner from '@/framer/banner';
import Buttons from '@/framer/buttons';


import Slideshow from "https://framer.com/m/Slideshow-jg8v.js@xqs4YsN3axc3PXE5VsF9"
// import Slideshow from "@/framer/slideshow"

export default function Page() {
  return (
    <div className="flex flex-col justify-start items-start gap-12">
      <div>
        {/* Framer PlainText 변수로 다형 지정 가능 / Option 변수로 다형 지정 불가 : 다형값 해싱된값으로 변경됨 */}
        <Buttons
          text='버튼'
          size='S'
        />
      </div>

      <div>
        {/* Framer 컴포넌트에서 생성된 SVG Path 객체 참조 불가 */}
        {/* Framer 기본 내장 폰트 설정 참조 불가 */}
        <Accordion
          variant='Close'
          category='카테고리'
          title="카테고리 질문 영역"
          contents="카테고리 답변 영역"
        />
      </div>

      <div className="w-full">
        <Banner
          className="bg-amber-50"
          title="배너 타이틀"
          titleColor="#FFF"
          image={{ src: '/next.svg', alt: 'next logo' }}
          buttonText='배너 버튼'
          style={{ width: '100%' }}
        />
      </div>

      <div>
        {/* Slideshow 자체 export 가능하나 DX 저하 우려 : 이미지 | 컴포넌트 컨트롤 Framer 안에서만 가능함  */}
        <Slideshow />
      </div>
    </div>
  )
}