interface AvatarProps {
  firstname: string;
  lastanme: string;
  image: string;
}

function Avatar({ firstname, lastanme, image }: AvatarProps) {
  return (
    <>
      <img src={image} alt={`${firstname} ${lastanme}`} />
      <p>{`Voici tel personnage ${firstname} ${lastanme}`}</p>
    </>
  );
}

export default Avatar;
