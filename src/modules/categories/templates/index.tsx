import { notFound } from "next/navigation"
import { Suspense } from "react"

import { ProductCategoryWithChildren } from "types/global"
import InteractiveLink from "@modules/common/components/interactive-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

import Image from "next/image"

export default function CategoryTemplate({
  categories,
  sortBy,
  page,
  countryCode,
}: {
  categories: ProductCategoryWithChildren[]
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1

  const category = categories[categories.length - 1]
  const parents = categories.slice(0, categories.length - 1)

  if (!category || !countryCode) notFound()

  return (
    <>
    <div className="w-full bg-theme-10 grid gap-4 xsmall:gap-6 font-futura text-theme-4 font-thin text-sm">
      <div className="Banner w-full h-fit xl:h-[300px] object-bottom overflow-hidden mx-auto">
            <Image src="https://webnailsbucket.s3.amazonaws.com/beon/services-banner2.png" 
            alt="banner" 
            width={1440} 
            height={300} 
            sizes="100%"
            style={{
              width: '100%',
              height: 'auto',
            }}/>
      </div>

      <div className="w-full max-w-6xl min-h-screen mx-auto grid place-content-start gap-4 md:gap-6">
        <h1 className="Services-title font-normal text-xl md:text-3xl uppercase mx-auto drop-shadow-xl">Our services</h1>

        <div className="CatList w-full grid grid-cols-4 gap-4 md:row-span-7 md:inline-flex px-4 md:space-x-4 md:mx-auto font-normal md:text-base md:justify-around">
          <a href="/categories/manicure">
            <button className="CatItem bg-transparent hover:underline hover:underline-offset-8 text-theme-4 flex flex-col items-center justify-center space-y-4">
              <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/icon-Manicure.svg" 
                alt="item" 
                className="ring ring-gray-300 hover:ring-theme-6 hover:animate-bounce focus:ring-theme-6 rounded-full"
                width={50} 
                height={50} 
                sizes="100%"
                />          
              <span>Manicure</span>
            </button>
          </a>

          <a href="/categories/pedicure">
            <button className="CatItem bg-transparent hover:underline hover:underline-offset-8 text-theme-4 flex flex-col items-center justify-center space-y-4">
              <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/icon-Pedicure.svg" 
                alt="item" 
                className="ring ring-gray-300 hover:ring-theme-6 hover:animate-bounce focus:ring-theme-6 rounded-full"
                width={50} 
                height={50} 
                sizes="100%"
                />          
              <span>Pedicure</span>
            </button>
          </a>
          <a href="/categories/nail-enhancement">
            <button className="CatItem bg-transparent hover:underline hover:underline-offset-8 text-theme-4 flex flex-col items-center justify-center space-y-4">
              <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/icon-nail-Enhancement.svg" 
                alt="item" 
                className="ring ring-gray-300 hover:ring-theme-6 hover:animate-bounce focus:ring-theme-6 rounded-full"
                width={50} 
                height={50} 
                sizes="100%"
                />          
              <span>Nail Enhancement</span>
            </button>
          </a>
          <a href="/categories/chair-massage">
            <button className="CatItem bg-transparent hover:underline hover:underline-offset-8 text-theme-4 flex flex-col items-center justify-center space-y-4">
              <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/icon-chair.svg" 
                alt="item" 
                className="ring ring-gray-300 hover:ring-theme-6 hover:animate-bounce focus:ring-theme-6 rounded-full"
                width={50} 
                height={50} 
                sizes="100%"
                />          
              <span>Chair Massage</span>
            </button>
          </a>
          <a href="/categories/waxing">
            <button className="CatItem bg-transparent hover:underline hover:underline-offset-8 text-theme-4 flex flex-col items-center justify-center space-y-4">
              <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/icon-Waxing.svg" 
                alt="item" 
                className="ring ring-gray-300 hover:ring-theme-6 hover:animate-bounce focus:ring-theme-6 rounded-full"
                width={50} 
                height={50} 
                sizes="100%"
                />          
              <span>Waxing</span>
            </button>
          </a>
          <a className="col-span-2" href="/categories/prince-princess">
            <button className="CatItem bg-transparent hover:underline hover:underline-offset-8 text-theme-4 flex flex-col items-center justify-center space-y-4 mx-auto">
              <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/icon-Kids-Services.svg" 
                alt="item" 
                className="ring ring-gray-300 hover:ring-theme-6 hover:animate-bounce focus:ring-theme-6 rounded-full"
                width={50} 
                height={50} 
                sizes="100%"
                />          
              <span>Prince/ Princess</span>
            </button>
          </a>
          <a href="/categories/add-ons">
            <button className="CatItem bg-transparent hover:underline hover:underline-offset-8 text-theme-4 flex flex-col items-center justify-center space-y-4">
              <Image src="https://webnailsbucket.s3.amazonaws.com/pasch/icon-add-ons.svg" 
                alt="item" 
                className="ring ring-gray-300 hover:ring-theme-6 hover:animate-bounce focus:ring-theme-6 rounded-full"
                width={50} 
                height={50} 
                sizes="100%"
                />          
              <span>Add-ons</span>
            </button>
          </a>
        </div>


        <div className="w-full flex flex-col md:flex-row md:space-x-4 md:text-base items-start justify-center" data-testid="category-container">
          <div className="sideInfo w-full mx-auto p-4 md:w-[20%] items-start justify-center bg-theme-13 md:rounded-xl order-2 md:order-1">
            <div>
              <h3 className="text-center mb-4"><strong>Price regulation</strong></h3>
              <h4 className="text-justify text-xs">The Price on services are varies, depend on the length, shapes, thickness and the amount of time need to complete the work per your request.  The price here are just basic price.  When you come our Salon, our front desk staff and our technician will explain more detail. We appreciates your understand</h4>
            </div>
          </div>

          <div className="w-full mx-auto md:w-[75%] order-1 md:order-2 mb-4">
            <div className="w-full h-8 bg-theme-4 text-theme-3 font-normal justify-center items-center content-center">
              {parents &&
                parents.map((parent) => (
                  <span key={parent.id}>
                    <LocalizedClientLink
                      href={`/categories/${parent.handle}`}
                      data-testid="sort-by-link"
                    >
                      {parent.name}
                    </LocalizedClientLink>
                    /
                  </span>
                ))}
              <h1 className="text-center" data-testid="category-page-title">{category.name}</h1>
            </div>
            {category.description && (
              <div className="p-2 text-center bg-theme-13 text-xs">
                <p>{category.description}</p>
              </div>
            )}

            <div className="w-full mx-auto">
              <Suspense fallback={<SkeletonProductGrid/>}>
                <PaginatedProducts
                  sortBy={sortBy || "price_asc"}
                  page={pageNumber}
                  categoryId={category.id}
                  countryCode={countryCode}
                />
              </Suspense>
            </div>
            

            {category.category_children && (
              <div className="mt-6 mb-6">
                <ul className="grid grid-cols-1 gap-2">
                  {category.category_children?.map((c) => (
                    <li key={c.id}>
                      <InteractiveLink href={`/categories/${c.handle}`}>
                        {c.name}
                      </InteractiveLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
