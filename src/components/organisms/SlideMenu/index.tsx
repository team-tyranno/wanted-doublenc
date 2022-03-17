import { useRouter } from 'next/router';
import { NavBar, ContentsDivider, Caret } from 'components';
import * as S from './style';

interface SlideMenuProps {
  visible: boolean;
  onClick: (newState: boolean) => void;
}

export const SlideMenu = ({ visible, onClick }: SlideMenuProps) => {
  const router = useRouter();
  return (
    <S.Container visible={visible} data-cy="slideMenu">
      <NavBar
        leftButton={
          <S.Button type="button" onClick={() => onClick(!visible)}>
            <Caret direction="left" />
          </S.Button>
        }
        title="마이페이지"
      />
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
