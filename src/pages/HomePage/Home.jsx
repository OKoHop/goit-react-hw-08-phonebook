import { StyledDiv } from './Home.styled';
import mainImg from '../../images/mainImg.png';

export const Home = () => {
  return (
    <main>
      <StyledDiv>
        <img src={mainImg} alt="openBook" width={100} height={100} />
        <h1>Welcome to Phonebook App Home page</h1>
        <h2>Please register or login</h2>
      </StyledDiv>
    </main>
  );
};
