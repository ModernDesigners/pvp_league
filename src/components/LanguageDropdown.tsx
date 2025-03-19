import { useState } from "react";

const LanguageDropdown = () => {
  const [selectedLang, setSelectedLang] = useState("EN");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none"
      >
        {selectedLang}
      </button>

      {isOpen && (
        <div className="absolute left-0 w-24 mt-2 bg-white border border-gray-300 rounded-lg shadow-md">
          <button
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => selectLanguage("EN")}
          >
            EN
          </button>
          <button
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => selectLanguage("GE")}
          >
            GE
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
