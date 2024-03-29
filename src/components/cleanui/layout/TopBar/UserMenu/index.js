import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { UserOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Avatar } from 'antd'
import styles from './style.module.scss'
import { logout } from '../../../../../actions/auth'

const mapStateToProps = ({ auth }) => ({ user: auth.user })

const ProfileMenu = ({ user, logout }) => {
  const [count, setCount] = useState(7)

  const handleLogout = (e) => {
    e.preventDefault()
    // dispatch({
    //   type: 'user/LOGOUT',
    // })
    logout()
    // history.push('/auth/login')
  }

  const addCount = () => {
    setCount(count + 1)
  }

  const menu = (
    <Menu selectable={false}>
      <Menu.Item>
        <strong>
          <FormattedMessage id="topBar.profileMenu.hello" />, {user.name || 'Anonymous'}
        </strong>
        <div>
          <strong className="mr-1">
            <FormattedMessage id="topBar.profileMenu.billingPlan" />:{' '}
          </strong>
          Free Trial
        </div>
        {/* <div>
          <strong>
            <FormattedMessage id="topBar.profileMenu.role" />:{' '}
          </strong>
          {user.role}
        </div> */}
      </Menu.Item>
      <Menu.Divider />
      {/* <Menu.Item>
        <div>
          <strong>
            <FormattedMessage id="topBar.profileMenu.email" />:{' '}
          </strong>
          {user.email}
          <br />
          <strong>
            <FormattedMessage id="topBar.profileMenu.phone" />:{' '}
          </strong>
          {user.phone || '— '}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a href="#" onClick={(e) => e.preventDefault()}>
          <i className="fe fe-user mr-2" />
          <FormattedMessage id="topBar.profileMenu.editProfile" />
        </a>
      </Menu.Item>
      <Menu.Divider /> */}
      <Menu.Item>
        <a href="#" onClick={handleLogout}>
          <i className="fe fe-log-out mr-2" />
          <FormattedMessage id="topBar.profileMenu.logout" />
        </a>
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']} onVisibleChange={addCount}>
      <div className={styles.dropdown}>
        {/* <Badge count={count}> */}
        <Avatar
          className={styles.avatar}
          shape="circle"
          size="large"
          src={user.profilePhoto}
          icon={<UserOutlined />}
        />
        {/* </Badge> */}
      </div>
    </Dropdown>
  )
}

export default connect(mapStateToProps, { logout })(ProfileMenu)
