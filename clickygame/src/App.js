import React, { Component } from "react";
import GameTile from "./components/GameTile";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import tiles from "./tileInfo.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    tiles
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.tiles.map(tiles => (
          <GameTile
            // removeFriend={this.removeFriend}
            id={tiles.id}
            key={tiles.id}
            // name={friend.name}
            image={tiles.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
