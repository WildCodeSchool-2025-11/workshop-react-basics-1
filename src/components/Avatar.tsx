import { useState } from 'react';
interface AvatarProps {
  firstname: string;
  lastanme: string;
  image: string;
}

function Avatar({ firstname, lastanme, image }: AvatarProps) {
  const [donut, setDonut] = useState(0);

  return (
    <>
      <h2>{`${firstname} ${lastanme}`}</h2>
      <img src={image} alt={`${firstname} ${lastanme}`} />
      <p><img src={'/image.png'} alt={'donut'} width={64} onClick={() => setDonut(donut +1)} style={{ cursor:'pointer' }} /></p>
      <p>{firstname} a mangé {donut} donut(s)</p>
      <hr/>
    </>
  );
}

export default Avatar;
