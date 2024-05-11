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
          <div className="sticky top-0 mx-auto w-full bg-primary bg-opacity-75 h-12 sm:h-16 place-content-start sm:place-content-center z-50 group duration-200 text-primary-content border-primary-content">
            <header className="relative w-full flex flex-wrap">
              <nav className="m-auto max-w-6xl w-full sm:px-5 justify-self-center">
                <div className="mx-auto flex flex-wrap items-center justify-between">
                  <div
                    className="items-center justify-between hidden px-2 w-full h-screen sm:h-fit bg-primary sm:bg-transparent sm:flex sm:w-auto order-2 sm:order-1"
                    id="search-navbar"
                  >
                    <div className="relative my-4 sm:hidden">
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-2 text-sm rounded-lg bg-transparent border"
                        placeholder="Search..."
                      />
                    </div>
                    <div className="social_widget w-[80%] pl-6 sm:hidden inline-flex items-center sm:justify-start space-x-2">
                      <a
                        title="social-link"
                        href="https://www.facebook.com/Beonnail/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        facebook_link
                        bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-02.svg')] 
                        hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/facebook.png')] 
                        hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                        hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                        hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                        hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                        hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
                      ></a>
                    </div>

                    <ul className="flex flex-col p-4 sm:p-0 rounded-lg bg-transparent font-futura font-normal uppercase text-base sm:space-x-6 rtl:space-x-reverse sm:flex-row">
                      <li>
                        <a
                          href="/"
                          className="block py-2 px-3 sm:hover:text-primary-content hover:animate-scale-up  sm:p-0 "
                          aria-current="page"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          className="block py-2 px-3  sm:hover:text-primary-content  hover:animate-scale-up sm:p-0 "
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="/categories/manicure"
                          className="block py-2 px-3   sm:hover:text-primary-content  hover:animate-scale-up sm:p-0 "
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="/policy"
                          className="block py-2 px-3   sm:hover:text-primary-content  hover:animate-scale-up sm:p-0 "
                        >
                          Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="/gallery"
                          className="block py-2 px-3   sm:hover:text-primary-content  hover:animate-scale-up sm:p-0 "
                        >
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a
                          href="/news"
                          className="block py-2 px-3   sm:hover:text-primary-content  hover:animate-scale-up sm:p-0 "
                        >
                          News
                        </a>
                      </li>
                      <li>
                        <a
                          href="/hiring"
                          className="block py-2 px-3   sm:hover:text-primary-content  hover:animate-scale-up sm:p-0 "
                        >
                          Hiring
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="flex-row inline-flex w-screen sm:w-60 sm:order-2 order-1 place-items-center justify-around items-end">
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
                        className="block w-full p-2 ps-2 text-sm bg-transparent border-0 border-b"
                        placeholder="Search..."
                      />
                    </div>
                    
                    <div 
                      className="bunny-ear-spacer w-20 sm:hidden">
                    </div>

                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm"
                      type="button"
                    >
                      <span className="sr-only">Basket</span>
                      <a
                        title="basket-link"
                        href="/cart"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="basket_link hover:animate-scale-up"
                      >
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z"                        
                            />
                          </svg>
                      </a>
                    </button>

                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg"
                      type="button"
                    >
                      <span className="sr-only">Profile</span>
                      <a
                        title="profile-link"
                        href="/profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="basket_link hover:animate-scale-up"
                      >
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                            />
                         
                        </svg>
                      </a>
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
          <div className="sticky top-0 w-full h-44 mx-auto bg-secondary text-base-content place-content-start sm:place-content-center z-50 group duration-200">
            <header className="w-full relative flex flex-wrap">
              <nav className="w-full mx-auto max-w-6xl grid">
                <div className="Booking hidden top-[10px] right-[-30px] sm:right-[0px] xl:top-[10px] xl:right-[10%] scale-50 opacity-80 xl:scale-75 w-52 h-52 z-50">
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
                  className="w-full h-screen hidden absolute top-10 items-center justify-center bg-secondary sm:flex sm:static sm:h-6 sm:bg-transparent order-2 mx-auto"
                  id="search-navbar"
                >
                  <div className="relative my-4 sm:hidden">
                    <input
                      type="text"
                      id="search-navbar"
                      className="block w-full p-2 ps-2 text-sm rounded-lg bg-transparent border"
                      placeholder="Search..."
                    />
                  </div>

                  
                  <div className="social_widget w-[80%] pl-6 sm:hidden inline-flex items-center xsmall:justify-start space-x-2">
                    <a
                      title="social-link"
                      href="https://www.facebook.com/Beonnail/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      facebook_link
                      bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/Icon+Logo-02.svg')] 
                      hover:bg-[url('https://webnailsbucket.s3.amazonaws.com/pasch/facebook.png')] 
                      hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                      hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                      hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                      hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                      hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
                    ></a>
                  </div>

                  <ul className="flex flex-col p-4 sm:p-0 rounded-lg bg-transparent font-futura font-normal uppercase text-base sm:space-x-6 rtl:space-x-reverse sm:flex-row">
                    <li>
                      <a
                        href="/"
                        className="block py-2 px-3 text-base-content sm:text-base-content hover:text-theme-7 hover:animate-scale-up sm:p-0 "
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="block py-2 px-3 text-base-content sm:text-base-content hover:text-theme-7 hover:animate-scale-up sm:p-0 "
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/categories/manicure"
                        className="block py-2 px-3 text-base-content sm:text-base-content hover:text-theme-7 hover:animate-scale-up sm:p-0 "
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/policy"
                        className="block py-2 px-3 text-base-content sm:text-base-content hover:text-theme-7 hover:animate-scale-up sm:p-0 "
                      >
                        Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/gallery"
                        className="block py-2 px-3 text-base-content sm:text-base-content hover:text-theme-7 hover:animate-scale-up sm:p-0 "
                      >
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        href="/news"
                        className="block py-2 px-3 text-base-content sm:text-base-content hover:text-theme-7 hover:animate-scale-up sm:p-0 "
                      >
                        News
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hiring"
                        className="block py-2 px-3 text-base-content sm:text-base-content hover:text-theme-7 hover:animate-scale-up sm:p-0 "
                      >
                        Hiring
                      </a>
                    </li>
                    <li>
                      <a
                        href="/booking"
                        className="block py-2 px-3 text-base-content sm:text-base-content hover:text-theme-7 hover:animate-scale-up sm:p-0 "
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
                    hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                    hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                    hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                    hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                    hover:animate-scale-up-loop bg-cover bg-no-repeat p-2 w-10 h-10"
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
                        className="block w-full p-2 ps-2 text-sm bg-transparent text-base-content border-0 border-b border-base-content"
                        placeholder="Search..."
                      />
                    </div>

                    <div 
                      className="bunny-ear-spacer w-20 sm:hidden">
                    </div>

                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-base-content"
                      type="button"
                    >
                      <span className="sr-only">Basket</span>
                      <a
                        title="basket-link"
                        href="/cart"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="basket_link hover:animate-scale-up"
                      >
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z"                        
                            />
                          </svg>
                      </a>
                    </button>

                    <button
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-base-content rounded-lg"
                      type="button"
                    >
                      <span className="sr-only">Profile</span>
                      <a
                        title="profile-link"
                        href="/profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="basket_link hover:animate-scale-up"
                      >
                        <svg
                          className="w-7 h-7"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M14.3365 12.3466L14.0765 11.9195C13.9082 12.022 13.8158 12.2137 13.8405 12.4092C13.8651 12.6046 14.0022 12.7674 14.1907 12.8249L14.3365 12.3466ZM9.6634 12.3466L9.80923 12.8249C9.99769 12.7674 10.1348 12.6046 10.1595 12.4092C10.1841 12.2137 10.0917 12.022 9.92339 11.9195L9.6634 12.3466ZM4.06161 19.002L3.56544 18.9402L4.06161 19.002ZM19.9383 19.002L20.4345 18.9402L19.9383 19.002ZM16 8.5C16 9.94799 15.2309 11.2168 14.0765 11.9195L14.5965 12.7737C16.0365 11.8971 17 10.3113 17 8.5H16ZM12 4.5C14.2091 4.5 16 6.29086 16 8.5H17C17 5.73858 14.7614 3.5 12 3.5V4.5ZM7.99996 8.5C7.99996 6.29086 9.79082 4.5 12 4.5V3.5C9.23854 3.5 6.99996 5.73858 6.99996 8.5H7.99996ZM9.92339 11.9195C8.76904 11.2168 7.99996 9.948 7.99996 8.5H6.99996C6.99996 10.3113 7.96342 11.8971 9.40342 12.7737L9.92339 11.9195ZM9.51758 11.8683C6.36083 12.8309 3.98356 15.5804 3.56544 18.9402L4.55778 19.0637C4.92638 16.1018 7.02381 13.6742 9.80923 12.8249L9.51758 11.8683ZM3.56544 18.9402C3.45493 19.8282 4.19055 20.5 4.99996 20.5V19.5C4.70481 19.5 4.53188 19.2719 4.55778 19.0637L3.56544 18.9402ZM4.99996 20.5H19V19.5H4.99996V20.5ZM19 20.5C19.8094 20.5 20.545 19.8282 20.4345 18.9402L19.4421 19.0637C19.468 19.2719 19.2951 19.5 19 19.5V20.5ZM20.4345 18.9402C20.0164 15.5804 17.6391 12.8309 14.4823 11.8683L14.1907 12.8249C16.9761 13.6742 19.0735 16.1018 19.4421 19.0637L20.4345 18.9402Z"
                            />
                         
                        </svg>
                      </a>
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
