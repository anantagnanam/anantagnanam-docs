import React from 'react';

/**
 * ImageCard — an illustrated figure with a caption.
 */
export default function ImageCard({
  src,
  alt,
  title,
  caption,
}: {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}): React.JSX.Element {
  return (
    <figure className="ag-imagecard">
      <div className="ag-imagecard__frame">
        <img src={src} alt={alt} loading="lazy" />
      </div>
      {(title || caption) && (
        <figcaption className="ag-imagecard__caption">
          {title && <span className="ag-imagecard__title">{title}</span>}
          {caption && <span className="ag-imagecard__text">{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}
