import { getRepositoriesByPage } from './actions/github.api';
import { getFavorites } from './actions/server.api';
import RepoList from './repoList';

export default async function Home() {
  const [repoResponse, favoriteResponse] = await Promise.all([getRepositoriesByPage(), getFavorites()])

  if ('status' in repoResponse || 'error' in favoriteResponse)
    return <div>error</div>

  return (
    <main >
      {<RepoList favoriteResponse={favoriteResponse as string[]} repos={repoResponse} ></RepoList>}
    </main >
  )

}
