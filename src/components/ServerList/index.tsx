import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton mentions={5}/>
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={10}/>
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={1}/>
      <ServerButton />
    </Container>
  )
}

export default ServerList;
