import React from 'react';
import { Header, Segment, Icon, Input } from 'semantic-ui-react'

class MessagesHeader extends React.Component {
  state = {  }
  render() {

    const {channelName} = this.props

    return ( 
      <Segment clearing>
        {/* Channel title */}
        <Header fluid='true' as='h2' floated="left" style={{ marginBottom: 0}} >
          <span>
            {channelName}
            <Icon name='star outline' color='black' />
          </span>
          <Header.Subheader>
            2 Users
          </Header.Subheader>
        </Header>

        {/* Channel search input */}
        <Header floated='right'>
          <Input
            size='mini'
            icon='search'
            name='searchTerm'
            placeholder='Chercher un message'
          >
          </Input>
        </Header>
      </Segment>
     );
  }
}
 
export default MessagesHeader;