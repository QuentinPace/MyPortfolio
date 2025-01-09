import { ReactNode, useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface WrapperProps {
    children: ReactNode;
    fromLeft: Boolean;
  }

const SlideInDiv: React.FC<WrapperProps> = ({ children, fromLeft }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, x: 0 });
      } else {
        if(fromLeft){
            controls.start({opacity: 0, x:-100})
        }
        else{
            controls.start({ opacity: 0, x: +100 });
        }
      }
    }, [controls, inView]);
  
    return (
        <section
          className={`wrapper`}
          ref={ref}
        >
            <motion.pre
              initial={{ opacity: 0, x: -100 }}
              animate={controls}
              transition={{
                duration: 0.9,
                ease: [0.17, 0.55, 0.55, 1],
              }}
            >
              {children}
            </motion.pre>
        </section>
    );
};
  
export default SlideInDiv;