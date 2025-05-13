"use client";

import { useState, useEffect } from "react";
import { Music } from "lucide-react";
import AnimatedSection from "./animated-section";

interface SpotifyStats {
  topArtist: {
    name: string;
    url: string;
  };
  topTrack: {
    name: string;
    url: string;
  };
}

const urlTopArtista = "https://api.gilbertomorales.com/api/artista";
const urlMaisTocada = "https://api.gilbertomorales.com/api/maistocada";

// Funções de cache do LocalStorage
const salvarLocalStorage = (chave: string, dados: any, expMinutos = 10) => {
  const tempoExpiracao = new Date().getTime() + expMinutos * 60 * 1000;
  localStorage.setItem(chave, JSON.stringify({ dados, tempoExpiracao }));
};

const carregarLocalStorage = (chave: string) => {
  const dadosArmazenados = localStorage.getItem(chave);
  if (!dadosArmazenados) return null;

  const { dados, tempoExpiracao } = JSON.parse(dadosArmazenados);
  if (new Date().getTime() > tempoExpiracao) {
    localStorage.removeItem(chave);
    return null;
  }
  return dados;
};

export default function SpotifyStats() {
  const [spotifyData, setSpotifyData] = useState<SpotifyStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        // Verifica cache para topArtist
        let topArtistData = carregarLocalStorage("topArtista");
        if (!topArtistData) {
          const respostaArtista = await fetch(urlTopArtista);
          if (!respostaArtista.ok) throw new Error("Falha ao buscar artista mais escutado");
          topArtistData = await respostaArtista.json();
          salvarLocalStorage("topArtista", topArtistData);
        }

        // Verifica cache para topTrack
        let topTrackData = carregarLocalStorage("maisTocada");
        if (!topTrackData) {
          const respostaTocada = await fetch(urlMaisTocada);
          if (!respostaTocada.ok) throw new Error("Falha ao buscar música mais tocada");
          topTrackData = await respostaTocada.json();
          salvarLocalStorage("maisTocada", topTrackData);
        }

        // Estrutura os dados no formato esperado
        const formattedData: SpotifyStats = {
          topArtist: {
            name: topArtistData.topArtist || "Não encontrado",
            url: topArtistData.artistUrl || "#",
          },
          topTrack: {
            name: topTrackData.topTrack || "Não encontrada",
            url: topTrackData.trackUrl || "#",
          },
        };

        setSpotifyData(formattedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados do Spotify:", error);
        setSpotifyData(null);
        setIsLoading(false);
      }
    };

    fetchSpotifyData();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 animate-pulse h-24"></div>
        ))}
      </div>
    );
  }

  if (!spotifyData) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <AnimatedSection delay={0.1} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
        <div className="flex flex-col h-full">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
            <Music className="h-4 w-4" />
            <span>Top Artist</span>
          </div>
          <div className="mt-auto">
            <a href={spotifyData.topArtist.url} target="_blank" rel="noopener noreferrer">
              <div className="font-medium hover:underline">{spotifyData.topArtist.name}</div>
            </a>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
        <div className="flex flex-col h-full">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
            <Music className="h-4 w-4" />
            <span>Top Track</span>
          </div>
          <div className="mt-auto">
            <a href={spotifyData.topTrack.url} target="_blank" rel="noopener noreferrer">
              <div className="font-medium hover:underline">{spotifyData.topTrack.name}</div>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}