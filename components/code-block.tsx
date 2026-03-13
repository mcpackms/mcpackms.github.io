'use client';

import { useEffect, useState } from 'react';

export function CodeBlockWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const preElements = document.querySelectorAll('pre');
    preElements.forEach((pre) => {
      if (pre.parentElement?.classList.contains('code-block-wrapper')) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      
      const header = document.createElement('div');
      header.className = 'code-block-header';

      const code = pre.querySelector('code');
      const language = code?.className.match(/language-(\w+)/)?.[1] || 'code';
      header.textContent = language;

      const copyBtn = document.createElement('button');
      copyBtn.className = 'code-copy-btn';
      copyBtn.textContent = '复制';
      
      const codeText = pre.textContent || '';
      copyBtn.onclick = async () => {
        await navigator.clipboard.writeText(codeText);
        copyBtn.textContent = '已复制';
        setTimeout(() => {
          copyBtn.textContent = '复制';
        }, 2000);
      };

      header.appendChild(copyBtn);
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
    });
  }, [children]);

  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}
