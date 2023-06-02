import UserFrame from './UserFrame.jsx';

export default {
  title: 'Componentes/UserFrame',
  component: UserFrame,
  tags: ['autodocs'],
  argTypes: {
    UsersOnline: { control: 'number' },
    UsersInGame: { control: 'number' },
  },
};

export const First = {
  args: {
    UsersOnline: '20039248',
    UsersInGame: '4551088',
  },
};
