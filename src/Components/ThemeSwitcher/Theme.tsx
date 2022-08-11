import { useState } from 'react';
// Icons
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const ThemeButton = () => {
  const [Theme, setTheme] = useState<Boolean>(false);

  const handelTheme = () => {
    if (Theme) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setTheme(!Theme);
  };

  return (
    <div className="flex item-center">
      <button type="button" onClick={handelTheme}>
        {Theme ? <HiOutlineSun size="1.5rem" /> : <HiOutlineMoon size="1.5rem" />}
      </button>
    </div>
  );
};

export default ThemeButton;
