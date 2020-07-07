import React from 'react'
import { connect } from 'react-redux'
import { Tooltip } from 'antd'
import styles from './style.module.scss'
import { setTheme, changeSetting } from '../../../../../actions/settings'

const mapStateToProps = ({ settings }) => ({ theme: settings.theme })

const ThemeSwitcher = ({ theme, setTheme, changeSetting }) => {
  const onSetTheme = (nextTheme) => {
    const menuColor = nextTheme === 'dark' ? 'dark' : 'light'
    setTheme({ theme: nextTheme })
    changeSetting({ payload: { setting: 'menuColor', value: menuColor } })
    // dispatch({
    //   type: SETTINGS_SET_THEME,
    //   payload: {
    //     theme: nextTheme,
    //   },
    // })
    // dispatch({
    //   type: SETTINGS_CHANGE_SETTING,
    //   payload: {
    //     menuColor: nextTheme === 'dark' ? 'dark' : 'light',
    //   },
    // })
  }

  return (
    <Tooltip title="Switch Dark / Light Theme" placement="left">
      <a
        role="button"
        tabIndex="0"
        onFocus={(e) => {
          e.preventDefault()
        }}
        onKeyPress={() => onSetTheme(theme === 'default' ? 'dark' : 'default')}
        onClick={() => onSetTheme(theme === 'default' ? 'dark' : 'default')}
        className={styles.themeSwitcher}
      >
        {theme === 'default' && <i className="fe fe-moon" />}
        {theme !== 'default' && <i className="fe fe-sun" />}
      </a>
    </Tooltip>
  )
}

export default connect(mapStateToProps, { setTheme, changeSetting })(ThemeSwitcher)
