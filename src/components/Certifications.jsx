import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TbExternalLink } from "react-icons/tb";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const certifications = [
  {
    name: "IIT-M Pravartak Full Stack Development",
    link: "https://drive.google.com/file/d/1bG7aAbtT0QfM7Xmw_nexquTIHWH2wOLM/view?usp=sharing",
  },
  {
    name: "JS Basics",
    link: "https://drive.google.com/file/d/1YkLAXKNBoC_8QwkIY1wIKkYu77AktaCO/view?usp=sharing",
  },
  {
    name: "Node.js",
    link: "https://drive.google.com/file/d/1upI4xAmURTSrmjO45nXzDEc7_zePS765/view?usp=sharing",
  },
  {
    name: "Advanced JavaScript",
    link: "https://drive.google.com/file/d/1EhbvGjP0dBoNKzNnXYeS_ZPQifZU5aEn/view?usp=sharing",
  },
  {
    name: "HTML, CSS & Tailwind CSS",
    link: "https://drive.google.com/file/d/1jZ1I8wHxRYZPr1tSwzOIMZOhBiLG4p7u/view?usp=sharing",
  },
  {
    name: "Database",
    link: "https://drive.google.com/file/d/1WPqwQOA3jLiZWl_7xJHGOLyDq_kSGG9d/view?usp=sharing",
  },
  {
    name: "React.js",
    link: "https://drive.google.com/file/d/1ZuQqM3NlirueiiUdRjIZUw5X1cJSoXKQ/view?usp=sharing",
  },
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalCards = certifications.length;
  const wheelLockRef = useRef(false);
  const wheelDeltaRef = useRef(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [isPaused, totalCards]);

  const getRelativePosition = (index) => {
    let diff = index - currentIndex;
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;
    return diff;
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (wheelLockRef.current) return;

    // Use horizontal gesture only for carousel control.
    const horizontalDelta = event.deltaX;
    if (Math.abs(horizontalDelta) < 2) return;

    wheelDeltaRef.current += horizontalDelta;
    const threshold = 45;

    if (wheelDeltaRef.current >= threshold) {
      nextCard();
      wheelDeltaRef.current = 0;
      wheelLockRef.current = true;
    } else if (wheelDeltaRef.current <= -threshold) {
      prevCard();
      wheelDeltaRef.current = 0;
      wheelLockRef.current = true;
    }

    if (wheelLockRef.current) {
      // Longer lock prevents momentum scroll from skipping cards.
      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 700);
    }
  };

  return (
    <div className="px-5 lg:px-28 my-8 lg:my-16" id="certifications">
      <motion.h2
        className="text-2xl lg:text-4xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My <span className="font-extrabold">Certifications</span>
      </motion.h2>

      <div className="mt-7 lg:mt-12">
        <motion.div
          className="flex justify-center gap-3 mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          viewport={{ once: true }}
        >
          <button
            type="button"
            onClick={prevCard}
            className="border-2 border-black rounded p-2 hover:bg-black hover:text-white transition-colors"
            aria-label="Previous certification"
          >
            <HiChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={nextCard}
            className="border-2 border-black rounded p-2 hover:bg-black hover:text-white transition-colors"
            aria-label="Next certification"
          >
            <HiChevronRight size={18} />
          </button>
        </motion.div>

        <div
          className="relative h-[340px] lg:h-[380px] max-w-4xl mx-auto overflow-visible no-scrollbar overscroll-x-contain"
          onWheelCapture={handleWheel}
          onWheel={handleWheel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {certifications.map((cert, index) => {
            const relative = getRelativePosition(index);
            const isCenter = relative === 0;
            const isVisible = Math.abs(relative) <= 2;

            if (!isVisible) {
              return null;
            }

            return (
              <motion.a
                key={cert.name}
                href={isCenter ? cert.link : undefined}
                target={isCenter ? "_blank" : undefined}
                rel={isCenter ? "noopener noreferrer" : undefined}
                className={`absolute top-4 left-0 right-0 mx-auto w-[220px] lg:w-[280px] h-[250px] lg:h-[290px] border-2 rounded-xl p-4 lg:p-5 shadow-sm flex flex-col justify-between transition-colors ${
                  isCenter
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/40"
                }`}
                initial={false}
                animate={{
                  x: relative * 170,
                  y: Math.abs(relative) * 10,
                  scale: isCenter ? 1 : Math.abs(relative) === 1 ? 0.88 : 0.78,
                  opacity: isCenter ? 1 : Math.abs(relative) === 1 ? 0.55 : 0.3,
                  boxShadow: isCenter
                    ? "0 18px 30px rgba(0,0,0,0.28)"
                    : "0 6px 12px rgba(0,0,0,0.12)",
                }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
                style={{
                  zIndex: 30 - Math.abs(relative),
                  pointerEvents: isCenter ? "auto" : "none",
                }}
                whileHover={isCenter ? { scale: 1.03, y: -6 } : {}}
              >
                <div>
                  <p className="font-semibold text-base lg:text-lg leading-snug">{cert.name}</p>
                </div>
                <div className="flex justify-end">
                  <TbExternalLink size={16} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
