import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

let WarehousesPage = () => {
  return (
    <div>
      <div className="pageName px-4">
        <div className="pageName__header">
          <h3 className="hero__subtitle">Flower Fracht Karaganda </h3>
          <h2 className="hero__title title--underline">Наши склады</h2>
        </div>
      </div>

      <section className="section px-4 lg:px-wrap">
        <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-5 xl:flex">
          <li className="card card--hover navText text-center text-2xs xl:py-2">Казахстан</li>
          <li className="card card--hover navText text-center text-2xs xl:py-2">Россия</li>
          <li className="card card--hover navText text-center text-2xs xl:py-2">Узбекистан</li>
          <li className="card card--hover navText text-center text-2xs xl:py-2">Азербайджанская</li>
          <li className="card card--hover navText text-center text-2xs xl:py-2">Туркменистан</li>
          <li className="card card--hover navText text-center text-2xs xl:py-2">Армения</li>
          <li className="card card--hover navText text-center text-2xs xl:py-2">Беларусь</li>
        </ul>
      </section>

      <section className="section px-4 py-2 pb-8 lg:flex lg:px-wrap">
        <Accordion.Root
          className="flex flex-col lg:w-80 xl:min-h-[690px]"
          type="single"
          defaultValue="москва"
        >
          {['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Уфа'].map((item) => (
            <Accordion.Item
              value={item.toLowerCase()}
              key={item}
              className="flex flex-col xl:data-[state='open']:flex-1"
            >
              <Accordion.Trigger
                className="listItem group flex items-center justify-center 
								gap-2 text-sm text-white lg:justify-start lg:gap-4 lg:p-10"
              >
                <MapPin />
                <span>{item}</span>
                <ChevronDown
                  className="ml-auto hidden text-blue-500 group-data-[state='open']:hidden lg:block"
                  size={12}
                />
                <ChevronUp
                  className="ml-auto hidden text-blue-500 group-data-[state='closed']:hidden lg:block"
                  size={12}
                />
              </Accordion.Trigger>
              <Accordion.Content className="flex-1 bg-navy-900 p-4 text-white data-[state='open']:animate-slideLeft lg:p-10">
                Yes. It adheres to the WAI-ARIA design pattern.
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <div className="relative bg-rose-50 lg:flex-1">
          <svg className="h-full w-full">
            <image href="/map.jpg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default WarehousesPage;
