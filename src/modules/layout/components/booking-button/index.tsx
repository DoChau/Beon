import Image from 'next/image'
import LocalizedClientLink
 from '@modules/common/components/localized-client-link'
export default function Booking_button() {
 
  return (
    <> 
      <div className="Booking__bg absolute animate-spin-slow z-0">
        <Image
          src="https://webnailsbucket.s3.amazonaws.com/beon/bookbeon.png"
          alt="button"
          width={200}
          height={200}
        />
      </div>
    
      <LocalizedClientLink
        title="booking_link"
        href="/booking"
        className="Booking__button absolute top-[60px] left-[60px] scale-75 z-20"
        target="_blank"
      >
        <Image
          src="https://webnailsbucket.s3.amazonaws.com/common/playbutt.svg"
          alt="button"
          width={80}
          height={80}
        />
      </LocalizedClientLink>
    </>
  )
}
