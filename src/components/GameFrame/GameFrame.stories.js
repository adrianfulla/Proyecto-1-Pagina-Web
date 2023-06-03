import GameFrame from './GameFrame.jsx';

export default {
  title: 'Componentes/GameFrame',
  component: GameFrame,
  tags: ['autodocs'],
  argTypes: {
    link: { control: 'string' },
    image: { control: 'string' },
    title: { control: 'string' },
  },
};

export const GameF = {
  args: {
    link: 'https://store.steampowered.com/app/546560/HalfLife_Alyx/',
    image: 'https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_alyx.jpg',
    title: 'Half-Life: Alyx',
  },
};
