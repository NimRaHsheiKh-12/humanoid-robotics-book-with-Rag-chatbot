import React, { useState, useEffect, ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HeroSection from '@site/src/components/HeroSection';
import Chatbot from '@site/src/components/Chatbot';


// ---------- Main Page ----------
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const { firstChapterUrl } = siteConfig.themeConfig as { firstChapterUrl?: string };


  // ✅ Backend call yahan ho
  useEffect(() => {
    fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "Hello" })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Backend response:", data);
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);



  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HeroSection firstChapterUrl={firstChapterUrl} />
      <main>
        <HomepageFeatures />
      </main>
      <Chatbot />

    </Layout>
  );
}
