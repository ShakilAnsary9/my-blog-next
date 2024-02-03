import { auth, SignInButton } from "@clerk/nextjs";
import CommentForm from "../../components/CommentForm";
import Comments from "../../components/Comments";

const SingleBlog = () => {
  const { userId } = auth();
  return (
    <div className="max-w-screen-xl mx-auto p-4 dark:text-slate-300">
      <h1 className="text-3xl font-bold">Here is the blog title</h1>
      <div className="mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        deleniti sapiente voluptates. Consectetur repellendus eligendi modi
        itaque deleniti soluta enim?
      </div>
      <div className="mt-10">
        <Comments />
      </div>
      <div className="mt-10">
        {userId ? (
          <CommentForm />
        ) : (
          <div>
            <SignInButton redirectUrl="/blogs" mode="modal" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
