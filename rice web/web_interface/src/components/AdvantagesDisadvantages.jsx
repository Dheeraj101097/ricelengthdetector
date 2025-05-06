import { 
  CheckCircle,
  XCircle,
  Clock,
  Ruler,
  Users,
  DollarSign,
  FileText,
  Tv
} from 'lucide-react';

const AdvantagesDisadvantages = () => {
  const advantages = [
    {
      icon: <Clock size={24} className="text-green-600" />,
      title: "Time Efficiency",
      description: "Processes hundreds of grains in seconds compared to hours of manual measurement."
    },
    {
      icon: <Ruler size={24} className="text-green-600" />,
      title: "Measurement Consistency",
      description: "Eliminates human error and provides consistent, reproducible measurements."
    },
    {
      icon: <Users size={24} className="text-green-600" />,
      title: "Reduced Labor",
      description: "Minimizes the need for skilled technicians to perform repetitive measurements."
    },
    {
      icon: <FileText size={24} className="text-green-600" />,
      title: "Comprehensive Data",
      description: "Generates detailed statistics and distributions automatically."
    }
  ];
  
  const disadvantages = [
    {
      icon: <DollarSign size={24} className="text-red-600" />,
      title: "Initial Cost",
      description: "Requires investment in equipment and software setup."
    },
    {
      icon: <Tv size={24} className="text-red-600" />,
      title: "Technical Requirements",
      description: "Needs specific lighting and camera setup for optimal results."
    },
    {
      icon: <XCircle size={24} className="text-red-600" />,
      title: "Overlapping Grains",
      description: "May have difficulty with densely packed or overlapping grain samples."
    },
    {
      icon: <Users size={24} className="text-red-600" />,
      title: "Training Needed",
      description: "Requires initial training for operators to use the system effectively."
    }
  ];
  
  return (
    <section className="section bg-rice-50">
      <div className="container">
        <div className="text-center mb-16 animated-element">
          <h2 className="text-3xl font-bold mb-4">Advantages & Limitations</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Understanding the strengths and limitations of our system helps users implement it effectively in their research or quality control processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animated-element">
          <div className="card p-8 border-l-4 border-green-500">
            <div className="flex items-center mb-6">
              <CheckCircle size={28} className="text-green-600 mr-3" />
              <h3 className="text-2xl font-semibold">Advantages</h3>
            </div>
            
            <div className="space-y-6">
              {advantages.map((item, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card p-8 border-l-4 border-red-500">
            <div className="flex items-center mb-6">
              <XCircle size={28} className="text-red-600 mr-3" />
              <h3 className="text-2xl font-semibold">Limitations</h3>
            </div>
            
            <div className="space-y-6">
              {disadvantages.map((item, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesDisadvantages;