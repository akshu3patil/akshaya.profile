import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

const skills = [
  { category: "Generative AI & LLMs", items: "OCI GenAI, Gemini, Cohere, GPT" },
  { category: "ML & NLP", items: "Scikit-learn, spaCy, PyTorch" },
  { category: "Programming", items: "Python, SQL, JavaScript" },
  { category: "Backend & APIs", items: "FastAPI, Flask, Streamlit, REST/SOAP" },
  { category: "Databases & Vector DBs", items: "PostgreSQL, MySQL, FAISS, Qdrant" },
  { category: "Data Engineering", items: "Pandas, NumPy, Excel, Alteryx" },
  { category: "ERP", items: "Oracle, JD Edwards (JDE)" },
];

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-6 py-20 space-y-20"
    >
      <section>
        <div className="flex items-center gap-3 mb-10">
          <Award className="text-cyan-400" size={32} />
          <h2 className="text-4xl font-bold text-slate-100">Technical Arsenal</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">{skill.category}</h4>
              <p className="text-slate-200 font-medium">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-slate-100">Education</h2>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-slate-100">B.E., Computer Science</h3>
            <p className="text-cyan-400 font-medium mb-4">Honours in Data Science</p>
            <p className="text-slate-400">Savitribai Phule Pune University</p>
            <p className="text-slate-500 text-sm mt-1">Class of 2025 | CGPA: 8.74</p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-slate-100">Certifications</h2>
          </div>
          <ul className="space-y-4">
            {[
              { name: "Claude Certified Architect - Foundations", issuer: "Anthropic", year: "2026" },
              { name: "Oracle AI Vector Search Certified Professional", issuer: "Oracle", year: "2025" },
              { name: "Generative AI Foundation Course", issuer: "", year: "2025" }
            ].map((cert, idx) => (
              <li key={idx} className="flex flex-col bg-slate-900/30 border-l-2 border-cyan-500 pl-4 py-2">
                <span className="text-slate-100 font-medium">{cert.name}</span>
                <span className="text-sm text-slate-400">{cert.issuer} {cert.issuer && '|'} {cert.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}