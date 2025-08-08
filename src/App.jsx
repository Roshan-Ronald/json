import React, { useState } from 'react';

const initialData = {
  title: "My Blog",
  postCount: 3,
  isPublished: true,
  posts: [
    { id: 1, author: "Alice", content: "This is my first post on React.", likes: 10, isFeatured: false },
    { id: 2, author: "Bob", content: "JavaScript is a powerful language.", likes: 15, isFeatured: true },
    { id: 3, author: "Carol", content: "I enjoy styling websites with CSS.", likes: 7, isFeatured: false }
  ]
};

function Post({ post }) {
  return (
    <div className={`p-5 rounded-lg shadow-md transition-shadow duration-300
      ${post.isFeatured ? 'bg-yellow-50 border-2 border-yellow-400' : 'bg-white border border-gray-200 hover:shadow-lg'}`}>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold text-gray-800">{post.author}</h2>
        {post.isFeatured && (
          <span title="Featured Post" className="text-yellow-500 text-2xl select-none">
            ★
          </span>
        )}
      </div>
      <p className="text-gray-700 mb-3">{post.content}</p>
      <p className="text-sm text-gray-500 font-medium">Likes: {post.likes}</p>
    </div>
  );
}

function Postlist({ posts }) {
  if (posts.length === 0)
    return <p className="text-center text-gray-500 italic">No posts to display.</p>;

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

function App() {
  const [data, setData] = useState(initialData);
  const [form, setForm] = useState({
    author: '',
    content: '',
    likes: 0,
    isFeatured: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? +value : value,
    }));
  };

  const validate = () => {
    const errs = {};
    if (!form.author.trim()) errs.author = "Author is required.";
    if (!form.content.trim()) errs.content = "Content is required.";
    if (form.likes < 0) errs.likes = "Likes cannot be negative.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const newPost = {
      id: data.posts.length ? Math.max(...data.posts.map(p => p.id)) + 1 : 1,
      author: form.author.trim(),
      content: form.content.trim(),
      likes: form.likes,
      isFeatured: form.isFeatured,
    };

    setData({
      ...data,
      posts: [newPost, ...data.posts],
      postCount: data.postCount + 1,
    });

    setForm({ author: '', content: '', likes: 0, isFeatured: false });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-8 max-w-4xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{data.title}</h1>
        <p className="text-gray-600 text-lg">
          Posts count: <span className="font-semibold">{data.postCount}</span> | Published: <span className="font-semibold">{data.isPublished ? 'Yes' : 'No'}</span>
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 mb-12"
        noValidate
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Add New Post</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="author" className="mb-2 font-semibold text-gray-700">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={form.author}
              onChange={handleChange}
              className={`rounded-md border px-4 py-3 focus:outline-none focus:ring-2
                ${errors.author ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
              placeholder="Author name"
            />
            {errors.author && <p className="text-red-600 text-sm mt-1">{errors.author}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="likes" className="mb-2 font-semibold text-gray-700">
              Likes
            </label>
            <input
              type="number"
              id="likes"
              name="likes"
              min="0"
              value={form.likes}
              onChange={handleChange}
              className={`rounded-md border px-4 py-3 focus:outline-none focus:ring-2
                ${errors.likes ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
              placeholder="0"
            />
            {errors.likes && <p className="text-red-600 text-sm mt-1">{errors.likes}</p>}
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="content" className="block mb-2 font-semibold text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={form.content}
            onChange={handleChange}
            rows="5"
            className={`w-full resize-none rounded-md border px-4 py-3 focus:outline-none focus:ring-2
              ${errors.content ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
            placeholder="Write your post..."
          />
          {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content}</p>}
        </div>

        <div className="flex items-center mt-6 space-x-3">
          <input
            type="checkbox"
            id="isFeatured"
            name="isFeatured"
            checked={form.isFeatured}
            onChange={handleChange}
            className="w-5 h-5 text-yellow-400 rounded focus:ring-yellow-300 focus:ring-2 border-gray-300"
          />
          <label htmlFor="isFeatured" className="font-semibold text-gray-700 cursor-pointer select-none">
            Featured Post
          </label>
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-md font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-300"
        >
          Add Post
        </button>
      </form>

      <Postlist posts={data.posts} />
    </div>
  );
}

export default App;
