import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function About() {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="m-auto">
        <h3 className="text-xl font-bold"> About: </h3>
        <br />
        <div>
          <p className="loader"></p>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h3 className="text-3xl font-bold">Welcome to Trade-Binder </h3>
        <br />
        <div className="grid gap-4 grid-cols-2 grid-rows-3 justify-items-center">
          <div className="bg-blue-300 shadow-md rounded px-4 mb-4 w-full min-h-96 flex flex-col items-center">
            <h2 className="font-bold text-xl py-6 underline">
              What is Trade-Binder?
            </h2>
            <h3 className="font-semibold text-lg pb-5">
              A virtual trading card collection to facilitate trading with
              friends.
            </h3>
            <p className="pb-5">
              Magic: the Gathering (MTG) is a trading card game and is a big
              interest of mine. As you would expect from a trading card game,
              trading cards with friends is a pivotal part of MTG. This website
              allows users to replicate their own real-world trading card
              collections that can be sent to friends in order to facilitate and
              ease trading.
            </p>
            <p className="font-semibold">
              This website has the functionality to:
            </p>
            <div className="w-60">
              <ul className="text-left">
                <li className="list-disc">Log in as a pre-determined user </li>
                <li className="list-disc">Search for cards to add to binder</li>
                <li className="list-disc">View and edit your binder</li>
                <li className="list-disc">View other users' binders</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-200 shadow-md rounded px-4 mb-4 w-full min-h-96">
            <h3 className="py-6 text-xl font-bold underline">
              Behind the Scenes
            </h3>
            <p className="pb-5">
              Cards are searched for and added using Scryfall API, an already
              established API, accessed through axios. The website sends a GET
              request to the API and stores the relevant information in state in
              the card search page.
            </p>
            <p className="pb-5">
              This card can then be added to a pSQL database through an API I
              have created with express and node.js. This is done by interacting
              with the hosted API through a POST request and adding the card to
              a database of all added cards.
            </p>
            <p>
              From here, you can then access the cards in your binder by going
              to the trade-binder page, where another GET request is made to the
              database, showing only cards from the user you are logged in as.
            </p>
          </div>
          <div className="bg-blue-200 shadow-md rounded px-4 mb-4 w-full min-h-96">
            <h3 className="font-bold text-xl py-6 underline"> Tailwind CSS</h3>
            <p className="pb-5">
              I created this project to focus on developing my CSS skills, in
              particular using a CSS framework for the first time - I chose
              Tailwind due to the rising popularity of this library. Tailwind
              and React were used to create all of the elements you can see on
              the website, including organising the grid of cards and users.
            </p>
            <p className="pb-5">
              I created my own button component, which was then adapted slightly
              throughout the site to create a stylised theme. The colour pallete
              is minimal and simple to continue this theme.
            </p>
            <p>
              Overall, I found working with Tailwind intuitive, I am therefore
              looking to use this library further. My next step in this project
              will be to use Javascript and Tailwind to add animations to my
              site.
            </p>
          </div>
          <div className="bg-blue-300 shadow-md rounded px-4 mb-4 w-full min-h-96">
            <h3 className="font-bold text-xl py-6 underline">React Hooks </h3>
            <p className="pb-5">
              This site utilises React hooks: useState and useEffect that allows
              it to create and store variables. These variables can then be
              updated over time, and React will update our UI and the rendered
              html, whenever that state value is updated.
            </p>
            <p className="pb-5">
              UseState is used to track the variables that are just available on
              the current page, such as the cards in the binder and the users to
              log in as. UseState is also used to operate the search function,
              with the reset button setting state back to null.
            </p>
            <p>
              UseEffect is used to hold the current user logged it, as it is
              used across multiple pages of the website. This information
              determines which binder you are adding cards to, which binder you
              see on my page and which friends are shown (as to not show the
              current user).
            </p>
          </div>
          <div className="bg-blue-300 shadow-md rounded px-4 mb-4 w-full min-h-96">
            <h3 className="font-bold text-xl py-6 underline">
              How to Interact with this Site
            </h3>
            <p className="pb-5">
              Log into the site by selecting one of the users available, as some
              features cannot be carried out as a guest. Then, try searching for
              a card, the search function lets you search for any existing MTG
              card and add it to your binder. Try searching for one of the cards
              on the right and adding it.
            </p>
            <p className="pb-5">
              Once cards have been added to your binder, you can increase and
              decrease the quantity of these in your binder page. If you
              decrease a card with quantity of 1, it will remove it from your
              binder.
            </p>
            <p>
              You can also access other users' binders, here you can view all
              the cards they currently have for trade and there it a button to
              request to trade - this currently has no functionality, but in the
              future it will allow you to contact your friend.
            </p>
          </div>
          <div className="bg-blue-200 shadow-md rounded mb-4 w-full min-h-96 flex flex-col items-center">
            <div>
              <div className="py-6">
                <p className="font-semibold ">
                  Here are some popular cards you could try adding to a binder.
                  Scroll for more:
                </p>
              </div>
            </div>
            <div className="snap-x relative flex gap-6 overflow-x-auto w-3/4 mb-2">
              <div className="scroll-ml-6 ml-6 snap-start shrink-0 w-52 rounded-lg shadow-xl bg-blue-200">
                <img
                  className="rounded-lg"
                  src="https://c1.scryfall.com/file/scryfall-cards/normal/front/9/0/90460227-6f34-4403-b2ef-d79f95f44790.jpg?1655582662"
                />
              </div>
              <div className="scroll-ml-6 snap-start shrink-0 w-52 rounded-lg shadow-xl bg-blue-200">
                <img
                  className="rounded-lg"
                  src="https://c1.scryfall.com/file/scryfall-cards/normal/front/f/b/fbe04cb8-a8b9-4241-baae-b398a2509a3a.jpg?1572489956"
                />
              </div>
              <div className="scroll-ml-6 snap-start shrink-0 w-52 rounded-lg shadow-xl bg-blue-200">
                <img
                  className="rounded-lg"
                  src="https://c1.scryfall.com/file/scryfall-cards/normal/front/b/2/b281a308-ab6b-47b6-bec7-632c9aaecede.jpg?1599706001"
                />
              </div>
              <div className="scroll-ml-6 snap-start shrink-0 w-52 rounded-lg shadow-xl bg-blue-200">
                <img
                  className="rounded-lg"
                  src="https://c1.scryfall.com/file/scryfall-cards/normal/front/f/2/f29ba16f-c8fb-42fe-aabf-87089cb214a7.jpg?1655641518"
                />
              </div>
              <div className="scroll-ml-6 snap-start shrink-0 w-52 rounded-lg shadow-xl bg-blue-200">
                <img
                  className="rounded-lg"
                  src="https://c1.scryfall.com/file/scryfall-cards/normal/front/e/b/eb0e0404-4846-4891-acfa-bd0951ecf9c6.jpg?1626097375"
                />
              </div>
              <div className="scroll-ml-6 snap-start shrink-0 w-52 rounded-lg shadow-xl bg-blue-200">
                <img
                  className="rounded-lg"
                  src="https://c1.scryfall.com/file/scryfall-cards/normal/front/4/2/420bf1e9-f2ec-4dff-b540-e64de71e58be.jpg?1599709112"
                />
              </div>
              <div className="scroll-ml-6 snap-start shrink-0 w-52 rounded-lg shadow-xl bg-blue-200">
                <img
                  className="rounded-lg"
                  src="https://c1.scryfall.com/file/scryfall-cards/normal/front/e/6/e697ea72-e10e-4fed-be8f-8c6455cc3fc8.jpg?1655825212"
                />
              </div>
              <div className="scroll-ml-6 snap-start shrink-0 w-2 bg-blue-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;
