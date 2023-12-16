'use client';
import { toggleFavorite } from './actions/server.api';
import styles from './page.module.css';
import { Repo } from './types';

export default function RepoComponent({ repo, isFavorite, click }: { repo: Repo, isFavorite: boolean, click: (repo: Repo) => void }) {

  return <div className={`${styles.repo} ${isFavorite ? styles.saved : ''}`} onClick={() => {
    toggleFavorite({ repoId: repo.id })
    click(repo)
  }}>
    <div className={styles.flexCenter}>
      <div>
        repo: {repo.name}
      </div>
      <div className={styles.border}>
        {repo.private ? 'private' : 'public'}
      </div>
    </div>

    <div>{repo.stargazers_count}⭐</div>
    <div style={{ flex: 1 }}></div>
    <div>
      owner: {repo.owner.login}
    </div>
  </div>
}
