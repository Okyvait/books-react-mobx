import * as styles from './genres.module.css';

interface GenresProps {
  genres?: string[];
}

export const Genres = ({ genres }: GenresProps) => {
  return (
    <span data-testid={'genres'}>
      {genres?.map((g, i) => (
        <span className={styles.genre} key={g}>
          {g}
          {i === genres.length - 1 ? '' : ', '}
        </span>
      ))}
    </span>
  );
};
