<template>
  <div class="contents">
    <h1>문성영 포트폴리오</h1>
    <div class="wrap">
      <!-- Profile -->
      <section class="profile">
        <h2 id="profile"><a href="#profile" title="Profile 바로 가기" class="anchor">링크</a>Profile</h2>
        <h3><span class="emoji">👨‍💻</span> 문성영</h3>
        <p>
          <span v-for="tag in gTags" :key="tag.id">{{ tag.txt }}</span>
          <span><a href="http://lunch.moonspam.com" target="_blank">맛집탐방</a></span>
          <span><a href="//www.instagram.com/tonkatstagram" target="_blank">돈가스_덕후</a></span>
        </p>
        <ul>
          <li v-for="link in gLinks" :key="link.id">
            <a :href="'//'+link.url" target="_blank">{{ link.txt }}</a>
          </li>
        </ul>
      </section>
      <!-- Skill -->
      <section>
        <h2 id="skills"><a href="#skills" title="Skills 바로 가기" class="anchor">링크</a>Skills</h2>
        <ul class="skill">
          <li v-for="skill in gSkills" :key="skill.id" :class="'per_'+skill.per" :title="skill.per+'%'"><span>{{ skill.txt }}</span></li>
        </ul>
      </section>
      <!-- Experience -->
      <section>
        <h2 id="experience"><a href="#experience" title="Experience 바로 가기" class="anchor">링크</a>Experience</h2>
        <section v-for="company in gCompanys" :key="company.id" class="company">
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
import { defineComponent, ref, onMounted, nextTick } from 'vue';
import { companys, links, skills, tags } from './js/data';
import axios from 'axios';

export default defineComponent({
  setup() {
    const gTags = ref(tags);
    const gLinks = ref(links);
    const gSkills = ref(skills);
    const gCompanys = ref(companys);

    onMounted(() => {
      nextTick(() => {
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
            urls: ['//fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap'],
          },
        });
      });
    });

    return { gTags, gLinks, gSkills, gCompanys }
  }
});
</script>
