export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between py-8">
      <div className="flex gap-16">
        <div className="relative">
          <h1 className="text-xl font-extrabold">Mambo</h1>
          <span className="absolute -right-3 top-0 h-3 w-3 rounded-full bg-indigo-600"></span>
        </div>
        <ul className="flex items-center gap-8">
          <li className="text-md font-semibold">Home</li>
          <li className="text-md font-semibold text-gray-400">Pricing</li>
          <li className="text-md font-semibold text-gray-400">About Us</li>
          <li className="text-md font-semibold text-gray-400">Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <button className="text-md rounded-xl px-8 py-3 font-semibold">
          Log in
        </button>
        <button className="text-md rounded-xl bg-indigo-600 px-8 py-3 font-semibold">
          Sign up
        </button>
      </div>
    </nav>
  );
}
