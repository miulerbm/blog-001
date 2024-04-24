import LinkButton from "./LinkButton";

export default function Footer() {
  return (
    <div className="flex justify-center border-t bg-white w-full h-50">
      <div className=" flex justify-start">
        <LinkButton href="https://miulerbm.vercel.app/" title="/miulerbm" />
      </div>
    </div>
  );
}
