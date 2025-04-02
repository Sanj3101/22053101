import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" relative flex items-center justify-center bg-gray-700 gap-10 p-4 text-xl w-full ">
      <Link to="/" className=" hover:text-yellow-400">Feed</Link>
      <Link to="/top-users" className=" hover:text-yellow-400">Top Users</Link>
      <Link to="/trending-posts" className=" hover:text-yellow-400">Trending Posts</Link>
    </nav>
  );
};

export default Navbar;
