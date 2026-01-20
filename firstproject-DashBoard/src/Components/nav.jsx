function Navbar() {
  return (
    <nav className="m-2.5 border-amber-400 bg-neutral-800 text-amber-50 px-4 py-3 rounded-lg flex justify-between items-center">
      <ul className="flex gap-6 font-medium">
        <li className="hover:text-amber-400 cursor-pointer">Home</li>
        <li className="hover:text-amber-400 cursor-pointer">Courses</li>
        <li className="hover:text-amber-400 cursor-pointer">About</li>
        <li className="hover:text-amber-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
export default Navbar;