import { FC } from 'react';

interface IButton {
  submit?: boolean;
  onClick: () => void;
  text: string;
  isUpperCase?: boolean;
  isRed?: boolean;
  width?: number;
}

const Button: FC<IButton> = ({
  submit,
  onClick,
  text,
  isUpperCase = false,
  isRed = false,
  width,
}) => {
  return (
    <button
      style={{
        color: isRed ? 'white' : 'black',
        backgroundColor: isRed ? '#F2726C' : 'white',
        width: width ? `${width}px` : '100%',
        border: 'none',
        borderRadius: '30px',
        textTransform: `${isUpperCase ? 'uppercase' : 'none'}`,
        height: '48px',
        cursor: 'pointer',
      }}
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
};

export default Button;
