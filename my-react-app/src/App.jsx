import Card from "./Card"
import Header from './Header';
import Button from "./Button";
import Student from "./Students";
function App() {
  return (
  <div>
    <Card/>
    <Card/>
    <Card/>
    <Student name="mewomeow" age={30} isStudent={true}/>
    <Student name="Patric" age={42} isStudent={false}/>
    <Student name="squidward" age={50} isStudent={false}/>
    <Student name="sandy" age={27} isStudent={true}/>
    <Student/>
    <Student name="Larry"/>

    <Button/>
  </div>
 );
}

export default App
