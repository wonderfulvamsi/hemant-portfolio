import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  const colorTheme = {
    background: 'transparent',
    text: '#ffffff',
    level4: '#fe5a1d',
    level3: '#fe8116',
    level2: '#ff9f01',
    level1: '#ffa80f',
    level0: '#fdc360',
  };
  return (
    <div className={s.container}>
      <GitHubCalendar
        username="GHlakshman"
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        fontSize={16}
      />
    </div>
  );
};

export default GithubActivity;
