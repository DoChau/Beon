import './style.css'
import Image from 'next/image'

export default function Booking_button() {
 
  return (
    <> 
      <div className="Booking__bg absolute">
        <Image src="https://247bucket.s3.ap-southeast-1.amazonaws.com/Asset+1.svg" alt="button" width={200} height={200}/>
      </div>
      <div className="Booking__letter absolute"> 
        <Image src="https://247bucket.s3.ap-southeast-1.amazonaws.com/Asset+3.svg" alt="button" width={180} height={180}/>
      </div>
      <a title='booking_link' href="./booking" className="Booking__button absolute">
        <Image src="https://247bucket.s3.ap-southeast-1.amazonaws.com/Asset+2.svg" alt="button" width={120} height={120}/>
      </a>
    </>
  )
}
