const app = new Vue({
  el: '#app',
  data: {
    tags: [
      { txt: '호기심_많은' },
      { txt: '프론트엔드_개발자' },
      { txt: '자연산_파마머리' },
      { txt: '품절남' },
      { txt: '서울_관악구_주민' },
      { txt: '부산이_고향' },
      { txt: '화장실에서_아이디어_창출하기' },
      { txt: '조조_영화' },
      { txt: '겜돌이' },
    ],
    links: [
      { url: 'moonspam.github.io', txt: 'Blog' },
      { url: 'codepen.io/moonspam', txt: 'CodePen' },
      { url: 'github.com/moonspam', txt: 'Github' },
    ],
    skills: [
      { per: 90, txt: 'HTML' },
      { per: 90, txt: 'CSS' },
      { per: 80, txt: 'Sass' },
      { per: 80, txt: 'Less' },
      { per: 50, txt: 'Javascript' },
      { per: 70, txt: 'jQuery' },
      { per: 30, txt: 'Node' },
      { per: 40, txt: 'Git' },
      { per: 40, txt: 'Github' },
      { per: 40, txt: 'SVN' },
    ],
    companys: [
      {
        name: '넥슨코리아',
        date: '2018.06 ~ 현재',
      },
      {
        name: '(주)액토즈소프트',
        position: '과장',
        date: '2013.05 ~ 2018.06',
        projects: [
          {
            title: '온라인 게임 서비스 운영',
            date: '2015.12 ~ 2018.06',
            links: [
              { url: 'ff14.co.kr', txt: 'ff14.co.kr' },
              { url: 'latale.happyoz.com', txt: 'latale.happyoz.com' },
              { url: 'us.dragonnest.com', txt: 'us.dragonnest.com' },
            ],
            todos: [
              { txt: '파이널판타지14, 드래곤네스트, 라테일 등 자사 온라인게임<br>프로모션/홈페이지 제작' },
              { txt: '협업을 위한 가이드 제작 및 자동화 작업환경 구축 (Webpack, Sass)', url: 'github.com/moonspam/webpack-base-template', title: 'GitHub' },
              { txt: 'SVN을 이용한 버전 관리' },
            ],
          },
          {
            title: '모바일 게임 서비스 운영',
            date: '2013.05 ~ 2018.06',
            todos: [
              { txt: '드래곤네스트M, 확산성 밀리언 아서, 강철의 기사 등 자사 모바일게임<br>프로모션/홈페이지 제작' },
              { txt: '모바일 플랫폼 Chef SDK UI 개발 (인증, 빌링, 통계, 쿠폰)' },
              { txt: '사용성 테스트 사이트 제작' },
            ],
          },
          {
            title: 'WEGL eSports 사이트 개발 관리',
            date: '2017.06 ~ 2017.10',
            info: {
              cite: 'http://wegl.com/About/WEGL#About',
              txt: '모두를 위한 e스포츠(eSports for everyone!)라는 슬로건 아래 2017년 탄생한 글로벌 e스포츠 대회를 소개하는 WEGL 공식 사이트입니다.',
            },
            links: [
              { url: 'wegl.com', txt: 'wegl.com' },
            ],
            todos: [
              { txt: '반응형 웹, 웹 표준', url: '' },
              { txt: '자동화 도구를 이용한 작업환경 구축 (Grunt, Less)', url: 'https://github.com/moonspam/grunt.js-template', title: 'GitHub' },
            ],
          },
        ],
      },
      {
        name: '홈스테드(주)',
        position: '주임',
        date: '2011.05 ~ 2012.09',
        projects: [
          {
            title: '온라인 서비스 운영',
            todos: [
              { txt: '신규 소셜 미디어 서비스 구축' },
              { txt: '홈스테드 사이트 제작 관리' },
              { txt: '소셜 미디어 운영' },
              { txt: '쇼핑몰 제작 및 관리' },
            ],
          },
        ],
      },
      {
        name: '(주)놀터',
        position: '사원',
        date: '2009.03 ~ 2011.02',
        projects: [
          {
            title: '화장품 도매 거래 사이트 동동구리무 제작',
            date: '2010.02 ~ 2011.02',
            links: [
              { url: 'ddcos.co.kr', txt: 'ddcos.co.kr' },
            ],
          },
          {
            title: '여행 포털 서비스 놀터 제작',
            date: '2009.03 ~ 2010.02',
            todos: [
              { txt: '웹 표준, 웹 접근성' },
              { txt: '한국관광공사 제휴 서비스 지원' },
            ],
          },
        ],
      },
      // {
      //   name: '',
      //   position: '',
      //   date: '',
      //   projects: [
      //     {
      //       title: '',
      //       date: '',
      //       links: [
      //         { url: '', txt: '' },
      //       ],
      //       todos: [
      //         { txt: '', url: '', title: '' },
      //       ]
      //     },
      //   ],
      // },
    ],
  },
  mounted() {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=e8337d945c60e268e0795d92f78d7fe3')
      .then((response) => {
        document.getElementById('BG').classList.add(`weather_${response.data.weather[0].icon}`);
      })
      .catch((error) => {
        document.getElementById('BG').classList.add('weather_01d');
        console.log(error);
      });

    WebFont.load({
      custom: {
        families: ['Noto Sans KR'],
        urls: ['//fonts.googleapis.com/earlyaccess/notosanskr.css'],
      },
    });
  },
});
