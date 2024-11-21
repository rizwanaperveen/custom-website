'use client';
import { CompulsoryData } from '@/data/main/compulsory'
import { tracks } from '@/data/main/tracks';
import React from 'react';
import '../app/styles/ourcorse.css';

const Ourcourses = () => {
  return (
    <div className='list'>
      <h1>Core Courses</h1>
      {CompulsoryData.map((item) => (
        <div className='list' key={item.id}>{item.text}</div>
      ))}
      <h1 className=''>Advanced Courses</h1>
      {tracks.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

export default Ourcourses