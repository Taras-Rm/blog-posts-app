import { Link } from "react-router-dom";
import { routes } from "../pages/routes";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./ui/Button";

function Header() {
  const linkButtons = [
    { to: routes.home, label: "Home" },
    { to: routes.createPost, label: "Create New Post" },
  ];

  return (
    <div className="bg-gray-200/60 border-gray-200 py-5 sticky top-0 left-0 inset-x-0 z-50 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center">
          <Link
            to={routes.home}
            className="font-semibold cursor-pointer text-lg"
          >
            Blog<span className="text-primary">Posts</span>App
          </Link>

          <div className="space-x-4">
            {linkButtons.map((linkBtn) => (
              <Link key={linkBtn.to} to={linkBtn.to}>
                <Button>{linkBtn.label}</Button>
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Header;
