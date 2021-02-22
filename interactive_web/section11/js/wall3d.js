(function () {
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const selectCharacterElem = document.querySelector('.select-character');
    const mousePos = { x: 0, y: 0 }; // 마우스 포인터로 셋팅하려고 함
    let maxScrollValue; // 처음에 값을 선언해 놓으면 화면이 리사이즈 되었을 때 값이 바뀌지 않아서 함수로 만들어서 
    //리사이즈 되었을 때, 값이 변경되도록 만들어 줌
    

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight; // 최대 스크롤 높이
        // 전체스크롤 영역에서 보이는 화면 높이를 빼준다음에 내가 어느정도 스크롤을 했는지 확인이 필요함 
    }

    window.addEventListener('scroll', function () { // 스크롤 한것에 따라서 house의 transform translateZ를 변경해줄 예정
        // 내가 얼마나 스크롤을 했는지 확인해야함  스크롤 이벤트를 주기 위해서 body의 height를 강제로 늘려줌
        const scrollPer = pageYOffset / maxScrollValue; // 내가 얼마나 스크롤을 했는지 비율을 계산함
        const zMove = scrollPer * 980 - 490; // 스크롤을 하기전엔 -490이었는데 스크롤하면서 0이 되면서 바로 훅 다가오는 느낌이 들어서 -490을 빼줌
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
        // progress bar
        barElem.style.width = scrollPer * 100 + '%';
    }); //, false 가 기본값 

    // 마우스가 움직일 때 발생하는 이벤트 
    window.addEventListener('mousemove', function (e) {
        //마우스를 움직일때 현재 위치를 알아오는 방법 
       // console.log(e.clientX);
       // console.log(e.clientY);
        //마우스가 가운데에 있을 때에는 동작하지 않아야 하고, 오른쪽으로 갔을때, 왼쪽으로 갔을 때 이동해야 하므로 가공이 필요하다
        //회전각을 계산한다. 
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        this.console.log(mousePos);
        //왼쪽 끝으로 갈수록 x는 -1이 가까워지고 오른쪽으로 갈수록  1이 되어간다.
        // 위로 갈수록 y는 +1에 가까워지고 아래로 갈수록 -1이 되어간다. 
        // stage element를 회전 시킨다.
        // x축을 기준으로 회전하는 건 마우스 y 위치에 영향을 받고
        // y축을 기준으로 회전하는건 마우스 포지션 x의 위치에 영향을 받는다. 
        stageElem.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' + (mousePos.x * 5) + 'deg)';
    });

    window.addEventListener('resize', resizeHandler);

    stageElem.addEventListener('click', function (e) {
        new Character({
            xPos: e.clientX / window.innerWidth * 100,
            speed: Math.random() * 0.5 + 0.2
        });
    });

    selectCharacterElem.addEventListener('click', function (e) {
        const value = e.target.getAttribute('data-char');
        document.body.setAttribute('data-char', value);
    });

    resizeHandler();

})();
