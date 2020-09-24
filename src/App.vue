<template>
  <div class="contents">
    <h1>문성영 포트폴리오</h1>
    <div class="wrap">
      <!-- Profile -->
      <section class="profile">
        <h2 id="profile"><a href="#profile" title="Profile 바로 가기" class="anchor">링크</a>Profile</h2>
        <h3><span class="emoji">👨‍💻</span> 문성영</h3>
        <p>
          <span v-for="tag in tags" :key="tag.id">{{ tag.txt }}</span>
          <span><a href="http://lunch.moonspam.com" target="_blank">맛집탐방</a></span>
          <span><a href="//www.instagram.com/tonkatstagram" target="_blank">돈가스_덕후</a></span>
        </p>
        <ul>
          <li v-for="link in links" :key="link.id">
            <a :href="'//'+link.url" target="_blank">{{ link.txt }}</a>
          </li>
        </ul>
      </section>
      <!-- Skill -->
      <section>
        <h2 id="skills"><a href="#skills" title="Skills 바로 가기" class="anchor">링크</a>Skills</h2>
        <ul class="skill">
          <li v-for="skill in skills" :key="skill.id" :class="'per_'+skill.per" :title="skill.per+'%'"><span>{{ skill.txt }}</span></li>
        </ul>
      </section>
      <!-- Experience -->
      <section>
        <h2 id="experience"><a href="#experience" title="Experience 바로 가기" class="anchor">링크</a>Experience</h2>
        <section v-for="company in companys" :key="company.id" class="company">
          <div class="company_name">
            <h4>{{ company.name }}</h4>
            <span v-if="company.position" class="position">{{ company.position }}</span>
            <span v-if="company.date" class="date">{{ company.date }}</span>
          </div>
          <section v-if="company.projects" class="project">
            <div v-for="project in company.projects" :key="project.id">
              <h5>{{ project.title }} <small v-if="project.date">{{ project.date }}</small></h5>
              <ul v-if="project.links" class="url">
                <li v-for="link in project.links" :key="link.id">
                  <a :href="'//'+link.url" target="_blank">{{ link.txt }}</a>
                </li>
              </ul>
              <blockquote v-if="project.info" :cite="project.info.cite" v-html="project.info.txt"></blockquote>
              <ul v-if="project.todos" class="todo">
                <li v-for="todo in project.todos" :key="todo.id">
                  <span v-html="todo.txt"></span> <a v-if="todo.url" :href="'//'+todo.url" class="link" target="_blank" :title="todo.title">링크 이동</a>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </section>
      <!-- Footer -->
      <footer>Copyright &copy; 2018 by Moonspam. All right reserved.<br><a href="https://github.com/moonspam/moonspam-portfolio">Check it out Github</a></footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tags: [
        { id: 1, txt: '호기심_많은' },
        { id: 2, txt: '프론트엔드_개발자' },
        { id: 3, txt: '자연산_파마머리' },
        { id: 4, txt: '품절남' },
        { id: 5, txt: '서울_관악구_주민' },
        { id: 6, txt: '부산이_고향' },
        { id: 7, txt: '화장실에서_아이디어_창출하기' },
        { id: 8, txt: '조조_영화' },
        { id: 9, txt: '겜돌이' },
      ],
      links: [
        { id: 1, url: 'moonspam.github.io', txt: 'Blog' },
        { id: 2, url: 'codepen.io/moonspam', txt: 'CodePen' },
        { id: 3, url: 'github.com/moonspam', txt: 'Github' },
      ],
      skills: [
        { id: 1, per: 90, txt: 'HTML' },
        { id: 2, per: 90, txt: 'CSS' },
        { id: 3, per: 80, txt: 'Sass' },
        { id: 4, per: 80, txt: 'Less' },
        { id: 5, per: 50, txt: 'Javascript' },
        { id: 6, per: 70, txt: 'jQuery' },
        { id: 7, per: 30, txt: 'Node' },
        { id: 8, per: 40, txt: 'Git' },
        { id: 9, per: 40, txt: 'Github' },
        { id: 10, per: 40, txt: 'SVN' },
      ],
      companys: [
        {
          id: 1,
          name: '넥슨코리아',
          date: '2018.06 ~ 현재',
        },
        {
          id: 2,
          name: '(주)액토즈소프트',
          position: '과장',
          date: '2013.05 ~ 2018.06',
          projects: [
            {
              id: 1,
              title: '온라인 게임 서비스 운영',
              date: '2015.12 ~ 2018.06',
              links: [
                { id: 1, url: 'ff14.co.kr', txt: 'ff14.co.kr' },
                { id: 2, url: 'latale.happyoz.com', txt: 'latale.happyoz.com' },
                { id: 3, url: 'us.dragonnest.com', txt: 'us.dragonnest.com' },
              ],
              todos: [
                { id: 1, txt: '파이널판타지14, 드래곤네스트, 라테일 등 자사 온라인게임<br>프로모션/홈페이지 제작' },
                { id: 2, txt: '협업을 위한 가이드 제작 및 자동화 작업환경 구축 (Webpack, Sass)', url: 'github.com/moonspam/webpack-base-template', title: 'GitHub' },
                { id: 3, txt: 'SVN을 이용한 버전 관리' },
              ],
            },
            {
              id: 2,
              title: '모바일 게임 서비스 운영',
              date: '2013.05 ~ 2018.06',
              todos: [
                { id: 1, txt: '드래곤네스트M, 확산성 밀리언 아서, 강철의 기사 등 자사 모바일게임<br>프로모션/홈페이지 제작' },
                { id: 2, txt: '모바일 플랫폼 Chef SDK UI 개발 (인증, 빌링, 통계, 쿠폰)' },
                { id: 3, txt: '사용성 테스트 사이트 제작' },
              ],
            },
            {
              id: 3,
              title: 'WEGL eSports 사이트 개발 관리',
              date: '2017.06 ~ 2017.10',
              info: {
                cite: 'http://wegl.com/About/WEGL#About',
                txt: '모두를 위한 e스포츠(eSports for everyone!)라는 슬로건 아래 2017년 탄생한 글로벌 e스포츠 대회를 소개하는 WEGL 공식 사이트입니다.',
              },
              links: [
                { id: 1, url: 'wegl.com', txt: 'wegl.com' },
              ],
              todos: [
                { id: 1, txt: '반응형 웹, 웹 표준', url: '' },
                { id: 2, txt: '자동화 도구를 이용한 작업환경 구축 (Grunt, Less)', url: 'https://github.com/moonspam/grunt.js-template', title: 'GitHub' },
              ],
            },
          ],
        },
        {
          id: 3,
          name: '홈스테드(주)',
          position: '주임',
          date: '2011.05 ~ 2012.09',
          projects: [
            {
              id: 1,
              title: '온라인 서비스 운영',
              todos: [
                { id: 1, txt: '신규 소셜 미디어 서비스 구축' },
                { id: 2, txt: '홈스테드 사이트 제작 관리' },
                { id: 3, txt: '소셜 미디어 운영' },
                { id: 4, txt: '쇼핑몰 제작 및 관리' },
              ],
            },
          ],
        },
        {
          id: 4,
          name: '(주)놀터',
          position: '사원',
          date: '2009.03 ~ 2011.02',
          projects: [
            {
              id: 1,
              title: '화장품 도매 거래 사이트 동동구리무 제작',
              date: '2010.02 ~ 2011.02',
              links: [
                { id: 1, url: 'ddcos.co.kr', txt: 'ddcos.co.kr' },
              ],
            },
            {
              id: 2,
              title: '여행 포털 서비스 놀터 제작',
              date: '2009.03 ~ 2010.02',
              todos: [
                { id: 1, txt: '웹 표준, 웹 접근성' },
                { id: 2, txt: '한국관광공사 제휴 서비스 지원' },
              ],
            },
          ],
        },
        // {
        //   id: 0,
        //   name: '',
        //   position: '',
        //   date: '',
        //   projects: [
        //     {
        //       id: 0,
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
    }
  },
  mounted() {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=${process.env.OWM_ID}`)
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
        urls: ['//fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap'],
      },
    });
  },
}
</script>
