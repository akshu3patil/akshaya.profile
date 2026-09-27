import React from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Multilingual RAG-Based Knowledge Assistant",
    points: [
      "Built a document ingestion pipeline using PyMuPDF and Google Gemini for OCR extraction.",
      "Developed a Streamlit UI with real-time chat, token tracking, and source citations."
    ]
  },
  {
    title: "Trade Compliance & GL Automation System",
    points: [
      "Automated ingestion and classification of trade invoices using OCI Generative AI.",
      "Built a Flask/PostgreSQL backend with Auth0, posting to Oracle GL via SOAP APIs."
    ]
  },
  {
    title: "NL2SQL Engine for JD Edwards",
    points: [
      "Developed an AI-driven NL2SQL pipeline using OCI GenAI and Qdrant vector search.",
      "Built a FastAPI backend with a custom SQL validation layer to block unsafe operations."
    ]
  }
];

export default function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <motion.div 
        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
          <Code className="text-cyan-400" size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">Key Projects</h2>
      </motion.div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300"
          >
            {/* Top right corner accent */}
            <div className="absolute top-6 right-6 text-slate-600 group-hover:text-cyan-400 transition-colors">
              <ArrowUpRight size={24} />
            </div>

            <h3 className="text-2xl font-bold text-slate-100 mb-6 group-hover:text-cyan-400 transition-colors pr-8">
              {project.title}
            </h3>
            
            <ul className="space-y-4">
              {project.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-slate-400">
                  <span className="text-cyan-500 mt-1.5 text-xs">✦</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}