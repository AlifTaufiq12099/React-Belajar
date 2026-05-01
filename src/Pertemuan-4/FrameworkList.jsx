import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
    // Menggunakan satu state object dataForm
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: ""
    });

    const _searchTerm = dataForm.searchTerm.toLowerCase();

    // Logika filter langsung menggunakan frameworkData
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name.toLowerCase().includes(_searchTerm) ||
            framework.description.toLowerCase().includes(_searchTerm);

        const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;

        return matchesSearch && matchesTag;
    });

    // Harus pakai ...new Set agar menjadi Array yang utuh dan bisa di .map()
    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Search & Filter Frameworks</h1>
            <input
                type="text"
                name="searchTerm"
                placeholder="Search framework..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.searchTerm}
                onChange={(e) => setDataForm({ ...dataForm, searchTerm: e.target.value })}
            />

            <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.selectedTag}
                onChange={(e) => setDataForm({ ...dataForm, selectedTag: e.target.value })}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>

            {/* Render data yang sudah di filter, bukan frameworkData secara mentah */}
            {filteredFrameworks.map((item) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>

                    {/* Menampilkan developer data */}
                    <p className="mt-4">Developer by : <span className="font-bold">{item.details.developer}</span>  {item.details.releaseYear}</p>

                    {/* Menampilkan url link */}
                    <a href={item.details.officialWebsite} className="text-blue-500 hover:underline mt-2 block" target="_blank" rel="noopener noreferrer" >
                        Visit website</a>

                    {/* Menampilkan informasi tags */}
                    <div className="mt-2">
                        {item.tags.map((tag, index) => (
                            <span key={index} className="inline-block bg-blue-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}