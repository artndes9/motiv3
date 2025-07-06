import patternImage from "@/assets/pattern.png"; 

const PreviousProjects = () => {
  const projects = [
    {
      title: "PEARL CREST",
      status: "Delivered on Time",
      image: "/uploads/Pearl_crest_actual.jpg"
    },
    // {
    //   title: "MOTI FUELS",
    //   status: "Completed",
    //   image: "/uploads/motiFuels.jpeg"
    // },
    {
      title: "PEARL ORCHID",
      status: "Delivered on Time",
      image: "/uploads/PearlOrchid.jpeg"
    }
  ];

  return (
    <section className=" bg-slate-800 text-white">

 {/* Pattern Overlay */}
<div className="relative overflow-hidden py-16">
    {/* Pattern Background Overlay */}
    <div
      className="absolute inset-0 z-0 opacity-10 bg-repeat pointer-events-none"
      style={{
        backgroundImage: `url(${patternImage})`,
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "contain", 
        backgroundPosition: "top left",
        opacity: 0.02, 
        margin: 0,
        padding: 0,
      }}
    />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-400 mb-4">DELIVERED ON TIME</h2>
          <h3 className="text-2xl font-semibold mb-4">Our Previous Projects</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            At Moti Infraheights, our commitment to excellence is not just a promise but a practice that we uphold with every project we undertake. Our success lies in our unwavering dedication to completing projects on time, ensuring that our residents can move into their dream homes as planned, without any delays.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-14">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-orange-400 text-sm">{project.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
    </section>
  );
};

export default PreviousProjects;
