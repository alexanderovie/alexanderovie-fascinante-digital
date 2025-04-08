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

const Navbar= () => {
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

      {/* Toggle visible solo en mobile */}
      <div className="flex md:hidden items-center">
        <NavbarToggle />
      </div>

      {/* Menú principal (visible en escritorio) */}
      <div className="hidden md:flex flex-1 justify-center">
        <NavbarCollapse>
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/about">About</NavbarLink>
          <NavbarLink href="/services">Services</NavbarLink>
          <NavbarLink href="/pricing">Pricing</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </NavbarCollapse>
      </div>

      {/* Botones CTA (Login y Dashboard) */}
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

export default Navbar