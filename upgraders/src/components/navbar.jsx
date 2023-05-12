import pglogo from "../assets/img/pg-logo.png";

export function Navbar() {
  return (
    <nav className="fixed text-white font-bold py-2 bg-gray-950 top-0 left-0 w-full z-50">
      <div className="container max-w-screen-lg mx-auto flex flex-row justify-between content-center items-center align-middle">
        <img src={pglogo} alt="Plusgrade" class='w-24 h-5' />
        <ul class="flex flex-row">
          <li className="mr-4">
            <a href="https://st-newplusgrade.points.com/" class="text-[10px]">Products</a>
          </li>
          <li className="mr-4">
          <a href="https://st-newplusgrade.points.com/" class="text-[10px]">Industries</a>
          </li>
          <li className="mr-4">
            <a href="https://st-newplusgrade.points.com/" class="text-[10px]">Partners</a>
          </li>
          <li className="mr-4">
            <a href="https://st-newplusgrade.points.com/" class="text-[10px]">About</a>
          </li>
          <li className="mr-4">
            <a href="https://st-newplusgrade.points.com/" class="text-[10px]">Careers</a>
          </li>
          <li className="mr-4">
            <a href="https://st-newplusgrade.points.com/" class="text-[10px] text-white px-3 py-2 text-xs bg-blue-600 rounded-full">Request a Demo</a>
          </li>
          <li className="">
            <a href="https://st-newplusgrade.points.com/" class="text-[10px]">Language</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
