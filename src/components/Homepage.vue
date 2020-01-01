<template>
  <div>
    <section class="intro-section">
      <div class="intro-section__items">
        <p class="intro-section__text">Покупайте бизнес сервисы онлайн, оплатив с мобильного счета вашей организации</p>
        <h1 class="intro-section__title">Цифровые решения для вашего бизнеса</h1>
        <b-button class="intro-section__btn">Смотреть все сервисы</b-button>
      </div>
    </section>

    <div class="solutions">
      <h4 class="solutions__subtitle solutions__subtitle_task-header">Какую задачу вы решаете?</h4>
      <ul class="solutions__task-list">
        <li class="solutions__task-components solutions__task-components_red">Реклама и продвижение</li>
        <li class="solutions__task-components">Автоматизация процессов</li>
        <li class="solutions__task-components">IT и безопасность</li>
        <li class="solutions__task-components">Работа с клиентской базой</li>
      </ul>

      <flickity ref="flickity" :options="flickityOptions">
        <div class="carousel-cell mts-card">
          <img src="../assets/img/logo.svg" class="mts-card__img"/>
          <h4 class="mts-card__title">Голосовой<br>робот</h4>
          <p class="mts-card__text mts-card__text_robot">Облачная платформа голосового робота для совершения автоматических звонков по готовым сценариям</p>
          <div class="mts-card__number">
            <img src="../assets/img/10.svg"/>
            <img src="../assets/img/звонков_бесплатно.svg"/>
          </div>
          <b-button class="mts-card__btn">Подробнее</b-button>
        </div>
        <div class="carousel-cell mts-card">
          <img src="../assets/img/logo.svg" class="mts-card__img"/>
          <h4 class="mts-card__title">Голосовой<br>робот</h4>
          <p class="mts-card__text mts-card__text_robot">Облачная платформа голосового робота для совершения автоматических звонков по готовым сценариям</p>
          <div class="mts-card__number">
            <img src="../assets/img/10.svg"/>
            <img src="../assets/img/звонков_бесплатно.svg"/>
          </div>
          <b-button class="mts-card__btn">Подробнее</b-button>
        </div>
        <div class="carousel-cell mts-card">
          <img src="../assets/img/logo.svg" class="mts-card__img"/>
          <h4 class="mts-card__title">МТС Коммуникатор</h4>
          <p class="mts-card__text mts-card__text_communicator">Услуга для корпоративных клиентов МТС, позволяющая организовать простой способ общения с клиентами</p>
          <img src="../assets/img/мес.svg" class="mts-card__number"/><br>
          <b-button class="mts-card__btn">Подробнее</b-button>
        </div>
        <div class="carousel-cell mts-card">
          <img src="../assets/img/logo.svg" class="mts-card__img"/>
          <h4 class="mts-card__title">Цифровой ассистент</h4>
          <p class="mts-card__text mts-card__text_assistant">Наймите электронного сотрудника для общения с клиентами. Готовые решения для корпоративных клиентов МТС</p>
          <b-button class="mts-card__btn">Подробнее</b-button>
        </div>
        <div class="carousel-cell mts-card">
          <img src="../assets/img/push.svg" class="mts-card__img"/>
          <h4 class="mts-card__title mts-card__title_push">Push for site</h4>
          <p class="mts-card__text mts-card__text_push">Все, что нужно, чтобы лучше общаться с посетителями сайта и превращать их в покупателей.</p>
          <img src='../assets/img/от1592₽.svg' class="mts-card__number"/><br>
          <b-button class="mts-card__btn">Подробнее</b-button>
        </div>
      </flickity>

      <h4 class="mts-services solutions__subtitle solutions__subtitle_popular-service">Популярные сервисы</h4>
      <b-row class="justify-content-lg-center">
        <b-col lg="6" xl="5" class="services services_first-row">
          <div class="services__card services__card_cloud">
            <img src="../assets/img/text_cloud.svg" class="services__card-img-cloud"/>
            <div class="services__card-title">МТС Маркетолог</div>
            <p class="services__card-text">Используйте различные каналы коммуникации: SMS, ,E-mail, Viber, Баннеры, Социальные сети</p>
          </div>
        </b-col>
        <b-col lg="6" xl="5" class="services  services_first-row">
          <div class="services__card services__card_phone">
            <img src="../assets/img/phone.svg" class="services__card-img-phone"/>
            <div class="services__card-title">Бесплатный вызов 8800</div>
            <p class="services__card-text">У надежного бизнеса всегда есть номер 8800</p>
          </div>
        </b-col>
        </b-row>
      <b-row class="justify-content-lg-center">
        <b-col lg="6" xl="5" class="services">
          <div class="services__card services__card_cloudmts">
            <img src="../assets/img/cloud.svg" class="services__card-img-cloudmts"/>
            <div class="services__card-title">#CloudMTS</div>
            <p class="services__card-text">Экосистема облачных сервисов для крупного бизнеса и корпораций</p>
          </div>
        </b-col>
        <b-col lg="6" xl="5" class="services">
          <div class="services__card services__card_worker">
            <img src="../assets/img/worker.svg" class="services__card-img-worker"/>
            <div class="services__card-title">Виртуальная АТС</div>
            <p class="services__card-text">Простой способ телефонизации офиса без дополнительных затрат на оборудование</p>
          </div>
        </b-col>
      </b-row>

      <div class="shopping-container">
        <h4 class="solutions__subtitle solutions__subtitle_shopping">Покупка с корпоративного счета в пару кликов</h4>
        <ul class="shopping-list">
          <li class="shopping-list__img-bag">В Бизнес маркете вы можете купить полезные сервисы для бизнеса онлайн</li>
          <li class="shopping-list__img-money">Оплата с вашего корпоративного мобильного счета</li>
          <li class="shopping-list__img-ticket">Счет за услуги в привычном формате</li>
          <li class="shopping-list__img-tv">Покупка и доступ к услугам в режиме онлайн</li>
          <li class="shopping-list__img-code">Просто выберите номер корпоративный мобильный номер, с которого вы хотите оплатить бизнес услугу. Онлайн сервисы предоставляются сразу же после оплаты.</li>
        </ul>
        <b-button class="shopping-list__btn">Смотреть все сервисы</b-button>
      </div>

    </div>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  name: 'Homepage',
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 1,
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false
      }
    }
  }
}
</script>
