"use client";
import React, { useState } from "react";

const NewPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData({
      title: "",
      content: "",
    });
  };

  return (
    <div className="w-full flex items-center justify-center my-8">
      <form className="w-1/2" onSubmit={handleSubmit}>
        <div>
          <input
            className="w-full p-2 rounded-md bg-slate-300 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <textarea
            className="w-full p-2 mt-5 rounded-md bg-slate-300 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleInputChange}
            cols="30"
            rows="10"
          ></textarea>
          <button
            className="mt-5 bg-current w-full p-2 rounded-md text-center uppercase"
            type="submit"
          >
            Submit this blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
