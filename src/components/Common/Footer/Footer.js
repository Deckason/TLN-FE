import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/images/Footer/footer (1).png";
import img2 from "@/assets/images/Footer/footer (2).png";
import img3 from "@/assets/images/Footer/footer (3).png";
import img4 from "@/assets/images/Footer/fb.png";
import img5 from "@/assets/images/Footer/insta.png";
import img6 from "@/assets/images/Footer/linkedin.png";
import img7 from "@/assets/images/Footer/pint.png";
import img8 from "@/assets/images/Footer/youtube.png";
import img9 from "@/assets/images/Footer/Ellipse 28.png";

const Footer = () => {
  return (
    <section className="container w-full mx-auto py-7 flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="max-w-36 w-full flex flex-col  items-center gap-5 ml-8">
          <figure>
            <Image height={100} width={200} src={img1} />
          </figure>

          <div className="flex gap-3 items-center">
            <figure>
              <Image width={50} height={50} src={img2} />
            </figure>
            <figure>
              <Image width={50} height={50} src={img3} />
            </figure>
          </div>
        </div>
        {/* 1 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold">About Us</h2>
          <Link className="text-xs" href="#">
            Who Are We
          </Link>
          <Link className="text-xs" href="#">
            How It Works
          </Link>
          <Link className="text-xs" href="#">
            Blogs
          </Link>
          <Link className="text-xs" href="#">
            Press
          </Link>
          <Link className="text-xs" href="#">
            FAQ
          </Link>
          <Link className="text-xs" href="#">
            Contact Us
          </Link>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold">Languages We Offer</h2>
          <Link className="text-xs" href="#">
            Online French Classes
          </Link>
          <Link className="text-xs" href="#">
            Online Spanish Classes
          </Link>
          <Link className="text-xs" href="#">
            Online German Classes
          </Link>
          <Link className="text-xs" href="#">
            Online Mandarin Classes
          </Link>
          <Link className="text-xs" href="#">
            Online Japanese Classes
          </Link>
          <Link className="text-xs" href="#">
            Online Korean Classes
          </Link>
          <Link className="text-xs" href="#">
            Online English Classes
          </Link>
        </div>

        {/* 3 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold">Language for Kids</h2>
          <Link className="text-xs" href="#">
            English
          </Link>
          <Link className="text-xs" href="#">
            French
          </Link>
          <Link className="text-xs" href="#">
            Spanish
          </Link>
          <Link className="text-xs" href="#">
            German
          </Link>
          <Link className="text-xs" href="#">
            Mandarin
          </Link>
          <Link className="text-xs" href="#">
            Japanese
          </Link>
          <Link className="text-xs" href="#">
            Korean
          </Link>
        </div>

        {/* 4 */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold">Languages for any Goals</h2>
            <Link className="text-xs" href="#">
              Academics
            </Link>
            <Link className="text-xs" href="#">
              Study Abroad
            </Link>
            <Link className="text-xs" href="#">
              Corporate Training
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold">Work With Us</h2>
            <Link className="text-xs" href="#">
              Career
            </Link>
            <Link className="text-xs" href="#">
              Teach With Us
            </Link>
            <Link className="text-xs" href="#">
              Collaborate With Us
            </Link>
          </div>
        </div>

        {/* 5 */}

        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold">French Classes Near You</h2>

          <div className="grid grid-cols-2 gap-x-5">
            <Link className="text-xs" href="#">
              Tutors in Patna
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Jaipur
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Delhi
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Chandigarh
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Dubai
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Canada
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Kolkata
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Indore
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Hyderabad
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Mangalore
            </Link>

            <Link className="text-xs" href="#">
              Tutors in Mumbai
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Pune
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Goa
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Chennai
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Bengaluru
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Coimbatore
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Ahmedabad
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Surat
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Lucknow
            </Link>
            <Link className="text-xs" href="#">
              Tutors in Bhopal
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Image height={30} width={30} src={img9} />
          <Image height={30} width={30} src={img9} />
          <Image height={30} width={30} src={img9} />
          <Image height={30} width={30} src={img9} />
        </div>
      </div>

      <div className="flex  justify-between">
        <div className="flex flex-col gap-2">
          <button className="bg-primary1 py-1 px-1 w-32 font-bold text-white">
            Contact Us
          </button>
          <p className="text-sm">
            Copyright © 2024 The Language Network - All Right Reserved
          </p>
        </div>

        <div className="flex gap-5 text-base font-bold">
          <Link href={"#"}>Terms & Conditions</Link>
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Sitemap </Link>

          <figure className="flex gap-2">
            <Image height={20} width={20} className="w-7 h-7" src={img4} />
            <Image height={20} width={20} className="w-7 h-7" src={img5} />
            <Image height={20} width={20} src={img6} className="w-7 h-7" />
            <Image height={20} className="w-7 h-7" width={20} src={img7} />
            <Image height={20} width={20} src={img8} className="w-7 h-7" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Footer;
