import { useMemo } from 'react';
import { useAppStore } from '../stores/useAppStore';
import DrinkCard from '../components/DrinkCard';

export default function FavoritesPage() {
  const { favorites } = useAppStore();

  const hasFavorites = useMemo(() => favorites.length, [favorites]);

  return (
    <>
      {hasFavorites ? (
        <>
          <h1 className="text-6xl font-extrabold">Favoritos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
            {favorites.map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
          </div>
        </>
      ) : (
        <p className="my-10 text-center text-2xl">
          Los favoritos se mostrarán aquí
        </p>
      )}
    </>
  );
}
