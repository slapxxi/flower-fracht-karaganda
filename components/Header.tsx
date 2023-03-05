import classNames from 'classnames';
import { RemoveScroll } from 'react-remove-scroll';
import * as Select from '@radix-ui/react-select';
import { ChevronDown, ChevronUp, Check, Phone, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from 'components/Logo';
import { Modal } from 'components/Modal';
import { useBreakpoints } from '../lib/hooks/useBreakpoints';
import { useRouter } from 'next/router';

export type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Header = (props: HeaderProps) => {
  let { children, className = '', ...rest } = props;
  let [menuOpen, setMenuOpen] = useState(false);
  let router = useRouter();
  console.log(router.pathname);

  useEffect(() => {
    function handler() {
      setMenuOpen(false);
    }
    router.events.on('routeChangeComplete', handler);
    return () => router.events.off('routeChangeComplete', handler);
  });

  useBreakpoints((bp) => {
    if (bp.md) {
      setMenuOpen(false);
    }
  });

  function handleClickMenu() {
    setMenuOpen((o) => !o);
  }

  return (
    <header className={classNames(className, 'header')} {...rest}>
      <Logo className="header__logo lg:mr-auto xl:mr-0" />
      <nav className="hidden lg:block xl:ml-auto">
        <ul className="flex justify-between gap-8">
          <li>
            <Link
              href="/"
              className={classNames('header__navLink', router.pathname === '/' && 'header__navLink--active')}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              href="/warehouses"
              className={classNames(
                'header__navLink',
                router.pathname === '/warehouses' && 'header__navLink--active',
              )}
            >
              Наши склады
            </Link>
          </li>
          <li>
            <Link
              href="/brokers"
              className={classNames(
                'header__navLink',
                router.pathname === '/brokers' && 'header__navLink--active',
              )}
            >
              Брокерам
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={classNames(
                'header__navLink',
                router.pathname === '/contact' && 'header__navLink--active',
              )}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <Select.Root>
        <Select.Trigger className="ml-auto flex items-center gap-3 xl:ml-0" aria-label="language">
          <div className="square h-8 w-8 text-2xs font-bold text-white">
            <Select.Value placeholder="RU" />
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
                <Select.Item value="ru" className="flex items-center justify-between">
                  <Select.ItemText>RU</Select.ItemText>
                  <Select.ItemIndicator className="">
                    <Check size={10} />
                  </Select.ItemIndicator>
                </Select.Item>
                <Select.Item value="en" className="flex items-center justify-between">
                  <Select.ItemText>EN</Select.ItemText>
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
      <button className="text-white lg:hidden" onClick={handleClickMenu}>
        <svg width={26} fill="none" viewBox="0 0 26 23">
          <path
            d="M0 0H26V1H0Z"
            className={classNames('fill-current transition-transform')}
            style={{ transform: menuOpen ? 'translate(4px,1px) rotate(45deg)' : 'none' }}
          />
          <path
            d="M3 11H26V12H3Z"
            className={classNames('fill-current transition-transform', menuOpen && 'translate-x-full')}
          />
          <path
            d="M0 22H26V23H0Z"
            className={classNames('fill-current transition-transform')}
            style={{ transform: menuOpen ? 'translate(-13px,4px) rotate(-45deg)' : 'none' }}
          />
        </svg>
      </button>
      <Modal open>
        <RemoveScroll enabled={menuOpen}>
          <nav
            className={classNames(
              'fixed inset-0 z-10 flex flex-col',
              menuOpen ? 'translate-x-0' : 'translate-x-full',
            )}
          >
            <header className="header">
              <Logo className="header__logo" />
              <button className="ml-auto text-white" onClick={handleClickMenu}>
                <svg width={26} fill="none" viewBox="0 0 26 23">
                  <path
                    d="M0 0H26V1H0Z"
                    className={classNames('fill-current transition-transform')}
                    style={{ transform: menuOpen ? 'translate(4px,1px) rotate(45deg)' : 'none' }}
                  />
                  <path
                    d="M3 11H26V12H3Z"
                    className={classNames(
                      'fill-current transition-transform',
                      menuOpen && 'translate-x-full',
                    )}
                  />
                  <path
                    d="M0 22H26V23H0Z"
                    className={classNames('fill-current transition-transform')}
                    style={{ transform: menuOpen ? 'translate(-13px,4px) rotate(-45deg)' : 'none' }}
                  />
                </svg>
              </button>
            </header>
            <div
              className={classNames(
                'flex-1 border-b border-navy-800 bg-navy-900 py-12 transition-all duration-300',
                menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
              )}
            >
              <ul className="flex flex-col items-center gap-7">
                <li>
                  <Link href="/" className="navText">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link href="/warehouses" className="navText">
                    Наши склады
                  </Link>
                </li>
                <li>
                  <Link href="/brokers" className="navText">
                    Брокерам
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="navText">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <footer
              className={classNames(
                'bg-navy-900 py-7 px-4 transition-all duration-300',
                menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
              )}
            >
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3.5 text-sm text-navy-400">
                  <Phone size={12} className="fill-current" />
                  <span>+7 (495) 737 8585</span>
                </li>
                <li>
                  <a
                    href="mailto:ffkaragandainfo@info.ru"
                    className="flex items-center gap-3.5 text-sm text-navy-400"
                  >
                    <Mail size={12} />
                    <span>ffkaragandainfo@info.ru</span>
                  </a>
                </li>
              </ul>
            </footer>
          </nav>
        </RemoveScroll>
      </Modal>
    </header>
  );
};
