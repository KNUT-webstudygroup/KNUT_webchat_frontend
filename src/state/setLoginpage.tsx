import { loginedStateSetter,loginedState } from '../states'; //... wait...
import { useSetRecoilState, useRecoilStateLoadable,useRecoilState } from 'recoil';


export default ()=>{
    const [a,b] = useRecoilState(loginedState)
    b(true);
    console.log('p')
    return (
        <div></div>
    );
}