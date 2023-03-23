import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Index({ src, alt, placeholder, cardRef, src2 }) {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const location = useLocation();

  const isHavetot = location.pathname.includes("details");
  const isShop = location.pathname.includes("shop");

  useEffect(() => {
    let observer;
    let didCancel = false;

    let CleanUpRef = cardRef?.current;

    if (CleanUpRef && imageSrc === placeholder) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              !didCancel &&
              (entry.intersectionRatio > 0 || entry.isIntersecting)
            ) {
              setImageSrc(src);
              setIsVisible(true);
              observer.unobserve(entry?.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: "0px" }
      );
      observer.observe(cardRef.current);
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(CleanUpRef);
      }
    };
  }, [src, placeholder, imageSrc, cardRef]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };

    img.src = imageSrc;
  }, [imageSrc]);

  return (
    <>
      {
        <div
          style={{ overflow: "hidden", position: "relative" }}
          className={`ryetghf fade ${isVisible ? "show" : ""}`}
        >
          {loaded ? (
            <>
              <img
                height="100%"
                width="100%"
                loading="lazy"
                src={imageSrc}
                alt={alt}
                className="sokoww ewurkjdsf"
              />
              <img
                height="100%"
                width="100%"
                loading="lazy"
                src={src2}
                alt={alt}
                className="sokoww eiutykj"
              />
            </>
          ) : (
            <div
              class="loaders"
              style={
                isHavetot
                  ? { height: "350px" }
                  : isShop
                  ? { height: "700px" }
                  : { height: "370px" }
              }
            >
              <div>
                <div>
                  <img src="/images/ertyujhn.svg" alt="bull" />
                </div>
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
}

export default Index;
