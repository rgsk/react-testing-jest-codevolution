import { IGreetProps } from './greet.types';

const Greet: React.FC<IGreetProps> = ({ name }) => {
  return <div>Hello {name}</div>;
};
export default Greet;
