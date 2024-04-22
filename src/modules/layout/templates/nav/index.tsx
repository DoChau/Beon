"use client"
//import { Suspense } from "react"
//import { listRegions } from "@lib/data"
//import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
//import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation"

export default function Nav() {
  //const regions = await listRegions().then((regions) => regions)
  const pathname = usePathname()
  switch (pathname) {
    case "/us":
      return (
        <>
          <div className="sticky top-0 mx-auto w-full bg-theme-14 bg-opacity-75 h-12 md:h-16 place-content-start md:place-content-center z-50 group duration-200 text-theme-3">
            <header className="relative w-full flex flex-wrap">
              <nav className="m-auto max-w-6xl w-full md:px-5 justify-self-center">
                <div className="mx-auto flex flex-wrap items-center justify-between">
                  <div
                    className="items-center justify-between hidden px-2 w-full sm:bg-transparent bg-theme-14 md:flex md:w-auto order-2 md:order-1"
                    id="search-navbar"
                  >
                    <div className="relative my-4 md:hidden">
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-2 text-sm text-theme-3 rounded-lg bg-transparent border border-theme-3"
                        placeholder="Search..."
                      />
                    </div>
                    <div className="social_widget w-[80%] pl-6 md:hidden inline-flex items-center xsmall:justify-start space-x-2">
                      <a
                        title="social-link"
                        href="https://www.facebook.com/Beonnail/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        facebook_link
                        bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-02.svg')] 
                        hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/facebook.png')] 
                        bg-cover bg-no-repeat p-2 w-10 h-10"
                      ></a>

                      <a
                        title="social-link"
                        href="https://www.instagram.com/beonnails/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        instagram_link
                        bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-03.svg')] 
                        hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/insta.png')] 
                        bg-cover bg-no-repeat p-2 w-10 h-10"
                      ></a>

                      <a
                        title="social-link"
                        href="https://www.yelp.com/biz/beon-nails-wall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        yelp_link
                        bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-06.svg')] 
                        hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/yelp.png')] 
                        bg-cover bg-no-repeat p-2 w-10 h-10"
                      ></a>

                      <a
                        title="social-link"
                        href="tel:(732)-442-4567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        call_link
                        bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-05.svg')] 
                        hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/call.png')] 
                        bg-cover bg-no-repeat p-2 w-10 h-10"
                      ></a>

                      <a
                        title="social-link"
                        href="https://maps.app.goo.gl/1pvrQcD7HsSSic1J9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        google_link
                        bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-04.svg')] 
                        hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/google.png')] 
                        bg-cover bg-no-repeat p-2 w-10 h-10"
                      ></a>
                    </div>

                    <ul className="flex flex-col p-4 md:p-0 rounded-lg bg-transparent font-futura font-normal uppercase text-base md:space-x-6 rtl:space-x-reverse md:flex-row">
                      <li>
                        <a
                          href="/"
                          className="block py-2 px-3 md:hover:text-theme-7 hover:scale-110  md:p-0 "
                          aria-current="page"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          className="block py-2 px-3  md:hover:text-theme-7  hover:scale-110 md:p-0 "
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="/categories/manicure"
                          className="block py-2 px-3   md:hover:text-theme-7  hover:scale-110 md:p-0 "
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="/policy"
                          className="block py-2 px-3   md:hover:text-theme-7  hover:scale-110 md:p-0 "
                        >
                          Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="/gallery"
                          className="block py-2 px-3   md:hover:text-theme-7  hover:scale-110 md:p-0 "
                        >
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a
                          href="/news"
                          className="block py-2 px-3   md:hover:text-theme-7  hover:scale-110 md:p-0 "
                        >
                          News
                        </a>
                      </li>
                      <li>
                        <a
                          href="/hiring"
                          className="block py-2 px-3   md:hover:text-theme-7  hover:scale-110 md:p-0 "
                        >
                          Hiring
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="flex-row inline-flex w-screen md:w-60 md:order-2 order-1 place-items-center justify-around items-end">
                    <button
                      type="button"
                      className="md:hidden text-theme-3 focus:outline-none focus:ring-theme-1 rounded-lg text-sm p-2.5 me-1"
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

                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-theme-3 rounded-lg md:hidden focus:outline-none focus:ring-theme-1"
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

                    <div className="relative hidden md:block w-40 mr-4">
                      <div className="absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-theme-3"
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
                        className="block w-full p-2 ps-2 text-sm bg-transparent text-theme-3 border-0 border-b border-theme-3 placeholder:text-theme-3"
                        placeholder="Search..."
                      />
                    </div>

                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-theme-3 focus:outline-none focus:ring-theme-1"
                      type="button"
                    >
                      <span className="sr-only">Basket</span>
                      <a
                        title="basket-link"
                        href="/cart"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                    basket_link
                    bg-[url('https://webnailsbucket.s3.amazonaws.com/beon/bag+white.svg')] 
                    bg-auto bg-no-repeat w-6 h-6"
                      ></a>
                    </button>

                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-theme-3 rounded-lg focus:outline-none focus:ring-theme-1"
                      type="button"
                    >
                      <span className="sr-only">Profile</span>
                      <a
                        title="profile-link"
                        href="/profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                    profile_link
                    bg-[url('https://webnailsbucket.s3.amazonaws.com/beon/profile+white.svg')] 
                    bg-auto bg-no-repeat w-6 h-6"
                      ></a>
                    </button>
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
          <div className="sticky top-0 w-full h-44 mx-auto bg-theme-3 place-content-start md:place-content-center z-50 group duration-200">
            <header className="w-full relative flex flex-wrap">
              <nav className="w-full mx-auto max-w-6xl grid">
                <div className="Booking hidden  top-[10px] right-[-30px] sm:right-[0px] xl:top-[10px] xl:right-[10%] scale-50 opacity-80 xl:scale-75 w-52 h-52 z-50">
                  <div className="Booking__bg absolute z-0">
                    <Image
                      src="https://247bucket.s3.ap-southeast-1.amazonaws.com/Asset+1.svg"
                      alt="button"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="Booking__letter absolute top-[10px] left-[10px] z-10 animate-spin-slow ">
                    <Image
                      src="https://247bucket.s3.ap-southeast-1.amazonaws.com/Asset+3.svg"
                      alt="button"
                      width={180}
                      height={180}
                    />
                  </div>
                  <a
                    title="booking_link"
                    href="/booking"
                    className="Booking__button absolute top-[40px] left-[40px] scale-75 z-20"
                  >
                    <Image
                      src="https://247bucket.s3.ap-southeast-1.amazonaws.com/Asset+2.svg"
                      alt="button"
                      width={120}
                      height={120}
                    />
                  </a>
                </div>

                <div
                  className="w-full items-center justify-center hidden md:flex sm:bg-transparent bg-theme-14 bg-opacity-75 order-2 mx-auto"
                  id="search-navbar"
                >
                  <div className="relative my-4 md:hidden">
                    <input
                      type="text"
                      id="search-navbar"
                      className="block w-full p-2 ps-2 text-sm text-theme-4 rounded-lg bg-transparent border border-theme-4"
                      placeholder="Search..."
                    />
                  </div>

                  
                  <div className="social_widget w-[80%] pl-6 md:hidden inline-flex items-center xsmall:justify-start space-x-2">
                    <a
                      title="social-link"
                      href="https://www.facebook.com/Beonnail/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      facebook_link
                      bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-02.svg')] 
                      hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/facebook.png')] 
                      bg-cover bg-no-repeat p-2 w-10 h-10"
                    ></a>

                    <a
                      title="social-link"
                      href="https://www.instagram.com/beonnails/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      instagram_link
                      bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-03.svg')] 
                      hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/insta.png')] 
                      bg-cover bg-no-repeat p-2 w-10 h-10"
                    ></a>

                    <a
                      title="social-link"
                      href="https://www.yelp.com/biz/beon-nails-wall"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      yelp_link
                      bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-06.svg')] 
                      hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/yelp.png')] 
                      bg-cover bg-no-repeat p-2 w-10 h-10"
                    ></a>

                    <a
                      title="social-link"
                      href="tel:(732)-442-4567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      call_link
                      bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-05.svg')] 
                      hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/call.png')] 
                      bg-cover bg-no-repeat p-2 w-10 h-10"
                    ></a>

                    <a
                      title="social-link"
                      href="https://maps.app.goo.gl/1pvrQcD7HsSSic1J9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      google_link
                      bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-04.svg')] 
                      hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/google.png')] 
                      bg-cover bg-no-repeat p-2 w-10 h-10"
                    ></a>
                  </div>

                  <ul className="flex flex-col p-4 md:p-0 rounded-lg bg-transparent font-futura font-normal uppercase text-base md:space-x-6 rtl:space-x-reverse md:flex-row">
                    <li>
                      <a
                        href="/"
                        className="block py-2 px-3 text-theme-3 md:text-theme-4 hover:text-theme-7 hover:scale-110 md:p-0 "
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="block py-2 px-3 text-theme-3 md:text-theme-4 hover:text-theme-7 hover:scale-110 md:p-0 "
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/categories/manicure"
                        className="block py-2 px-3 text-theme-3 md:text-theme-4 hover:text-theme-7 hover:scale-110 md:p-0 "
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/policy"
                        className="block py-2 px-3 text-theme-3 md:text-theme-4 hover:text-theme-7 hover:scale-110 md:p-0 "
                      >
                        Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/gallery"
                        className="block py-2 px-3 text-theme-3 md:text-theme-4 hover:text-theme-7 hover:scale-110 md:p-0 "
                      >
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        href="/news"
                        className="block py-2 px-3 text-theme-3 md:text-theme-4 hover:text-theme-7 hover:scale-110 md:p-0 "
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hiring"
                        className="block py-2 px-3 text-theme-3 md:text-theme-4 hover:text-theme-7 hover:scale-110 md:p-0 "
                      >
                        Hiring
                      </a>
                    </li>
                    <li>
                      <a
                        href="/booking"
                        className="block py-2 px-3 text-theme-3 md:text-theme-4 hover:text-theme-7 hover:scale-110 md:p-0 "
                      >
                        BOOK AN APPOINTMENT
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-full grid h-32 sm:inline-flex sm:justify-between items-start place-items-center order-1">
                  <div className="social_widget hidden sm:inline-flex items-center justify-start space-x-2">
                    <a
                      title="social-link"
                      href="https://www.facebook.com/Beonnail/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                    facebook_link
                    bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-02.svg')] 
                    hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/facebook.png')] 
                    bg-cover bg-no-repeat p-2 w-10 h-10"
                    ></a>

                    <a
                      title="social-link"
                      href="https://www.instagram.com/beonnails/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                    instagram_link
                    bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-03.svg')] 
                    hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/insta.png')] 
                    bg-cover bg-no-repeat p-2 w-10 h-10"
                    ></a>

                    <a
                      title="social-link"
                      href="https://www.yelp.com/biz/beon-nails-wall"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                    yelp_link
                    bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-06.svg')] 
                    hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/yelp.png')] 
                    bg-cover bg-no-repeat p-2 w-10 h-10"
                    ></a>

                    <a
                      title="social-link"
                      href="tel:(732)-442-4567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                    call_link
                    bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-05.svg')] 
                    hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/call.png')] 
                    bg-cover bg-no-repeat p-2 w-10 h-10"
                    ></a>

                    <a
                      title="social-link"
                      href="https://maps.app.goo.gl/1pvrQcD7HsSSic1J9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                    google_link
                    bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-04.svg')] 
                    hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/google.png')] 
                    bg-cover bg-no-repeat p-2 w-10 h-10"
                    ></a>
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
                      type="button"
                      className="md:hidden text-theme-4 focus:outline-none focus:ring-theme-1 rounded-lg text-sm p-2.5 me-1"
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

                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-theme-4 rounded-lg md:hidden focus:outline-none focus:ring-theme-1"
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

                    <div className="relative hidden md:block w-40 mr-4">
                      <div className="absolute inset-y-0 end-2 flex items-center ps-3">
                        <svg
                          className="w-4 h-4 text-theme-4"
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
                        className="block w-full p-2 ps-2 text-sm bg-transparent text-theme-4 border-0 border-b border-theme-4"
                        placeholder="Search..."
                      />
                    </div>

                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-theme-4 focus:outline-none focus:ring-theme-1"
                      type="button"
                    >
                      <span className="sr-only">Basket</span>
                      <a
                        title="basket-link"
                        href="/cart"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                      basket_link
                      bg-[url('https://webnailsbucket.s3.amazonaws.com/beon/bag.svg')] 
                      bg-auto bg-no-repeat w-6 h-6"
                      ></a>
                    </button>

                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-theme-4 rounded-lg focus:outline-none focus:ring-theme-1"
                      type="button"
                    >
                      <span className="sr-only">Profile</span>
                      <a
                        title="profile-link"
                        href="/profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                      profile_link
                      bg-[url('https://webnailsbucket.s3.amazonaws.com/beon/profile.svg')] 
                      bg-auto bg-no-repeat w-6 h-6"
                      ></a>
                    </button>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        </>
      )
  }
}
