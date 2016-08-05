/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

//require('normalize.css/normalize.css');

import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
//import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ActionHelpOutline from 'material-ui/svg-icons/action/help-outline';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const fab_style = {position: 'absolute', bottom: 5, right: 5}


const floatingButton = (onClick) =>(
  <FloatingActionButton style={fab_style} secondary={false} onTouchTap={onClick}> <ActionHelpOutline /> </FloatingActionButton>
)

class AppComponent extends React.Component {

  state = {open: false}

  handleClick = () => this.setState({open: !this.state.open})
  onRequestChange = () => this.setState({open: !this.state.open })


  render() {
    //const button = this.state.open ? '' : <FloatingActionButton style={fab_style} onTouchTap={this.handleClick}> <ContentAdd /> </FloatingActionButton>
    return (
    <div>
    {floatingButton(this.handleClick)}
      <Drawer onRequestChange={this.onRequestChange} width={225} openSecondary={true} docked={true} open={this.state.open} >
        <IconButton onTouchTap={this.handleClick} style={{float: 'right'}} > <ContentClear /> </IconButton>
           <List>
           <Subheader>Articles</Subheader>
            <ListItem primaryText="Article 1"/>
           </List>
      </Drawer>
    </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
