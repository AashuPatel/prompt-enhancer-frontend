"use client";
import { useState } from 'react';
import axios from 'axios';
import './styles.css';  // Make sure to import the CSS file

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [optimizedPrompt, setOptimizedPrompt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://prompt-enhancer-usn5.onrender.com/optimize', {
        prompt,
      });
      setOptimizedPrompt(response.data.optimizedPrompt);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h1 className='titl'>Prompt Optimizer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here"
        ></textarea>
        <button className='buttonn' type="submit">Optimize</button>
      </form>

      {optimizedPrompt && (
        <div className="result">
          <h2>Optimized Prompt</h2>
          <p>{optimizedPrompt}</p>
        </div>
      )}
    </div>
  );
}
