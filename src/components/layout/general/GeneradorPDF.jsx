import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { PublicLayout } from '../general/PublicLayout'; // Ajusta la ruta según tu estructura de archivos

const GeneradorPDF = () => {
  const contentRef = useRef();

  const handleGeneratePDF = () => {
    const element = contentRef.current;

    html2canvas(element, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      
      // Define el tamaño del PDF basado en el tamaño del canvas
      const pdfWidth = canvas.width;
      const pdfHeight = canvas.height;

      // Ajusta el formato del PDF para que se ajuste al tamaño del canvas
      const pdf = new jsPDF({
        unit: 'px',
        format: [pdfWidth, pdfHeight], // Usa el tamaño del canvas
        orientation: 'portrait'
      });

      // Añade la imagen al PDF
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

      // Guarda el archivo PDF
      pdf.save('PublicLayout.pdf');
    });
  };

  return (
    <div>
      <div ref={contentRef} style={{ position: 'relative' }}>
        <PublicLayout />
      </div>
      <button onClick={handleGeneratePDF}>Generar PDF</button>
    </div>
  );
};

export default GeneradorPDF;
