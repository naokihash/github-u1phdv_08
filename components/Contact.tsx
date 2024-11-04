import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ご予約・お問い合わせはお気軽にご連絡ください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">店舗情報</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-green-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">住所</p>
                  <p className="text-gray-600">〒963-8835</p>
                  <p className="text-gray-600">福島県郡山市小関谷地23-1</p>
                  <p className="text-gray-600">Bakeryいずみがもり桑野店内</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-green-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">電話番号</p>
                  <p className="text-gray-600">024-954-8339</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-green-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">営業時間</p>
                  <p className="text-gray-600">10:00～18:00</p>
                  <p className="text-gray-600">年中無休</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-green-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">ウェブサイト</p>
                  <a href="https://shinoya-cafe.com" className="text-green-800 hover:text-green-700">
                    shinoya-cafe.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">アクセス</h3>
            <div className="aspect-w-16 aspect-h-9 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.0436869800584!2d140.35863827677547!3d37.39841623658161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a774aa8a2b4e7%3A0x5a3a7b01a94b5e2!2z44GE44Ga44G_44GM44KC44KK5qGc6YeO5bqX!5e0!3m2!1sja!2sjp!4v1709825167844!5m2!1sja!2sjp"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>※ Bakeryいずみがもり桑野店内にございます。</p>
              <p>※ 店舗前に駐車場があります。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;