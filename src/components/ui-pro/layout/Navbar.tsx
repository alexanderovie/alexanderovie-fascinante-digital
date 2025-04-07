'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'

const NavbarPro = () => {
  return (
    <Navbar
      fluid
      rounded
      className="bg-white dark:bg-gray-900 px-4 py-3 shadow-sm"
    >
      {/* Logo adaptable */}
      <NavbarBrand as={Link} href="/">
        <Image
          src="/Logo.svg"
          alt="Fascinante Logo"
          width={150}
          height={40}
          className="bg-transparent"
        />
      </NavbarBrand>

      {/* Toggle solo visible en mobile */}
      <div className="flex md:hidden items-center">
        <NavbarToggle />
      </div>

      {/* Contenedor central para el menú (centrado en escritorio) */}
      <div className="hidden md:flex flex-1 justify-center">
        <NavbarCollapse>
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink href="/about">Company</NavbarLink>
          <NavbarLink href="/features">Features</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </NavbarCollapse>
      </div>

      {/* Botones CTA a la derecha */}
      <div className="hidden md:flex items-center gap-2">
        <Button as={Link} href="/signin" color="light" size="sm">
          Log in
        </Button>
        <Button as={Link} href="/dashboard" size="sm">
          Get started
        </Button>
      </div>
    </Navbar>
  )
}

export default NavbarPro