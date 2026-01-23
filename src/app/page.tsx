import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f6f3]/95 backdrop-blur-sm border-b border-[#1a1a1a]/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="PaperWorks"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#books" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] text-sm font-medium transition-colors">
              도서
            </a>
            <a href="#about" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] text-sm font-medium transition-colors">
              소개
            </a>
            <a href="#author" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] text-sm font-medium transition-colors">
              저자
            </a>
            <a href="#contact" className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] text-sm font-medium transition-colors">
              연락처
            </a>
          </nav>
          <button className="md:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-noto-serif)] text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a1a1a] leading-tight tracking-tight animate-fade-in">
              복잡한 지식을,
              <br />
              <span className="text-[#1a1a1a]/60">누구나 이해할 수 있게</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#1a1a1a]/60 leading-relaxed max-w-xl animate-fade-in animate-delay-200">
              페이퍼웍스는 어려운 주제를 쉽게 풀어내는 책을 만듭니다.
              전문가의 깊이와 교양서의 접근성을 동시에 추구합니다.
            </p>
            <div className="mt-8 animate-fade-in animate-delay-300">
              <a
                href="#books"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 text-sm font-medium hover:bg-[#2d2d2d] transition-colors"
              >
                도서 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#c9a227]/10 text-[#c9a227] text-xs font-semibold tracking-wider uppercase rounded-full">
              신간 안내
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#1a1a1a]/5 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <div className="relative bg-white shadow-2xl">
                <Image
                  src="/bitcoin-literacy-cover.png"
                  alt="비트코인 리터러시 표지"
                  width={500}
                  height={700}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 bg-[#1a1a1a] text-white text-xs font-medium mb-4">
                출시 예정
              </span>
              <h2 className="font-[family-name:var(--font-noto-serif)] text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-2">
                비트코인 리터러시
              </h2>
              <p className="text-lg text-[#1a1a1a]/60 mb-4">
                디지털 금의 시대, 알아야 할 모든 것
              </p>
              <p className="text-sm text-[#1a1a1a]/50 mb-6">
                성석린 저
              </p>

              <div className="prose prose-lg text-[#1a1a1a]/70 mb-8">
                <p>
                  2009년 탄생한 비트코인은 이제 국가가 보유하고, 월가가 투자하는 자산이 됐습니다.
                  하지만 대부분의 사람들은 여전히 &ldquo;그게 뭔데?&rdquo;라고 묻습니다.
                </p>
                <p className="mt-4">
                  이 책은 비트코인과 블록체인의 모든 것을 기술 용어 없이 설명합니다.
                  투자를 권유하지 않습니다. 다만 이 기술이 왜 중요한지, 세상이 어떻게 바뀌고 있는지를 설명합니다.
                </p>
              </div>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-3xl font-semibold text-[#1a1a1a]">9,900원</span>
                <span className="text-lg text-[#1a1a1a]/40 line-through">12,900원</span>
                <span className="text-sm font-medium text-[#c9a227]">23% 할인</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="px-6 py-3 bg-[#1a1a1a] text-white text-sm font-medium hover:bg-[#2d2d2d] transition-colors"
                >
                  리디북스
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-[#1a1a1a]/20 text-[#1a1a1a] text-sm font-medium hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
                >
                  교보문고
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-[#1a1a1a]/20 text-[#1a1a1a] text-sm font-medium hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
                >
                  YES24
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-[#1a1a1a]/20 text-[#1a1a1a] text-sm font-medium hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
                >
                  알라딘
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-[#f8f6f3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-noto-serif)] text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-8">
              페이퍼웍스 소개
            </h2>
            <div className="space-y-6 text-lg text-[#1a1a1a]/70 leading-relaxed">
              <p>
                페이퍼웍스는 2026년에 설립된 독립 출판사입니다.
              </p>
              <p>
                우리는 기술, 경제, 사회의 복잡한 주제를 누구나 이해할 수 있는 언어로 풀어내는 책을 만듭니다.
              </p>
              <p>
                전문가의 깊이와 교양서의 접근성을 동시에 추구합니다.
                어려운 지식을 쉽게 전달하되, 본질을 왜곡하지 않습니다.
              </p>
            </div>
            <div className="mt-12 flex justify-center gap-12">
              <div className="text-center">
                <div className="text-4xl font-semibold text-[#1a1a1a]">2026</div>
                <div className="text-sm text-[#1a1a1a]/50 mt-1">설립</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-semibold text-[#1a1a1a]">1</div>
                <div className="text-sm text-[#1a1a1a]/50 mt-1">출간 도서</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-semibold text-[#c9a227]">AI</div>
                <div className="text-sm text-[#1a1a1a]/50 mt-1">Powered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="author" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-noto-serif)] text-3xl md:text-4xl font-semibold text-[#1a1a1a] text-center mb-12">
            저자 소개
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#f8f6f3] p-8 md:p-12">
              <h3 className="font-[family-name:var(--font-noto-serif)] text-2xl font-semibold text-[#1a1a1a] mb-6">
                성석린
              </h3>
              <div className="space-y-4 text-[#1a1a1a]/70 leading-relaxed">
                <p>
                  서울대학교에서 경제학과 컴퓨터공학을 복수전공했고,
                  현재 서울대 법학전문대학원에서 가상자산 규제를 연구하고 있습니다.
                </p>
                <p>
                  누적 1,000만 사용자의 메타버스 플랫폼 ZEP에서 Web3 팀을 이끌었고,
                  아시아 최대 크립토 VC Hashed에서 정책 연구원으로 활동 중입니다.
                </p>
                <p>
                  기술, 경제, 법을 넘나드는 융합적 시각으로 글을 씁니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {["서울대 경제학", "서울대 컴퓨터공학", "서울대 로스쿨", "ZEP Web3 팀장", "Hashed 연구원"].map((credential) => (
                  <span
                    key={credential}
                    className="px-3 py-1.5 bg-white text-[#1a1a1a]/70 text-sm"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-noto-serif)] text-3xl md:text-4xl font-semibold text-white mb-6">
              연락처
            </h2>
            <p className="text-white/60 mb-8">
              출판 문의, 제휴, 기타 문의사항이 있으시면 아래 이메일로 연락해 주세요.
            </p>
            <a
              href="mailto:contact@paperworks.com"
              className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#d4b23a] text-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@paperworks.com
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#1a1a1a] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="PaperWorks"
                width={120}
                height={30}
                className="h-7 w-auto brightness-0 invert opacity-60"
              />
            </div>
            <p className="text-white/40 text-sm">
              &copy; 2026 PaperWorks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
