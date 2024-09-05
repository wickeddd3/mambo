export default function Navbar() {
  return (
    <nav className="mx-auto flex w-full items-center justify-between px-4 py-4 md:max-w-7xl lg:py-8">
      <div className="flex gap-16">
        <div className="relative">
          <h1 className="text-xl font-extrabold">Mambo</h1>
          <span className="absolute -right-3 top-0 h-3 w-3 rounded-full bg-indigo-600"></span>
        </div>
        <ul className="hidden items-center gap-8 lg:flex">
          <li className="text-md font-semibold">Home</li>
          <li className="text-md font-semibold text-gray-400">Pricing</li>
          <li className="text-md font-semibold text-gray-400">About Us</li>
          <li className="text-md font-semibold text-gray-400">Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <button className="md:text-md rounded-xl px-6 py-2 text-sm font-semibold md:px-8 md:py-3">
          Log in
        </button>
        <button className="md:text-md rounded-xl bg-indigo-600 px-6 py-2 text-sm font-semibold md:px-8 md:py-3">
          Sign up
        </button>
      </div>
    </nav>
  );
}
