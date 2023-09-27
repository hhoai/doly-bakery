const INFORMATION = [
  {
    title: "Địa chỉ:",
    description: "70 Lữ Gia, Phường 15, Quận 11, TP.HCM",
  },
  {
    title: " Điện thoại:",
    description: "1900 6750",
  },
  {
    title: "Email:",
    description: "support@example.com",
    style: "cursor-pointer hover:text-[#e4a53d]",
  },
];

function Information() {
  return (
    <div>
      <p className="text-[var(--primary)] text-lg font-bold uppercase mb-5">
        Thông tin chung
      </p>
      {INFORMATION.map((value) => (
        <p className={`mb-1 ${value.style}`}>
          <span className="text-[var(--primary)] font-bold">{value.title}</span>{" "}
          {value.description}
        </p>
      ))}
    </div>
  );
}

export default Information;
