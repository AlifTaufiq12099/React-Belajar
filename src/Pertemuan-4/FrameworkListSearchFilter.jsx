import { useState } from "react";
import frameworkData from "./framework.json";
import FrameworkList from "./FrameworkList";

export default function FrameworkListSearchFilter() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: ""
    });

    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name.toLowerCase().includes(_searchTerm) ||
            framework.description.toLowerCase().includes(_searchTerm);

        const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;

        return matchesSearch && matchesTag;
    });

    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];

    return (
        <FrameworkList 
            frameworks={filteredFrameworks}
            allTags={allTags}
            searchTerm={dataForm.searchTerm}
            onSearchChange={(e) => setDataForm({ ...dataForm, searchTerm: e.target.value })}
            selectedTag={dataForm.selectedTag}
            onTagChange={(e) => setDataForm({ ...dataForm, selectedTag: e.target.value })}
        />
    );
}