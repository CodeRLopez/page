import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Card from '../Elements/Card';

const CardsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center
`

const Cards = () => {
  return (
    <CardsContainer>
      <Card>
        <Image src={'/static/img/technologies/html.png'} alt={''} width={120} height={100} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/css.png'} alt={''} width={100} height={95} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/javascript.png'} alt={''} width={90} height={90} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/react.png'} alt={''} width={90} height={80} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/vue.png'} alt={''} width={90} height={80} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/node.png'} alt={''} width={80} height={85} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/next.png'} alt={''} width={130} height={70} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/laravel.png'} alt={''} width={95} height={90} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/express.png'} alt={''} width={120} height={100} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/nest.png'} alt={''} width={190} height={100} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/typescript.png'} alt={''} width={90} height={90} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/mongo.png'} alt={''} width={90} height={90} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/postgresql.png'} alt={''} width={90} height={90} />
      </Card>
      <Card>
        <Image src={'/static/img/technologies/mysql.png'} alt={''} width={150} height={100} />
      </Card>
    </CardsContainer>
  );
};

export default Cards;
