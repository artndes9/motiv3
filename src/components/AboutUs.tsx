import Logo from "@/assets/Logo_Horizontal.svg?react";

const AboutUs = () => {
  const qualities = [
    "Commitment to Quality",
    "Timely Delivery", 
    "Innovative Design",
    "Customer Satisfaction",
    "Passionate Approach",
    "Professional Service"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex w-full justify-center items-center px-4 md:px-12 lg:px-24">
            <Logo className="h-full fill-brand pb-3 max-h-96" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-800">MOTI INFRAHEIGHTS PRIVATE LIMITED</h2>
            <h3 className="text-2xl font-semibold text-slate-800">About Us</h3>
            <p className="text-gray-600 leading-relaxed">
              Moti Infraheights is a leading real estate company based in Ranchi, India. The company specializes in the development and construction of residential and commercial properties. Moti Infraheights has a reputation for delivering high-quality projects on time and within budget.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-4 rounded-lg text-center border border-orange-500/30">
                  <p className="text-slate-800 font-medium">{quality}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
