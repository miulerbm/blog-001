import { useState } from "react";
import { ArrowBigLeftDash } from "lucide-react";
import { ArrowBigRight } from "lucide-react";

export default function Sidebar() {
  const [isShown, setIsShown] = useState(false);

  const handleOnClick = () => {
    setIsShown((prevState) => !prevState);
  };

  return (
    <>
      {isShown ? (
        <aside className="h-screen absolute w-1/3">
          <nav className="h-full flex flex-col bg-white border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-end items-center border">
              <button onClick={handleOnClick}>
                <ArrowBigLeftDash />
              </button>
            </div>
          </nav>
        </aside>
      ) : (
        <aside className="h-screen absolute w-1/8">
          <nav className="h-full flex flex-col justify-center bg-white border-r shadow-sm">
            <button onClick={handleOnClick}>
              <ArrowBigRight />
            </button>
          </nav>
        </aside>
      )}
    </>
  );
}
