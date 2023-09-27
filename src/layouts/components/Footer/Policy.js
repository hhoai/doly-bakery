const POLICY = [
  {
    content: "Chính sách thành viên",
    href: ""
  },
  {
    content: "Chính sách thanh toán",
    href: ""
  },
  {
    content: "Hướng dẫn mua hàng",
    href: ""
  },
  {
    content: "Quà tặng tri ân",
    href: ""
  },
  {
    content: "Bảo mật thông tin cá nhân",
    href: ""
  },
];

function Policy() {
  return (
    <div>
      <p className="text-[var(--primary)] text-lg font-bold uppercase mb-5">
        Chính sách
      </p>
      {POLICY.map((policy) => {
        return (
          <a href={policy.href} target="_blank">
            <p className="mb-1 hover:text-[#e4a53d]">
            {policy.content}
          </p>
          </a>
        );
      })}
    </div>
  );
}

export default Policy;
