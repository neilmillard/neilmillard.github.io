import ExportedImage from 'next-image-export-optimizer';

export default function AboutComponent() {
    return <div>
        <div className="w-[83%] mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">About Neil</h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:pr-4">
                <p className="mb-4">
                  <ExportedImage
                    src="/img/neil_millard_speaking.jpg"
                    alt="Neil Millard speaking"
                    width={400}
                    height={300}
                    className="float-right ml-4 mb-4"
                  />
                  I’m Neil Millard, a DevOps and platform engineer and the founder of devops-answers.com.
                </p>
                <p className="mb-4">For years I’ve been doing one thing: building cloud infrastructure that runs itself.
                  That means automated, secure AWS platforms (ECS, Fargate, DevSecOps, CIS compliance) that let engineering
                  teams ship faster without breaking things.</p>
                <p className="mb-4">I’ve done this at scale in the financial sector for clients like Barclays, HMRC and AXA,
                  where downtime and security failures make headlines. I also speak and train on DevOps and AI, and I’m a
                  trustee of the Blakehay Theatre.</p>
                <p className="mb-4">Now I’m bringing that enterprise-grade experience to startups and SMEs. My mission is to
                  help growing companies get the platform foundations the big banks have, so they can move faster and respond
                  to their customers in days rather than months.</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Speaker Badges</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <ExportedImage
                  src="/img/neil-millard-pc26.png"
                  alt="Neil Millard - Speaker at PlatformCon 2026, London"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
    </div>
}
