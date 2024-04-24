import { PostData } from "../data/Types";
import PostItem from "../static/PostItem";

export default function Posts() {
  const postData: PostData[] = [
    {
      id: 1,
      title: "Post 1",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      blandit porta finibus. Nam nec lorem eu tellus sagittis accumsan a vel
      leo. Suspendisse cursus posuere vulputate. Suspendisse lacus lectus,
      porta a pharetra sed, dictum et magna. Morbi nec felis ipsum. Sed
      auctor, odio ut volutpat facilisis, eros risus mattis mi, eu porttitor
      nunc velit nec mauris. Integer tempor, quam vitae tincidunt ultrices,
      metus nibh suscipit ligula, vitae ornare nulla turpis ut mi. Sed
      feugiat ligula orci, eget viverra arcu gravida eu.`,
    },
    {
      id: 2,
      title: "Post 2",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      blandit porta finibus. Nam nec lorem eu tellus sagittis accumsan a vel
      leo. Suspendisse cursus posuere vulputate. Suspendisse lacus lectus,
      porta a pharetra sed, dictum et magna. Morbi nec felis ipsum. Sed
      auctor, odio ut volutpat facilisis, eros risus mattis mi, eu porttitor
      nunc velit nec mauris. Integer tempor, quam vitae tincidunt ultrices,
      metus nibh suscipit ligula, vitae ornare nulla turpis ut mi. Sed
      feugiat ligula orci, eget viverra arcu gravida eu.`,
    },
    {
      id: 2,
      title: "Post 2",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      blandit porta finibus. Nam nec lorem eu tellus sagittis accumsan a vel
      leo. Suspendisse cursus posuere vulputate. Suspendisse lacus lectus,
      porta a pharetra sed, dictum et magna. Morbi nec felis ipsum. Sed
      auctor, odio ut volutpat facilisis, eros risus mattis mi, eu porttitor
      nunc velit nec mauris. Integer tempor, quam vitae tincidunt ultrices,
      metus nibh suscipit ligula, vitae ornare nulla turpis ut mi. Sed
      feugiat ligula orci, eget viverra arcu gravida eu.`,
    },
    {
      id: 3,
      title: "Post 3",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      blandit porta finibus. Nam nec lorem eu tellus sagittis accumsan a vel
      leo. Suspendisse cursus posuere vulputate. Suspendisse lacus lectus,
      porta a pharetra sed, dictum et magna. Morbi nec felis ipsum. Sed
      auctor, odio ut volutpat facilisis, eros risus mattis mi, eu porttitor
      nunc velit nec mauris. Integer tempor, quam vitae tincidunt ultrices,
      metus nibh suscipit ligula, vitae ornare nulla turpis ut mi. Sed
      feugiat ligula orci, eget viverra arcu gravida eu.`,
    },
    {
      id: 4,
      title: "Post 4",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      blandit porta finibus. Nam nec lorem eu tellus sagittis accumsan a vel
      leo. Suspendisse cursus posuere vulputate. Suspendisse lacus lectus,
      porta a pharetra sed, dictum et magna. Morbi nec felis ipsum. Sed
      auctor, odio ut volutpat facilisis, eros risus mattis mi, eu porttitor
      nunc velit nec mauris. Integer tempor, quam vitae tincidunt ultrices,
      metus nibh suscipit ligula, vitae ornare nulla turpis ut mi. Sed
      feugiat ligula orci, eget viverra arcu gravida eu.`,
    },
  ];
  return (
    <div className="w-full h-screen">
      <aside className="flex flex-col justify-center items-center">
        {postData.map((post) => {
          return <PostItem key={post.id} postData={post} />;
        })}
      </aside>
    </div>
  );
}
