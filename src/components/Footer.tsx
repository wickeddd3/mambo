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
    <footer className="h-full w-full bg-[#000000] py-24">
      <div className="mx-auto h-full max-w-7xl">
        <div className="flex h-full w-full flex-col gap-20">
          <div className="flex h-full w-full justify-between gap-12">
            <div className="flex flex-col gap-8">
              <h6 className="text-sm font-semibold">Product</h6>
              <h6 className="text-sm font-light">Dashboard</h6>
              <h6 className="text-sm font-light">Apps & Integrations</h6>
              <h6 className="text-sm font-light">Developer Platform</h6>
              <h6 className="text-sm font-light">Mambo for IOS</h6>
              <h6 className="text-sm font-light">Enterprise</h6>
              <h6 className="text-sm font-light">Accessibility</h6>
              <h6 className="text-sm font-light">Changelog</h6>
            </div>
            <div className="flex flex-col gap-8">
              <h6 className="text-sm font-semibold">Customer Support</h6>
              <h6 className="text-sm font-light">Contact</h6>
              <h6 className="text-sm font-light">Payments</h6>
              <h6 className="text-sm font-light">Redeem Code</h6>
              <h6 className="text-sm font-light">Educational & NPOs</h6>
            </div>
            <div className="flex flex-col gap-8">
              <h6 className="text-sm font-semibold">Corporate</h6>
              <h6 className="text-sm font-light">About Us</h6>
              <h6 className="text-sm font-light">Business</h6>
              <h6 className="text-sm font-light">Pricing</h6>
              <h6 className="text-sm font-light">Publications</h6>
              <h6 className="text-sm font-light">Investors</h6>
            </div>
            <div className="flex flex-col gap-8">
              <h6 className="text-sm font-semibold">Resources</h6>
              <h6 className="text-sm font-light">{`What's new`}</h6>
              <h6 className="text-sm font-light">Blog</h6>
              <h6 className="text-sm font-light">Help Center</h6>
              <h6 className="text-sm font-light">Press</h6>
            </div>
            <div className="flex flex-col gap-24">
              <div className="flex flex-col gap-8">
                <h6 className="text-sm font-semibold">Location</h6>
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
          <div className="flex items-center gap-6">
            <h6 className="text-sm font-semibold text-[#3b3b3b]">
              &copy; {currentYear} Mambo
            </h6>
            <h6 className="text-sm font-semibold text-[#3b3b3b]">
              Terms of Service
            </h6>
            <h6 className="text-sm font-semibold text-[#3b3b3b]">
              Cookie Policy
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
