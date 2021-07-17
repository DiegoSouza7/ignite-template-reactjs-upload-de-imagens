import { Grid, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [urlImg, setUrlImg] = useState('');

  function handleViewImage(url: string) {
    setUrlImg(url);
    onOpen();
  }

  return (
    <>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gap="40px"
      >
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </Grid>

      {urlImg && (
        <ModalViewImage
          isOpen={isOpen}
          imgUrl={urlImg}
          onClose={onClose}
        />
      )}
    </>
  );
}
