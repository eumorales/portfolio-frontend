"use client";
import { useEffect, useState } from "react";

interface GithubStats {
  stars: number;
  followers: number;
  repos: number;
}

interface Repo {
  stargazers_count: number;
}

export function useGithubStats(username: string) {
  const [stats, setStats] = useState<GithubStats | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error("Erro ao buscar dados do GitHub");
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        const stars = Array.isArray(reposData)
          ? reposData.reduce((total: number, repo: Repo) => total + repo.stargazers_count, 0)
          : 0;

        setStats({
          stars,
          followers: userData.followers,
          repos: userData.public_repos,
        });
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
        setStats(null);
      }
    }

    fetchStats();
  }, [username]);

  return stats;
}