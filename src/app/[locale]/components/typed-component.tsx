'use client'

import {useEffect, useRef, useState} from "react";

const TypedComponent = ({content, className}: { content?: string, className?: string }) => {
  const [typedContent, setTypedContent] = useState('');

  useEffect(() => {
    if (content) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setTypedContent(content?.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex > content?.length) {
          clearInterval(interval);
        }
      }, .01);
      return () => clearInterval(interval);
    }
  }, [content]);

  return (
    <div className={className}>
      {typedContent}
    </div>
  );
};

export default TypedComponent;
