import Button from "./Button";

export default function NavBar() {
  return (
    <div className="flex justify-between border-b bg-white w-full h-15">
      <div className=" flex justify-start">
        <Button to="/" title="Home" />
        <Button to="/posts" title="Posts" />
      </div>

      <div className="flex ">
        {/* <Button title="Language" /> */}
        <Button title="🌚" />
      </div>
    </div>
  );
}
