import { 
  Microscope, 
  ZoomIn, 
  BarChart3, 
  Clipboard, 
  CloudLightning, 
  Database 
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const FeaturesAccuracy = () => {
  // Features with icons
  const features = [
    {
      icon: <Microscope size={36} className="text-leaf-600" />,
      title: "High Precision Measurements",
      description: "Accurate to within 0.1mm for measuring rice grain length, width, and aspect ratio."
    },
    {
      icon: <ZoomIn size={36} className="text-leaf-600" />,
      title: "Multi-Grain Detection",
      description: "Ability to detect and measure multiple grains simultaneously in a single image."
    },
    {
      icon: <BarChart3 size={36} className="text-leaf-600" />,
      title: "Statistical Analysis",
      description: "Generates comprehensive statistics and distribution analysis of grain measurements."
    },
    {
      icon: <Clipboard size={36} className="text-leaf-600" />,
      title: "Classification",
      description: "Automatically classifies rice grains into standard categories based on dimensions."
    },
    {
      icon: <CloudLightning size={36} className="text-leaf-600" />,
      title: "Fast Processing",
      description: "Processes images in seconds, enabling rapid analysis of large sample sets."
    },
    {
      icon: <Database size={36} className="text-leaf-600" />,
      title: "Result Storage",
      description: "Stores measurement data for trend analysis and historical comparison."
    }
  ];
  
  // Accuracy data for the chart
  const accuracyData = [
    { name: 'Length Accuracy', value: 98.5 },
    { name: 'Width Accuracy', value: 97.3 },
    { name: 'Classification Accuracy', value: 95.8 }
  ];
  
  const COLORS = ['#4A6741', '#8B5A2B', '#B19460'];
  
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16 animated-element">
          <h2 className="text-3xl font-bold mb-4">Features & Accuracy</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our rice grain length detection system offers a comprehensive suite of features with industry-leading accuracy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12 animated-element">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-rice-50 transition-colors">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animated-element">
            <div className="bg-rice-50 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-center">System Accuracy</h3>
              
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={accuracyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                      label={({name, value}) => `${name}: ${value}%`}
                    >
                      {accuracyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 text-center text-gray-600">
                <p>
                  Based on validation against manually measured samples by expert technicians.
                  Results show consistently high accuracy across different rice varieties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccuracy;