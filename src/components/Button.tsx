import { useNavigate } from "react-router-dom";

export default function Button({
  title,
  to,
  className,
}: {
  title: string;
  to?: string;
  className?: string;
}) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      className={`font-medium	mx-10 py-2 align-middle justify-center items-center ${className}`}
      onClick={handleOnClick}
    >
      {title}
    </button>
  );
}
