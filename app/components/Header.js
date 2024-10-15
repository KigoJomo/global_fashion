'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { IoCloseOutline } from 'react-icons/io5'
import { FiHome } from "react-icons/fi";

const pages = [
  {
    name: 'Home',
    icon: FiHome,
    href: '/',
  },
  {
    name: 'collections',
    icon: <CiMenuFries />,
    href: '/collections',
  },
  {
    name: 'shop',
    icon: <CiMenuFries />,
    href: '/shop',
  },
  {
    name: 'events',
    icon: <CiMenuFries />,
    href: '/events',
  },
  {
    name: 'account',
    icon: <CiMenuFries />,
    href: '/account',
  }
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <header className="w-full sticky top-0   flex items-center justify-between px-6 py-6">
      <div className="logo">
        <Image
          src="/images/logo.png"
          alt="Global Fashion"
          width={100}
          height={100}
          className="h-12 object-contain"
        />
      </div>

      <button onClick={() => setIsOpen(true)}>
        <CiMenuFries size={24} />
      </button>

      <nav
        className={`menu absolute top-0 ${
          isOpen ? 'right-0' : '-right-full'
        }    w-full h-screen p-6 flex flex-col items-center gap-6 bg-background transition-all duration-300 ease-in-out`}
      >
        <div className="logo">
          <Image
            src="/images/logo.png"
            alt="Global Fashion"
            width={100}
            height={100}
            className="h-12 object-contain"
          />
        </div>

        <button
          className="close-button absolute right-6 top-6"
          onClick={() => setIsOpen(false)}
        >
          <IoCloseOutline size={24} />
        </button>
      </nav>
    </header>
  )
}

export default Header
