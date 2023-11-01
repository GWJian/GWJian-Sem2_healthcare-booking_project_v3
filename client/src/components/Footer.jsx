import { Footer } from "flowbite-react";

export default function FooterSitemapLinks() {
  return (  
    <div className="flex flex-col h-[80vh] sm:h-[100vh] custom-375:h-[100vh]">
    <Footer className=" bg-gray-200 mt-auto">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="/">About</Footer.Link>
              <Footer.Link href="/">Careers</Footer.Link>
              <Footer.Link href="/">Brand Center</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="/">Privacy Policy</Footer.Link>
              <Footer.Link href="/">Licensing</Footer.Link>
              <Footer.Link href="/">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Contact Us" />
            <Footer.LinkGroup col>
              <Footer.Title title="Phone: 000-0000000" />
              <Footer.Title title="Email: xxxxxx@gmail.com" />
              <Footer.Title title="Address: 2, Lebuh Acheh, George Town, 10300 George Town, Pulau Pinang" />
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Operating Hours:" />
            <Footer.Title title="Monday - Friday" />
            <Footer.Title title="8:00am - 5:00pm" />
            <Footer.Title title="Saturday" />
            <Footer.Title title="8:00am - 1:00pm" />
            <Footer.Title title="Sunday" />
            <Footer.Title title="Closed" />
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Flowbite™" href="#" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center"></div>
        </div>
      </div>
    </Footer>
    </div>
  );
}
