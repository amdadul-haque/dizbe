import { FiSearch, FiMapPin, FiUser, FiTrendingUp, FiSliders } from 'react-icons/fi';
import Image from 'next/image'; // Example image import

const factors = [
  {
    icon: <FiSearch className="text-white text-2xl" />,
    title: 'Search History',
    description: 'Analyzing previous searches to deliver personalized product recommendations based on your interests.'
  },
  {
    icon: <FiMapPin className="text-white text-2xl" />,
    title: 'Location',
    description: 'Fetching local data to show available products based on your geographic area for accuracy.'
  },
  {
    icon: <FiUser className="text-white text-2xl" />,
    title: 'User Demographics',
    description: 'Personalizing results using demographic details like age, preferences, and lifestyle.'
  },
  {
    icon: <FiTrendingUp className="text-white text-2xl" />,
    title: 'Current Trends and Seasonality',
    description: 'Factoring in trends, seasons, and weather to recommend popular and timely products.'
  },
  {
    icon: <FiSliders className="text-white text-2xl" />,
    title: 'User Context',
    description: 'Understanding your current needs from recent activities to ensure relevant suggestions.'
  }
];


const Features = () => {
  return (
    <div className='py-16 md:py-24 xl:py-28'>
      <div className="layout flex flex-col items-center gap-12 md:gap-16 xl:gap-20">
        <h2 className='text-center text-2xl md:text-3xl xl:text-4xl font-semibold w-[80%] max-w-[400px] mx-auto'>Initialization Process</h2>
        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
          <div className="w-full md:w-1/2 flex flex-col gap-y-6">
            {factors.map((factor, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center bg-primary rounded-full w-12 h-12 min-w-[48px]">
                  {factor.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg xl:text-2xl">{factor.title}</h3>
                  <p className="text-sm xl:text-base text-gray-700 mt-2 md:w-[90%]">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/features.webp" // Replace with your Freepik vector image path
              alt="Vector Image"
              width={256}
              height={256}
              layout="responsive"
              className='rounded-xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Features }
