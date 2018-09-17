import React, { Component } from "react";
import GameTile from "./components/GameTile";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import Counter from "./components/Counter";
import tiles from "./tileInfo.json";
import "./App.css";

const shuffleTiles = arr => (
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]) 
);

const gameTiles =
[
  {
    "name": "SpongeBob",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",
   },
  {
    "name": "Mr. Krabs",
    "image": "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
   },
  {
    "name": "Squidward",
    "image": "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
   },
  {
    "name": "Dexter",
    "image": "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",
   },
  {
    "name": "Courage",
    "image": "https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",
  },
  {
   "name": "Doug Funnie",
    "image": "https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",
  },
  {
    "name": "Bugs Bunny",
    "image": "https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",
  },
  {
    "name": "Johnny Bravo",
    "image": "http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",
  },
  {
    "name": "Tommy Pickles",
    "image": "https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",
  },
  {
    "name": "Rocko",
    "image": "http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",
  },
  {
    "name": "Captain Planet",
    "image": "http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",
  },
  {
    "name": "Ickis",
    "image": "http://static.tvtropes.org/pmwiki/pub/images/ickis.png",
  }
]
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
        <Header>A game to test your memory. Click tiles until you've clicked them all.  You can't click the same tile twice. Can you get all 12?</Header>
        <Counter>score={this.state.count}</Counter>
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
