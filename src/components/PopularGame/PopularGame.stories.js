import PopularGame from './PopularGame.jsx'

export default {
  title: 'Componentes/PopularGame',
  component: PopularGame,
  tags: ['autodocs'],
  argTypes: {
    link: { control: 'string' },
    image: { control: 'string' },
    title: { control: 'string' },
  },
}

export const PopGame = {
  args: {
    link: 'https://store.steampowered.com/app/546560/HalfLife_Alyx/',
    image: 'https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_alyx.jpg',
    title: 'Half-Life: Alyx',
  },
}
