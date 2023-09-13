import React, { FC } from "react";

interface SectionProps { 
  children: any
  id: "home" | "about" | "projects"
  useSetSection: React.Dispatch<React.SetStateAction<{
    home: boolean;
    about: boolean;
    projects: boolean;
}>>
}

export const FadeInSection: FC<SectionProps> = ({children, id, useSetSection}) => {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef(null)
    
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current!);
    }, []);

    useSetSection(prevState => ({
      ...prevState,
      [id]: isVisible
  }));

    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
  }