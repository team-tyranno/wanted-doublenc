import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import * as S from './style';

export const BrandHeader = () => {
  return (
    <S.Container>
      <S.Title>
        <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        <div className="nav-title">카페</div>
      </S.Title>
      <S.Slider>하이</S.Slider>
    </S.Container>
  );
};
