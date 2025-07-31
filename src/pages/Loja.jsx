import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LojaContainer = styled.div`
  padding: 40px 20px;
`;

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 50px auto;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  text-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  cursor: pointer;
`;

const ImageNav = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 10px;
  box-sizing: border-box;
`;

const Arrow = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  color: black;
  cursor: pointer;
`;

const ProductName = styled.h3`
  margin: 10px 0;
`;

const BuyButton = styled.button`
  background-color: #28a745;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 80%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 30px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
`;

const products = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  name: `Produto ${i + 1}`,
  images: [
    `https://picsum.photos/300/200?random=${i + 1}`,
    `https://picsum.photos/300/200?random=${i + 10}`,
    `https://picsum.photos/300/200?random=${i + 20}`,
    `https://picsum.photos/300/200?random=${i + 30}`,
  ],
}));

const Loja = () => {
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideIndexes, setCurrentSlideIndexes] = useState({});

  const handleImageClick = (images, index) => {
    setModalImages(images);
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const handleNextImage = () => {
    setModalImageIndex((prev) => (prev + 1) % modalImages.length);
  };

  const handlePrevImage = () => {
    setModalImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  const handleSlide = (productId, direction) => {
    setCurrentSlideIndexes((prev) => {
      const currentIndex = prev[productId] || 0;
      const newIndex =
        direction === 'next'
          ? (currentIndex + 1) % products[productId].images.length
          : (currentIndex - 1 + products[productId].images.length) %
            products[productId].images.length;
      return { ...prev, [productId]: newIndex };
    });
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <LojaContainer>
      <CarouselContainer>
        <Slider {...carouselSettings}>
          <img src="https://picsum.photos/1200/400?random=1" alt="promo1" />
          <img src="https://picsum.photos/1200/400?random=2" alt="promo2" />
          <img src="https://picsum.photos/1200/400?random=3" alt="promo3" />
        </Slider>
      </CarouselContainer>

      <ProductGrid>
        {products.map((product) => (
          <Card key={product.id}>
            <ImageContainer>
              <ProductImage
                src={product.images[currentSlideIndexes[product.id] || 0]}
                alt={product.name}
                onClick={() =>
                  handleImageClick(product.images, currentSlideIndexes[product.id] || 0)
                }
              />
              <ImageNav>
                <Arrow onClick={() => handleSlide(product.id, 'prev')}>{'<'}</Arrow>
                <Arrow onClick={() => handleSlide(product.id, 'next')}>{'>'}</Arrow>
              </ImageNav>
            </ImageContainer>
            <ProductName>{product.name}</ProductName>
            <BuyButton>Comprar</BuyButton>
          </Card>
        ))}
      </ProductGrid>

      {isModalOpen && (
        <Modal onClick={() => setIsModalOpen(false)}>
          <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>
          <Arrow onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}>{'<'}</Arrow>
          <ModalImage src={modalImages[modalImageIndex]} alt="zoom" />
          <Arrow onClick={(e) => { e.stopPropagation(); handleNextImage(); }}>{'>'}</Arrow>
        </Modal>
      )}
    </LojaContainer>
  );
};

export default Loja;
