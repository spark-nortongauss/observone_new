'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export const initGsap=()=>{if(typeof window==='undefined') return; gsap.registerPlugin(ScrollTrigger)};
