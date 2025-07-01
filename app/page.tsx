'use client';

import { useState } from 'react';

const slides = [
  {
    id: 1,
    title: "病院がデジタル化される話",
    subtitle: "〜みんなの病院がもっと便利になる〜",
    content: "中学生でもわかる医療DXの話",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "医療DXって何？",
    subtitle: "医療DX = 病院をデジタル化すること",
    content: [
      "📱 スマホで病院の手続きができる",
      "💊 お薬の情報がコンピューターで管理される", 
      "📋 病院の記録が電子化される",
      "🏥 どの病院でもあなたの情報がわかる"
    ],
    bgColor: "bg-gradient-to-br from-green-400 to-blue-500"
  },
  {
    id: 3,
    title: "昔の病院 vs 今の病院",
    subtitle: "",
    content: {
      before: {
        title: "昔の病院 😓",
        items: [
          "保険証を忘れると大変",
          "薬局で「どんな薬飲んでる？」と聞かれる",
          "別の病院に行くと同じ検査をまたやる",
          "紙のカルテで管理"
        ]
      },
      after: {
        title: "今の病院 😊",
        items: [
          "マイナンバーカードで OK！",
          "薬の情報が自動でわかる",
          "前の検査結果を他の病院で見れる",
          "コンピューターで管理"
        ]
      }
    },
    bgColor: "bg-gradient-to-br from-yellow-400 to-red-500"
  },
  {
    id: 4,
    title: "マイナンバーカードが保険証に！",
    subtitle: "マイナ保険証って何？",
    content: [
      "📱 マイナンバーカードやスマホが保険証になる",
      "🏥 病院で機械にピッとかざすだけ",
      "✅ 現在、約30%の人が使っている",
      "",
      "メリット",
      "• 保険証を忘れても大丈夫",
      "• お薬の情報が自動でわかる",
      "• 健康診断の結果も見れる"
    ],
    bgColor: "bg-gradient-to-br from-indigo-400 to-purple-600"
  },
  {
    id: 5,
    title: "電子処方箋って何？",
    subtitle: "処方箋がデジタルになる！",
    content: [
      "昔：紙の処方箋を薬局に持っていく",
      "今：コンピューターで薬局に情報が送られる",
      "",
      "現在の状況",
      "• 薬局の80%以上が対応済み ✅",
      "• 病院はまだ10%程度... 📈",
      "",
      "メリット",
      "• 紙を無くさない",
      "• 薬の飲み合わせをチェックできる",
      "• どこの薬局でも受け取れる"
    ],
    bgColor: "bg-gradient-to-br from-pink-400 to-red-500"
  },
  {
    id: 6,
    title: "電子カルテって何？",
    subtitle: "病院の記録がコンピューターに！",
    content: [
      "昔：紙のファイルに手書き 📝",
      "今：コンピューターに入力 💻",
      "",
      "目標",
      "2030年までに、ほぼ全ての病院で導入！",
      "",
      "メリット",
      "• 字が読めないことがない",
      "• 他の病院でも情報を見れる",
      "• 検査結果がすぐわかる",
      "• 薬の飲み合わせをチェックできる"
    ],
    bgColor: "bg-gradient-to-br from-teal-400 to-blue-600"
  },
  {
    id: 7,
    title: "中学生のみんなにとって良いことは？",
    subtitle: "病院がもっと便利になる！",
    content: [
      "🏃‍♂️ 部活で怪我をした時",
      "→ すぐに過去の怪我歴がわかる",
      "",
      "🤧 アレルギーがある時", 
      "→ どの病院でもアレルギー情報がわかる",
      "",
      "💊 薬をもらう時",
      "→ 安全な薬を正確にもらえる",
      "",
      "🩺 健康診断の結果",
      "→ 結果がずっと保存される"
    ],
    bgColor: "bg-gradient-to-br from-orange-400 to-pink-500"
  },
  {
    id: 8,
    title: "いつまでに導入されるの？",
    subtitle: "導入スケジュール",
    content: [
      "📅 2025年（来年）",
      "→ ほぼ全ての薬局で電子処方箋",
      "",
      "📅 2026年",
      "→ 標準型電子カルテが完成",
      "",
      "📅 2030年",
      "→ ほぼ全ての病院で電子カルテ",
      "",
      "君たちが大学生になる頃には、",
      "病院がとても便利になっているよ！ 🎉"
    ],
    bgColor: "bg-gradient-to-br from-cyan-400 to-blue-600"
  },
  {
    id: 9,
    title: "まだ解決しないといけない問題",
    subtitle: "課題",
    content: [
      "💰 お金がかかる",
      "→ 国が支援策を検討中",
      "",
      "🤔 使い方がわからない",
      "→ 研修や説明会を増やす",
      "",
      "🔒 情報が漏れないか心配",
      "→ 強いセキュリティで守る",
      "",
      "🔧 病院ごとにシステムが違う",
      "→ 標準システムを作成中"
    ],
    bgColor: "bg-gradient-to-br from-amber-400 to-orange-600"
  },
  {
    id: 10,
    title: "まとめ",
    subtitle: "医療DXで病院が変わる！",
    content: [
      "🏥 病院がもっと便利になる",
      "💡 安全で正確な医療が受けられる",
      "📱 スマホやマイナンバーカードで簡単",
      "🌟 みんなの未来がもっと良くなる",
      "",
      "",
      "質問はありますか？"
    ],
    bgColor: "bg-gradient-to-br from-violet-500 to-purple-600"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">中学生でもわかる医療DX</h1>
          <div className="text-sm text-gray-600">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        <div className={`${slide.bgColor} min-h-full flex items-center justify-center p-8 text-white`}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              {slide.title}
            </h1>
            
            {/* Subtitle */}
            {slide.subtitle && (
              <h2 className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
                {slide.subtitle}
              </h2>
            )}

            {/* Content */}
            <div className="text-base md:text-lg lg:text-xl leading-relaxed">
              {/* Handle different content types */}
              {typeof slide.content === 'string' ? (
                <p>{slide.content}</p>
              ) : Array.isArray(slide.content) ? (
                <div className="space-y-4">
                  {slide.content.map((item, index) => (
                    <div key={index} className={item.startsWith('•') ? 'ml-8' : ''}>
                      {item === '' ? <div className="h-4"></div> : 
                       item === 'メリット' || item === '現在の状況' || item === '目標' ? 
                       <div className="text-xl md:text-2xl font-bold mt-6 mb-4">{item}</div> : 
                       <div>{item}</div>
                      }
                    </div>
                  ))}
                </div>
              ) : slide.content && typeof slide.content === 'object' && 'before' in slide.content ? (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white bg-opacity-20 rounded-lg p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{slide.content.before.title}</h3>
                    <div className="space-y-2">
                      {slide.content.before.items.map((item, index) => (
                        <div key={index}>• {item}</div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{slide.content.after.title}</h3>
                    <div className="space-y-2">
                      {slide.content.after.items.map((item, index) => (
                        <div key={index}>• {item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
          disabled={currentSlide === 0}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-40 rounded-full p-3 transition-all"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </main>

      {/* Footer with slide indicators */}
      <footer className="bg-white shadow-sm p-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-2 mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-blue-500' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="disabled:opacity-50 hover:text-blue-500 transition-colors"
            >
              ← 前へ
            </button>
            <span className="font-medium">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="disabled:opacity-50 hover:text-blue-500 transition-colors"
            >
              次へ →
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
