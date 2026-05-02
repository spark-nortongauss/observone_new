'use client';
import { motion } from 'framer-motion';
export default function MagneticButton({label,secondary}:{label:string;secondary?:boolean}){return <motion.button whileHover={{scale:1.03,y:-2}} whileTap={{scale:0.98}} className={`rounded-xl px-5 py-3 font-medium ${secondary?'border border-black/20 bg-white':'bg-limeBrand text-black'}`}>{label}</motion.button>}
