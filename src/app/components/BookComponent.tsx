import ExportedImage from 'next-image-export-optimizer';

export default function BookComponent() {
    return <div>
        <div className="w-[83%] mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Book</h2>

            {/* Who moved my servers? */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Who moved my servers?</h3>
              <div className="flex flex-col md:flex-row">
                <div className="md:pr-4">
                  <p className="mb-4">
                    <ExportedImage
                      src="/img/wmms_cover3d.jpg"
                      alt="Who Moved My Servers book cover"
                      width={300}
                      height={400}
                      className="float-right ml-4 mb-4"
                    />
                    If your business is ready to embrace the fast-paced world of cloud and
                    gain a competitive advantage, then this book will guide you through the common pitfalls and lead you
                    and your business to an agile and stable platform that can scale with ease.
                    Sharing tried-and-tested methods to migrate, re-platform and move towards customer-first, mobile-first and
                    cloud-first applications, Neil Millard shows you how to save time, money and energy, while keeping the
                    service running and minimising downtime.
                  </p>

                  <h4 className="text-lg font-semibold mt-6 mb-2">Read this book in order to:</h4>
                  <ul className="list-disc list-inside text-left mb-4">
                    <li>Understand what the cloud is, what it does best, and how to leverage the cloud advantage</li>
                    <li>Choose the right solutions, applications and service providers for your business needs</li>
                    <li>Prepare your application for scaling and zero downtime deployments</li>
                    <li>Keep your cloud servers manageable and your data safe from hackers and component failures</li>
                    <li>Predict where problems and bottlenecks will arise, and know what do to about them</li>
                    <li>Get products and applications to market faster and ensure they keep running</li>
                  </ul>

                  <p className="mb-4">
                    If you want to unlock the power of the cloud to build agile, stable, infrastructure that
                    delights your customers 24/7 and enables you to stay competitive, you need to read this book.
                  </p>

                  <div className="mt-4 mb-8">
                    <p>Available from Amazon in <a href="https://amzn.to/2HxjFXf" className="text-blue-600 hover:underline">Paperback</a> and <a href="https://amzn.to/2RbKKig" className="text-blue-600 hover:underline">Kindle</a> now.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confident Contractor */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Confident Contractor</h3>
              <div className="flex flex-col md:flex-row">
                <div className="md:pr-4">
                  <p className="mb-4">
                    <ExportedImage
                      src="/img/cc_cover3d.png"
                      alt="Confident Contractor book cover"
                      width={300}
                      height={400}
                      className="float-right ml-4 mb-4"
                    />
                    Fed up with jumping through someone else&apos;s IT hoops at work? Ready to take the leap and be your own boss?
                  </p>

                  <p className="mb-4">
                    Confident Contractor is the one-stop guide for setting out on your own. Backed up by two decades of IT contracting experience, this book provides practical guidance and actionable strategies for managing the day-to-day reality of running your own business and working for yourself in IT contracting, as well as tips and tricks that will help you succeed long-term.
                  </p>

                  <h4 className="text-lg font-semibold mt-6 mb-2">Understand how to:</h4>
                  <ul className="list-disc list-inside text-left mb-4">
                    <li>Build robust business systems from the outset</li>
                    <li>Manage cash flow efficiently and safeguard your financial stability</li>
                    <li>Satisfy compliance requirements and minimise risk and legal liabilities</li>
                    <li>Negotiate contracts to maximise your earning potential</li>
                    <li>Build strong client relationships that generate repeat business and client recommendations</li>
                  </ul>

                  <div className="mt-4">
                    <p>Available from Amazon in <a href="https://amzn.to/4bQ7bmo" className="text-blue-600 hover:underline">Paperback</a> and <a href="https://amzn.to/3WiIRnd" className="text-blue-600 hover:underline">Kindle</a> now.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
}
