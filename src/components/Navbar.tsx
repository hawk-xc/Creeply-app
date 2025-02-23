import Image from "next/image";
import Drawer from "@/components/Drawer";
import ThemeToggle from "@/particles/themeToggle";

const Navbar: React.FC = (): React.JSX.Element => {
  return (
    <nav className="navbar bg-base-100 md:px-52">
      <div className="flex-1">
        <Image
          id="applogo"
          src="/CreeplyTf.png"
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      <div className="flex-none gap-2">
        <ThemeToggle />
        <Drawer />
      </div>
    </nav>
  );
};

export default Navbar;
