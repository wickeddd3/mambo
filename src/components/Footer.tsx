"use client";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [selected, setSelected] = useState("US");

  return (
    <footer className="h-full w-full bg-[#000000] py-12 md:py-24">
      <div className="mx-auto h-full max-w-7xl px-4">
        <div className="flex h-full w-full flex-col gap-20">
          <div className="flex h-full w-full flex-wrap gap-12 md:justify-between">
            <div className="flex flex-col gap-8">
              <h6 className="text-xs font-semibold md:text-sm">Product</h6>
              <h6 className="text-xs font-light md:text-sm">Dashboard</h6>
              <h6 className="text-xs font-light md:text-sm">
                Apps & Integrations
              </h6>
              <h6 className="text-xs font-light md:text-sm">
                Developer Platform
              </h6>
              <h6 className="text-xs font-light md:text-sm">Mambo for IOS</h6>
              <h6 className="text-xs font-light md:text-sm">Enterprise</h6>
              <h6 className="text-xs font-light md:text-sm">Accessibility</h6>
              <h6 className="text-xs font-light md:text-sm">Changelog</h6>
            </div>
            <div className="flex flex-col gap-8">
              <h6 className="text-xs font-semibold md:text-sm">
                Customer Support
              </h6>
              <h6 className="text-xs font-light md:text-sm">Contact</h6>
              <h6 className="text-xs font-light md:text-sm">Payments</h6>
              <h6 className="text-xs font-light md:text-sm">Redeem Code</h6>
              <h6 className="text-xs font-light md:text-sm">
                Educational & NPOs
              </h6>
            </div>
            <div className="flex flex-col gap-8">
              <h6 className="text-xs font-semibold md:text-sm">Corporate</h6>
              <h6 className="text-xs font-light md:text-sm">About Us</h6>
              <h6 className="text-xs font-light md:text-sm">Business</h6>
              <h6 className="text-xs font-light md:text-sm">Pricing</h6>
              <h6 className="text-xs font-light md:text-sm">Publications</h6>
              <h6 className="text-xs font-light md:text-sm">Investors</h6>
            </div>
            <div className="flex flex-col gap-8">
              <h6 className="text-xs font-semibold md:text-sm">Resources</h6>
              <h6 className="text-xs font-light md:text-sm">{`What's new`}</h6>
              <h6 className="text-xs font-light md:text-sm">Blog</h6>
              <h6 className="text-xs font-light md:text-sm">Help Center</h6>
              <h6 className="text-xs font-light md:text-sm">Press</h6>
            </div>
            <div className="flex flex-col gap-24">
              <div className="flex flex-col gap-8">
                <h6 className="text-xs font-semibold md:text-sm">Location</h6>
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  countries={["US", "GB", "FR", "DE", "IT"]}
                  customLabels={{
                    US: "United States",
                    GB: "England",
                    FR: "France",
                    DE: "Germany",
                    IT: "Italy",
                  }}
                  selectedSize={14}
                  optionsSize={14}
                  fullWidth={true}
                  placeholder=""
                  className="text-sm text-white [&>button]:border-none [&>button]:p-0 [&>ul>:hover]:bg-[#18181a] [&>ul]:rounded-lg [&>ul]:border-none [&>ul]:bg-[#09090b]"
                  selectButtonClassName="border-none p-0 [&>span]:text-white"
                />
              </div>
              <div className="flex items-center gap-6">
                <FaInstagram size="1.5em" />
                <FaFacebookSquare size="1.5em" />
                <FaYoutube size="1.5em" />
                <FaXTwitter size="1.5em" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap-reverse items-center justify-center gap-4 md:justify-start md:gap-6">
            <h6 className="text-xs font-semibold text-[#3b3b3b] md:text-sm">
              &copy; {currentYear} Mambo
            </h6>
            <h6 className="text-xs font-semibold text-[#3b3b3b] md:text-sm">
              Terms of Service
            </h6>
            <h6 className="text-xs font-semibold text-[#3b3b3b] md:text-sm">
              Cookie Policy
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
