import React from "react";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Build knowledge",
      description: "Build an effective team. Q&A sessions. Free public sessions or Private sessions, it's up to you!",
      link: "https://www.techanswers.club"
    },
    {
      title: "Train your team",
      description: "I can upskill and mentor your team.",
      link: "/blog/6-steps-to-cloud-expert/"
    },
    { title: "Build an online product", description: "Have an idea? Discuss with me. Connect and we can build it together.", link: "https://linkedin.com/in/neilmillard" },
    { title: "Hire ME!", description: "Bookable sessions for you or your team", link: "https://linkedin.com/in/neilmillard" },
    { title: "Other services", description: "Find out more", link: "https://deltafamiglia.com"}
  ];
  return (
    <div className="px-4 py-5 sm:p-6">
      <div className="text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Welcome</h2>
        <p className="mt-1 font-extrabold text-gray-900 sm:text-2xl sm:tracking-tight">
          I am Neil. How can I help you today?
        </p>
      </div>

      <div className="flex flex-col lg:flex-row mt-10">
        <div className="lg:w-1/2 h-128 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/img/devops_excellence_awards_neil_4_3.jpg')" }}></div>
        <div className="lg:w-1/2 h-full">
          <p className="text-xl m-5 mt-4 font-medium">
            With over 20 years IT experience, I can help you and your tech team deliver.
          </p>
          <p className="text-xl m-5 mt-4 font-medium">
            Neil Millard is a successful entrepreneur, speaker and trainer. A recognised expert on cloud and automated
            server infrastructures, he assists businesses to embrace new technology to move faster, become more
            automated and respond more quickly to their customers’ wants and needs. Having spent many years in the
            financial sector with clients such as Barclays, HMRC and AXA, he is now on a mission to help grow companies,
            through DevOps and Platforms, helping the world.</p>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Services</h3>
        <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <Link href={service.link} className="p-5 block">
                <p className="mt-2 text-sm text-gray-500">{service.title}</p>
                <div className="mt-3">
                  <p className="text-base font-semibold text-gray-900">{service.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
  );
}
