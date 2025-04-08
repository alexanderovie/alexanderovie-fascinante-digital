'use client'

import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from 'flowbite-react'
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiShoppingBag,
  HiTable,
  HiUser,
} from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

const SidebarPro = () => {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem as={Link} href="/dashboard" icon={HiChartPie}>
            Dashboard
          </SidebarItem>

          {/* Submenú personalizado con chevron dinámico */}
          <SidebarCollapse
            icon={HiShoppingBag}
            label="Services"
            renderChevronIcon={(theme, open) => {
              const Icon = open ? HiOutlineMinusSm : HiOutlinePlusSm
              return (
                <Icon
                  aria-hidden
                  className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])}
                />
              )
            }}
          >
            <SidebarItem as={Link} href="/services/local-seo">
              Local SEO
            </SidebarItem>
            <SidebarItem as={Link} href="/services/listings">
              Listings Management
            </SidebarItem>
            <SidebarItem as={Link} href="/services/reputation">
              Reputation Monitoring
            </SidebarItem>
          </SidebarCollapse>

          <SidebarItem as={Link} href="/dashboard/profile" icon={HiUser}>
            Profile
          </SidebarItem>

          <SidebarItem as={Link} href="/dashboard/support" icon={HiInbox}>
            Support
          </SidebarItem>

          <SidebarItem as={Link} href="/signin" icon={HiArrowSmRight}>
            Log out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  )
}

export default SidebarPro