const POLICY = [
  {
    img: "./img/policy/chinhsach_1.png",
    alt: "chinhsach1",
    title: "Miễn phí vận chuyển",
    descreption: "Áp dụng free ship cho tất cả các đơn hàng từ 300.000đ",
  },
  {
    img: "./img/policy/chinhsach_2.png",
    alt: "chinhsach2",
    title: "Đổi trả dễ dàng",
    descreption: "Đổi ngay trong ngày nếu như bánh không đúng yêu cầu",
  },
  {
    img: "./img/policy/chinhsach_3.png",
    alt: "chinhsach3",
    title: "Hỗ trợ nhanh chóng",
    descreption: "Gọi Hotline: 1900 6750 để được hỗ trợ ngay",
  },
  {
    img: "./img/policy/chinhsach_4.png",
    alt: "chinhsach4",
    title: "Thanh toán đa dạng",
    descreption: "Thanh toán khi nhận hàng, Napas, Visa, Chuyển Khoản",
  },
];

function Policy() {
  return (
    <div className="wrapper flex w-[1300px] m-auto justify-around py-12">
      {POLICY.map((item) => {
        return (
          <div className="flex w-[23%] items-center gap-3">
            <img src={item.img} alt={item.alt} className="w-10 h-10 " />
            <div>
              <p className="text-base font-bold">{item.title}</p>
              <p className="text-sm">{item.descreption}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Policy;
