import { motion } from "framer-motion";
import { useState } from "react"

interface TypescriptIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const TypescriptIcon: React.FC<TypescriptIconProps> = ({
  width = 50,
  height = 50,
  fill = '#fdb838'
}) => {
    const [rotate, setRotate] = useState(false)

    const handleClick = () => {
        setRotate(prevRotate => !prevRotate)  // Toggle rotation on click
    }
    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          id="Nodejs"
          viewBox="0 0 128 128"
          onClick={handleClick}
          animate={{ rotate: rotate ? 360 : 0 }}
          transition={{ duration: 1 }}>
        <rect width="99.67" height="73.67" x="22.67" y="47" fill="#ffffff" className="colorffffff svgShape"></rect>
          <path
      fill={fill}
      d="M1.5,63.91v62.5h125V1.41H1.5Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1,23,23,0,0,1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.23,58.93ZM72.89,64.15l0,5.12H56.66V115.5H45.15V69.26H28.88v-5A49.19,49.19,0,0,1,29,59.09C29.08,59,39,59,51,59L72.83,59Z"
      className="color007acc svgShape"
    ></path>
        </motion.svg>

    )
}

export default TypescriptIcon;
