import React from 'react';
import { useSettingsContext } from 'context/settings-context'

type Props = {
  text: string;
}

const BlurredText: React.FC<Props> = ({ text }: Props) => {
  const { hideAmounts } = useSettingsContext();
  const regex = /./ig;
  return <>{hideAmounts ? text.replace(regex, '*') : text}</>
};

export default BlurredText;