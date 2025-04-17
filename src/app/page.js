import Image from "next/image";
import Header from "@/components/home/Header";
import img1 from '@/images/img1.png'
import Button from "@/components/Button";
import SliderSec from "@/components/home/SliderSec";
import ContactSec from "@/components/home/ContactSec";
import BottomSec from "@/components/BottomSec";
export default function Home() {
  return (
    <>
        <Header />
        <section className="norm-sec sec2 sec" id="about">
          <div className="container">
            <div className="row align-items-center row-gap-25">
              <div className="col-lg-5 col-12">
                <Image src={img1} className="w-100 h-auto" alt="img1" />
              </div>
              <div className="col-lg-6 offset-lg-1 col-12">
                <div className="con">
                  <h2 className="sub-head">About Banh Mi & More LLC</h2>
                  <h3 className="sec-head">
                    Where Every Bite Tells a Vietnamese Story
                  </h3>
                  <p className="para">
                    At Banh Mi & More, we’re on a mission to bring the heart of Vietnam to your plate — one flavorful bite at a time. Our journey started with a simple idea: share the iconic taste of banh mi and beloved Vietnamese street food with everyone, whether you're craving a nostalgic classic or discovering these bold flavors for the first time.
                    <br /><br />
                    We use fresh, high-quality ingredients and time-honored recipes, crafting each dish with care and authenticity. From our crispy baguettes and savory fillings to refreshing drinks and comforting noodle bowls, every item on our menu tells a story of culture, comfort, and community.
                    Whether you’re dining in, grabbing a quick lunch, or ordering online, we welcome you to experience real Vietnamese flavor—served fast, fresh, and full of heart.
                  </p>
                  {/* <Button type="link" text="Know More" link="/" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <SliderSec  />
        <ContactSec />
        <BottomSec />
      </>
  );
}
