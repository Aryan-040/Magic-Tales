"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button, Link } from "@nextui-org/react";

function Header() {
  const MenuList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create a Tale",
      path: "/create",
    },
    {
      name: "Explore Tales",
      path: "/explore",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      maxWidth="full"
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-lg"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Logo + Brand */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={55}
            height={55}
            className="rounded-full shadow-md"
          />
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Magic Tales
          </h2>
        </NavbarBrand>
      </NavbarContent>

      {/* Center Menu */}
      <NavbarContent justify="center" className="gap-6 hidden sm:flex ">
        {MenuList.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.path}
              className="text-lg font-medium text-white hover:text-yellow-200 hover:underline transition-colors duration-300 mx-2"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Button */}
      <NavbarContent justify="end" className="hidden sm:flex">
        <Button className="rounded-2xl px-6 py-2 font-semibold text-lg shadow-md bg-white text-purple-700 hover:bg-blue-200 transition-all duration-300">
          Get Started
        </Button>
      </NavbarContent>
      <NavbarMenu>
        {MenuList.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={item.path}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
        <div className="pt-4 flex justify-center">
          <Button className="rounded-xl px-5 py-2 w-full font-semibold text-lg shadow-md bg-white text-purple-700 hover:bg-blue-200 transition-all">
            Get Started
          </Button>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
export default Header;
