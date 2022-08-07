import './App.css';
import { useQuery } from '@tanstack/react-query';
import { TweetBox } from './components/TweetBox';
import {
  TweetPost,
  TweetPostProps,
} from './components/TweetPost';
import axios from 'axios';

function App() {
  const { isLoading, data = {} } = useQuery(
    ['repoData'],
    () =>
      axios
        .get('http://localhost:8082/tweets')
        .then((res) => res.data)
  );
  const DATA: TweetPostProps[] = data || [];

  if (isLoading) {
    return (
      <div className='loading-container'>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='feed'>
        <div className='feed__header'>
          <h2>Home</h2>
        </div>
        <TweetBox />
        {DATA.map((item, index) => (
          <TweetPost key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
