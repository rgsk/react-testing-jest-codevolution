interface IGreetProps {
  name?: string;
}
const Greet: React.FC<IGreetProps> = ({ name }) => {
  return <div>Hello {name}</div>;
};
export default Greet;
