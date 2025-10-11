import React, { useState, useCallback } from 'react';
import { handleImageError } from '../utils/imageUtils';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackText?: string;
  fallbackSubtitle?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  onLoad?: () => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  fallbackText = 'Image',
  fallbackSubtitle,
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setImageError(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback((event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn('Image failed to load:', src);
    setIsLoading(false);
    setImageError(true);
    
    // Use our custom error handler
    handleImageError(event, fallbackText, fallbackSubtitle);
    
    // Call the custom onError if provided
    onError?.(event);
  }, [src, fallbackText, fallbackSubtitle, onError]);

  if (imageError) {
    return (
      <div 
        className={`flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 ${className}`}
        style={style}
      >
        <div className="text-center p-8">
          <div className="text-2xl font-bold mb-2">{fallbackText}</div>
          {fallbackSubtitle && (
            <div className="text-lg text-slate-500">{fallbackSubtitle}</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding={decoding}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default SafeImage;
