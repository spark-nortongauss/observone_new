'use client';
import { useEffect,useState } from 'react';
export default function AnimatedCounter({value}:{value:string}){const [v,setV]=useState(value);useEffect(()=>setV(value),[value]);return <span>{v}</span>}
