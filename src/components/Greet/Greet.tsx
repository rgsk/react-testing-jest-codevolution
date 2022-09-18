import { IGreetProps } from './greet.types';

const Greet: React.FC<IGreetProps> = ({ name }) => {
  return <div>Hello {name ? name : 'Guest'}</div>;
};
export default Greet;
