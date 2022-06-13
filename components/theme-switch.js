import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import ToggleButton from '@material-ui/lab/ToggleButton';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const dark = theme === 'dark' ? true : false;

  const [checked, setChecked] = useState(dark);
  const [mounted, setMounted] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    console.log(nextChecked)
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTheme(checked ? 'dark' : 'light');
  }, [checked, setTheme]);

  if (!mounted) return null;

  return (
    <ToggleButton
    style={{maxWidth: '25px', maxHeight: '25px', minWidth: '25px', minHeight: '25px'}}
    value="check"
    selected={checked}
    onChange={() => {
      setChecked(!checked);
    }}
  >
    {checked ? <WbSunnyIcon style={{height: '15px', fill: "white"}}/> : <Brightness3Icon style={{height: '15px', fill: "black"}}/>}
  </ToggleButton>
  );
};

export default ThemeSwitch;