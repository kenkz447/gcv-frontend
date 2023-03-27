import classNames from 'classnames';
import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { layoutShowingNavMenu } from '@/ui/admin/layout/layoutReducer';
import { MENU_PLACEMENT } from '@/ui/admin/uiConstants';
import { changeLang } from '@/ui/lang/langReducer';

const MENU_NAME = 'NavLanguageSwitcher';
const NavLanguageSwitcher = () => {
    const dispatch = useDispatch();

    const {
        behaviourStatus: { behaviourHtmlData },
        placementStatus: { view: placement },
        attrMobile,
        attrMenuAnimate,
    } = useSelector((state) => state.menu);
    const { color } = useSelector((state) => state.settings);
    const { showingNavMenu } = useSelector((state) => state.layout);
    const { languages, currentLang } = useSelector((state) => state.lang);

    const onSelectLang = (code) => {
        dispatch(changeLang(code));
    };
    const onToggle = (status, event) => {
        if (event && event.stopPropagation) event.stopPropagation();
        else if (event && event.originalEvent && event.originalEvent.stopPropagation) event.originalEvent.stopPropagation();
        dispatch(layoutShowingNavMenu(status ? MENU_NAME : ''));
    };

    useEffect(() => {
        dispatch(layoutShowingNavMenu(''));
        // eslint-disable-next-line
    }, [attrMenuAnimate, behaviourHtmlData, attrMobile, color]);

    return (
        <div className='language-switch-container'>
            <Dropdown align='end' onToggle={onToggle} show={showingNavMenu === MENU_NAME}>
                <Dropdown.Toggle
                    className={classNames('language-button', {
                        show: showingNavMenu === MENU_NAME,
                    })}
                    variant='empty'
                >
                    {currentLang.code}
                </Dropdown.Toggle>

                <Dropdown.Menu
                    popperConfig={{
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: () => {
                                        if (placement === MENU_PLACEMENT.Vertical) {
                                            return [6, 7];
                                        }
                                        return [0, 7];
                                    },
                                },
                            },
                        ],
                    }}
                >
                    {languages.map((lang) => (
                        <Dropdown.Item key={lang.locale} onClick={() => onSelectLang(lang.code)}>
                            {lang.code}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
export default React.memo(NavLanguageSwitcher);
