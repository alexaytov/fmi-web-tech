import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

interface ViewSlidesButtonProps {
  lectureSlug: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Button component to link from lecture pages to reveal.js presentations
 *
 * Uses useBaseUrl hook to correctly resolve the slides URL relative to
 * the site's baseUrl, ensuring it works in any deployment environment.
 *
 * @example
 * ```tsx
 * <ViewSlidesButton lectureSlug="arrays-binary-search" />
 * ```
 */
export default function ViewSlidesButton({
  lectureSlug,
  variant = 'primary',
  size = 'lg'
}: ViewSlidesButtonProps) {
  const slideUrl = useBaseUrl(`/slides/${lectureSlug}/`);

  return (
    <div className={styles.container}>
      <a
        href={slideUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`button button--${variant} button--${size}`}
      >
        📊 Виж Презентация
      </a>
    </div>
  );
}
