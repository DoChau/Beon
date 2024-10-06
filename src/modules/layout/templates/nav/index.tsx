"use client"
//import { Suspense } from "react"
//import { listRegions } from "@lib/data"
//import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
//import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation"
import React from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SocialLink from "@modules/layout/components/socialLink"
import BasketProfile from "@modules/layout/components/basket-profile"
import Booking_button from "@modules/layout/components/booking-button"

const pages = [
  { name: "Home",     href: "" },
  { name: "About",    href: "/about" },
  { name: "Services", href: "/categories/manicure" },
  { name: "Policy",   href: "/policy" },
  { name: "Gallery",  href: "/gallery" },
  { name: "News",     href: "/news" },
  { name: "Hiring",   href: "/hiring" },
  { name: "Book an appointment",   href: "/booking" },
  ]

export default function Nav() {
  //const regions = await listRegions().then((regions) => regions)
  const pathname = usePathname()
  switch (pathname) {
    case "/us/halloween":
      return (
        <>
          <div className="sticky top-0 mx-auto w-full bg-transparent h-12 sm:h-16 place-content-start sm:place-content-center z-50 group duration-200 text-gray-500 border-gray-500">
            <header className="relative w-full flex flex-wrap">
              <nav className="m-auto max-w-6xl w-full sm:px-5 justify-self-center">
                <div className="mx-auto flex flex-wrap items-center justify-between">
                  <div
                    className="items-center justify-between hidden px-2 w-full h-screen sm:h-fit bg-white sm:bg-transparent sm:flex sm:w-auto order-2 sm:order-1"
                    id="search-navbar"
                  >
                    <div className="relative my-4 sm:hidden">
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-2 text-sm rounded-lg bg-transparent border placeholder:text-gray-500 border-gray-500"
                        placeholder="Search..."
                      />
                    </div>
                    <div className="social_widget w-[80%] pl-6 sm:hidden inline-flex items-center sm:justify-start space-x-2">
                      <SocialLink/>
                    </div>

                    <div className="flex flex-col p-4 sm:p-0 rounded-lg bg-transparent text-primary-content font-futura font-thin uppercase text-base sm:space-x-6 rtl:space-x-reverse sm:flex-row">
                    {pages.map((page) => (
                        <LocalizedClientLink 
                          className={`py-2 px-3 font-futura font-thin sm:hover:border-b hover:animate-scale-up border-primary-content sm:p-0
                            ${pathname === ('/us' + page.href ) ? "border-b" : ""
                            }`}
                          key={page.href}
                          href={page.href}
                          >
                          {page.name}
                        </LocalizedClientLink>
                      ))}
                    </div>
                  </div>

                  <div className="flex-row inline-flex w-screen sm:w-60 sm:order-2 order-1 place-items-center justify-around items-end text-gray-500">
                    
                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg sm:hidden"
                      data-collapse-toggle="search-navbar"
                      type="button"
                      aria-controls="navbar-search"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h15M1 7h15M1 13h15"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="sm:hidden rounded-lg text-sm p-2.5 me-1"
                      data-collapse-toggle="search-navbar"
                      aria-controls="search-navbar"
                      aria-expanded="false"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>

                    <div className="relative hidden sm:block w-40 mr-4">
                      <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                        <span className="sr-only">Search icon</span>
                      </div>
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-2 text-sm bg-transparent border-b outline-none placeholder:text-gray-500 border-gray-500"
                        placeholder="Search..."
                      />
                    </div>
                    
                    <div 
                      className="bunny-ear-spacer w-20 sm:hidden">
                    </div>

                    <BasketProfile/>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        </>
      )
    case "/us":
      return (
        <>
          <div className="sticky top-0 mx-auto w-full bg-transparent h-12 sm:h-16 place-content-start sm:place-content-center z-50 group duration-200 text-gray-500 border-gray-500">
            <header className="relative w-full flex flex-wrap">
              <nav className="m-auto max-w-6xl w-full sm:px-5 justify-self-center">
                <div className="mx-auto flex flex-wrap items-center justify-between">
                  <div
                    className="items-center justify-between hidden px-2 w-full h-screen sm:h-fit bg-white sm:bg-transparent sm:flex sm:w-auto order-2 sm:order-1"
                    id="search-navbar"
                  >
                    <div className="relative my-4 sm:hidden">
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-2 text-sm rounded-lg bg-transparent border placeholder:text-gray-500 border-gray-500"
                        placeholder="Search..."
                      />
                    </div>
                    <div className="social_widget w-[80%] pl-6 sm:hidden inline-flex items-center sm:justify-start space-x-2">
                      <SocialLink/>
                    </div>

                    <div className="flex flex-col p-4 sm:p-0 rounded-lg bg-transparent text-pink-600 font-futura font-thin uppercase text-base sm:space-x-6 rtl:space-x-reverse sm:flex-row">
                    {pages.map((page) => (
                        <LocalizedClientLink 
                          className={`py-2 px-3 font-futura font-light sm:hover:border-b hover:animate-scale-up border-primary-content sm:p-0
                            ${pathname === ('/us' + page.href ) ? "border-b" : ""
                            }`}
                          key={page.href}
                          href={page.href}
                          >
                          {page.name}
                        </LocalizedClientLink>
                      ))}
                    </div>
                  </div>

                  <div className="flex-row inline-flex w-screen sm:w-60 sm:order-2 order-1 place-items-center justify-around items-end text-gray-500">
                    
                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg sm:hidden"
                      data-collapse-toggle="search-navbar"
                      type="button"
                      aria-controls="navbar-search"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h15M1 7h15M1 13h15"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="sm:hidden rounded-lg text-sm p-2.5 me-1"
                      data-collapse-toggle="search-navbar"
                      aria-controls="search-navbar"
                      aria-expanded="false"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>

                    <div className="relative hidden sm:block w-40 mr-4">
                      <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                        <span className="sr-only">Search icon</span>
                      </div>
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-2 text-sm bg-transparent border-b outline-none placeholder:text-gray-500 border-gray-500"
                        placeholder="Search..."
                      />
                    </div>
                    
                    <div 
                      className="bunny-ear-spacer w-20 sm:hidden">
                    </div>

                    <BasketProfile/>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        </>
      )
    default:
      return (
        <>
          <div className="sticky top-0 w-full h-44 mx-auto bg-secondary text-base-content place-content-start sm:place-content-center z-50 group duration-200">
            <header className="w-full relative flex flex-wrap">
              <nav className="w-full mx-auto max-w-6xl grid">
                <div className="Booking fixed bottom-[-40px] right-[-40px] sm:bottom-0 sm:right-0 scale-50 sm:scale-[0.7] opacity-90 xl:opacity-100 w-52 h-52 z-50">
                  <Booking_button/>
                </div>

                <div
                  className="w-full h-screen hidden absolute top-10 items-center justify-center bg-secondary sm:flex sm:static sm:h-6 sm:bg-transparent order-2 mx-auto"
                  id="search-navbar"
                >
                  <div className="relative my-4 sm:hidden">
                    <input
                      type="text"
                      id="search-navbar"
                      className="block w-full p-2 ps-2 text-sm rounded-lg bg-transparent border outline-none placeholder:text-base-content border-base-content"
                      placeholder="Search..."
                    />
                  </div>

                  
                  <div className="social_widget w-[80%] pl-6 sm:hidden inline-flex items-center xsmall:justify-start space-x-2">
                    <SocialLink/>
                  </div>

                  <div className="flex flex-col p-4 sm:p-0 rounded-lg bg-transparent font-futura font-thin uppercase text-base sm:space-x-6 rtl:space-x-reverse sm:flex-row">
                    {pages.map((page) => (
                      <LocalizedClientLink 
                        className={`py-2 px-3 font-futura font-thin sm:hover:border-b hover:animate-scale-up border-primary-content sm:p-0
                          ${pathname === ('/' + page.href ) ? "border-b" : ""
                          }`}
                        key={page.href}
                        href={page.href}
                        >
                        {page.name}
                      </LocalizedClientLink>
                    ))}
                  </div>
                </div>

                <div className="w-full grid h-32 sm:inline-flex sm:justify-between items-start place-items-center order-1">
                  <div className="social_widget hidden sm:inline-flex items-center justify-start space-x-2">
                    <SocialLink/>
                  </div>

                  <div className="LOGO my-4 order-2 flex items-end">
                    <a
                      className="items-end justify-center w-full mx-auto"
                      title="logo_link"
                      href="/"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="https://webnailsbucket.s3.amazonaws.com/beon/logo+beon.png"
                        alt="logo"
                        width={152}
                        height={209}
                        style={{
                          width: "auto",
                          height: "100px",
                        }}
                      />
                    </a>
                  </div>

                  <div className="Search-bar w-full sm:w-60 inline-flex justify-around sm:justify-end order-1 sm:order-3">
                    
                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-base-content rounded-lg sm:hidden"
                      data-collapse-toggle="search-navbar"
                      type="button"
                      aria-controls="navbar-search"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h15M1 7h15M1 13h15"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="sm:hidden text-base-content rounded-lg text-sm p-2.5 me-1"
                      data-collapse-toggle="search-navbar"
                      aria-controls="search-navbar"
                      aria-expanded="false"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>

                    <div className="relative hidden sm:block w-40 mr-4">
                      <div className="absolute inset-y-0 end-2 flex items-center ps-3">
                        <svg
                          className="w-4 h-4 text-base-content"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                        <span className="sr-only">Search icon</span>
                      </div>
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-2 text-sm bg-transparent border-0 border-b border-base-content outline-none placeholder:text-base-content"
                        placeholder="Search..."
                      />
                    </div>

                    <div 
                      className="bunny-ear-spacer w-20 sm:hidden">
                    </div>

                    <BasketProfile/>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        </>
      )
  }
}
