export const settings = {
    columnCreatorText: 'Add new column',
    cardCreatorText: 'Add new card',
    creator: {
      buttonOK: 'OK',
      buttonCancel: 'Cancel',
      defaultText: 'Add new item',
    },
    search: {
      defaultText: 'Search...',
      icon: 'search',
    },
    defaultListDescription: '<p>I can do all the things!!!</p>',
    defaultColumnIcon: 'list-alt',
    headerIcon: 'pen',
  };
  
  export const pageContents = {
    title: 'My first React app',
    subtitle: 'A simple to-do app, with lists, columns and cards',
  };
  
  export const listData = {
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    columns: [
      {
        key: 0,
        title: 'Books',
        icon: 'book',
        cards: [
          {
            key: 0,
            title: 'This Is Going to Hurt',
          },
          {
            key: 1,
            title: 'Interpreter of Maladies',
          },
        ],
      },
      {
        key: 1,
        title: 'Movies',
        icon: 'film',
        cards: [
          {
            key: 0,
            title: 'Harry Potter',
          },
          {
            key: 1,
            title: 'Star Wars',
          },
        ],
      },
      {
        key: 2,
        title: 'Games',
        icon: 'gamepad',
        cards: [
          {
            key: 0,
            title: 'The Witcher',
          },
          {
            key: 1,
            title: 'Skyrim',
          },
        ],
      },
    ],
  };
  
  const lists = [
    {
      id: 'list-1',
      title: 'Things to do <sup>soon!</sup>',
      description: 'Interesting things I want to check out!',
      image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    },
  ];
  
  const columns = [
    {
      id: 'column-1',
      listId: 'list-1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: 'column-2',
      listId: 'list-1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: 'column-3',
      listId: 'list-1',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      id: 'column-4',
      listId: 'list-2',
      title: 'Strange column',
      icon: 'question',
    },
  ];
  
  const cards = [
    {
      id: 'card-1',
      columnId: 'column-1',
      title: 'This Is Going to Hurt',
    },
    {
      id: 'card-2',
      columnId: 'column-1',
      title: 'Interpreter of Maladies',
    },
    {
      id: 'card-3',
      columnId: 'column-2',
      title: 'Harry Potter',
    },
    {
      id: 'card-4',
      columnId: 'column-2',
      title: 'Star Wars',
    },
    {
      id: 'card-5',
      columnId: 'column-3',
      title: 'The Witcher',
    },
    {
      id: 'card-6',
      columnId: 'column-3',
      title: 'Skyrim',
    },
  ];

  export const infoContents = {
    title: 'Info',
    image: 'https://i.postimg.cc/mZFwH8t1/Stargate-To-Other-World.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac euismod odio. Phasellus mattis congue tristique. Nulla tincidunt convallis cursus. Proin et nunc eget dui pretium elementum. Etiam magna quam, elementum quis tortor sit amet, dignissim varius ex. Cras mauris tortor, accumsan ac posuere eget, hendrerit et sapien. Vivamus risus velit, porttitor eu venenatis in, aliquam non est. Nullam ex arcu, tincidunt quis tempus auctor, finibus vitae odio. Duis convallis et diam ut porttitor. Donec id pharetra augue. Duis dignissim, lorem non placerat porttitor, dolor magna rutrum mauris, ac imperdiet ipsum ante ut ex. Cras erat eros, ultricies id posuere eu, aliquet at odio. Donec eget semper est. Ut at nisi ac dui sodales ultricies',
  };
  
  export const faqContents = {
    title: 'FAQ',
    image: 'https://i.postimg.cc/J4xBDkcB/Abstract-Christmas-Lights.jpg',
    content: 'Mauris faucibus nibh ut urna lacinia auctor nec vitae sapien. Aliquam id fringilla turpis. Etiam semper, nulla vitae egestas mattis, libero arcu convallis risus, sit amet tincidunt leo erat in erat. Quisque consequat velit odio, in semper nisl venenatis eget. Donec viverra lectus id imperdiet porttitor. Donec volutpat ullamcorper condimentum. In pellentesque, odio in facilisis auctor, tortor felis auctor sapien, in cursus tortor metus vitae mi. Duis a venenatis augue, id tempor neque.\n' +
      '\n' +
      'Etiam ligula turpis, rutrum tempus condimentum non, elementum at erat. Morbi ullamcorper, sapien vitae vehicula vulputate, ligula justo finibus arcu, placerat ultricies velit nisl ut nulla. Vestibulum in interdum felis. Fusce bibendum lectus vitae lacus euismod bibendum. Morbi a dui vitae arcu pharetra tincidunt. Phasellus interdum a ante sed ullamcorper. Etiam aliquam neque non blandit tincidunt. Praesent quis tellus et felis volutpat tincidunt. Duis venenatis ullamcorper pharetra. Suspendisse vel mi hendrerit, sagittis quam sed, rutrum dolor. Phasellus ante odio, consectetur nec enim ut, interdum pharetra ligula.',
  };
  
  const initialStoreData = {
    app: {...pageContents},
    lists: [...lists],
    columns: [...columns],
    cards: [...cards],
  };
  
  export default initialStoreData;