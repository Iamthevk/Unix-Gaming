interface ISocialProps {
  src: string;
  alt: string;
}

function SocialIcon({ src, alt }: ISocialProps) {
  return (
    <a href={`https://www.${alt}.com`} target="_blank">
      <img
        src={src}
        alt={alt}
        className="border rounded-md border-primary-100 p-2 md:p-3 bg-secondary-200 cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out"
      />
    </a>
  );
}

export default SocialIcon;
