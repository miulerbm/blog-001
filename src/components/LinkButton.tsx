export default function LinkButton({
  title,
  className,
  href,
}: {
  title: string;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href || "#"} // Use "#" as fallback if neither href nor to is provided
      target="_blank" // Open link in a new tab
      rel="noopener noreferrer" // Recommended for security reasons
      className={`font-medium mx-10 py-2 align-middle justify-center items-center ${className}`}
    >
      {title}
    </a>
  );
}
