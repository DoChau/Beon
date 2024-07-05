import { Metadata } from "next"
import Image from "next/image"


export const metadata: Metadata = {
  title: "Beon Nail - 2007 Highway 35 Wall Township, NJ 07719",
  description:
    "Happy Hour and more...",
}
export default async function Policy() {
    return (
    <>
    <div className="w-full bg-gray-300 text-black grid gap-4 pb-6 xsmall:gap-6 font-futuraext-xs">
      <div className="Banner w-full h-fit xl:h-[300px] object-bottom overflow-hidden mx-auto">
          <Image src="https://webnailsbucket.s3.amazonaws.com/beon/news-banner2.png" 
          alt="banner" 
          width={1440} 
          height={300} 
          style={{
            width: '100%',
            height: 'auto',
          }}/>
      </div>
      <div className="w-full max-w-6xl min-h-screen mx-auto grid place-content-start gap-4 md:gap-6">

        <h1 className="Services-title font-normal text-xl text-black md:text-2xl uppercase mx-auto drop-shadow-xl">Policy</h1>

        <div className="w-full grid gap-6 xsmall:grid-cols-3 xsmall:gap-8 text-base px-6">
          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Credit card policy</h2>
            <h3 className="font-thin text-xs text-justify">
              We accept Visa, Master Card, Discover & Beon Gift Card Minimum credit card charge is $15 Sorry! We do not accept gratuities on credit/debit card ATM available
            </h3>
          </div>

          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Jewelry, Phone & personal belongings</h2>
            <h3 className="font-thin text-xs text-justify">
              Please have all your jewelry and personal belongings in your possession and protection at all times. Beon Nails is not responsible for any losses or damages to any personal items.
            </h3>
          </div>

          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Pricing</h2>
            <h3 className="font-thin text-xs text-justify">
              Prices may vary based on length, size, special colors, and service request(s).
            </h3>
          </div>

          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Sanitation</h2>
            <h3 className="font-thin text-xs text-justify">
              Your safety and your satisfaction is our top priority. We use hospital grade autoclave machine, which is used to sterilize all of our tools along with storing our tools in sanitary pouches to avoid contamination of any kind. Our spas are equipped with innovative removable jets which are always soaked in Barbicide to make sure it’s bacteria free. We use disposable file, buffer, and pumice sponges for each client. We also use a disposable tub liner for better sanitation.
            </h3>
          </div>

          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Appoinments</h2>
            <h3 className="font-thin text-xs text-justify">
              Your safety and your satisfaction is our top priority. We use hospital grade autoclave machine, which is used to sterilize all of our tools along with storing our tools in sanitary pouches to avoid contamination of any kind. Our spas are equipped with innovative removable jets which are always soaked in Barbicide to make sure it’s bacteria free. We use disposable file, buffer, and pumice sponges for each client. We also use a disposable tub liner for better sanitation.
            </h3>
          </div>

          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Cancelation</h2>
            <h3 className="font-thin text-xs text-justify">
              We require a 24-hour notice for cancellations. Anything less than 24 hours, and the appointments that require a deposit will be charged 20% of your reserved service charge. If you do not show up for your appointment, you will be charged full for the service. If in the past, you have not complied with this policy, we will require that you provide a deposit to hold any futu re appointments.
            </h3>
          </div>

          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Refund</h2>
            <h3 className="font-thin text-xs text-justify">
              All services previously rendered are non-refundable. Once you finished paid and leave our salon door which mean you are completely happy and satisfied with our service, We will try our best to accommodate your service requests and expectations with our best efforts, skills, and technicians.We offer complimentay minor fixes within 7 days of yor services completion, pending manager approval.
            </h3>
          </div>

          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Complimentary services</h2>
            <h3 className="font-thin text-xs text-justify">
              Laquer polish services are not guaranteed. Only nail enhancement (acrylic, UV Gel, LCN, SNS & gel polish are guarateed up to 7 days from your original visit. Example (1/1/2020 – 1/7/2020). Exclduing breakages. If you notice light or lifting in the fir st 5 days, please call to schedule a free complimentary repair. Please bring your recent show proof of services.
            </h3>
          </div>

          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Medical conditions</h2>
            <h3 className="font-thin text-xs text-justify">
              Please inform your nail technician of any medical conditions that may impact your visit. It is also imperative that we are aware of potential contagious conditions on your hands and feet. If such a condition exists, we cannot provide service to you without wrtten consent from your physician. We cannot provice services if open or infected wounds are present. If you have such a condition or think one may exist, please notify of us promptly before the service.
            </h3>
          </div>

          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Tardiness</h2>
            <h3 className="font-thin text-xs text-justify">
              To remain courtenous of others, please arrive on time for schedule appointments. We reserve the right to take the next customer if you are 10 minutes late for your appointment, from there the next availiable tech will help your with your services.
            </h3>
          </div>

          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Gift certificates</h2>
            <h3 className="font-thin text-xs text-justify">
              All gift certificate sale are final. Gift certificates are not refundable or exchangeable. Gift Certificates should be treated as cash, and are not redeemable if lost or stolen. All Gift Certificates expire 1 year from the date of purchase. We are not responsible for unathorized use, lost, stolen or damaged gift certificates. Gift certificates may only be redeemed at original location from whiere was purchased.
            </h3>
          </div>

          <div className="w-full items-start justify-center space-y-4">
            <h2 className="font-bold text-center text-accent">Spa party</h2>
            <h3 className="font-thin text-xs text-justify">
              Our Salon is the perfect place to host a bridal shower, birthday celebration, bachelorette/bachelor party, corporate event or a just a get-together for friends, family, and co-workers. We have a beautiful and accommodating space, affordable prices to fit everyone’s budget, and a large team of technicians to serve your needs so you and your guests can relax and enjoy the party. To enquire about accommodations and availability for your party, please contact us and our event planner will be happy to assist you.
            </h3>
          </div>
        </div>

        <h1 className="Services-title font-futura font-normal text-accent underline mx-auto">
          Beon Nails staff
        </h1>

        <h2 className="Services-title font-futura font-normal text-center mx-6">
          Let us work with you to create your unique style.
        </h2>

        <h2 className="text-center italic mx-6">
          We sincerely appreciate your business and will try our best to give you the best experience at rocknails. for any comments & requests to make your visit a wonderful experience please contact our upper management.
        </h2>
      </div>
    </div>
    </>
)}
