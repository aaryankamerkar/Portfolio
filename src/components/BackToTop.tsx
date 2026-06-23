import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {

  const [show, setShow] =
    useState(false);

  useEffect(() => {

    const toggle = () =>
      setShow(window.scrollY > 500);

    window.addEventListener(
      "scroll",
      toggle
    );

    return () =>
      window.removeEventListener(
        "scroll",
        toggle);

  }, []);

  return show ? (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 right-6 bg-indigo-600 p-4 rounded-full"
    >
      <FaArrowUp />
    </button>
  ) : null;
}