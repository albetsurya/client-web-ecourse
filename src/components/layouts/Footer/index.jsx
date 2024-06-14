import Image from "next/image";
import React from "react";
import logoEdspert from "@/assets/images/logo-edspert.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-3 text-base gap-8 px-4 py-6 lg:py-8 md:grid-cols-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900">
                Product
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/product/overview" className="hover:underline">
                    Overview
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/product/features" className="hover:underline">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/product/solutions" className="hover:underline">
                    Solutions
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/product/tutorials" className="hover:underline">
                    Tutorials
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/product/pricing" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/product/releases" className="hover:underline">
                    Releases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900">
                Company
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/careers" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/press" className="hover:underline">
                    Press
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/news" className="hover:underline">
                    News
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/media-kit" className="hover:underline">
                    Media kit
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/newsletter" className="hover:underline">
                    Newsletter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/events" className="hover:underline">
                    Events
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/help" className="hover:underline">
                    Help centre
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/tutorials" className="hover:underline">
                    Tutorials
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/support" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900">
                Use cases
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/use-cases/startups" className="hover:underline">
                    Startups
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/use-cases/enterprise" className="hover:underline">
                    Enterprise
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/use-cases/government" className="hover:underline">
                    Government
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/use-cases/saas" className="hover:underline">
                    SaaS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/use-cases/marketplaces" className="hover:underline">
                    Marketplaces
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/use-cases/ecommerce" className="hover:underline">
                    Ecommerce
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900">
                Social
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="https://twitter.com" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://linkedin.com" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://facebook.com" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com" className="hover:underline">
                    GitHub
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://angel.co" className="hover:underline">
                    AngelList
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://dribbble.com" className="hover:underline">
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/legal/terms" className="hover:underline">
                    Terms
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/legal/privacy" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/legal/cookies" className="hover:underline">
                    Cookies
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/legal/licenses" className="hover:underline">
                    Licenses
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/legal/settings" className="hover:underline">
                    Settings
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/legal/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
            <a href="/">
              <Image
                src={logoEdspert}
                alt="Edspert Logo"
                width={142}
                height={28}
              />
            </a>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse"></div>
            <span className="text-sm text-gray-500 sm:text-center">
              © 2077{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Untitled UI™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
