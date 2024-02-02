const Comments = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul className="mt-5">
        <li className="bg-slate-300 dark:bg-slate-700 p-4 rounded-md text-slate-800 dark:text-slate-300">
          <div>Comment 01</div>
          <div className="text-current font-medium uppercase flex justify-between">
            <div>Shakil</div>{" "}
            <small className="text-gray-400">02-02-2024</small>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Comments;
