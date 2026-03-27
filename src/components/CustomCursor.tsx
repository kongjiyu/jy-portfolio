import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverSize, setHoverSize] = useState({ width: 20, height: 20 });

  // Increased stiffness for tighter tracking
  const springX = useSpring(0, { stiffness: 800, damping: 40 });
  const springY = useSpring(0, { stiffness: 800, damping: 40 });
  const springWidth = useSpring(20, { stiffness: 600, damping: 35 });
  const springHeight = useSpring(20, { stiffness: 600, damping: 35 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      setCoords({ x: mouseX, y: mouseY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, .project-item, .skills-tags span');
      
      if (clickable) {
        setIsHovered(true);
        const rect = (clickable as HTMLElement).getBoundingClientRect();
        
        // Target center coordinates
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setHoverSize({ width: rect.width + 12, height: rect.height + 12 });
        springX.set(centerX);
        springY.set(centerY);
      } else {
        setIsHovered(false);
        setHoverSize({ width: 20, height: 20 });
        springX.set(mouseX);
        springY.set(mouseY);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [springX, springY, isVisible]);

  useEffect(() => {
    springWidth.set(hoverSize.width);
    springHeight.set(hoverSize.height);
  }, [hoverSize, springWidth, springHeight]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          left: springX,
          top: springY,
          width: springWidth,
          height: springHeight,
          borderRadius: isHovered ? "4px" : "50%",
        }}
      >
        {!isHovered && (
          <>
            <div className="cursor-dot" />
            <div className="cursor-coords text-xs">
              {coords.x.toFixed(0)},{coords.y.toFixed(0)}
            </div>
          </>
        )}
      </motion.div>
      <style>{`
        .custom-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          /* Removed translate(-50%, -50%) as we now set coords to the center of the box */
          transform: translate(-50%, -50%); 
        }
        .cursor-dot {
          width: 4px;
          height: 4px;
          background: black;
          border-radius: 50%;
        }
        .cursor-coords {
          position: absolute;
          top: 24px;
          left: 24px;
          font-family: monospace;
          color: white;
          white-space: nowrap;
          opacity: 0.5;
        }
        @media (max-width: 768px) {
          .custom-cursor { display: none; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
