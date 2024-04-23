import { useNavigate } from "react-router-dom";

export default function NavigatorButton({
  title,
  to,
  className,
}: {
  title: string;
  to: string;
  className?: string;
}) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(to);
  };

  return (
    <button
      className={`font-medium	mx-10 py-2 ${className}`}
      onClick={handleOnClick}
    >
      {title}
    </button>
  );
}
