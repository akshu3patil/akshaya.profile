import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <div className="flex items-center gap-3 mb-10">
        <Briefcase className="text-cyan-400" size={32} />
        <h2 className="text-4xl font-bold text-slate-100">Work Experience</h2>
      </div>
      
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-100">Consultant – Package Implementation</h3>
            <h4 className="text-xl text-cyan-400 mt-1">LTIMindtree</h4>
          </div>
          <span className="text-slate-400 flex items-center gap-2 mt-4 md:mt-0 bg-slate-900 px-3 py-1 rounded-full text-sm border border-slate-700">
            <MapPin size={14} /> Pune, MH | Aug 2025 – Present
          </span>
        </div>
        <ul className="list-disc list-inside space-y-4 text-slate-300 leading-relaxed marker:text-cyan-500 text-lg">
          <li>Architected an enterprise NL2SQL engine using OCI Generative AI, Qdrant, and FastAPI, enabling business users to query JD Edwards databases in plain English.</li>
          <li>Designed a multilingual RAG-based knowledge assistant using LLMs, FAISS vector search, and Latent Semantic Analysis for context-aware document intelligence.</li>
          <li>Implemented data privacy & security layers using Microsoft Presidio, spaCy, and Oracle Guardrails to anonymize PII in LLM deployments.</li>
          <li>Automated trade compliance workflows by integrating AI-driven document classification with Oracle General Ledger via SOAP/REST APIs.</li>
        </ul>
      </div>
    </motion.div>
  );
}