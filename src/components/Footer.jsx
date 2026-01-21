import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-gradient-to-tr from-primary to-secondary w-8 h-8 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">K</span>
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">春日井クリーンテック</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm">
                            私たちは、最新技術とプロフェッショナルの技で、快適で美しい空間を創造する清掃のスペシャリストです。春日井市を中心に、オフィスビル、商業施設、マンションの清掃管理を行っています。
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Service</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#services" className="hover:text-secondary transition-colors">定期清掃</a></li>
                            <li><a href="#services" className="hover:text-secondary transition-colors">フロアメンテナンス</a></li>
                            <li><a href="#services" className="hover:text-secondary transition-colors">ガラス・外壁清掃</a></li>
                            <li><a href="#services" className="hover:text-secondary transition-colors">日常清掃代行</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-secondary transition-colors">会社概要</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">採用情報</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">プライバシーポリシー</a></li>
                            <li><a href="#contact" className="hover:text-secondary transition-colors">お問い合わせ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-xs">
                    &copy; {new Date().getFullYear()} Kasugai Clean Tech. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
