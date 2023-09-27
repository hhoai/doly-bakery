const SOCIAL = [
  {
    img: "./img/social/facebook.png",
    alt: "Facebook",
    href: "http://www.facebook.com",
  },
  {
    img: "./img/social/google.webp",
    alt: "Google",
    href: "http://www.google.com",
  },
];

function Social() {
  return (
    <div>
      <p className="text-[var(--primary)] text-lg font-bold uppercase">
        Mạng xã hội
      </p>
      <div className="flex gap-2">
        {SOCIAL.map((value) => (
          <a href={value.href} target="_blank">
            <img src={value.img} alt={value.alt} className="w-8 mt-1 hover:opacity-80" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Social;
