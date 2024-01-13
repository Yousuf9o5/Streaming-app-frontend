import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import { useSetRecoilState } from "recoil";
import { themeState } from "atoms/theme";
import useLocaleStorage from "hooks/useLocaleStorage";
import profileImage from "svgs/undraw_pic_profile_re_7g2h.svg";

export default function Header() {
  const setTheme = useSetRecoilState(themeState);
  const [themeStorage, setThemeStorage] = useLocaleStorage("theme");
  const token = useLocaleStorage("token")[0];
  const handleChangeTheme = () => {
    const theme = localStorage.getItem("theme");

    if (theme == "light") {
      setTheme("dark");
      setThemeStorage("dark");
    } else {
      setTheme("light");
      setThemeStorage("light");
    }
  };

  return (
    <Navbar shouldHideOnScroll className="bg-secondary-theme">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <h1 className="text-h3">Watch Party App</h1>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>

        <NavbarItem className="hidden lg:flex">
          {token ? (
            <Link href="/profile">
              <Image src={profileImage.src} alt="" />
            </Link>
          ) : (
            <Link href="/login">login</Link>
          )}
        </NavbarItem>
        <NavbarItem>
          <Button onClick={handleChangeTheme} color="secondary">
            Theme
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
