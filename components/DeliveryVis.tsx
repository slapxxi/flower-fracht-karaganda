import classNames from 'classnames';
import { animated, useSpring } from '@react-spring/web';
import { SVGProps, useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { clamp } from 'lodash';
import { WorldMap } from 'components/WorldMap';
import { PlaneIcon } from 'components/icons/PlaneIcon';
import { useBreakpoints } from '../lib/hooks/useBreakpoints';

export type DeliveryVisProps = {
  children?: React.ReactNode;
  className?: string;
};

const baseCoords = [610, 120];
const locations = [
  { name: 'Chile', id: 'cl', coords: [282, 394] },
  { name: 'Colombia', id: 'co', coords: [269, 308] },
  { name: 'Ecuador', id: 'ec', coords: [255, 325] },
  { name: 'Holland', id: 'hl', coords: [489, 149] },
  { name: 'Israel', id: 'il', coords: [575, 223] },
  { name: 'Kenya', id: 'ke', coords: [578, 319] },
];

export const DeliveryVis = (props: DeliveryVisProps) => {
  const { children, className = '', ...rest } = props;
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [spring, animate] = useSpring({ offset: 0 }, []);
  let bp = useBreakpoints();
  let width = bp.md ? 1000 : 440;
  let bounds = bp.md ? { min: 0, max: 0 } : { min: -360, max: 220 };
  let startingOffset = bp.md ? 0 : width / 2;
  const bindDrag = useDrag<React.MouseEvent<SVGSVGElement>>(
    (gesture) => {
      if (gesture.pressed) {
        animate.set({ offset: gesture.offset[0] });
      } else {
        const boost = gesture.velocity[0] * gesture.direction[0] * 80;
        const offset = clamp(spring.offset.get() + boost, bounds.min, bounds.max);
        animate.start({ offset });
      }
    },
    {
      from: () => [spring.offset.get(), 0],
      rubberband: true,
      bounds: { left: bounds.min, right: bounds.max },
      axis: 'x',
      threshold: 3,
      preventScrollAxis: 'y',
      preventScroll: 200,
    },
  );
  let location = activeLocation !== null && locations.find((l) => l.id === activeLocation);
  let routePath = location
    ? `M${location.coords[0]} ${location.coords[1]}q${(baseCoords[0] - location.coords[0]) / 2} ${
        baseCoords[1] - location.coords[1]
      } ${baseCoords[0] - location.coords[0]} ${baseCoords[1] - location.coords[1]}`
    : '';

  function handleClick(id: string) {
    setActiveLocation(id);
  }

  return (
    <div className={classNames(className, 'touch-pan-y')}>
      <div className="hidden flex-col gap-8 md:mb-8 md:flex md:items-end">
        <ul className="flex w-full max-w-sm justify-around">
          {locations.map((l) => (
            <li
              key={l.id}
              className={classNames(
                l.id === activeLocation ? 'text-blue-500' : 'text-slate-500',
                'flex flex-col items-center justify-between gap-4',
              )}
              onClick={() => handleClick(l.id)}
            >
              <div className="flex h-28 flex-col items-center">
                <svg
                  className={classNames(
                    l.id === activeLocation ? 'h-20' : 'h-10',
                    'mb-auto w-0.5 fill-current transition-all',
                  )}
                >
                  <rect width="100%" height="100%" />
                </svg>
                <span className="font-bold writing-v-rl">{l.id}</span>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="mb-3 text-center text-xs font-semibold text-slate-500">
          Доставка в Караганду занимает от <em className="em">1</em> до <em className="em">2</em> дней
        </h2>
      </div>

      <animated.svg
        fill="none"
        viewBox={spring.offset.to((o) => `${startingOffset - o} 0 ${width} 600`)}
        className="touch-pan-y"
        {...bindDrag()}
        {...rest}
      >
        <WorldMap width={1000} height={1000 * 0.506} highlight={(activeLocation as any) ?? undefined} />
        <Circles x={baseCoords[0]} y={baseCoords[1]} count={4} r={20} animated />
        <circle cx={baseCoords[0]} cy={baseCoords[1]} r="3" fill="#fff9" />
        <path d={routePath} stroke="white" strokeDasharray="8" id="route" className="animate-dashoffset" />
        <text
          className="fill-white/80 text-xs font-bold uppercase"
          x={baseCoords[0]}
          y={baseCoords[1] - 10}
          textAnchor="end"
        >
          Karaganda
        </text>
        <g transform="translate(-20-10)">
          {activeLocation && (
            <>
              <PlaneIcon size={30} />
              <animateMotion dur="4s" repeatCount="indefinite" path={routePath} rotate="auto" />
            </>
          )}
        </g>
        {locations.map((item) => (
          <g
            onClick={() => handleClick(item.id)}
            key={item.id}
            style={{ pointerEvents: item.id === activeLocation ? 'none' : 'auto' }}
          >
            <Circles x={item.coords[0]} y={item.coords[1]} count={3} r={20} opacity={0.4} />
            <Pin
              x={item.coords[0]}
              y={item.coords[1]}
              size={item.id === activeLocation ? 30 : 16}
              active={item.id === activeLocation}
            />
            {activeLocation === item.id && (
              <text
                className="fill-white font-bold uppercase"
                x={item.coords[0] + 20}
                y={item.coords[1] - 10}
                textAnchor="start"
              >
                {item.name}
              </text>
            )}
          </g>
        ))}
      </animated.svg>

      <div className="-mt-20 md:hidden">
        <h2 className="mb-3 text-center text-xs font-semibold text-slate-500">
          Доставка в Караганду занимает от <em className="em">1</em> до <em className="em">2</em> дней
        </h2>
        <ul className="flex justify-around bg-black/10 pt-9">
          {locations.map((l) => (
            <li
              key={l.id}
              className={classNames(
                l.id === activeLocation ? 'text-blue-500' : 'text-slate-500',
                'flex flex-col items-center justify-between gap-4',
              )}
              onClick={() => handleClick(l.id)}
            >
              <span className="font-bold writing-v-rl">{l.id}</span>
              <div className="flex h-24 flex-col">
                <svg
                  className={classNames(
                    l.id === activeLocation ? 'h-20' : 'h-10',
                    'mt-auto w-0.5 fill-current transition-all',
                  )}
                >
                  <rect width="100%" height="100%" />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

type PinProps = { size?: number; active?: boolean } & Omit<SVGProps<SVGSVGElement>, 'width' | 'height'>;

const Pin = (props: PinProps) => {
  const { x, y, size = 9, className, active = false, ...rest } = props;

  return (
    <svg
      x={x}
      y={y}
      viewBox="0 0 9 13"
      width={size}
      height={size * (13 / 9)}
      preserveAspectRatio="none"
      className={classNames(
        className,
        'overflow-visible',
        active ? 'fill-rose-600' : 'fill-navy-200 hover:fill-white',
      )}
      {...rest}
    >
      <g transform="translate(-4.4-11.8)">
        <path d="M5.07 11.83a.76.76 0 0 0-.78-.76c-.44 0-.79.32-.79.74s.33.76.78.76a.8.8 0 0 0 .79-.74Zm2.12-10.7A4.07 4.07 0 0 0 2.76.36 3.87 3.87 0 0 0 .39 3.94c0 1.1.43 2.19 1.13 3.04l2.8 3.35 2.87-3.28c1.48-1.68 1.7-4.3 0-5.92ZM3.06 2.4c.76-.7 2-.69 2.73.04.74.72.73 1.9-.03 2.6-.76.71-2 .7-2.74-.03a1.84 1.84 0 0 1-.54-1.31c0-.47.19-.94.58-1.3Z" />
      </g>
    </svg>
  );
};

export type CirclesProps = {
  children?: React.ReactNode;
  className?: string;
  x?: number | string;
  y?: number | string;
  r?: number;
  count?: number;
  animated?: boolean;
} & SVGProps<SVGSVGElement>;

export const Circles = (props: CirclesProps) => {
  const { children, className = '', r = 30, count = 3, x, y, animated = false, ...rest } = props;

  return (
    <svg className={classNames(className, 'overflow-visible')} {...rest}>
      <g
        className={classNames(animated && 'animate-ping')}
        style={{
          transformOrigin: `${typeof x === 'number' ? x + 'px' : x} ${typeof y === 'number' ? y + 'px' : y}`,
        }}
      >
        {new Array(count).fill(null).map((_, i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={(i + 1) * (r / count)}
            fill="#fff"
            fillOpacity={1 - (i / count + 0.15)}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        ))}
      </g>
    </svg>
  );
};
