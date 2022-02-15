import { useRouter } from 'next/router';
import { ContentsDivider, Caret } from 'components';
import * as S from './style';

interface SlideMenuProps {
  visible: boolean;
  onClick: (newState: boolean) => void;
}

export const SlideMenu = ({ visible, onClick }: SlideMenuProps) => {
  const router = useRouter();
  return (
    <S.Container visible={visible}>
      <S.Navbar>
        <button type="button" onClick={() => onClick(!visible)}>
          임시 버튼
        </button>
      </S.Navbar>
      <S.Wrapper>
        <ContentsDivider />
        <S.Button type="button" onClick={() => router.push('/contacts')}>
          <S.ButtonDescription>고객센터</S.ButtonDescription>
          <Caret direction="right" />
        </S.Button>
        <ContentsDivider />
      </S.Wrapper>
    </S.Container>
  );
};
