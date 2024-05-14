import Image from 'next/image'

export default function Booking_button() {
 
  return (
    <> 
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
    </>
  )
}
