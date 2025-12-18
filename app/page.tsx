'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Brain, Lightbulb, MessageSquare, X, Disc } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Montserrat, Fira_Mono } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const firaMono = Fira_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-fira-mono" });

// 哲学概念数据
const philosophicalConcepts = [
  { 
    title: "存在与虚无", 
    englishTitle: "BEING AND NOTHINGNESS",
    quote: "存在先于本质。",
    desc: "在荒谬的宇宙中，人类被判定为自由。我们必须通过行动来创造意义。",
    icon: <Brain className="w-6 h-6 text-white" />
  },
  { 
    title: "缸中之脑", 
    englishTitle: "BRAIN IN A VAT",
    quote: "真实，不过是感官的电信号。",
    desc: "如果整个世界都是模拟的，那么“我”的思想是否是唯一的真实？",
    icon: <Disc className="w-6 h-6 text-white" />
  },
  { 
    title: "洞穴寓言", 
    englishTitle: "ALLEGORY OF THE CAVE",
    quote: "光影并非真相。",
    desc: "我们看到的只是投射在墙上的影子，必须转身走出洞穴，直视太阳。",
    icon: <Lightbulb className="w-6 h-6 text-white" />
  },
  { 
    title: "永恒轮回", 
    englishTitle: "ETERNAL RETURN",
    quote: "愿你过的每一刻，都值得无限次重来。",
    desc: "如果生命中的每一个痛苦和快乐都将无限次重复，你是否依然热爱命运？",
    icon: <MessageSquare className="w-6 h-6 text-white" />
  },
];

export default function CognintHome() {
  const [activeConcept, setActiveConcept] = useState<typeof philosophicalConcepts[0] | null>(null);

  return (
    <main className={twMerge("relative w-full min-h-screen bg-black text-white overflow-x-hidden selection:bg-white selection:text-black", montserrat.variable, firaMono.variable)}>
      
      {/* === 1. 极简黑白背景 (静态噪点/微光) === */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        {/* 微弱的径向渐变，营造深邃感 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-black to-black" />
        {/* 顶部微光 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-white/5 blur-[120px] rounded-full opacity-20" />
      </div>

      {/* === 2. 导航栏 === */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 flex justify-between items-center mix-blend-difference">
         <div className="flex items-center gap-3">
           <div className="w-2 h-2 bg-white rounded-full" />
           <span className="font-montserrat font-bold tracking-[0.2em] text-sm">COGNINT</span>
         </div>
         <div className="hidden md:flex gap-8 text-xs font-fira-mono text-gray-500">
            <span>// LOGIC</span>
            <span>// ETHICS</span>
            <span>// METAPHYSICS</span>
         </div>
      </nav>

      {/* === 3. 核心首屏 (Hero) === */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4">
        
        {/* --- Logo 动画区域 --- */}
        <div className="relative mb-12 md:mb-16">
            <motion.div
                animate={{ scale: [1, 1.1, 1] }} // 呼吸缩放
                transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="relative z-10"
            >
                <motion.div
                    animate={{ rotate: 360 }} // 表盘式顺时针旋转
                    transition={{ 
                        duration: 30, // 慢速优雅
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="relative w-40 h-40 md:w-64 md:h-64"
                >
                    <Image 
                        src="/cognint-logo.png" 
                        alt="Cognint Logo" 
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]" // 纯白光晕
                        priority
                    />
                </motion.div>
            </motion.div>

            {/* 背景装饰圆环 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full" />
            <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-white/10 rounded-full" 
            />
        </div>


        {/* --- 标题文字 --- */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-8xl font-bold tracking-tighter mb-6 font-montserrat text-white mix-blend-difference"
        >
          Cognition Point
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-sm md:text-lg text-gray-400 font-fira-mono tracking-widest uppercase"
        >
          The Origin of Consciousness
        </motion.p>

        {/* --- 底部滚动提示 --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] font-fira-mono text-gray-600 group-hover:text-white transition-colors">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
        </motion.div>
      </section>


      {/* === 4. 哲学概念区 (黑白极简风格) === */}
      <section className="relative z-10 min-h-screen bg-black py-32 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-20 font-montserrat tracking-tight border-l-2 border-white pl-6">
                THOUGHT EXPERIMENTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10"> 
            
            {philosophicalConcepts.map((concept, index) => (
                <div 
                    key={index}
                    onClick={() => setActiveConcept(concept)}
                    className="group relative bg-black p-12 hover:bg-white/5 transition-colors duration-500 cursor-pointer h-80 flex flex-col justify-between"
                >
                    <div className="flex justify-between items-start">
                        <span className="font-fira-mono text-xs text-gray-600">0{index + 1}</span>
                        <div className="opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                            {concept.icon}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-montserrat group-hover:tracking-wider transition-all duration-500">
                            {concept.title}
                        </h3>
                        {/* 英文翻译 */}
                        <p className="text-xs font-fira-mono text-gray-600 mt-2 mb-4 tracking-widest uppercase group-hover:text-gray-400 transition-colors">
                            {concept.englishTitle}
                        </p>
                        <div className="w-8 h-px bg-white/30 group-hover:w-full transition-all duration-700 ease-out" />
                    </div>
                </div>
            ))}
            </div>
        </div>
      </section>


      {/* === 5. 极简页脚 (含备案信息) === */}
      <footer className="relative z-10 border-t border-white/10 pt-12 pb-8 text-center bg-black">
         <div className="mb-6">
            <Image src="/cognint-logo.png" alt="Logo" width={32} height={32} className="mx-auto opacity-40 grayscale" />
         </div>
         
         {/* 英文版权 */}
         <p className="text-[10px] font-fira-mono text-gray-700 mb-4 tracking-widest uppercase">
            © 2025 COGNINT. ALL RIGHTS RESERVED.
         </p>

         {/* 备案信息栏 (参考您的截图样式) */}
         <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-xs text-gray-600 font-sans opacity-70 hover:opacity-100 transition-opacity duration-300">
            <span>©2025 元核智策（上海）企业管理有限公司</span>
            <span className="hidden md:inline text-gray-800">|</span>
            {/* 备案号通常建议链接到工信部，显得更合规，虽然不强求 */}
            <a 
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors"
            >
              沪ICP备2025149898号-4
            </a>
         </div>
      </footer>


      {/* === 弹窗 (Modal) === */}
      <AnimatePresence>
        {activeConcept && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveConcept(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-black border border-white/20 p-8 md:p-16 max-w-2xl w-full text-center shadow-[0_0_100px_rgba(255,255,255,0.1)]"
            >
              <div className="mb-8 flex justify-center text-white/80">
                {activeConcept.icon}
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-4 font-montserrat text-white">
                {activeConcept.title}
              </h3>
              <p className="text-sm font-fira-mono text-gray-500 mb-8 tracking-widest uppercase">
                {activeConcept.englishTitle}
              </p>
              <p className="text-xl md:text-2xl italic text-gray-400 mb-10 font-serif leading-relaxed">
                “{activeConcept.quote}”
              </p>
              <div className="w-12 h-px bg-white/50 mx-auto mb-10" />
              <p className="text-gray-500 font-fira-mono text-sm leading-loose">
                {activeConcept.desc}
              </p>
              
              <button 
                onClick={() => setActiveConcept(null)}
                className="absolute top-6 right-6 text-gray-600 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}