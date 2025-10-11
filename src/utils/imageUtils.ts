/**
 * Creates a placeholder image using canvas when the original image fails to load
 */
export const createPlaceholderImage = (
  width: number = 1200,
  height: number = 600,
  text: string = 'Image',
  subtitle?: string
): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // Create a gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f8fafc');
  gradient.addColorStop(1, '#e2e8f0');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add main text
  ctx.fillStyle = '#64748b';
  ctx.font = `bold ${Math.min(width / 25, 48)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText(text, width / 2, height / 2 - (subtitle ? 20 : 0));
  
  // Add subtitle if provided
  if (subtitle) {
    ctx.font = `${Math.min(width / 50, 24)}px Arial`;
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(subtitle, width / 2, height / 2 + 40);
  }
  
  return canvas.toDataURL();
};

/**
 * Handles image loading errors by creating a placeholder
 */
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackText: string = 'Image',
  fallbackSubtitle?: string
) => {
  const target = event.currentTarget;
  console.warn('Failed to load image:', target.src);
  
  // Prevent any external URL loading
  if (target.src && (target.src.startsWith('http://') || target.src.startsWith('https://'))) {
    console.warn('Blocked external URL loading, creating local placeholder instead');
  }
  
  const placeholder = createPlaceholderImage(
    target.width || 1200,
    target.height || 600,
    fallbackText,
    fallbackSubtitle
  );
  
  // Ensure we only set local data URLs
  if (placeholder && placeholder.startsWith('data:')) {
    target.src = placeholder;
  } else {
    console.error('Failed to create placeholder image');
    // Fallback to a simple colored div
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'flex items-center justify-center bg-gray-200 text-gray-600 font-medium';
      fallbackDiv.style.width = target.width ? `${target.width}px` : '100%';
      fallbackDiv.style.height = target.height ? `${target.height}px` : '300px';
      fallbackDiv.textContent = fallbackText;
      parent.appendChild(fallbackDiv);
    }
  }
};
