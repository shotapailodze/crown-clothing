import { Link } from 'react-router-dom';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route)
  const shopUrl = '/shop/' + title;
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl} 
      />
      <Body>
        <h2>
          {title}
        </h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
