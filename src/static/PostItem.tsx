import { PostData } from "../data/Types";

export default function PostItem({ postData }: { postData: PostData }) {
  return (
    <div className="flex flex-col m-5 border w-1/2">
      <a href="#">
        <h1>{postData.title}</h1>
      </a>
      <p>{postData.content}</p>
    </div>
  );
}
