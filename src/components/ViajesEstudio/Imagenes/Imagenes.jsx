import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import imagen1 from '../../../images/Viajes/viaje1.jpg';
import imagen2 from '../../../images/Viajes/viaje2.jpg';
import imagen3 from '../../../images/Viajes/viaje3.jpg';
import imagen4 from '../../../images/Viajes/viaje4.jpg';
import imagen5 from '../../../images/Viajes/viaje5.jpg';
import imagen6 from '../../../images/Viajes/viaje6.jpg';
import styles from './Imagenes.module.css';

export default function Imagenes() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <Box className={styles.imagenes}>
      {/* Renderización de imágenes */}
      {[
        imagen1, imagen2, imagen3, imagen4, imagen5, imagen6
      ].map((imageSrc, index) => (
        <Box key={index} onClick={() => handleImageClick(imageSrc)}>
          <img
            src={imageSrc}
            alt={`imagen ${index + 1}`}
            loading='lazy'
          />
        </Box>
      ))}

      {/* Modal para mostrar imagen en tamaño completo */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <div className={styles.modalContent} onClick={handleCloseModal}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt='Imagen en tamaño completo'
              loading='lazy'
              onClick={handleCloseModal}
            />
          )}
        </div>
      </Modal>
    </Box>
  );
}
