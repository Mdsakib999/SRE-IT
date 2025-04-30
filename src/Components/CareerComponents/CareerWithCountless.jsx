import { benefitsData } from "../../utils/benefitsData";

const CareerWithCountless = () => {
    return (
        <div>
            <div className="text-center mt-10">
                <p className="md:text-4xl text-2xl font-semibold">A Career With Countless Perks</p>
                <p className="md:max-w-[50%] mx-auto mt-4 px-5 md:px-0">At SM IT Solution, we believe that a team's strength lies in its people. That's why we prioritize your well-being and growth. Every member of our team at SM IT Solutions enjoys the following benefits</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 p-4 mt-8">
                {
                    benefitsData.map((item, index) => {
                        // Split title into words
                        const words = item.title.split(' ');
                        const lastWord = words.pop(); // Get the last word

                        // Alternate color logic using index % 2
                        const color = index % 2 === 0 ? 'text-orange-500' : 'text-green-600';

                        return (
                            <div key={index} className="flex items-center bg-slate-100 shadow-md p-4 rounded-lg shadow-blue-50 hover:shadow-lg transition-shadow duration-300 w-full sm:w-[30%] lg:w-[25%] ">
                                {/* Icon */}
                                <div className={`${color} text-3xl mr-4 bg-white p-4 rounded-full`}>
                                    <item.icon />
                                </div>

                                {/* Text Content */}
                                <div className="text-left">
                                    <p className="font-bold text-xl text-gray-800">
                                        {words.join(' ')} <span className={`${color}`}>{lastWord}</span>
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>


        </div>
    );
};

export default CareerWithCountless;