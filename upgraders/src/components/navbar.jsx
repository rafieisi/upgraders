import pglogo from "../assets/img/pg-logo.png";

export function Navbar() {
  return (
    <nav className="fixed text-white font-bold py-4 bg-gray-900 top-0 left-0 w-full z-10">
      <div className="container max-w-screen-xl mx-auto flex flex-row justify-between">
        <img src={pglogo} alt="Plusgrade" width={150} height={22} />
        <ul>
          <li>
            <a href="https://st-newplusgrade.points.com/">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
