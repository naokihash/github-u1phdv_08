import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">店舗情報</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            福島県郡山市にある、心と体に優しいカフェです。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
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
                <Mail className="h-6 w-6 text-green-800 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">メールアドレス</p>
                  <a href="mailto:support@shinoya.jp" className="text-green-800 hover:text-green-700">
                    support@shinoya.jp
                  </a>
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
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.279412582855!2d140.34742861103817!3d37.40687013315176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60206db847949853%3A0xf336e38c296facb6!2z5pes6a6u55u0IOmjn-adkOOBl-OBruOChA!5e0!3m2!1sen!2sjp!4v1730734173118!5m2!1sen!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}