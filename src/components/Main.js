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
import ContentAdd from 'material-ui/svg-icons/content/add';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const fab_style = {position: 'absolute', bottom: 5, right: 5}


const fetch = window.fetch


const floatingButton = (onClick) =>(
  <FloatingActionButton style={fab_style} secondary={false} onTouchTap={onClick}> <ActionHelpOutline /> </FloatingActionButton>
)


const closeButton = (onClick) => (
  <IconButton onTouchTap={onClick} style={{float: 'right'}} > <ContentClear /> </IconButton>
)

class AppComponent extends React.Component {

  state = {open: false, articles: []}

  componentWillMount(){
    fetch('https://pcipilot.zendesk.com/api/v2/help_center/articles.json')
      .then((response)=>{
        return response.json()
      }).then((json)=>{
        this.setState({articles: json.articles})
      }).catch((ex)=> {
        console.log('parsing failed', ex)
      })
  }

  handleClick = () => this.setState({open: !this.state.open})
  onRequestChange = () => this.setState({open: !this.state.open })


  render() {
    const articlesList = this.state.articles ? this.state.articles.map((article)=>(<ListItem primaryText={article.title}/>)) :  <RefreshIndicator
      size={40}
      left={10}
      top={0}
      status="loading"
    />
    //const button = this.state.open ? '' : <FloatingActionButton style={fab_style} onTouchTap={this.handleClick}> <ContentAdd /> </FloatingActionButton>
    return (
    <div>
    {floatingButton(this.handleClick)}
      <Drawer onRequestChange={this.onRequestChange} width={225} openSecondary={true} docked={true} open={this.state.open} >
      {closeButton(this.handleClick)}
           <List>
           <Subheader>Articles</Subheader>
           {articlesList}
           </List>
      </Drawer>
    </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
