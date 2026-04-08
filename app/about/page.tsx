export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Về chúng tôi</h1>

      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Giới thiệu về Hien Strong Tie</h2>
          <p className="text-lg text-gray-700 mb-6">
            Hien Strong Tie là công ty chuyên cung cấp vật liệu xây dựng chất lượng cao cho mọi công trình.
            Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến cho khách hàng những sản phẩm
            tốt nhất với giá cả cạnh tranh.
          </p>
          <p className="text-lg text-gray-700">
            Chúng tôi cung cấp đầy đủ các loại vật liệu xây dựng từ gỗ, thép, bê tông đến bu lông và phụ kiện,
            đáp ứng mọi nhu cầu của các dự án xây dựng dân dụng, thương mại và công nghiệp.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Cam kết của chúng tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Chất lượng cao</h3>
              <p className="text-gray-600">Chỉ cung cấp vật liệu đạt tiêu chuẩn quốc tế và được chứng nhận chất lượng.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Giao hàng nhanh</h3>
              <p className="text-gray-600">Hệ thống logistics hiệu quả đảm bảo giao hàng đúng hẹn trên toàn quốc.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tư vấn chuyên nghiệp</h3>
              <p className="text-gray-600">Đội ngũ kỹ thuật giàu kinh nghiệm sẵn sàng tư vấn và hỗ trợ khách hàng.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Liên hệ với chúng tôi</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Thông tin liên hệ</h3>
                <p className="mb-2"><strong>Địa chỉ:</strong> 123 Đường ABC, Quận XYZ, TP.HCM</p>
                <p className="mb-2"><strong>Điện thoại:</strong> 0123 456 789</p>
                <p className="mb-2"><strong>Email:</strong> info@hienstrongtie.com</p>
                <p className="mb-2"><strong>Giờ làm việc:</strong> 8:00 - 17:00 (Thứ 2 - Thứ 7)</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Tại sao chọn chúng tôi?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Giá cả cạnh tranh nhất thị trường</li>
                  <li>Hỗ trợ kỹ thuật 24/7</li>
                  <li>Bảo hành sản phẩm dài hạn</li>
                  <li>Giao hàng tận nơi</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
