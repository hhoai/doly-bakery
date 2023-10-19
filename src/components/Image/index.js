import PropTypes from "prop-types";
import { useState, forwardRef} from "react";

import images from "../../assets/images/";
import "./Image.module.scss";

const Image = forwardRef(({src,alt, className, fallback: customFallback = images.noImage, ...props}, ref) => {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(customFallback);
  }

  return ( 
    <img className={className} ref={ref} src = {fallback || src} {...props} onError={handleError} alt={alt}/>
   );
})

Image.propTypes = {
  src: PropTypes.string, 
  className: PropTypes.string, 
  fallback: PropTypes.string
}

export default (Image);
