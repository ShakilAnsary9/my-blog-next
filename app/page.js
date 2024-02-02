import NewPost from "./components/NewPost";

export default function Home() {
  return (
    <main className="dark:text-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
      <NewPost />
    </main>
  );
}
