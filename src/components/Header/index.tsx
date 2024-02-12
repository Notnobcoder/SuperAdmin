import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownUser from "./DropdownUser";
import { LuSearch } from "react-icons/lu";
import { RiMenu5Fill } from "react-icons/ri";

const Header = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="h-16 px-4 md:px-6 2xl:px-10 flex items-center justify-between border-b border-[#cccccc80] w-full">
        <div className="flex items-center gap-5">
          <div
            className={`cursor-pointer ${open ? "hidden" : "block"}`}
            onClick={() => setOpen(true)}
          >
            <RiMenu5Fill className="text-2xl text-[#4D4D4D]" />
          </div>
          <div className="text-[#1A1A1A] font-medium text-xl">
            Fabrics House Admins
          </div>
          <div className="hidden sm:block relative border border-black/10 bg-[#e6e6e6b3] rounded-full lg:min-w-[400px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <LuSearch className="text-[#4D4D4D] text-lg" />
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent pl-10 pr-5 py-1 font-medium placeholder:font-normal placeholder:text-sm focus:outline-none xl:w-125"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            {/* <DropdownNotification /> */}
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
