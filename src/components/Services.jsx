import React from 'react';
import { IMAGES } from '../constants';

const Services = () => {
    // Simple list, no complex stagger animations
    const services = [
        {
            title: "日常のお掃除",
            desc: "忙しいあなたに代わって、掃除機がけや拭き掃除を行います。",
            img: IMAGES.services.floor,
        },
        {
            title: "お店の床・ガラス",
            desc: "小さなお店や事務所の美観維持。定期的な訪問も可能です。",
            img: IMAGES.services.office,
        },
        {
            title: "スポット清掃",
            desc: "「ここだけキレイにしたい」というご要望もお気軽に。",
            img: IMAGES.services.glass,
        }
    ];

    return (
        <section id="services" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold text-sm block mb-2">サービス内容</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                        こんなこと、お任せください
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-stone-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <p className="text-slate-700 text-sm md:text-base">
                        「こんなことは頼める？」といったご相談も大歓迎です。<br />
                        メニューにないことでも、私たちにできることなら何でもお手伝いします。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
