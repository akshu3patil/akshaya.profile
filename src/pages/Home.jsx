import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link as LinkIcon, Terminal, Database, BrainCircuit, Sparkles } from 'lucide-react';

// --- ANIMATION VARIANTS ---
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, type: 'spring', bounce: 0.4 } }
};

const floatAnimation = (delay) => ({
  y: [-8, 8, -8],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }
});

export default function Home() {
  const coreSkills = [
    { name: "Large Language Models", icon: <BrainCircuit size={16} /> },
    { name: "Advanced RAG Pipelines", icon: <Sparkles size={16} /> },
    { name: "Vector Databases", icon: <Database size={16} /> },
    { name: "NL2SQL Architecture", icon: <Terminal size={16} /> }
  ];

  return (
    <motion.div 
      variants={container} initial="hidden" animate="show" exit={{ opacity: 0 }}
      className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* --- BACKGROUND ANIMATIONS (Simulating a Vector Space) --- */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.15, 0.1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none"
      />

      {/* --- MAIN HERO CONTENT --- */}
      <motion.div variants={item} className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-cyan-500/30 backdrop-blur-md text-cyan-400 text-sm font-medium tracking-wide">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Available for Gen AI Engineering Roles
      </motion.div>

      <motion.h1 variants={item} className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
        Akshaya Patil
      </motion.h1>
      
      <motion.h2 variants={item} className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-2">
        Generative AI Engineer
      </motion.h2>

      {/* --- REWRITTEN AI-FOCUSED BIO --- */}
      <motion.p variants={item} className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mb-10 font-light">
        Architecting intelligent enterprise solutions by bridging complex data with AI. 
        Specializing in building <span className="text-slate-200 font-medium">context-aware RAG systems</span>, 
        designing <span className="text-slate-200 font-medium">NL2SQL engines</span>, and deploying robust 
        <span className="text-slate-200 font-medium"> LLM architectures</span> using Qdrant, FAISS, and OCI Generative AI.
      </motion.p>
      
      {/* --- FLOATING SKILL BADGES --- */}
      <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-12 max-w-3xl">
        {coreSkills.map((skill, idx) => (
          <motion.div 
            key={idx}
            animate={floatAnimation(idx * 0.5)}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl text-slate-300 shadow-lg"
          >
            <span className="text-cyan-400">{skill.icon}</span>
            <span className="text-sm font-medium tracking-wide">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* --- CALL TO ACTION BUTTONS --- */}
      <motion.div variants={item} className="flex flex-wrap justify-center gap-6">
        <a href="mailto:akshayaapatil1396@gmail.com" 
           className="flex items-center gap-2 px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-full hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 hover:-translate-y-1">
          <Mail size={20} /> Let's Talk AI
        </a>
        <a href="https://linkedin.com/in/akshaya-patil-b3482b226" target="_blank" rel="noreferrer" 
           className="flex items-center gap-2 px-8 py-4 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 hover:-translate-y-1">
          <LinkIcon size={20} /> LinkedIn
        </a>
      </motion.div>
    </motion.div>
  );
}