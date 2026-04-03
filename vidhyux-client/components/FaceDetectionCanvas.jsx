"use client";

import { useEffect, useRef, useState } from 'react';

export default function FaceDetectionCanvas({ imageSrc, detections }) {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const [faceapiReady, setFaceapiReady] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const loadFaceApi = async () => {
      try {
        // Load face-api.js from CDN
        const { faceapi } = await import('face-api.js');
        
        // Load models from public/models
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
          faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
          faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
          faceapi.nets.faceExpressionNet.loadFromUri('/models'),
          faceapi.nets.ageGenderNet.loadFromUri('/models')
        ]);

        if (!isCancelled) {
          setFaceapiReady(true);
          console.log('FaceAPI models loaded');
        }
      } catch (error) {
        console.error('FaceAPI load error:', error);
      }
    };

    loadFaceApi();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!faceapiReady || !imageSrc || !detections.length || !canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const image = imageRef.current;
    const ctx = canvas.getContext('2d');

    const drawDetections = () => {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      
      // Draw image
      ctx.drawImage(image, 0, 0);
      
      // Draw bounding boxes
      detections.forEach((detection, index) => {
        const box = {
          x: detection.detection.box.x,
          y: detection.detection.box.y,
          width: detection.detection.box.width,
          height: detection.detection.box.height
        };

        // Bounding box
        ctx.strokeStyle = '#ff4444';
        ctx.lineWidth = 4;
        ctx.lineJoin = 'round';
        ctx.strokeRect(box.x, box.y, box.width, box.height);

        // Background for label
        ctx.fillStyle = 'rgba(255, 68, 68, 0.9)';
        ctx.fillRect(box.x, box.y - 30, box.width, 25);

        // Label
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`Individual ${index + 1}`, box.x + box.width / 2, box.y - 12.5);
      });
    };

    image.onload = () => {
      drawDetections();
    };

    image.src = imageSrc;
  }, [imageSrc, detections, faceapiReady]);

  if (!faceapiReady) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
            </svg>
          </div>
          <p className="text-lg font-medium text-gray-700">Loading AI Face Detection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
      <img ref={imageRef} className="hidden" alt="" />
      <canvas 
        ref={canvasRef} 
        className="w-full h-auto block"
      />
    </div>
  );
}

