export default function SvgSymbols() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }} aria-hidden="true">
      <defs>
        {/* Original Logo Geometry with Akshat Patel personal mark */}
        <symbol id="logo" viewBox="0 0 32 32">
          <path
            fill="currentColor"
            d="M3 4h26L22 11H3zm0 10h19l-7 7H3zm0 10h11l-5 5H3z"
          />
        </symbol>

        {/* Arrow */}
        <symbol id="arrow" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M12 5l7 7-7 7"
          />
        </symbol>

        {/* Diagonal Arrow */}
        <symbol id="diagonal" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M7 7h10v10"
          />
        </symbol>

        {/* Spark */}
        <symbol id="spark" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z"
          />
        </symbol>

        {/* Grid */}
        <symbol id="grid" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"
          />
        </symbol>

        {/* Code */}
        <symbol id="code" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 18l6-6-6-6M8 6l-6 6 6 6"
          />
        </symbol>

        {/* Desktop */}
        <symbol id="desktop" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM8 20h8M12 16v4"
          />
        </symbol>

        {/* Phone */}
        <symbol id="phone" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 2h14c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zM12 18h.01"
          />
        </symbol>

        {/* Check */}
        <symbol id="check" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 6L9 17l-5-5"
          />
        </symbol>

        {/* Bag */}
        <symbol id="bag" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"
          />
        </symbol>

        {/* Cursor */}
        <symbol id="cursor" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M4 2l16 7-7 2-2 7z"
          />
        </symbol>
      </defs>
    </svg>
  );
}
