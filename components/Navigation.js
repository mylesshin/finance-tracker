import { ImStatsBars } from "react-icons/im";

function Nav() {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User information */}
        <div className="flex items-center gap-2">
          {/* img */}
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="data:image/jpeg;base64,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"
              alt="Profile image"
            />
          </div>

          {/* name */}
          <small>Hi, Myles!</small>
        </div>

        {/* Right side of our navigation */}
        <nav className="flex items-center gap-4">
          <div>
            <ImStatsBars className="text-2xl" />
          </div>
          <div>
            <button className="btn btn-danger">Sign out</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
