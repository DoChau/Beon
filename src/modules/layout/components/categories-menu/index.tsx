'use client';
import { usePathname } from "next/navigation"
import React from "react"
import Image from "next/image"

const categories = [
  { name: "Manicure", href: "/categories/manicure" },
  { name: "Pedicure", href: "/categories/pedicure" },
  { name: "Nail Enhancement", href: "/categories/nail-enhancement" },
  { name: "Chair Massage", href: "/categories/chair-massage" },
  { name: "Waxing", href: "/categories/waxing" },
  { name: "Prince/ Princess", href: "/categories/prince-princess" },
  { name: "Add-ons", href: "/categories/add-ons" },
]

const CatMenu = () => {
  const pathname = usePathname()
  return (
    <>
      <a href="/categories/manicure"
        title="service-link"
        rel="noopener noreferrer"
        className="CatItem flex flex-col items-center justify-start space-y-4"
        >
        <button 
          title="service-button"
          className={`hover:animate-scale-up p-2 w-12 h-12 bg-cover bg-no-repeat hover:grayscale
          bg-[url('https://webnailsbucket.s3.amazonaws.com/common/icon-Manicure.svg')]
          ${pathname === "/us/categories/manicure" 
            ? "grayscale-0" 
            : "grayscale"
          }`}>
        </button>
        <span 
          className={`hover:bg-accent hover:text-accent-content rounded-full py-2 px-4 text-center
          ${pathname === "/us/categories/manicure" 
            ? "bg-primary text-primary-content" 
            : "text-secondary-content "
          }`}>
          Manicure
        </span>
      </a>

      <a href="/categories/pedicure"
        title="service-link"
        rel="noopener noreferrer"
        className="CatItem flex flex-col items-center justify-start space-y-4"
        >
        <button 
          title="service-button"
          className={`hover:animate-scale-up p-2 w-12 h-12 bg-cover bg-no-repeat hover:grayscale
          bg-[url('https://webnailsbucket.s3.amazonaws.com/common/icon-Pedicure.svg')]
          ${pathname === "/us/categories/pedicure" 
            ? "grayscale-0" 
            : "grayscale"
          }`}>
          
        </button>
        <span 
          className={`hover:bg-accent hover:text-accent-content rounded-full py-2 px-4 text-center
          ${pathname === "/us/categories/pedicure" 
            ? "bg-primary text-primary-content" 
            : "text-secondary-content "
          }`}>
          Pedicure
        </span>
      </a>
      
      <a href="/categories/nail-enhancement"
        title="service-link"
        rel="noopener noreferrer"
        className="CatItem flex flex-col items-center justify-start space-y-4"
        >
        <button 
          title="service-button"
          className={`hover:animate-scale-up p-2 w-12 h-12 bg-cover bg-no-repeat hover:grayscale
          bg-[url('https://webnailsbucket.s3.amazonaws.com/common/icon-nail-Enhancement.svg')]
          ${pathname === "/us/categories/nail-enhancement" 
            ? "grayscale-0" 
            : "grayscale"
          }`}>
        </button>
        <span 
          className={`hover:bg-accent hover:text-accent-content rounded-full py-2 px-4 text-center
          ${pathname === "/us/categories/nail-enhancement" 
            ? "bg-primary text-primary-content" 
            : "text-secondary-content "
          }`}>
          Nail Enhancement
        </span>
      </a>
      
      <a href="/categories/waxing"
        title="service-link"
        rel="noopener noreferrer"
        className="CatItem flex flex-col items-center justify-start space-y-4"
        >
        <button 
          title="service-button"
          className={`hover:animate-scale-up p-2 w-12 h-12 bg-cover bg-no-repeat hover:grayscale
          bg-[url('https://webnailsbucket.s3.amazonaws.com/common/icon-Waxing.svg')]
          ${pathname === "/us/categories/waxing" 
            ? "grayscale-0" 
            : "grayscale"
          }`}>
        </button>
        <span 
          className={`hover:bg-accent hover:text-accent-content rounded-full py-2 px-4 text-center
          ${pathname === "/us/categories/waxing" 
            ? "bg-primary text-primary-content" 
            : "text-secondary-content "
          }`}>
          Waxing
        </span>
      </a>

      <a href="/categories/prince-princess"
        title="service-link"
        rel="noopener noreferrer"
        className="CatItem flex flex-col items-center justify-start space-y-4"
        >
        <button 
          title="service-button"
          className={`hover:animate-scale-up p-2 w-12 h-12 bg-cover bg-no-repeat hover:grayscale
          bg-[url('https://webnailsbucket.s3.amazonaws.com/common/icon-Kids-Services.svg')]
          ${pathname === "/us/categories/prince-princess" 
            ? "grayscale-0" 
            : "grayscale"
          }`}>
          
        </button>
        <span 
          className={`hover:bg-accent hover:text-accent-content rounded-full py-2 px-4 text-center
          ${pathname === "/us/categories/prince-princess" 
            ? "bg-primary text-primary-content" 
            : "text-secondary-content "
          }`}>
          Prince/ Princess
        </span>
      </a>

      <a href="/categories/add-ons"
        title="service-link"
        rel="noopener noreferrer"
        className="CatItem flex flex-col items-center justify-start space-y-4"
        >
        <button 
          title="service-button"
          className={`hover:animate-scale-up p-2 w-12 h-12 bg-cover bg-no-repeat hover:grayscale
          bg-[url('https://webnailsbucket.s3.amazonaws.com/common/icon-add-ons.svg')]
          ${pathname === "/us/categories/add-ons" 
            ? "grayscale-0" 
            : "grayscale"
          }`}>
        </button>
        <span 
          className={`hover:bg-accent hover:text-accent-content rounded-full py-2 px-4 text-center
          ${pathname === "/us/categories/add-ons" 
            ? "bg-primary text-primary-content" 
            : "text-secondary-content "
          }`}>
          Add-ons
        </span>
      </a>

    </>
  )
};

export default CatMenu