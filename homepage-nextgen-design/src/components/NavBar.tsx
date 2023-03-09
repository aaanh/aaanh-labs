import Link from "next/link";
import { useState } from "react";
import { Url } from "url";

import {
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from "@fluentui/react-components";

type NavBtnProps = {
  text: string | undefined;
  location: string | Url;
};

const NavBtn = (props: NavBtnProps) => {
  return (
    <Link
      className="text-md border-b-2 border-b-transparent transition-all ease-linear hover:border-b-black"
      href={props.location}
    >
      {props.text}
    </Link>
  );
};

function NavBar() {
  return (
    <nav className="flex w-full items-center space-x-4">
      <NavBtn text="Experiences" location="/experiences"></NavBtn>
      <NavBtn text="Projects" location="/projects"></NavBtn>
      <NavBtn text="Contacts" location="/contacts"></NavBtn>
    </nav>
  );
}

function NavBarNarrow() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <button>
          <svg viewBox="0 0 100 50" width="40" height="40">
            <rect width="64" height="2"></rect>
            <rect y="15" width="64" height="2"></rect>
            <rect y="30" width="64" height="2"></rect>
          </svg>
        </button>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>
            <NavBtn text="Experiences" location="/experiences"></NavBtn>
          </MenuItem>
          <MenuItem>
            <NavBtn text="Projects" location="/projects"></NavBtn>
          </MenuItem>
          <MenuItem>
            <NavBtn text="Contacts" location="/contacts"></NavBtn>
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

export { NavBar };
export { NavBarNarrow };
