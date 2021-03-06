import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Group from '@material-ui/icons/Group';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Create from '@material-ui/icons/Create';
import ShowChart from '@material-ui/icons/ShowChart';
import Menu from '@material-ui/icons/Menu';

const mapStateToProps = state => ({
  user: state.user,
})

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state ={
      value: 'dashboard',
    }
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  

  render() {
    let content = null;
    const { value } = this.state;
    // if supervisor logged in, will render appropriate nav bar
    if (this.props.user && this.props.user.role === 'supervisor') {
      content = (
        <div className="navbar">
          <BottomNavigation value={value} style={styles.stickToBottom} onChange={this.handleChange}>
            <BottomNavigationAction className="nav" icon={<ShowChart />} component={Link} to={"/dashboard"} />
            <BottomNavigationAction className="nav" icon={<Group />} component={Link} to={"/employees"} />
            <BottomNavigationAction className="nav" icon={<PersonAdd />} component={Link} to={"/employee/new"} />
            <BottomNavigationAction className="nav" icon={<Menu />} component={Link} to={"/settings"} />
          </BottomNavigation>
        </div>
      )
      // if manager logged in, will render appropriate nav bar
    } else if (this.props.user && this.props.user.role === 'manager') {
      content = (
        <div className="navbar">
          <BottomNavigation value={value} style={styles.stickToBottom} onChange={this.handleChange}>
            <BottomNavigationAction className="nav" icon={<ShowChart />} component={Link} to={"/dashboard"} />
            <BottomNavigationAction className="nav" icon={<Group />} component={Link} to={"/employees"} />
            <BottomNavigationAction className="nav" icon={<Create />} component={Link} to={"/feedback/new"} />
            <BottomNavigationAction className="nav" icon={<Menu />} component={Link} to={"/settings"} />
          </BottomNavigation>
        </div>
      )
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Nav);
