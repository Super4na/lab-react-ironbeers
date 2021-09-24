import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <nav>
        <div class="allBeers">
          <img src={`/assets/beers.png`} alt={`beer list`} />
          <br />
          <NavLink class="pageTitle" to={`/beers`}>
            All Beers
          </NavLink>
          <br />
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae lorem lobortis, convallis libero at, suscipit dui. Aliquam
              viverra, arcu eu laoreet mattis, purus dolor elementum turpis, ac
              lobortis elit velit sed ipsum. Quisque lobortis sodales erat a
              aliquet. Nam ut suscipit nunc. Etiam id nisl sit amet erat
              vulputate facilisis eu at nisi. Curabitur rhoncus sodales lectus
              eu ullamcorper. Nulla eget urna sit amet ex iaculis lobortis eu
              vitae massa. Donec nulla nunc, imperdiet gravida dui ut, auctor
              commodo felis. Sed sem odio, aliquet quis efficitur vitae,
              pulvinar vel ex. Aenean tristique cursus felis, sagittis
              consectetur sem aliquet sed. Integer tincidunt mattis diam
              vestibulum fermentum. Curabitur tincidunt sem facilisis, porttitor
              turpis et, tincidunt purus.
            </p>
          </div>
        </div>
        <div class="randomBeer">
          <img src={`/assets/random-beer.png`} alt={`banner`} />
          <br />
          <NavLink class="pageTitle" to={`/random-beer`}>
            Random Beer
          </NavLink>
          <br />
          <div class="text">
            <p>
              Proin vulputate tempus gravida. Aenean ut lectus at urna
              ullamcorper condimentum nec in odio. Duis at enim nec nibh
              pharetra sagittis eget sed eros. Aliquam fermentum, elit quis
              sagittis mattis, eros dolor eleifend ante, nec suscipit urna enim
              nec ante. Integer eget quam tortor. Aenean cursus mollis velit, in
              accumsan lectus venenatis sed. Duis tincidunt mattis laoreet.
              Suspendisse vitae tempus dui. Sed porta enim ut purus interdum
              varius. Nulla erat urna, egestas quis luctus eget, blandit in
              enim. Pellentesque elementum arcu ac diam mollis, quis fringilla
              risus rutrum. Sed scelerisque felis sed lacus efficitur, eu dictum
              erat tristique. Nam sem turpis, varius vitae dolor ut, sodales
              varius nisl. Sed vitae semper purus, a feugiat nulla.
            </p>
          </div>
        </div>
        <div class="newBeer">
          <img src={`/assets/new-beer.png`} alt={`banner`} />
          <br />
          <NavLink class="pageTitle" to={`/new-beer`}>
            New Beer
          </NavLink>
          <div class="text">
            <p>
              Curabitur eget nisl sed velit hendrerit volutpat. Vestibulum a
              dignissim tellus. Nulla ultrices dignissim nisi. Curabitur sit
              amet pellentesque erat. Aenean in blandit turpis. Suspendisse eget
              finibus nibh. Aenean tellus nunc, eleifend commodo tristique
              vitae, tempus ac orci. Sed rutrum erat et elit tincidunt
              ullamcorper. Aenean sodales, elit a laoreet suscipit, libero orci
              pellentesque leo, vel fringilla sem metus id orci.
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Homepage;
