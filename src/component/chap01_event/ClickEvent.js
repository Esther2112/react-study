import React from 'react';
import './style.css';

const ClickEvent = () => {
    // const $btn1 = document.getElementById('btn1');
    // $btn1.onclick = e => {
    //     alert('클릭 잘했다!');
    // };

    const greeting = e => {
        alert('안녕????헤헿ㅎ헤헤히히히힣');
    };

    const changeBox = e => {
        const $box = document.querySelector('.box');
        $box.style.background = 'skyblue';
        $box.style.width = '200px';
        $box.style.height = '200px';
    }

    return (
        <>
            <button id = 'btn1' onClick={ ()=> alert('Clicked!')}>Click Me</button>
            <button id = 'btn2' onClick={greeting}>Click 2</button>
            <button id = 'btn3' onMouseOver={changeBox}>Click 3</button>

            <div className='box'></div>
        </>
    )
}

export default ClickEvent;