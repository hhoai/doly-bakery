const SUPPORT = [
  {
    title: "Mua online(08:00 - 21:00 mỗi ngày)",
    phone: "1900 6750",
    time: "Tất cả các ngày trong tuần (Trừ tết Âm Lịch)",
  },
  {
    title: "Góp ý và khiếu nại (8:30 - 20:30)",
    phone: "1900 6750",
    time: "Tất cả các ngày trong tuần (Trừ tết Âm Lịch)",
  },
];

function Support() {
  return (
    <div>
      <p className="text-[var(--primary)] text-lg font-bold uppercase mb-5">
        Hỗ trợ
      </p>
      {SUPPORT.map((support) => (
        <div>
          <p className="text-sm font-bold uppercase">{support.title}</p>
          <p className="text-[var(--primary)] text-lg font-bold uppercase">
            {support.phone}
          </p>
          <p className="text-sm italic mb-2">{support.time}</p>
        </div>
      ))}
    </div>
  );
}

export default Support;
