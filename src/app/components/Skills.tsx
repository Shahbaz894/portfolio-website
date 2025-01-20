export default function Skills() {
    const skills = [
      { name: "Python", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Natural Language Processing", level: 95 },
      { name: "Machine Learning", level: 90 },
      { name: "Data Analysis", level: 85 },
      { name: "Git", level: 80 },
      // Add more skills as needed
    ]
  
    return (
      <section id="skills" className="my-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  