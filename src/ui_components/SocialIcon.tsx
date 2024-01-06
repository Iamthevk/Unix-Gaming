interface ISocialProps {
  src: string;
  alt: string;
}

function SocialIcon({ src, alt }: ISocialProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="border rounded-md border-primary-100 p-2 md:p-3 bg-secondary-200"
    />
  );
}

export default SocialIcon;
