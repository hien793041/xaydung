import { projects } from '../../data/mockData';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Dự án đã thực hiện</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Hình ảnh dự án</span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <h3 className="text-lg font-semibold mb-2">Vật liệu sử dụng:</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.materials.map((material, index) => (
                  <li key={index} className="text-gray-700">{material}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}