import { useEffect, useState } from "react";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("gallery") || "[]");
    setPhotos(stored);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.length === 0 ? (
          <p>No photos yet 😅</p>
        ) : (
          photos.map((src, i) => (
            <img key={i} src={src} alt={`Photo ${i}`} className="rounded-lg shadow-lg" />
          ))
        )}
      </div>
    </div>
  );
};

export default Gallery;
