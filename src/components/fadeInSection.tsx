import React, { FC } from "react";

interface SectionProps { 
  children: any
}

export const FadeInSection: FC<SectionProps> = ({children}) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef(null)
    
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {if(entry.isIntersecting) setVisible(true)});
      });
      observer.observe(domRef.current!);
    }, []);

    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
  }