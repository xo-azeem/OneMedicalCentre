export default function DigitalPulse() {
  return (
    <div
      className="w-full max-w-3xl mx-auto bg-white rounded-3xl p-6 flex items-center justify-center mb-0"
    >
      <svg
        viewBox="0 0 600 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48"
        aria-label="Digital ECG Pulse"
      >
        {/* Shadow Path */}
        <path
          stroke="rgba(55,65,81,0.15)"
          fill="none"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
        />
        {/* Animated Pulse Path */}
        <path
          id="pulsar"
          className="digital-pulse-path"
          fill="none"
          strokeWidth="3"
          strokeLinejoin="round"
          d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
        />
      </svg>
      <style>{`
        .digital-pulse-path {
          stroke: #FACC15;
          stroke-dasharray: 281;
          animation: dash 2.5s infinite linear forwards;
          transition: stroke 0.3s;
        }
        .dark .digital-pulse-path {
          stroke: #FFD700;
        }
        @keyframes dash {
          from {
            stroke-dashoffset: 281;
          }
          to {
            stroke-dashoffset: -281;
          }
        }
      `}</style>
    </div>
  );
}