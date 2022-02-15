import { useState } from 'react';
import { SlideMenu } from 'components';
import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  height: 800px;
`;

const SlideMenuTest = () => {
  const [slideMenuVisible, setSlideMenuVisible] = useState(false);

  return (
    <Container>
      <SlideMenu visible={slideMenuVisible} onClick={setSlideMenuVisible} />
      <div>something</div>
      <button type="button" onClick={() => setSlideMenuVisible(true)}>
        sliderMenu on
      </button>
    </Container>
  );
};

export default SlideMenuTest;
