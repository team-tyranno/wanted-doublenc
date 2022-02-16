import { useState, useEffect } from 'react';
import { CarouselCard } from 'components';
import * as S from './style';

const CARD_LIST_DATA = [
  {
    id: 1,
    title: '개발자 되고싶은 분들!?',
    src: 'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg',
  },
  {
    id: 2,
    title: '성장하는 개발자가 되려면?',
    src: 'https://static.wanted.co.kr/images/banners/1484/b2853456.jpg',
  },
  {
    id: 3,
    title: '개발자 성장 비결 공개!',
    src: 'https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg',
  },
];

const AUTO_TRANSITION_DURATION = 3500;
const SELF_TRANSITION_DURATION = 500;

export const MainCarousel = () => {
  const [prevIndex, setPrevIndex] = useState(1);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [shouldTransition, setShouldTransition] = useState(true);

  const slideLeft = () => {
    if (isButtonClicked || !shouldTransition) return;

    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, SELF_TRANSITION_DURATION);

    const nextIndex = prevIndex - 1;
    setPrevIndex(nextIndex);

    if (nextIndex === 0) {
      setTimeout(() => {
        setShouldTransition(false);
        setPrevIndex(CARD_LIST_DATA.length);
      }, SELF_TRANSITION_DURATION);
    }
  };

  const slideRight = () => {
    if (isButtonClicked || !shouldTransition) return;

    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, SELF_TRANSITION_DURATION);

    const nextIndex = prevIndex + 1;
    setPrevIndex(nextIndex);

    if (nextIndex === CARD_LIST_DATA.length + 1) {
      setTimeout(() => {
        setShouldTransition(false);
        setPrevIndex(1);
      }, SELF_TRANSITION_DURATION);
    }
  };

  useEffect(() => {
    console.log(prevIndex);
    const interval = setInterval(() => {
      slideRight();
    }, AUTO_TRANSITION_DURATION);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    console.log(shouldTransition);
    if (shouldTransition) return;

    const timeout = setTimeout(() => {
      setShouldTransition(true);
    }, SELF_TRANSITION_DURATION);
    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timeout);
  }, [shouldTransition]);

  return (
    <div>
      <S.Wrapper>
        <S.CardList
          style={{
            transform: `translateX(-${prevIndex * 100}%)`,
            transition: shouldTransition ? `all ${SELF_TRANSITION_DURATION}ms ease-in-out` : 'none',
          }}
        >
          <CarouselCard data={CARD_LIST_DATA[CARD_LIST_DATA.length - 1]} />
          {CARD_LIST_DATA.map((data) => {
            return <CarouselCard key={data.id} data={data} prevIndex={prevIndex} />;
          })}
          <CarouselCard data={CARD_LIST_DATA[0]} />
        </S.CardList>
      </S.Wrapper>
    </div>
  );
};
