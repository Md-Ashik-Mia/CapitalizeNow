"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine, FaHome, FaPlus, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaHome className="w-5 h-5" />,
      path: "/dashboard",
    },
    {
      name: "Manage Trends",
      icon: <FaChartLine className="w-5 h-5" />,
      path: "/dashboard/manage",
    },
    {
      name: "Add New Trend",
      icon: <FaPlus className="w-5 h-5" />,
      path: "/dashboard/add",
    },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#0A0212] border-r border-white/10 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <img src="/capitalizenow.png" alt="CapitalizeNow" className="h-8" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-[#FF4765] text-white shadow-[0_0_20px_rgba(255,71,101,0.4)]"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all">
          <FaSignOutAlt className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
