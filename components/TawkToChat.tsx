"use client";

import { useEffect } from 'react';

export default function TawkToChat() {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    (function () {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/673486682480f5b4f59d7bf3/1iciiq2nf';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      }
    })();
  }, []);

  return null;
}
