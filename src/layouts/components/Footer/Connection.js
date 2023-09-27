const COMMERCIAL_PLATFORMS = [
  {
    img: "./img/commercial/shopee.png",
    alt: "shopee",
    href: "http://shopee.com",
  },
  {
    img: "./img/commercial/lazada.png",
    alt: "lazada",
    href: "http://lazada.com",
  },
  {
    img: "./img/commercial/tiki.png",
    alt: "tiki",
    href: "http://tiki.com",
  },
];

function Connection() {
  return (
    <div>
      <p className="text-[var(--primary)] text-lg font-bold uppercase mb-4 mt-5">
        Liên kết sàn
      </p>
      <div className="flex gap-2">
        {COMMERCIAL_PLATFORMS.map((value) => (
          <a href={value.href} target="_blank">
            <img
              src={value.img}
              alt={value.alt}
              className="w-8 hover:opacity-80"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Connection;
