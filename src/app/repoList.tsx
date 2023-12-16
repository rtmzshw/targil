'use client';
import { useState } from 'react';
import RepoComponent from './repo';
import { Repo } from './types';

export default function RepoList({ favoriteResponse, repos }: { favoriteResponse: string[], repos: Repo[] }) {

    const [favorites, setFavorite] = useState(favoriteResponse as string[]);

    const addToFaivoriteLocally = (repo: Repo) =>
        favorites.includes(repo.id) ? setFavorite(favorites.filter(r => r != repo.id)) : setFavorite([...favorites, repo.id])

    return (
        <main >
            {repos ? <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {repos.map(repo => <RepoComponent repo={repo}
                    isFavorite={favorites.includes(repo.id)}
                    click={addToFaivoriteLocally}>
                </RepoComponent>)}
            </div>
                : 'loader'
            }
        </main >
    )

}
