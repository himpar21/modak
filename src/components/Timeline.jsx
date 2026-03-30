import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import LetterOverlay from "./LetterOverlay";


const CARD_WIDTH = 420;
const CARD_GAP = 120;
const LEFT_PADDING = 140;

export default function Timeline({ events }) {
  const [activeNote, setActiveNote] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        wrapper.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    wrapper.addEventListener("wheel", onWheel, { passive: false });
    return () => wrapper.removeEventListener("wheel", onWheel);
  }, []);

  const numCards = events.length;
  const totalWidth =
    LEFT_PADDING * 2 +
    CARD_WIDTH * numCards +
    CARD_GAP * (numCards - 1);

  const c1x = totalWidth / 6, c1y = 60;
  const c2x = totalWidth / 3, c2y = 140;
  const midX = totalWidth / 2, midY = 100;
  const c3x = (totalWidth / 6) * 5, c3y = 60;
  const endX = totalWidth, endY = 100;

  const ropePath = `
    M 0 100
    C ${c1x} ${c1y}, ${c2x} ${c2y}, ${midX} ${midY}
    S ${c3x} ${c3y}, ${endX} ${endY}
  `;

  function cubicBezierY(t, p0, p1, p2, p3) {
    return (
      Math.pow(1 - t, 3) * p0 +
      3 * Math.pow(1 - t, 2) * t * p1 +
      3 * (1 - t) * Math.pow(t, 2) * p2 +
      Math.pow(t, 3) * p3
    );
  }

  function getRopeY(x) {
    if (x <= midX) {
      const t = x / midX;
      return cubicBezierY(t, 100, c1y, c2y, midY);
    } else {
      const t = (x - midX) / (endX - midX);
      const s1y = 2 * midY - c2y;
      return cubicBezierY(t, midY, s1y, c3y, endY);
    }
  }

  return (
    <>
      <div className="timeline-wrapper" ref={wrapperRef}>
        <div className="timeline">
          {/* ROPE */}
          <svg
            className="rope-svg"
            width={totalWidth}
            height={200}
            viewBox={`0 0 ${totalWidth} 200`}
            preserveAspectRatio="none"
            style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
          >
            <path
              d={ropePath}
              fill="none"
              stroke="#caa472"
              strokeWidth="6"
            />

            {events.slice(0, -1).map((_, i) => {
              const bulbX =
                LEFT_PADDING +
                CARD_WIDTH * (i + 1) +
                CARD_GAP * i +
                CARD_GAP / 2;

              const bulbY = getRopeY(bulbX) + 16;

              return (
                <g key={i} className="rope-bulb-group">
                  <circle cx={bulbX} cy={bulbY} r="12" className="rope-bulb" />
                  <rect
                    x={bulbX - 4}
                    y={bulbY - 18}
                    width="8"
                    height="6"
                    rx="2"
                    className="rope-bulb-cap"
                  />
                </g>
              );
            })}
          </svg>

          {/* CARDS */}
          {events.map((e, i) => {
            const cardX =
              LEFT_PADDING + i * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH / 2;

            const ropeY = getRopeY(cardX);
            const baseY = 100;
            const cardShift = ropeY - baseY;

            return (
              <div
                key={i}
                className="card"
                onClick={() => setActiveNote(e.note)}
                style={{
                  transform: `translateY(${cardShift}px) rotate(${i % 2 === 0 ? -3 : 3}deg)`,
                  position: "relative",
                  zIndex: 1,
                  cursor: "pointer"
                }}
              >
                <div className="clip" style={{ top: -44 }} />
                <img src={e.image || "/images/image.jpg"} alt={e.text} />
                <span className="date">{e.date}</span>
                <p>{e.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      {activeNote && (
        <LetterOverlay 
          note={activeNote} 
          onClose={() => setActiveNote(null)} 
        />
      )}
    </>
  );
}
