import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type HeaderProps = {
  className: string;
  title?: string;
}

function Header({className, title}: HeaderProps): JSX.Element {
  return (
    <header className={`page-header ${className}`}>
      <div className='logo'>
        <Link className='logo__link' to={AppRoute.Root}>
          <span className='logo__letter logo__letter--1'>W</span>
          <span className='logo__letter logo__letter--2'>T</span>
          <span className='logo__letter logo__letter--3'>W</span>
        </Link>
      </div>

      {title && (<h1 className='page-title user-page__title'>{title}</h1>)}

      <ul className='user-block'>
        <li className='user-block__item'>
          <Link to={AppRoute.MyList}>
            <div className='user-block__avatar'>
              <img
                src='img/avatar.jpg'
                alt='User avatar'
                width='63'
                height='63'
              />
            </div>
          </Link>
        </li>
        <li className='user-block__item'>
          <a className='user-block__link' href='/#'>
            Sign out
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
