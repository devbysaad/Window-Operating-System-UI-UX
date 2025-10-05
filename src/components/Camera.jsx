import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    };
    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Capture Photo
  const handleCapture = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    const photo = canvasRef.current.toDataURL("image/png");

    const stored = JSON.parse(localStorage.getItem("gallery") || "[]");
    stored.push(photo);
    localStorage.setItem("gallery", JSON.stringify(stored));
  };

  // Start/Stop Recording
  const handleRecord = () => {
    if (recording) {
      mediaRecorder.stop();
      setRecording(false);
    } else {
      const stream = videoRef.current.srcObject;
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const videoURL = URL.createObjectURL(blob);

        const stored = JSON.parse(localStorage.getItem("videos") || "[]");
        stored.push(videoURL);
        localStorage.setItem("videos", JSON.stringify(stored));
      };

      recorder.start();
      setMediaRecorder(recorder);
      setRecordedChunks(chunks);
      setRecording(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e1e1e] text-white">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-700 bg-[#2a2a2a] shadow-lg">
        <h1 className="text-lg font-semibold">📷 Camera</h1>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/gallery")}
            className="bg-gray-700 hover:bg-gray-600 text-sm px-3 py-1.5 rounded-lg"
          >
            🖼️ Gallery
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-red-600 hover:bg-red-500 text-sm px-3 py-1.5 rounded-lg"
          >
            ✕ Close
          </button>
        </div>
      </div>

      {/* Camera Preview */}
      <div className="flex flex-col items-center mt-6 gap-4">
        <video
          ref={videoRef}
          autoPlay
          className="rounded-xl border border-gray-600 shadow-lg w-[640px] h-[480px] object-cover"
        />
        <canvas ref={canvasRef} width="640" height="480" className="hidden" />

        {/* Controls */}
        <div className="flex gap-5 mt-4">
          <button
            onClick={handleCapture}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md"
          >
            📸 Capture
          </button>
          <button
            onClick={handleRecord}
            className={`${
              recording
                ? "bg-red-600 hover:bg-red-500"
                : "bg-green-600 hover:bg-green-500"
            } text-white px-5 py-2 rounded-lg shadow-md`}
          >
            {recording ? "⏹ Stop" : "🎥 Record"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Camera;
