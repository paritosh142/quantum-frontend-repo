import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E8F9FF] pt-12 pb-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 px-6 md:px-16">
        {/* Address Section */}
        <div className="md:w-1/2">
          <Image
            src="/logo.svg" // Replace with your logo path
            alt="Quantum School Logo"
            width={97} height={76}
            className="mb-6"
          />
          <p className="text-sm text-gray-700 leading-7">
            Quantum Kids preschool and daycare
            <br />
            56, Sy no. 25, Sompura Village, Sarjapura hobli, Anekal Taluk,
            <br />
            Bangalore, Karnataka - 562125.
            <br />
            Landmark: Next to ARS SIGNATURE Phase 2
            <br />
            +91 8971133673
          </p>
          <p className="mt-4 text-sm text-gray-700">
            <a
              href="mailto:contact@quantumkids.in"
              className="block hover:underline"
            >
              contact@quantumkids.in
            </a>
            <a
              href="mailto:admissions@quantumschool.in"
              className="block hover:underline"
            >
              admissions@quantumschool.in
            </a>
          </p>
        </div>

        {/* Right Sections */}
        <div className="md:w-1/2 flex flex-col md:flex-row gap-12">
          {/* Explore Section */}
          <div className="md:w-1/3">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm text-gray-700 hover:underline">
                  Welcome
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-sm text-gray-700 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-sm text-gray-700 hover:underline">
                  Gallery & News
                </a>
              </li>
              <li>
                <a href="/our-programs" className="text-sm text-gray-700 hover:underline">
                  Our Programs
                </a>
              </li>
            </ul>
          </div>

          {/* General Pages Section */}
          <div className="md:w-1/3">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">
              General Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/faculty" className="text-sm text-gray-700 hover:underline">
                  Faculty
                </a>
              </li>
              <li>
                <a href="/admission-guide" className="text-sm text-gray-700 hover:underline">
                  Admission Guide
                </a>
              </li>
              <li>
                <a href="/location" className="text-sm text-gray-700 hover:underline">
                  Location
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-700 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="md:w-1/3">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">
              Social Media
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/quantum-kids-preschool-and-daycare"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-200 transition"
                aria-label="LinkedIn"
              >
                <Image
                  src="/icons/Linkedin.png" 
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61571464794833&mibextid=ZbWKwL"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-200 transition"
                aria-label="Facebook"
              >
                <Image
                  src="/icons/facebook.png" 
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.instagram.com/quantumkidspreschoolanddaycare/"
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-200 transition"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/instagram.jpeg" 
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-600">
        Copyright © Quantum School. All rights reserved.
        <br />
        <a href="https://www.google.com/maps/place/12.864800,77.773698/data=!4m6!3m5!1s0!7e2!8m2!3d12.864799999999999!4d77.773698?entry=gps&coh=192189&g_ep=CAESBzI0LjQ5LjYYACCenQoqkAEsOTQyMjYwNDYsOTQyNDI1ODksOTQyMjMyOTksOTQyMTY0MTMsOTQyMTI0OTYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjgyMDQsOTQyMjk4MzksOTQyMzkxMjcsNDcwODcxMTgsNDcwODQzOTMsOTQyMTMyMDBCAklO" className="hover:underline">
          Find us on maps
        </a>
      </div>
    </footer>
  );
};

export default Footer;
