import { v4 as uuidv4 } from 'uuid';

const initialJokes = [
  {
    id: uuidv4(),
    isLiked: false,
    setup: 'How many telemarketers does it take to change a light bulb?',
    punchline: 'Only one, but he has to do it while you are eating dinner.'
  },
  {
    id: uuidv4(),
    isLiked: false,
    setup: 'Did you know that by law you must turn on your headlights when it\'s raining in Sweden?',
    punchline: 'Crazy, right? How am I supposed to know when it\'s raining in Sweden?'
  },
  {
    id: uuidv4(),
    isLiked: false,
    setup: 'I don\'t trust stairs...',
    punchline: 'They are always up to something.'
  },
  {
    id: uuidv4(),
    isLiked: false,
    setup: 'Today, my son asked, "Can I have a bookmark?"',
    punchline: 'I burst into tears—11 years old and he still doesn\'t know my name is Brian.'
  },
  {
    id: uuidv4(),
    isLiked: false,
    setup: 'When I was a kid, my dad got fired from his job as a road worker for theft.',
    punchline: 'I refused to believe he could do such a thing, but when I got home, the signs were all there.'
  },
]

export default initialJokes;
