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
import { ButtonFunction } from "types/function.types";
import { useRouter } from "next/router";
import profileImage from "svgs/undraw_pic_profile_re_7g2h.svg";

export default function Header() {
  const setTheme = useSetRecoilState(themeState);
  const [themeStorage, setThemeStorage] = useLocaleStorage("theme");
  const [token, setToken] = useLocaleStorage("token");
  const router = useRouter();
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

  const handleLogout: ButtonFunction = () => {
    setToken("");
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <Navbar shouldHideOnScroll className="bg-secondary-theme">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <h1 className="text-h1">LOGO</h1>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/profile">
            <Image src={profileImage.src} alt="" />
          </Link>
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">
          {token ? (
            <Button onClick={handleLogout} color="primary">
              logout
            </Button>
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
