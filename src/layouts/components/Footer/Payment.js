const PAYMENT = [
  { img: "./img/payment/payment_1.webp", alt: "payment 1" },
  { img: "./img/payment/payment_2.png", alt: "payment 2" },
  { img: "./img/payment/payment_3.png", alt: "payment 3" },
];

function Payment() {
  return (
    <div>
      <p className="text-[var(--primary)] text-lg font-bold uppercase mb-2.5">
        Hình thức thanh toán
      </p>
      <div className="flex gap-2">
        {PAYMENT.map((value) => (
          <img src={value.img} alt={value.alt} className="w-12 h-7" />
        ))}
      </div>
    </div>
  );
}

export default Payment;
