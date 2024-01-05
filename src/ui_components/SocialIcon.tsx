function SocialIcon({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="border rounded-md border-primary-200 p-3 "
    />
  );
}

export default SocialIcon;
