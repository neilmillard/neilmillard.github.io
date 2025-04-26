'use client';
import React, {useState} from "react";
import Link from "next/link";
import {ChevronDown, MenuIcon, XIcon} from 'lucide-react'
import {usePathname} from "next/navigation";
import {useViewportSize} from "@mantine/hooks";
import {twMerge} from "tailwind-merge";
import clsx from "clsx";

interface NavLinkItem {
  name: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  {name: ' Blog ', path: '/blog/'},
  {name: ' About ', path: '/about/'},
  {name: ' Book', path: '/book/'},
  {name: ' Clock ', path: '/clock/'},
  {name: ' DevOps ', path: 'devops/'},
  {name: ' Glossary ', path: '/glossary/'},
  {name: ' Contact ', path: '/contact/'},
]

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { width } = useViewportSize()
  const isMobile = width < 768 // below md breakpoint

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenuOnMobile = () => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  return <header className='fixed w-full px-8 z-10 bg-white shadow-sm shadow-neutral-500 h-10 flex items-center'>
    <nav className="flex justify-between items-center w-full">
      <Link href="/" className='font-bold'>
        Neil Millard
      </Link>
      <ul
        className={twMerge(clsx(
          'flex items-center gap-8',
          isMenuOpen &&
          'bg-green-50 flex-col fixed top-10 right-0 bottom-0 w-1/2 p-8 transform transition-transform duration-300 ease-in-out translate-x-0',
          !isMenuOpen &&
          isMobile &&
          'bg-green-50 flex-col fixed top-10 right-0 bottom-0 w-1/2 p-8 transform transition-transform duration-300 ease-in-out translate-x-full'
        ))}
      >
        {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.path}
            className={isActive(link.path) ? "font-bold" : ""}
            onClick={closeMenuOnMobile}
          >
            <span>{link.name}</span>
          </Link>
        </li>
      ))}
      </ul>
      <button
        aria-labelledby='Menu Toggle Button'
        className='block md:hidden'
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <XIcon className='size-6' />
        ) : (
          <MenuIcon className='size-6' />
        )}
      </button>
    </nav>
  </header>;
}
