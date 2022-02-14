import * as S from './style';

export const CustomerServiceInfo = () => {
  return (
    <S.Container>
      <S.Title>상담시간 안내</S.Title>
      <S.OpenTime>평일 10:00 ~ 18:00</S.OpenTime>
      <S.CloseTime>점심시간 12:30 ~ 13:30 / 토·일·공휴일 휴무</S.CloseTime>
      <S.KakaoButton />
    </S.Container>
  );
};
