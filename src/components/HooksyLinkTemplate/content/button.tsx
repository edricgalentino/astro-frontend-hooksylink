import { useState, type CSSProperties } from 'react';
import type { Button } from '../../../modules/Button/button';
import type { Content } from '../../../modules/Content/content';

interface HooksyLinkButtonProps {
  buttonSpec: Button;
  content: Content;
}

const HooksyLinkButton = ({ buttonSpec, content }: HooksyLinkButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={content.link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`relative flex w-full items-center gap-2 px-2 py-1 transition-all duration-300 md:gap-4 md:px-3 md:py-2 2xl:px-4 2xl:py-2.5 ${getButtonAdditionalClass(
          buttonSpec,
        )} ${getButtonRadius(buttonSpec)}`}
        style={getButtonStyle(isHovered, buttonSpec)}
      >
        {content.thumbnail && (
          <img
            src={content.thumbnail}
            alt="Content Thumbnail"
            className="absolute h-5 w-5 rounded-full object-cover md:h-7 md:w-7"
          />
        )}
        <p className="w-full text-center text-xs font-semibold md:text-sm">
          {content.title}
        </p>
      </button>
    </a>
  );
};

export default HooksyLinkButton;

function getButtonStyle(
  isHovered: boolean,
  buttonSpec: Button,
): CSSProperties | undefined {
  switch (buttonSpec.type) {
    case 'FILL':
      return {
        background: isHovered ? buttonSpec.font_color : buttonSpec.color,
        color: isHovered ? buttonSpec.color : buttonSpec.font_color,
        border: `2px solid ${buttonSpec.color}`,
      };
    case 'HARD SHADOW':
      return {
        background: buttonSpec.color,
        color: buttonSpec.font_color,
        border: `1px solid ${buttonSpec.font_color}`,
        boxShadow:
          buttonSpec.type === 'HARD SHADOW'
            ? `${isHovered ? '8px 8px' : '4px 4px'} ${buttonSpec.font_color}`
            : 'none',
      };
    case 'SOFT SHADOW':
      return {
        background: buttonSpec.color,
        color: buttonSpec.font_color,
        border: `1px solid ${buttonSpec.font_color}`,
        boxShadow:
          buttonSpec.type === 'SOFT SHADOW'
            ? `${isHovered ? '4px 4px' : '2px 2px'} 4px ${buttonSpec.font_color}`
            : 'none',
      };
    case 'OUTLINE':
      return {
        background: isHovered ? buttonSpec.color : buttonSpec.font_color,
        color: isHovered ? buttonSpec.font_color : buttonSpec.color,
        border: `2px solid ${buttonSpec.color}`,
      };
    default:
      return undefined;
  }
}

function getButtonRadius(buttonSpec: Button) {
  switch (buttonSpec.rounded) {
    case 'NOT':
      return '';
    case 'MEDIUM':
      return 'rounded-md';
    case 'FULL':
      return 'rounded-full';
    default:
      return '';
  }
}

function getButtonAdditionalClass(buttonSpec: Button) {
  switch (buttonSpec.type) {
    case 'FILL':
      return '';
    case 'HARD SHADOW':
      return `ease-in-out bottom-0 right-0 hover:bottom-1 hover:right-1`;
    case 'SOFT SHADOW':
      return `ease-linier bottom-0 right-0 hover:bottom-0.5 hover:right-0.5`;
    case 'OUTLINE':
      return 'ease-in-out';
    default:
      return '';
  }
}
