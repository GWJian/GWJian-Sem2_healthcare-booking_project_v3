import { Footer } from "flowbite-react";

export default function FooterSitemapLinks() {
  return (
    <div>
      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto bg-gray-200 ">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 text-center ">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class=" hover:underline">
                    About
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Careers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <text class="hover:underline">Privacy Policy</text>
                </li>
                <li class="mb-4">
                  <text class="hover:underline">Terms of Service</text>
                </li>
                <li class="mb-4">
                  <text class="hover:underline">Law Enforcement</text>
                </li>
                <li class="mb-4">
                  <text class="hover:underline">Contact Us</text>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact us
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <text class="hover:underline">Phone: 000-000-0000</text>
                </li>
                <li class="mb-4">
                  <text class="hover:underline">Email: xxxxx@gmail.com</text>
                </li>
                <li class="mb-4">
                  <text class="hover:underline">
                    Address: 2, Lebuh Acheh, George Town, 10300 George Town,
                    Pulau Pinang
                  </text>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Operating Hours:
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <text class="hover:underline">Monday - Friday</text>
                </li>
                <li class="mb-4">
                  <text class="hover:underline">9:00 AM - 5:00 PM</text>
                </li>
                <li class="mb-4">
                  <text class="hover:underline">Saturday - Sunday</text>
                </li>
                <li class="mb-4">
                  <text class="hover:underline">11:00 AM - 8:00 PM</text>
                </li>
              </ul>
            </div>
          </div>

          <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
              Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
