"use client";

import React, { useState, useEffect } from "react";
import useStore from "@/libs/zustand";
import { useRouter, usePathname } from "next/navigation";
import { getUser } from "@/modules/fetch/fetchUser";
import logoEdspert from "@/assets/images/logo-edspert.png";
import Image from "next/image";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const user = await getUser();
          setUser(user);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, [setIsLoggedIn]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("#mega-menu-full-dropdown-button")) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    router.push("/");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const handleStorageChange = (event) => {
    if (event.key === "token") {
      const token = event.newValue;
      if (token) {
        getUser()
          .then((user) => {
            setUser(user);
            setIsLoggedIn(true);
          })
          .catch((error) => {
            console.error("Error fetching user after token change:", error);
            setIsLoggedIn(false);
          });
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const isAuthRoute = pathname.startsWith("/auth");

  if (isAuthRoute) {
    return null;
  }

  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <nav className="fixed text-center bg-white border-gray-200 h-20 border shadow-sm w-full z-10">
      <div className="flex flex-row md:justify-start justify-between items-center gap-14 mx-auto max-w-screen-xl px-4 py-6">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logoEdspert} alt="logo edspert" />
        </a>
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className="items-center justify-end font-medium hidden w-full md:flex md:order-1"
        >
          <ul className="flex flex-col justify-between items-center w-full text-gray-500 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <div className="flex flex-col md:flex-row gap-6">
              <li>
                <Link href="/" passHref>
                  <div
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6941C6] md:p-0 ${
                      pathname === "/" ? "text-[#6941C6]" : ""
                    }`}
                    aria-current={pathname === "/" ? "page" : undefined}
                  >
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#6941C6] md:p-0"
                  onClick={toggleDropdown}
                >
                  Products{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#6941C6] md:p-0"
                  onClick={toggleDropdown}
                >
                  Resources{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <Link href="/pricing" passHref>
                  <div
                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6941C6] md:p-0 ${
                      pathname === "/pricing" ? "text-[#6941C6]" : ""
                    }`}
                  >
                    Pricing
                  </div>
                </Link>
              </li>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex sm:flex-row justify-between items-center md:items-center gap-3">
                {isLoggedIn ? (
                  <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex flex-row md:gap-3 gap-0 items-center text-sm font-medium p-1 rounded-lg py-1 px-3 text-gray-700 hover:bg-gray-200 hover:text-black">
                      <span className="sr-only">Open user menu</span>
                      {user && user.profilePicture ? (
                        <img
                          className="w-8 h-8 me-2 rounded-full"
                          src={user.profilePicture}
                          alt="User photo"
                        />
                      ) : (
                        <AccountCircleIcon size={24} />
                      )}
                      {user && user.name ? (
                        <div className="md:flex flex-row gap-1 hidden">
                          {getDisplayName(user.name).map((part, index) => (
                            <span key={index}>{part}</span>
                          ))}
                        </div>
                      ) : (
                        <span>User</span>
                      )}
                    </button>
                    {showDropdown && (
                      <div className="absolute md:left-0 -right-4 w-64 bg-white rounded-md shadow-lg z-50">
                        {user &&                         (
                          <>
                            <div className="px-4 py-3 text-sm text-gray-900">
                              <div className="font-medium">{user.name}</div>
                              <div className="truncate">{user.email}</div>
                            </div>
                            <hr className="text-gray-200 mx-4" />
                            <ul
                              className="py-2 text-sm text-gray-700"
                              aria-labelledby="dropdownUserMenuButton"
                            >
                              <li>
                                <Link href="/profiles">
                                  <div className="flex flex-row gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left">
                                    Pengaturan Akun
                                  </div>
                                </Link>
                              </li>
                            </ul>
                            <hr className="text-color-gray-200 mx-4" />
                            <div className="py-2">
                              <button
                                onClick={handleLogout}
                                className="flex flex-row gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                              >
                                Logout
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ) : !isAuthRoute ? (
                  <>
                    <Link href="/auth/login" passHref>
                      <div className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#6941C6] md:p-0">
                        Login
                      </div>
                    </Link>
                    <Link href="/auth/register" passHref>
                      <div className="py-[10px] px-[18px] text-white rounded-lg bg-[#7F56D9] hover:bg-[#6941C6]">
                        Register
                      </div>
                    </Link>
                  </>
                ) : null}
              </div>
            </div>
          </ul>
        </div>
      </div>
      {isDropdownOpen && (
        <div
          id="mega-menu-full-dropdown"
          className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a
                  href="/products/online-stores"
                  className="block p-3 rounded-lg hover:bg-gray-100"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/products/segmentation"
                  className="block p-3 rounded-lg hover:bg-gray-100"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/products/marketing-crm"
                  className="block p-3 rounded-lg hover:bg-gray-100"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="/resources/blog"
                  className="block p-3 rounded-lg hover:bg-gray-100"
                >
                  <div className="font-semibold">Blog</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/resources/newsletter"
                  className="block p-3 rounded-lg hover:bg-gray-100"
                >
                  <div className="font-semibold">Newsletter</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/resources/events"
                  className="block p-3 rounded-lg hover:bg-gray-100"
                >
                  <div className="font-semibold">Events</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

