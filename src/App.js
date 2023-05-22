import logo from './logo.svg';
import './App.css';
import SayHello from "./SayHello";
import SubmitEvent from "./component/chap01_event/SubmitEvent";

function App() {

    const looping = () => {
        const helloList =[];
        for(let i = 0; i < 5; i++) {
            helloList.push(<SayHello />);
        }
        return helloList;
    }

    //jsx 문법( return() 내부 )에서는 스크립트 코드를 직접 사용이 불가능
    //{}로 묶어서 함수호출이나 변수참조가 가능하고 세미콜론 생략하는 문법으로 사용
  return (
    <>
        <SubmitEvent />
    </>
  );
}

export default App;
