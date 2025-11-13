"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Settings, BarChart } from "lucide-react"
import clsx from "clsx"

const menu = [
  { name: "Dashboard", icon: Home, href: "/dashboard" },
  { name: "Reports", icon: BarChart, href: "/reports" },
  { name: "Settings", icon: Settings, href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-60 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 text-lg font-semibold">My App</div>
      <nav className="flex flex-col space-y-1">
        {menu.map((item) => {
          const active = pathname.startsWith(item.href)
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex items-center px-4 py-2 hover:bg-gray-100 transition-all",
                active && "bg-gray-100 font-medium border-l-4 border-blue-500"
              )}
            >
              <Icon className="mr-3 h-5 w-5 text-gray-600" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
