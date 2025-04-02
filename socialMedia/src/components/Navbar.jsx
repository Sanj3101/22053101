import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-center gap-6">
      <Link to="/" className="hover:underline">Feed</Link>
      <Link to="/top-users" className="hover:underline">Top Users</Link>
      <Link to="/trending-posts" className="hover:underline">Trending Posts</Link>
    </nav>
  );
};

export default Navbar;
