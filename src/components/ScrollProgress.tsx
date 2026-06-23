import { useEffect, useState } from "react";

export default function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScroll(
        (window.scrollY / total) * 100
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-indigo-500 z-50"
      style={{
        width: `${scroll}%`,
      }}
    />
  );
}