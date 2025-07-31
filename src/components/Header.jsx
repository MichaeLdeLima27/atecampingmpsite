import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importante!
import { FaFacebook, FaInstagram, FaYoutube, FaSearch } from 'react-icons/fa';
import LogoImg from '../assets/logo.webp';

const HeaderWrapper = styled.div`
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

const HeaderContainer = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LogoTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const NavLink = styled(Link)`
  color: #555;
  text-decoration: none;
  font-weight: 500;
  padding: 4px 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #eea255ff;
    color: #fff;
    border-radius: 2px;
    transform: scale(1.05);
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

const SearchWrapper = styled.form`
  position: relative;
  width: 250px;
`;

const SearchInput = styled.input`
  padding: 8px 40px 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #555;
  font-size: 1.2rem;
  padding: 0;

  &:hover {
    color: #5b8030ff;
    transform: translateY(-50%) scale(1.2);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #555;
    font-size: 1.2rem;
    transition: color 0.3s, transform 0.2s;

    &:hover {
      color: #5b8030ff;
      transform: scale(1.2);
    }
  }
`;

export const Header = () => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value.trim();
    if (query) {
      alert(`Buscar por: ${query}`);
    }
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LeftSection>
          <LogoTitleContainer>
            <Logo src={LogoImg} alt="Logo" />
            <Title>Camping & vida</Title>
          </LogoTitleContainer>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/loja">Loja</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
          </NavLinks>
        </LeftSection>

        <RightSection>
          <SearchWrapper onSubmit={handleSearchSubmit}>
            <SearchInput
              type="text"
              name="search"
              placeholder="Pesquise no site..."
              aria-label="Pesquisar no site"
            />
            <SearchButton type="submit" aria-label="Buscar">
              <FaSearch />
            </SearchButton>
          </SearchWrapper>

          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@atecamping" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
              <FaYoutube />
            </a>
          </SocialIcons>
        </RightSection>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
