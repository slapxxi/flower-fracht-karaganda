import { animated, Interpolation, SpringValue, useSpring } from '@react-spring/web';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { useBreakpoints } from '../lib/hooks/useBreakpoints';

type Data = {
  date: Date;
  index: number;
  active: boolean;
  selectable: boolean;
};

export type CalculatorProps = {
  children?: React.ReactNode;
  className?: string;
  width: number;
  height: number;
};

const dates = generateDates(45);
const weekdayFormatter = new Intl.DateTimeFormat('ru', { weekday: 'short' });
const fulldateFormatter = new Intl.DateTimeFormat('ru', { dateStyle: 'long' });

export const Calculator = (props: CalculatorProps) => {
  const { children, className = '', width, height, ...rest } = props;
  const svgRef = useRef<SVGSVGElement>(null);
  const [selected, setSelected] = useState<Data | null>(null);
  const [packingDate, deliveryDate] = getEstimateDates(selected);
  let bp = useBreakpoints();
  const DISTANCE_BETWEEN = bp.md ? 42 : 23;
  const spring = useSpring({
    packingOffset: packingDate ? (packingDate.index - selected!.index) * DISTANCE_BETWEEN : -100,
    deliveryOffset: deliveryDate ? (deliveryDate.index - selected!.index) * DISTANCE_BETWEEN : -100,
  });

  function handleClick(e: React.MouseEvent<HTMLLIElement>, data: Data) {
    const elem = e.currentTarget;
    const container = elem.parentElement!;
    let containerRect = container.getBoundingClientRect();
    const rect = elem.getBoundingClientRect();
    container.scrollTo({ left: container.scrollLeft + rect.x - containerRect.x, behavior: 'smooth' });
    setSelected(data);
  }

  return (
    <div className={classNames(className)} style={{ width }} {...rest}>
      <svg viewBox={`0 0 ${width} ${height}`} ref={svgRef}>
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="100%"
          stroke="#000"
          className="-translate-y-px stroke-slate-700 stroke-2"
        />
        <animated.line
          x1={10.5}
          y1="100%"
          x2={spring.packingOffset.to((o) => o + 10)}
          y2="100%"
          className="-translate-y-px stroke-blue-500 stroke-2"
        />
        <animated.line
          x1={spring.packingOffset.to((o) => o + 10)}
          y1="100%"
          x2={spring.deliveryOffset.to((o) => o + 10)}
          y2="100%"
          className="-translate-y-px stroke-navy-200 stroke-2"
        />
        <Line x={10.5} y={35} className="fill-blue-500 stroke-blue-500" />
        <Line x={10.5} y={120} className="fill-blue-500 stroke-blue-500" offset={spring.packingOffset} />
        <Line x={10.5} y={160} className="fill-navy-200 stroke-navy-200" offset={spring.deliveryOffset} />

        <text x={5} y={8} className="fill-white text-xs font-medium">
          <tspan>День заказа</tspan>
          <tspan className="fill-blue-500 font-semibold" dy={14} x={5}>
            {selected && fulldateFormatter.format(selected.date)}
          </tspan>
        </text>

        <animated.text x={spring.packingOffset} y={80} className="fill-white text-xs font-medium">
          <tspan>Конец сбора заказов</tspan>
          <animated.tspan className="fill-blue-500 font-semibold" dy={14} x={spring.packingOffset}>
            {packingDate && fulldateFormatter.format(packingDate.date)}
          </animated.tspan>
        </animated.text>

        <animated.text x={spring.deliveryOffset} y={130} className="fill-white text-xs font-medium">
          <tspan>День поставки</tspan>
          <animated.tspan className="fill-blue-500 font-semibold" dy={14} x={spring.deliveryOffset}>
            {deliveryDate && fulldateFormatter.format(deliveryDate.date)}
          </animated.tspan>
        </animated.text>

        <text x={5} y={8} className="fill-white text-xs font-medium">
          <tspan>День заказа</tspan>
          <tspan className="fill-blue-500 font-semibold" dy={14} x={5}>
            {selected && fulldateFormatter.format(selected.date)}
          </tspan>
        </text>
      </svg>
      <ol className="flex items-center gap-2 overflow-x-scroll py-4 pr-[50%]">
        {dates.map((d, i) => (
          <li
            key={i}
            className={classNames(
              'flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-2xs leading-none lg:h-8 lg:w-8 lg:text-sm',
              selected !== null && selected.index === i && 'bg-rose-500 font-semibold',
              d.selectable ? 'text-slate-200' : 'text-slate-600',
            )}
            onClick={d.selectable && d.active ? (e) => handleClick(e, d) : undefined}
          >
            <span className="-translate-y-px">{weekdayFormatter.format(d.date)}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export type LineProps = {
  children?: React.ReactNode;
  className?: string;
  offset?: SpringValue<number> | Interpolation<number, number>;
  color?: string;
  x?: number;
  y?: number;
};

export const Line = (props: LineProps) => {
  const { children, className = '', offset, x = 0, y = 4, ...rest } = props;
  return (
    <animated.g
      fill="white"
      stroke="white"
      className={classNames(className)}
      transform={offset && offset.to((o) => `translate(${o})`)}
      {...rest}
    >
      <line x1={x} y1={y} x2={x} y2="100%" className="stroke-2" />
      <circle cx={x} cy={y} r="4" />
    </animated.g>
  );
};

function getEstimateDates(orderDate: Data | null): [Data | undefined, Data | undefined] {
  if (orderDate === null) {
    return [undefined, undefined];
  }
  const packingDate = dates.find((d) => d.index > orderDate.index && d.active);
  const deliveryDate = packingDate && dates.find((d) => d.index > packingDate.index && d.active);
  return [packingDate, deliveryDate];
}

function generateDates(numberOfDates: number = 35): Data[] {
  let now = new Date();
  let dates: Data[] = [];
  for (let i = 0; i < numberOfDates; i++) {
    let d = new Date();
    d.setDate(now.getDate() + i);
    let day = d.getDay();
    let active = [1, 4, 5].includes(day);
    dates.push({ date: d, active, selectable: active && i < numberOfDates - 7, index: i });
  }
  return dates;
}

// function transform(svg: SVGSVGElement, vec: Vec2) {
//   let point = svg.createSVGPoint();
//   point.x = vec[0];
//   point.y = vec[1];
//   point = point.matrixTransform(svg.getScreenCTM()!.inverse());
//   return [point.x, point.y];
// }
