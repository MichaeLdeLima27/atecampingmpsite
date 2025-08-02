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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
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
  background: rgba(255,255,255,0.7);
  font-size: 20px;
  color: black;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transition: background 0.3s;

  &:hover {
    background: rgba(255,255,255,1);
  }
`;

const ProductName = styled.h3`
  margin: 15px 0 10px 0;
  font-size: 1.1rem;
  min-height: 48px;
`;

const PriceContainer = styled.div`
  margin-bottom: 10px;
`;

const PriceCurrent = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #b12704;
  margin-right: 8px;
`;

const PriceOld = styled.span`
  font-size: 1rem;
  text-decoration: line-through;
  color: #565959;
`;

const BuyButton = styled.a`
  background-color: #ffd814;
  border: 1px solid #fcd200;
  color: #111;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: #f7ca00;
  }
`;

const PaginationContainer = styled.div`
  margin: 40px auto 0 auto;
  max-width: 1200px;
  text-align: center;
`;

const PaginationButton = styled.button`
  background: ${({ active }) => (active ? '#ffd814' : 'white')};
  border: 1px solid #fcd200;
  color: ${({ active }) => (active ? '#111' : '#555')};
  font-weight: 700;
  margin: 0 5px;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #f7ca00;
    color: #111;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 10px;
  box-sizing: border-box;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 98vw;
  max-height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 98vw;
  max-height: 98vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
`;

const ModalArrow = styled.button`
  position: absolute;
  top: 10px; /* Alinhado no topo da imagem */
  border: none;
  background: rgba(255,255,255,0.7);
  font-size: 30px;
  color: black;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  user-select: none;

  &:hover {
    background: rgba(255,255,255,1);
  }
`;

const ModalArrowLeft = styled(ModalArrow)`
  left: calc(50% - 520px); /* 50% central menos metade da largura da imagem (450 + margem) */
  @media (max-width: 1100px) {
    left: 10px; /* Em telas menores, seta fica perto da borda esquerda */
  }
`;

const ModalArrowRight = styled(ModalArrow)`
  right: calc(50% - 520px);
  @media (max-width: 1100px) {
    right: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 30px;
  color: black;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 700;
`;

const ModalBuyButton = styled.a`
  margin-top: 20px;
  background-color: #ffd814;
  border: 1px solid #fcd200;
  color: #111;
  padding: 12px 30px;
  border-radius: 5px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #f7ca00;
  }
`;

// Gerar 40 produtos fictícios com 4 imagens cada
const products = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  name: `Produto Fictício ${i + 1}`,
  priceCurrent: `R$${(100 + i * 5).toFixed(2)}`,
  priceOld: `R$${(120 + i * 5).toFixed(2)}`,
  images: [
    `https://picsum.photos/id/${100 + i * 4}/400/300`,
    `https://picsum.photos/id/${101 + i * 4}/400/300`,
    `https://picsum.photos/id/${102 + i * 4}/400/300`,
    `https://picsum.photos/id/${103 + i * 4}/400/300`,
  ],
  link: `https://shopee.com.br/product-${i}`,
}));

const ITEMS_PER_PAGE = 8; // 2 fileiras de 4 cards

const Loja = () => {
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);
  const [modalBuyLink, setModalBuyLink] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideIndexes, setCurrentSlideIndexes] = useState({});
  const [page, setPage] = useState(1);

  const handleImageClick = (images, index, buyLink) => {
    setModalImages(images);
    setModalImageIndex(index);
    setModalBuyLink(buyLink);
    setIsModalOpen(true);
  };

  const handleNextImage = (e) => {
    e?.stopPropagation();
    setModalImageIndex((prev) => (prev + 1) % modalImages.length);
  };

  const handlePrevImage = (e) => {
    e?.stopPropagation();
    setModalImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  const handleSlide = (productId, direction) => {
    setCurrentSlideIndexes((prev) => {
      const currentIndex = prev[productId] || 0;
      const newIndex =
        direction === 'next'
          ? (currentIndex + 1) % products[productId].images.length
          : (currentIndex - 1 + products[productId].images.length) % products[productId].images.length;
      return { ...prev, [productId]: newIndex };
    });
  };

  const displayedProducts = products.slice(0, page * ITEMS_PER_PAGE);

  return (
    <LojaContainer>
      <CarouselContainer>
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={4000}
        >
          <img src="https://picsum.photos/1200/400?random=1" alt="promo1" />
          <img src="https://picsum.photos/1200/400?random=2" alt="promo2" />
          <img src="https://picsum.photos/1200/400?random=3" alt="promo3" />
        </Slider>
      </CarouselContainer>

      <ProductGrid>
        {displayedProducts.map((product) => (
          <Card key={product.id}>
            <ImageContainer>
              <ProductImage
                src={product.images[currentSlideIndexes[product.id] || 0]}
                alt={product.name}
                onClick={() =>
                  handleImageClick(
                    product.images,
                    currentSlideIndexes[product.id] || 0,
                    product.link
                  )
                }
              />
              <ImageNav>
                <Arrow onClick={() => handleSlide(product.id, 'prev')}>&lt;</Arrow>
                <Arrow onClick={() => handleSlide(product.id, 'next')}>&gt;</Arrow>
              </ImageNav>
            </ImageContainer>
            <ProductName>{product.name}</ProductName>
            <PriceContainer>
              <PriceCurrent>{product.priceCurrent}</PriceCurrent>
              <PriceOld>{product.priceOld}</PriceOld>
            </PriceContainer>
            <BuyButton href={product.link} target="_blank" rel="noopener noreferrer">
              Comprar
            </BuyButton>
          </Card>
        ))}
      </ProductGrid>

      <PaginationContainer>
        {[...Array(5)].map((_, i) => (
          <PaginationButton
            key={i}
            active={page === i + 1}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </PaginationButton>
        ))}
      </PaginationContainer>

      {isModalOpen && (
        <Modal onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>&times;</CloseButton>

            <ModalImageContainer>
              <ModalArrowLeft onClick={handlePrevImage}>&lt;</ModalArrowLeft>
              <ModalImage src={modalImages[modalImageIndex]} alt="Imagem ampliada" />
              <ModalArrowRight onClick={handleNextImage}>&gt;</ModalArrowRight>
            </ModalImageContainer>

            <ModalBuyButton href={modalBuyLink} target="_blank" rel="noopener noreferrer">
              Comprar
            </ModalBuyButton>
          </ModalContent>
        </Modal>
      )}
    </LojaContainer>
  );
};

export default Loja;
