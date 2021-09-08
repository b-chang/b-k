const posts = [
  {
    id: 1,
    user: 'Batman',
    avatar: 'https://source.unsplash.com/nLvqquwiqWQ',
    book: 'Dark Knight',
    achievements: 2,
    pages: 42,
    readingTime: 60,
    likes: 24,
    comments: 5,
    date: new Date().toLocaleTimeString([], { timeStyle: 'short' })
  },
  {
    id: 2,
    user: 'SpongeBob SquarePants',
    avatar: 'https://source.unsplash.com/nLvqquwiqWQ',
    book: 'Krusty Krab',
    achievements: 3,
    pages: 27,
    readingTime: 30,
    likes: 8,
    comments: 55,
    date: new Date().toLocaleTimeString([], { timeStyle: 'short' })
  },
  {
    id: 3,
    user: 'Harry Potter',
    avatar: 'https://source.unsplash.com/nLvqquwiqWQ',
    book: 'Goblet of Fire',
    achievements: 5,
    pages: 162,
    readingTime: 139,
    likes: 2,
    comments: 3,
    date: new Date().toLocaleTimeString([], { timeStyle: 'short' })
  }
];

export default posts;