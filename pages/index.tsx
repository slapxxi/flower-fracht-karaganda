import { Swiper, SwiperSlide } from 'swiper/react';
import { Check, ChevronDown, ChevronUp, Mail, MapPin, Phone } from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Button } from 'components/Button';
import { Ecuador } from 'components/Ecuador';
import { DeliveryVis } from 'components/DeliveryVis';
import { Checkbox } from 'components/Checkbox';
import 'swiper/css';
import type { Swiper as TSwiper } from 'swiper';
import { useState } from 'react';
import { animated, useTransition } from '@react-spring/web';
import classNames from 'classnames';
import { Calculator } from '../components/Calculator';

let data = [
  { img: '/flower-1.jpg', title: 'Ecuador' },
  { img: '/flower-2.jpg', title: 'Kenya' },
  { img: '/flower-3.jpg', title: 'Holland' },
  { img: '/flower-4.jpg', title: 'Israel' },
  { img: '/flower-5.jpg', title: 'Colombia' },
  { img: '/flower-6.jpg', title: 'Chile' },
];

let IndexPage = () => {
  let [activeIndex, setActiveIndex] = useState(0);
  let transition = useTransition([data[activeIndex].img], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  function handleSlideChange(swiper: TSwiper) {
    setActiveIndex(swiper.activeIndex);
  }

  function handleClick(index: number) {
    setActiveIndex(index);
  }

  return (
    <div>
      <svg className="absolute h-0 w-0" aria-hidden>
        <filter id="dim" x={0} y={0} width={1} height={1}>
          <feFlood floodColor="#6663" />
          <feComposite in2="SourceGraphic" />
        </filter>
      </svg>

      {/* hero */}
      <section className="hero relative px-4 py-8 lg:py-px lg:pr-7 lg:pl-0">
        {transition((style, item) => (
          <animated.img
            src={item}
            className="absolute top-0 -z-10 hidden h-full w-32 object-cover [filter:url(#dim)] lg:block xl:w-96"
            style={style}
          />
        ))}

        {/* summary container */}
        <div className="isolate lg:flex lg:justify-between lg:gap-2 lg:pl-36 lg:pt-14 xl:pl-[414px] xl:pr-wrap">
          <div className="lg:max-w-lg lg:pl-8">
            <h2 className="hero__subtitle">Flower Fracht Karaganda </h2>
            <h2 className="hero__title xl:mb-10">Авиаперевозка цветов</h2>
            <p className="hero__text">
              Занимаемся только АВИА перевозкой свеже срезанных цветов и растений из{' '}
              <strong>Эквадора, Кении, Колумбии, Чили, Голландии, Израиля</strong> до конечного заказчика.
            </p>
            <p className="hero__text">
              <strong>Максимальный срок доставки товара – 7 дней от заказа.</strong>
            </p>
          </div>
          {/* contact */}
          <div className="shrink-0 lg:w-64">
            <ul className="hidden flex-col gap-2 border-l pl-3.5 lg:flex">
              <li className="flex items-center gap-4 text-xs text-white">
                <Phone size={10} />
                <span>+7 (495) 737 8585</span>
              </li>
              <li className="flex items-center gap-4 text-xs text-white">
                <Mail size={10} />
                <a href="mailto:ffkaragandainfo@info.ru">ffkaragandainfo@info.ru</a>
              </li>
            </ul>
            <Button className="my-7 w-full">связаться с нами</Button>
          </div>
        </div>

        <div className="hidden lg:my-10 lg:flex lg:pl-7 xl:items-center xl:gap-8 xl:px-wrap">
          <Swiper onSlideChange={handleSlideChange} spaceBetween={16} slideToClickedSlide slidesPerView={5}>
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex" onClick={() => handleClick(i)}>
                  <div className="flex shrink-0 flex-col items-center gap-5">
                    <img src={item.img} className="h-32 w-20 object-cover xl:h-48 xl:w-32" />
                    <h2
                      className={classNames(
                        'text-xs font-medium uppercase',
                        activeIndex === i ? 'text-white' : 'text-gray-500',
                      )}
                    >
                      {item.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Ecuador width={200} className="shrink-0" />
        </div>

        <div className="max-w-sm touch-none overflow-hidden lg:hidden">
          <Swiper slidesPerView={1.15} spaceBetween={20}>
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-start gap-7">
                  <div className="flex basis-[32%] flex-col items-center gap-2.5">
                    <svg viewBox="0 0 90 140">
                      <image href={item.img} className="h-full w-full" preserveAspectRatio="xMidYMid slice" />
                    </svg>
                    <h2 className="text-2xs font-semibold uppercase text-navy-400">{item.title}</h2>
                  </div>
                  <div className="basis-1/2">
                    <Ecuador />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* about us */}
      <section className="section px-4 lg:px-7 xl:px-wrap">
        <div className="section__header xl:mb-14">
          <h2 className="section__subtitle mb-2.5">Flower Fracht Karaganda </h2>
          <h2 className="section__title">О нас в цифрах</h2>
        </div>

        <ul className="my-7 flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:grid-rows-2">
          {[
            {
              title: '7 лет',
              description: 'Успешно работаем уже более семи лет',
              icon: (
                <svg fill="none" viewBox="0 0 46 64">
                  <g clipPath="url(#a)">
                    <path
                      fill="#BCC9DA"
                      d="M46 4.1V41c0 1-.7 1.6-1.6 1.6H9.6v-.1c-1 0-1.7-.7-1.7-1.7V4.1c0-1 .7-1.7 1.6-1.7h5V.7c0-.4.4-.7.7-.7.4 0 .7.4.7.7v1.9h22.3V.7c0-.4.4-.7.7-.7.3 0 .6.4.6.7v1.9h5c.8-.1 1.5.6 1.5 1.5Z"
                      opacity={0.1}
                    />
                    <path
                      fill="#F3F3F3"
                      d="M1.7 64v-.2h-.2c-.9 0-1.5-.7-1.5-1.4V25.6c0-1 .7-1.5 1.5-1.5h5.1v-1.8c0-.3.3-.6.5-.6.3 0 .6.3.6.6v2h22.6v-2c0-.3.3-.6.5-.6s.5.3.5.6v2h5.2c.8 0 1.4.7 1.4 1.5v36.7c0 .9-.7 1.5-1.4 1.5H1.7ZM1 62.4c0 .3.2.5.5.5h34.8c.3 0 .6-.2.6-.5V32.5H1v29.9Zm.4-37.2c-.3 0-.5.1-.5.3v6h35.9v-6c0-.3 0-.3-.3-.3h-5.2v1.4c0 .2-.3.5-.5.5s-.6-.2-.6-.5V25H7.6v1.3c0 .2-.3.6-.5.6-.3 0-.6-.4-.6-.6V25H1.4Z"
                    />
                    <path fill="#9FCCFF" d="M14.6 57.7 23 40.6v-.8H13v-1.3h11.6V40l-8.5 17.8h-1.6Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h46v64H0z" />
                    </clipPath>
                  </defs>
                </svg>
              ),
            },
            {
              title: '775 тонн',
              description: 'Мы перевезли почти 780 тонн груза',
              icon: (
                <svg fill="none" viewBox="0 0 46 64">
                  <g clipPath="url(#a)">
                    <path
                      fill="#BCC9DA"
                      d="M46 .7v41.2c0 .46-.3.7-.7.7H8.15v.15c-.3-.07-.61-.39-.61-.7V.7c0-.39.3-.7.69-.7h37.01c.46 0 .77.4.77.7Z"
                      opacity={0.08}
                    />
                    <path
                      fill="#F3F3F3"
                      d="M.38 64c-.23-.16-.38-.31-.38-.55V22.11c0-.3.3-.54.54-.54h37.01c.39 0 .62.31.62.54V63.3c0 .39-.31.54-.54.54L.38 64Zm.77-1.25h36.1V22.66H24.1v13.76c0 .3-.3.54-.53.54-.08 0-.16 0-.31-.08l-4-2.26-4.37 2.19c-.08.07-.16.07-.3.07-.16 0-.24-.07-.32-.15-.07-.08-.23-.31-.23-.4V22.67H1.15v40.09Zm17.97-29.54c.08 0 .08 0 .23.08l3.77 2.27v-12.9h-8.15V35.4h.31l3.53-2.03c.08 0 .08 0 .16-.08h.08l.07-.08Z"
                    />
                    <path
                      fill="#9FCCFF"
                      d="M5.6 47.12c-.45 0-.68-.23-.68-.7s.23-.7.69-.7h8.6c.46 0 .69.23.69.7s-.23.7-.7.7H5.6Zm0 4.22c-.45 0-.68-.23-.68-.7s.23-.7.69-.7h10.75c.46 0 .69.23.69.7s-.23.7-.7.7H5.62Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h46v64H0z" />
                    </clipPath>
                  </defs>
                </svg>
              ),
            },
            {
              title: '94 %',
              description: 'Средний процент выполнения заказа: 94%',
              icon: (
                <svg fill="none" viewBox="0 0 46 64">
                  <g clipPath="url(#a)">
                    <path fill="#BCC9DA" d="M10.03 42.74V0H34.9L46 10.47v32.35l-35.97-.08Z" opacity={0.08} />
                    <path
                      fill="#F3F3F3"
                      d="M0 64V21.57h24.7l11.03 10.47V64H0Zm1.08-.78h33.5V32.66H23.93V22.58H1.08v40.64Zm23.77-31.8h9.03l-9.03-8.29v8.28Z"
                    />
                    <path
                      fill="#9FCCFF"
                      d="M6.4 50.48c-.38 0-.61-.23-.61-.62 0-.4.23-.63.62-.63h14.97c.39 0 .62.4.62.63 0 .39-.23.62-.62.62H6.41Zm0-4.84c-.38 0-.61-.24-.61-.63s.23-.62.62-.62h14.97c.39 0 .62.23.62.62 0 .4-.23.63-.62.63H6.41Zm0-4.93c-.38 0-.61-.23-.61-.62 0-.4.23-.63.62-.63h14.97c.39 0 .62.24.62.63s-.23.62-.62.62H6.41Zm0-4.84c-.38 0-.61-.24-.61-.63s.23-.62.62-.62h14.97c.39 0 .62.39.62.62 0 .4-.23.63-.62.63H6.41Zm0-4.85c-.38 0-.77-.23-.77-.62 0-.47.4-.63.78-.63h5.94c.39 0 .62.24.62.63s-.23.62-.62.62H6.41Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h46v64H0z" />
                    </clipPath>
                  </defs>
                </svg>
              ),
            },
            {
              title: '14 стран',
              description: 'Осуществляем перевозки из 14 стран',
              icon: (
                <svg fill="none" viewBox="0 0 46 64">
                  <g clipPath="url(#a)">
                    <path
                      fill="#BCC9DA"
                      d="m34.17 48.43-8.15-1.49v.08c-.4.86-1.26 1.41-2.12 1.41-.86 0-1.8-.55-2.11-1.33v-.08l-8.15 1.41c-.24 0-.4 0-.47-.16-.08-.07-.16-.39-.16-.54v-3.29c0-.16.08-.55.23-.63l7.21-4.61-.86-4.23v-7.12L2.51 34.66h-.16c-.08 0-.23 0-.4-.08-.23-.23-.3-.39-.3-.62V29.1c0-.16.07-.55.39-.63l2.58-1.64v-1.88c0-1.25.94-2.35 2.12-2.35.94 0 1.8.63 2.04 1.64v.08l2.5-1.48v-1.96c0-1.25.94-2.35 2.12-2.35.94 0 1.8.7 2.04 1.72v.08l4-2.34v-8.6c0-2.58.62-5.17 1.72-7.59C21.55.7 22.65 0 23.9 0c.24 0 .63 0 .78.08.95.39 1.73 1.1 2.04 1.95a19.17 19.17 0 0 1 1.5 7.28v8.76l3.99 2.35v-.08a2.15 2.15 0 0 1 2.04-1.72c1.17 0 2.11 1.1 2.11 2.35v1.95l2.5 1.5v-.09a2.08 2.08 0 0 1 2.05-1.64c.62 0 1.1.16 1.49.63.39.46.62 1.1.62 1.72v1.87l2.59 1.65c.15.08.39.39.39.62v4.85c0 .16-.08.47-.24.55-.07.08-.15.08-.39.08h-.15l-17-6.8v7.11l-.8 4.38 7.22 4.62c.15.08.23.4.23.63v3.28c0 .16-.08.47-.15.55-.16-.08-.24 0-.55 0Z"
                      opacity={0.08}
                    />
                    <path
                      fill="#F3F3F3"
                      d="m29.39 63.84-7.6-1.25v.16a2.05 2.05 0 0 1-1.8 1.1c-.8 0-1.57-.48-1.8-1.1v-.16h-.17l-7.36 1.25h-.24s-.08-.23-.08-.39v-2.9c0-.15.08-.38.16-.38l6.58-4.23-.78-3.91v-6.65L.63 51.48H.3c-.23-.15-.31-.31-.31-.39v-4.3c0-.16.08-.4.16-.4l2.5-1.48v-1.88c0-1.1.87-1.95 1.8-1.95.79 0 1.42.47 1.73 1.33v.23l2.59-1.4v-1.89c0-1.1.86-1.95 1.8-1.95.78 0 1.49.55 1.72 1.4v.24l.24-.08 3.68-2.19V29.1c0-2.19.47-4.45 1.49-6.72.55-.94 1.49-1.57 2.43-1.57.23 0 .4 0 .7.08.79.31 1.42.86 1.8 1.72a16.4 16.4 0 0 1 1.42 6.42v7.82l3.92 2.27v-.4c.23-.77.94-1.32 1.72-1.32.94 0 1.8.94 1.8 1.95v1.88l2.59 1.41v-.23c.23-.86.86-1.33 1.72-1.33.47 0 .86.15 1.33.54.32.4.48.86.48 1.33v1.8l2.5 1.49a.6.6 0 0 1 .16.4v4.3c0 .15-.08.3-.16.3-.08.09-.08.09-.23.09h-.16l-15.67-6.1v6.64l-.94 4 6.58 4.22a.6.6 0 0 1 .16.39v2.9c0 .15-.08.3-.08.39-.08.07-.16.15-.24.15l-.15-.08Zm-9.4-41.93c-.63 0-1.18.31-1.57 1.01a14.65 14.65 0 0 0-1.26 6.26v22.54l1.8 10.09c.08.7.47 1.1 1.1 1.1.63 0 1.02-.4 1.1-1.1l1.88-10.1V29.19c0-2.27-.4-4.22-1.25-6.02A2.15 2.15 0 0 0 20.61 22c-.4-.08-.55-.08-.63-.08Zm-9.02 38.88v2.04l6.9-1.26-.86-4.69-6.04 3.91Zm11.05.63 6.9 1.33v-2.2l-6.04-3.83-.86 4.7ZM.78 47.1v3.29l15.36-6.18v-6.19L.78 47.1Zm22.89-2.74 15.36 6.03v-3.37l-15.36-8.76v6.1Zm-19.2-2.19c-.47 0-.94.47-.94 1.02v1.25l1.8-1.02v-.55c0-.39-.47-.7-.86-.7Zm30.95-.16c-.47 0-.78.24-.86.7v.63l1.8 1.18v-1.49c0-.55-.4-1.02-.94-1.02ZM10.5 38.57c-.47 0-.94.47-.94 1.02v1.33l1.8-1.02v-.23c.08-.32 0-.55-.23-.79a.71.71 0 0 0-.63-.3Zm18.8.08c-.46 0-.93.47-.93 1.02v.23l1.88 1.02v-1.25c0-.55-.4-1.02-.94-1.02Z"
                    />
                    <path
                      fill="#9FCCFF"
                      d="M20.69 32.63h-1.26v15.72h1.26V32.63Zm.94-6.34c-.24-.7-.86-1.1-1.49-1.18-.7 0-1.25.47-1.49 1.18l-.47 1.48 1.25.47.4-1.48c0-.08.15-.16.23-.16.08 0 .16.08.24.16l.39 1.48 1.25-.47-.31-1.48Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h46v64H0z" />
                    </clipPath>
                  </defs>
                </svg>
              ),
            },
            {
              title: '+2/8 градуса',
              description: 'Соблюдение температур при перевозке',
              icon: (
                <svg fill="none" viewBox="0 0 46 64">
                  <g clipPath="url(#a)">
                    <path
                      fill="#BCC9DA"
                      d="M27.1 46.89A10.1 10.1 0 0 1 17.03 36.8a9.67 9.67 0 0 1 3.67-7.66V6.4c0-3.43 2.89-6.4 6.32-6.4a6.46 6.46 0 0 1 6.33 6.33v22.66a10.58 10.58 0 0 1 3.67 7.82 9.97 9.97 0 0 1-9.92 10.08Zm12.73-19.54c-.47 0-.78-.47-.78-.78 0-.31.47-.78.78-.78h5.39c.47 0 .78.47.78.78 0 .31-.47.78-.78.78h-5.39Zm-.23-5.47c-.47 0-.79-.47-.79-.78 0-.31.47-.78.79-.78h3.67c.3 0 .62.08.7.31.08.08.08.31.08.55 0 .47-.47.78-.78.78H39.6v-.08Zm.23-5.63c-.47 0-.78-.46-.78-.78 0-.47.47-.78.78-.78h5.39c.47 0 .78.47.78.78 0 .47-.47.78-.78.78h-5.39Zm-.23-5.39c-.47 0-.79-.47-.79-.78 0-.47.47-.78.79-.78h3.67c.3 0 .62.08.7.31.08.08.08.31.08.55 0 .47-.47.78-.78.78H39.6v-.08Zm.23-5.62c-.47 0-.78-.47-.78-.79 0-.3.47-.78.78-.78h5.39c.47.08.78.55.78.94 0 .47-.47.78-.78.78l-5.39-.15Z"
                      opacity={0.08}
                    />
                    <path
                      fill="#F3F3F3"
                      d="M8.75 64A8.82 8.82 0 0 1 0 55.1a8.45 8.45 0 0 1 3.28-6.8V27.57c0-3.04 2.5-5.62 5.47-5.62a5.6 5.6 0 0 1 5.46 5.55v20.47A9.5 9.5 0 0 1 17.49 55c0 2.43-.85 4.61-2.57 6.33A8.45 8.45 0 0 1 8.75 64Zm.23-40.8a4.43 4.43 0 0 0-4.37 4.46v21.02c0 .32-.08.32-.24.4a7.64 7.64 0 0 0 4.38 13.9c4.14 0 7.57-3.43 7.8-7.81 0-2.42-1.09-4.69-3.04-6.25 0-.08-.23-.4-.23-.47V27.5c0-2.27-2.03-4.3-4.3-4.3Zm11.25 23.14c-.24 0-.55-.4-.55-.55 0-.23.4-.54.55-.54h4.84c.23 0 .55.39.55.54 0 .24-.4.55-.55.55h-4.84Zm-.16-4.92c-.23 0-.55-.4-.55-.55 0-.24.4-.55.55-.55h3.28c.31 0 .47.08.47.16.08.08.08.31.08.39 0 .23-.4.55-.55.55h-3.28Zm.16-5.08c-.24 0-.55-.4-.55-.55 0-.23.4-.55.55-.55h4.84c.23 0 .55.4.55.55 0 .23-.4.55-.55.55h-4.84Zm-.16-4.93c-.23 0-.55-.39-.55-.54 0-.24.4-.55.55-.55h3.28c.31 0 .47.08.47.16.08.07.08.3.08.39 0 .23-.4.54-.55.54h-3.28Zm.31-5v-.08h-.15c-.24 0-.55-.39-.55-.54 0-.24.4-.55.55-.55h4.84c.23.08.55.31.55.63 0 .23-.4.54-.55.54h-4.69Z"
                    />
                    <path
                      fill="#9FCCFF"
                      d="M8.9 59.23a4.1 4.1 0 0 1-4.14-4.06c0-1.88 1.4-3.6 3.28-3.99h.16V27.43c0-.4.16-.63.62-.7.32 0 .7.46.7.7v23.83h.16a4.1 4.1 0 0 1 3.36 3.91c0 2.27-1.8 4.06-4.14 4.06Zm-.08-6.95a2.94 2.94 0 0 0-2.88 2.89c0 1.64 1.24 2.9 2.88 2.9a2.94 2.94 0 0 0 2.9-2.9c0-1.64-1.26-2.9-2.9-2.9Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h46v64H0z" />
                    </clipPath>
                  </defs>
                </svg>
              ),
            },
            {
              title: '174 клиента',
              description: 'С нами работают 174 клиента',
              icon: (
                <svg fill="none" viewBox="0 0 46 64">
                  <g clipPath="url(#a)">
                    <path
                      opacity={0.08}
                      d="M25.273 42.198c-11.558 0-20.881-9.377-20.881-21.021C4.392 9.455 13.715 0 25.272 0 36.754 0 46 9.455 46 21.177c0 11.644-9.247 21.02-20.727 21.02Z"
                      fill="#BCC9DA"
                    />
                    <path
                      d="M18.492 64C8.322 64 0 55.638 0 45.402c0-10.316 8.322-18.755 18.492-18.755 10.094 0 18.339 8.44 18.339 18.755C36.83 55.638 28.586 64 18.492 64Zm0-36.259c-9.477 0-17.49 8.127-17.49 17.739 0 9.69 7.859 17.504 17.49 17.504 9.555 0 17.26-7.893 17.26-17.504 0-9.768-7.782-17.739-17.26-17.739Z"
                      fill="#F3F3F3"
                    />
                    <path
                      d="M18.415 53.138c-3.005 0-5.855-1.875-6.857-4.689-.077-.234-.077-.312 0-.468.077-.235.23-.235.385-.235h.231c.308 0 .463.234.617.39.77 2.345 3.159 3.83 5.624 3.83 2.466 0 4.778-1.563 5.625-3.83.077-.312.308-.39.617-.39h.23c.232.078.309.234.386.234.077.235.077.313 0 .47-1.079 2.734-3.776 4.688-6.858 4.688ZM14.177 40.635c-.616 0-1.155-.547-1.155-1.172 0-.626.539-1.172 1.155-1.172.617 0 1.156.547 1.156 1.172 0 .703-.54 1.172-1.156 1.172ZM22.653 40.635c-.617 0-1.156-.547-1.156-1.172 0-.626.54-1.172 1.156-1.172.616 0 1.156.547 1.156 1.172 0 .703-.463 1.172-1.156 1.172Z"
                      fill="#9FCCFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h46v64H0z" />
                    </clipPath>
                  </defs>
                </svg>
              ),
            },
          ].map((item, i) => (
            <li className="card flex gap-5" key={i}>
              <div className="card__icon shrink-0">{item.icon}</div>
              <div className="flex flex-col gap-2">
                <h2 className="card__title">{item.title}</h2>
                <p className="card__description">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* locations */}
      <section className="section2 pb-0 lg:flex lg:px-7 lg:pt-0 xl:px-wrap">
        <div className="lg:pt-20">
          <div className="section__header px-4 xl:mb-14">
            <h2 className="section__subtitle mb-2.5 self-start">Flower Fracht Karaganda </h2>
            <h2 className="section__title self-start text-left">Откуда мы везем наши цветы?</h2>
          </div>
          <div className="my-7 space-y-4 px-4 xl:mb-20">
            <p className="section__text font-semibold text-white">
              По своей сути рыбатекст является альтернативой традиционному lorem ipsum
            </p>
            <p className="section__text">
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более
              менее осмысленного текста рыбы на русском языке.
            </p>
            <p className="section__text">
              Мы привозим цветы и растения в горшках из{' '}
              <strong className="text-white">Эквадора, Кении, Колумбии, Чили, Голландии, Израиля</strong> и
              доставляем их свежими во все регионы СНГ.
            </p>
          </div>
          <div className="px-4">
            <Button className="w-full">связаться с нами</Button>
          </div>
        </div>

        <DeliveryVis className="mt-12 lg:mt-0 lg:shrink-0 lg:basis-7/12" />
      </section>

      {/* calculator */}
      <section className="section lg:flex lg:justify-between lg:gap-7 lg:px-7 xl:gap-20 xl:px-wrap">
        <div className="relative hidden self-start border border-navy-700/30 bg-navy-800/50 p-5 pt-7 lg:block xl:pt-20">
          <div className="absolute right-5 top-6 flex items-center gap-3.5">
            <MapPin className="text-white" size={14} />
            <span className="text-sm uppercase text-white">Ecuador</span>
          </div>
          <div className="xl:hidden">
            <Calculator width={400} height={250} />
          </div>
          <div className="hidden xl:block">
            <Calculator width={650} height={300} />
          </div>
        </div>
        <div>
          <header className="section__header xl:mb-14">
            <h2 className="section__subtitle mb-2.5 lg:self-start">Flower Fracht Karaganda</h2>
            <h2 className="section__title self-start">Калькулятор доставки</h2>
          </header>
          <ol className="my-7">
            <li className="border-b border-slate-700/80 px-4 pb-8 lg:px-0">
              <div className="mb-6 flex items-center gap-3">
                <span className="square h-10 w-10 shrink-0 animate-pulse">01</span>
                <h2 className="section__text">Выберите страну по которой хотите узнать время доставки</h2>
              </div>
              <form>
                <RadioGroup.Root
                  className="grid grid-cols-2 gap-5"
                  defaultValue="default"
                  aria-label="country"
                >
                  {[
                    { name: 'Эквадор', id: 'ecuador' },
                    { name: 'Кения', id: 'kenya' },
                    { name: 'Колумбия', id: 'columbia' },
                    { name: 'Чили', id: 'chile' },
                    { name: 'Израиль', id: 'israel' },
                    { name: 'Голландия', id: 'holland' },
                    { name: 'Испания', id: 'spain' },
                  ].map((country) => (
                    <div className="flex items-center gap-3" key={country.id}>
                      <RadioGroup.Item className="radio__item" value={country.id} id={country.id}>
                        <RadioGroup.Indicator className="radio__indicator" />
                      </RadioGroup.Item>
                      <label className="text-xs text-white xl:text-sm" htmlFor={country.id}>
                        {country.name}
                      </label>
                    </div>
                  ))}
                </RadioGroup.Root>
              </form>
            </li>
            <li className="px-4 pb-0 pt-8 lg:px-0">
              <div className="mb-6 flex items-center gap-3">
                <span className="square h-10 w-10 shrink-0 animate-pulse">02</span>
                <h2 className="section__text">
                  Что бы рассчитать дату доставки выберите день когда планируете сделать заказ
                </h2>
              </div>
              <div>
                <div className="mb-6 flex gap-2.5 text-white">
                  <MapPin />
                  <h2 className="text-sm font-medium uppercase">Ecuador</h2>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-6">
                  <div className="text-sm font-medium text-white xl:text-base">День заказа</div>
                  <div className="text-xs text-slate-400 xl:text-base">
                    <Select.Root>
                      <Select.Trigger className="flex w-full justify-between" aria-label="language">
                        <div className="text-white">
                          <Select.Value placeholder="Дата" />
                        </div>
                        <Select.Icon className="text-blue-500">
                          <ChevronDown size={10} />
                        </Select.Icon>
                      </Select.Trigger>
                      <Select.Portal>
                        <Select.Content className="bg-navy-800 p-2 text-xs text-white shadow">
                          <Select.ScrollUpButton className="">
                            <ChevronUp />
                          </Select.ScrollUpButton>
                          <Select.Viewport>
                            <Select.Group>
                              <Select.Label className="font-semibold">Language</Select.Label>
                              <Select.Item value="july-24" className="flex items-center justify-between">
                                <Select.ItemText>24 июля</Select.ItemText>
                                <Select.ItemIndicator className="">
                                  <Check size={10} />
                                </Select.ItemIndicator>
                              </Select.Item>
                              <Select.Item value="july-27" className="flex items-center justify-between">
                                <Select.ItemText>27 июля</Select.ItemText>
                                <Select.ItemIndicator className="">
                                  <Check size={10} />
                                </Select.ItemIndicator>
                              </Select.Item>
                            </Select.Group>
                          </Select.Viewport>
                          <Select.ScrollDownButton className="">
                            <ChevronDown />
                          </Select.ScrollDownButton>
                        </Select.Content>
                      </Select.Portal>
                    </Select.Root>
                  </div>
                  <div className="text-sm font-medium text-white xl:text-base">Конец сбора заказов</div>
                  <div className="text-xs text-slate-400 xl:text-base">27 июля до 16:00</div>
                  <div className="text-sm font-medium text-white xl:text-base">Доставка</div>
                  <div className="text-xs text-slate-400 xl:text-base">7 дней</div>
                  <div className="text-sm font-medium text-white xl:text-base">День поставки</div>
                  <div className="text-xs text-slate-400 xl:text-base">3 августа</div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* tariffs */}
      <section className="section3 xl:px-wrap">
        <div className="section__header px-4 xl:mb-14">
          <h2 className="section__subtitle mb-2">Flower Fracht Karaganda </h2>
          <h2 className="section__title">Основные тарифы</h2>
        </div>

        <div className="my-8 px-4 xl:px-0">
          <ul className="flex flex-col gap-4 lg:flex-row">
            <li className="card flex flex-col gap-4 lg:flex-1">
              <div className="flex gap-5">
                <div className="card__icon">
                  <svg fill="none" viewBox="0 0 46 64">
                    <g clipPath="url(#a)">
                      <path
                        fill="#BCC9DA"
                        d="M34.2 48.4 26 47v.1c-.4.9-1.2 1.4-2.1 1.4-.9 0-1.8-.5-2.1-1.3l-8.2 1.3-.4-.1-.2-.6v-3.3c0-.1 0-.5.2-.6l7.3-4.6-1-4.2V28l-17 6.8h-.1l-.4-.1c-.3-.3-.4-.4-.4-.6V29c0-.2.1-.5.4-.6l2.6-1.7V25c0-1.3 1-2.4 2.1-2.4 1 0 1.8.6 2 1.7l2.6-1.5v-2c0-1.2 1-2.3 2.1-2.3 1 0 1.8.7 2 1.8l4-2.3V9.4c0-2.6.7-5.2 1.8-7.6A2.8 2.8 0 0 1 23.9 0h.8c1 .5 1.7 1.2 2 2 1 2.3 1.5 4.8 1.5 7.3v8.8l4 2.3c.2-1 1.1-1.8 2-1.8 1.2 0 2.2 1.1 2.2 2.4v2l2.5 1.4a2 2 0 0 1 2-1.7c.6 0 1.1.1 1.5.6.4.5.6 1.1.6 1.7v2l2.6 1.6c.2 0 .4.3.4.6V34c0 .2 0 .5-.2.6h-.6l-17-6.7v7l-.8 4.5 7.2 4.6c.2 0 .3.4.3.6v3.3l-.2.5h-.5Z"
                        opacity={0.1}
                      />
                      <path
                        fill="#F3F3F3"
                        d="m29.4 63.8-7.6-1.2v.1a2 2 0 0 1-1.8 1.1c-.8 0-1.6-.4-1.8-1v-.2H18l-7.3 1.2h-.3v-3.3l.1-.3 6.6-4.3-.8-3.9v-6.6l-15.7 6H.2c-.2 0-.3-.2-.3-.3v-4.3c0-.2 0-.4.2-.4l2.5-1.5V43c0-1 .8-2 1.8-2 .8 0 1.4.5 1.7 1.4v.2l2.6-1.4v-1.8c0-1.1.8-2 1.8-2 .8 0 1.5.5 1.7 1.4v.2h.2l3.7-2.2V29c0-2.2.5-4.5 1.5-6.7.6-1 1.5-1.6 2.4-1.6h.7c.8.4 1.5 1 1.8 1.8 1 2.2 1.5 4.4 1.5 6.4V37l4 2v-.4c.2-.8 1-1.3 1.7-1.3 1 0 1.8 1 1.8 2v1.8l2.6 1.4v-.2c.2-.9.9-1.3 1.7-1.3.5 0 .9.1 1.3.5s.5.9.5 1.4v1.8l2.5 1.4.2.4V51c0 .2-.1.3-.2.3l-.2.1h-.2l-15.6-6V52l-1 4 6.6 4.2.2.4v2.9l-.1.4-.3.1h-.1ZM20 22c-.6 0-1.2.3-1.6 1-.8 1.9-1.2 4-1.2 6.3v22.5l1.8 10c0 .7.4 1.1 1 1.1.7 0 1-.4 1.2-1L23 51.6V29.2c0-2.3-.4-4.2-1.2-6-.2-.6-.7-1-1.2-1.2H20Zm-9 38.9v2l6.9-1.2L17 57l-6 3.9Zm11 .6 7 1.3v-2.1l-6.1-3.9-.9 4.7ZM.8 47.1v3.3L16 44.2V38L.8 47.1Zm22.9-2.7 15.3 6V47l-15.3-8.7v6ZM4.5 42.2c-.5 0-1 .4-1 1v1.2l1.8-1V43c0-.4-.4-.7-.8-.7Zm31-.2c-.5 0-.9.2-1 .7v.6l1.9 1.2V43c0-.5-.4-1-1-1Zm-25-3.4c-.5 0-1 .4-1 1v1.3l1.9-1v-.2c0-.3 0-.6-.3-.8a.7.7 0 0 0-.6-.3Zm18.8 0c-.5 0-1 .5-1 1v.3l2 1v-1.2c0-.6-.4-1-1-1Z"
                      />
                      <path
                        fill="#9FCCFF"
                        d="M20.7 32.6h-1.3v15.8h1.3V32.6Zm.9-6.3c-.2-.7-.8-1.1-1.5-1.2-.7 0-1.2.5-1.4 1.2l-.5 1.5 1.2.4.4-1.4.3-.2.2.2.4 1.4 1.2-.4-.3-1.5Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h46v64H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="card__title">от 5.7$/1 кг</div>
                  <div className="card__subtitle">Колумбия, Эквадор, Кения</div>
                </div>
              </div>
              <p className="card__description w-full flex-1">Доставка заказа осуществляется до двери</p>
            </li>
            <li
              className="flex h-[183px] flex-col items-center justify-center bg-[url(/airplane-backdrop-sm.jpg)] 
              bg-cover bg-bottom px-6 lg:h-auto lg:flex-1"
            >
              <Button className="w-full">Скачать прайс</Button>
            </li>
            <li className="card flex flex-col gap-4 lg:flex-1">
              <div className="flex gap-5">
                <div className="card__icon">
                  <svg fill="none" viewBox="0 0 46 64">
                    <g clipPath="url(#a)">
                      <path
                        fill="#BCC9DA"
                        d="M34.2 48.4 26 47v.1c-.4.9-1.2 1.4-2.1 1.4-.9 0-1.8-.5-2.1-1.3l-8.2 1.3-.4-.1-.2-.6v-3.3c0-.1 0-.5.2-.6l7.3-4.6-1-4.2V28l-17 6.8h-.1l-.4-.1c-.3-.3-.4-.4-.4-.6V29c0-.2.1-.5.4-.6l2.6-1.7V25c0-1.3 1-2.4 2.1-2.4 1 0 1.8.6 2 1.7l2.6-1.5v-2c0-1.2 1-2.3 2.1-2.3 1 0 1.8.7 2 1.8l4-2.3V9.4c0-2.6.7-5.2 1.8-7.6A2.8 2.8 0 0 1 23.9 0h.8c1 .5 1.7 1.2 2 2 1 2.3 1.5 4.8 1.5 7.3v8.8l4 2.3c.2-1 1.1-1.8 2-1.8 1.2 0 2.2 1.1 2.2 2.4v2l2.5 1.4a2 2 0 0 1 2-1.7c.6 0 1.1.1 1.5.6.4.5.6 1.1.6 1.7v2l2.6 1.6c.2 0 .4.3.4.6V34c0 .2 0 .5-.2.6h-.6l-17-6.7v7l-.8 4.5 7.2 4.6c.2 0 .3.4.3.6v3.3l-.2.5h-.5Z"
                        opacity={0.1}
                      />
                      <path
                        fill="#F3F3F3"
                        d="m29.4 63.8-7.6-1.2v.1a2 2 0 0 1-1.8 1.1c-.8 0-1.6-.4-1.8-1v-.2H18l-7.3 1.2h-.3v-3.3l.1-.3 6.6-4.3-.8-3.9v-6.6l-15.7 6H.2c-.2 0-.3-.2-.3-.3v-4.3c0-.2 0-.4.2-.4l2.5-1.5V43c0-1 .8-2 1.8-2 .8 0 1.4.5 1.7 1.4v.2l2.6-1.4v-1.8c0-1.1.8-2 1.8-2 .8 0 1.5.5 1.7 1.4v.2h.2l3.7-2.2V29c0-2.2.5-4.5 1.5-6.7.6-1 1.5-1.6 2.4-1.6h.7c.8.4 1.5 1 1.8 1.8 1 2.2 1.5 4.4 1.5 6.4V37l4 2v-.4c.2-.8 1-1.3 1.7-1.3 1 0 1.8 1 1.8 2v1.8l2.6 1.4v-.2c.2-.9.9-1.3 1.7-1.3.5 0 .9.1 1.3.5s.5.9.5 1.4v1.8l2.5 1.4.2.4V51c0 .2-.1.3-.2.3l-.2.1h-.2l-15.6-6V52l-1 4 6.6 4.2.2.4v2.9l-.1.4-.3.1h-.1ZM20 22c-.6 0-1.2.3-1.6 1-.8 1.9-1.2 4-1.2 6.3v22.5l1.8 10c0 .7.4 1.1 1 1.1.7 0 1-.4 1.2-1L23 51.6V29.2c0-2.3-.4-4.2-1.2-6-.2-.6-.7-1-1.2-1.2H20Zm-9 38.9v2l6.9-1.2L17 57l-6 3.9Zm11 .6 7 1.3v-2.1l-6.1-3.9-.9 4.7ZM.8 47.1v3.3L16 44.2V38L.8 47.1Zm22.9-2.7 15.3 6V47l-15.3-8.7v6ZM4.5 42.2c-.5 0-1 .4-1 1v1.2l1.8-1V43c0-.4-.4-.7-.8-.7Zm31-.2c-.5 0-.9.2-1 .7v.6l1.9 1.2V43c0-.5-.4-1-1-1Zm-25-3.4c-.5 0-1 .4-1 1v1.3l1.9-1v-.2c0-.3 0-.6-.3-.8a.7.7 0 0 0-.6-.3Zm18.8 0c-.5 0-1 .5-1 1v.3l2 1v-1.2c0-.6-.4-1-1-1Z"
                      />
                      <path
                        fill="#9FCCFF"
                        d="M20.7 32.6h-1.3v15.8h1.3V32.6Zm.9-6.3c-.2-.7-.8-1.1-1.5-1.2-.7 0-1.2.5-1.4 1.2l-.5 1.5 1.2.4.4-1.4.3-.2.2.2.4 1.4 1.2-.4-.3-1.5Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h46v64H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="card__title">от 3.6$/1 кг</div>
                  <div className="card__subtitle">Голландия</div>
                </div>
              </div>
              <p className="card__description w-full flex-1">Доставка заказа осуществляется до двери</p>
            </li>
          </ul>
        </div>
      </section>

      <div className="lg:flex">
        {/* callback */}
        <section className="hero2 flex-1 py-16 px-4 xl:py-10 xl:px-0 xl:pr-20 xl:pl-wrap">
          <div className="mx-auto xl:mx-0 xl:flex xl:h-full xl:flex-col xl:justify-center">
            <div className="mx-auto text-center lg:max-w-md xl:mx-0 xl:mb-14 xl:flex xl:max-w-none xl:flex-col xl:text-left">
              <h2 className="hero__subtitle xl:mb-5">Flower Fracht Karaganda</h2>
              <h2 className="hero__title text-4xl xl:mb-7 xl:text-5xl">Заказать звонок</h2>
              <p className="hero__text mx-auto lg:max-w-xs xl:mx-0 xl:max-w-none">
                Закажите звонок и наш менеджер свяжется с вами в ближайшее время
              </p>
            </div>
            <form action="" className="mx-auto flex flex-col gap-8 lg:max-w-sm xl:max-w-none xl:gap-10">
              <div className="flex flex-col gap-8 xl:flex-row xl:gap-4">
                <input type="text" className="input w-full" placeholder="Имя" />
                <input type="text" className="input w-full" placeholder="Номер телефона" />
              </div>
              <div className="flex flex-col xl:flex-row xl:gap-4">
                <div className="flex items-center gap-4 xl:w-1/2">
                  <Checkbox id="agreement" />
                  <label htmlFor="agreement" className="text-xs text-white xl:text-sm">
                    Даю свое согласия на обработку{' '}
                    <a href="#" className="link link--active">
                      персональных данных
                    </a>
                  </label>
                </div>
                <Button type="submit" className="mt-4 lg:self-center lg:px-10 xl:mt-0 xl:w-1/2">
                  Заказать звонок
                </Button>
              </div>
            </form>
          </div>
        </section>
        {/* images */}
        <div className="flex max-h-48 bg-rose-300 lg:max-h-none lg:w-1/2">
          <div className="basis-[42.5%]">
            <img src="/flower-4.jpg" className="h-full w-full object-cover" />
          </div>
          <div className="basis-[57.5%]">
            <img src="/flower-3.jpg" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
