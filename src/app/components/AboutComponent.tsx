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
                  Neil&apos;s mission is to make life and work, FUN. Playing the game of life should be a challenge like any game, but it is when it becomes mired by the boring and monotonous, things need to change.
                </p>
                <p className="mb-4">Business too, is a team sport. This is where the wonderful diversity of life and preferences comes into it&apos;s own. You don&apos;t like the same stuff as everyone else, which means tasks can be shared with those whom like performing those tasks.</p>
                <p className="mb-4">Neil Millard is a successful entrepreneur, speaker and trainer.
                  A recognised expert on cloud and automated server infrastructures, he assists businesses to embrace new
                  technology
                  to move faster, become more automated and respond more quickly to their customers&apos; wants and needs. Having
                  spent
                  many years in the financial sector with clients such as Barclays, Lloyds and AXA, he is now on a mission
                  to share his knowledge with the world.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
}
