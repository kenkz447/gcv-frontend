import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { settingsChangeColor } from '@/ui/admin/settings/settingsReducer';
import { MENU_BEHAVIOR } from '@/ui/admin/uiConstants.js';
import { CsLineIcons } from '@/ui/cs-line-icons';

import { menuChangeBehaviour } from './main-menu/menuSlice';
import SearchModal from './search/SearchModal';

const NavIconMenu = () => {
  const { pinButtonEnable, behaviour } = useSelector((state) => state.menu);
  const { color } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const onPinButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (pinButtonEnable) {
      dispatch(
        menuChangeBehaviour(
          behaviour === MENU_BEHAVIOR.Pinned
            ? MENU_BEHAVIOR.Unpinned
            : MENU_BEHAVIOR.Pinned
        )
      );
    }
    return false;
  };
  const onDisabledPinButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onLightDarkModeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      settingsChangeColor(
        color.includes('light')
          ? color.replace('light', 'dark')
          : color.replace('dark', 'light')
      )
    );
  };
  const [showSearchModal, setShowSearchModal] = useState(false);

  const onSearchIconClick = (e) => {
    e.preventDefault();
    setShowSearchModal(true);
  };

  return (
    <>
      <ul className='list-unstyled list-inline menu-icons text-center'>
        <li className='list-inline-item'>
          <a href='#/' onClick={onSearchIconClick}>
            <CsLineIcons icon='search' size='18' />
          </a>
        </li>
        <li className='list-inline-item'>
          <a
            href='#/'
            id='pinButton'
            onClick={
              pinButtonEnable ? onPinButtonClick : onDisabledPinButtonClick
            }
            className={classNames('pin-button', { disabled: !pinButtonEnable })}
          >
            <CsLineIcons icon='lock-on' size='18' className='unpin' />
            <CsLineIcons icon='lock-off' size='18' className='pin' />
          </a>
        </li>
        <li className='list-inline-item'>
          <a href='#/' id='colorButton' onClick={onLightDarkModeClick}>
            <CsLineIcons icon='light-on' size='18' className='light' />
            <CsLineIcons icon='light-off' size='18' className='dark' />
          </a>
        </li>
      </ul>
      <SearchModal show={showSearchModal} setShow={setShowSearchModal} />
    </>
  );
};

export default React.memo(NavIconMenu);
