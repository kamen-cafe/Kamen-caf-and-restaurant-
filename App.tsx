
import React, { useState, useMemo } from 'react';
import { ShoppingCart, Search, Plus, Minus, X, CheckCircle, Phone, CreditCard, User, MapPin, Hash, Star } from 'lucide-react';
import { MenuItem, CartItem } from './types';
import { CATEGORIES, MENU_ITEMS } from './data';

const OWNER_WHATSAPP = "201021463138"; 

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState<'idle' | 'ordering' | 'success'>('idle');
  const [customerDetails, setCustomerDetails] = useState({ 
    name: '', 
    phone: '', 
    detailedAddress: '', 
    table: '' 
  });

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesSearch = item.nameAr.includes(searchTerm) || item.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, searchTerm]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map(i => i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i);
      }
      return prev.filter(i => i.id !== itemId);
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderStatus('ordering');

    const date = new Date().toLocaleString('ar-EG');
    const itemsList = cart.map(item => `• ${item.nameAr} (x${item.quantity}) -> ${item.price * item.quantity} LE`).join('%0A');
    
    const message = `*طلب جديد من منيو KAMEN*%0A` +
      `--------------------------%0A` +
      `*الوقت:* ${date}%0A` +
      `*الاسم:* ${customerDetails.name}%0A` +
      `*الهاتف:* ${customerDetails.phone}%0A` +
      (customerDetails.detailedAddress ? `*العنوان المفصل:* ${customerDetails.detailedAddress}%0A` : '') +
      (customerDetails.table ? `*رقم الطاولة:* ${customerDetails.table}%0A` : '') +
      `--------------------------%0A` +
      `*قائمة الطلبات:*%0A${itemsList}%0A` +
      `--------------------------%0A` +
      `*المجموع:* ${cartTotal} LE%0A` +
      `*رسوم الخدمة:* 15 LE%0A` +
      `*الإجمالي النهائي:* ${cartTotal + 15} LE`;

    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${message}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setOrderStatus('success');
      setCart([]);
    }, 1200);
  };

  if (orderStatus === 'success') {
    return (
      <div className="min-h-screen bg-[#f7f3ed] flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-32 h-32 bg-[#4a3728]/10 rounded-full flex items-center justify-center mb-8 shadow-inner relative border-2 border-[#4a3728]/20">
          <CheckCircle className="text-[#4a3728] w-20 h-20" />
          <div className="absolute -top-2 -right-2 bg-white p-2 rounded-full shadow-lg border border-[#c5a059]/20">
             <Star className="text-[#c5a059] w-6 h-6 fill-current" />
          </div>
        </div>
        <h1 className="text-4xl font-black text-[#4a3728] mb-4">تم الإرسال بنجاح!</h1>
        <p className="text-gray-600 mb-12 leading-relaxed max-w-sm text-xl font-medium">
          شكراً لاختيارك <span className="text-[#c5a059] font-bold">KAMEN</span>. طلبك قيد المراجعة الآن وسيتصل بك فريقنا قريباً.
        </p>
        <button 
          onClick={() => { setOrderStatus('idle'); setIsCartOpen(false); }}
          className="bg-[#4a3728] text-white px-14 py-5 rounded-[30px] font-black text-xl shadow-2xl hover:bg-[#5d4037] active:scale-95 transition-all"
        >
          اطلب صنفاً آخر
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f3ed] pb-40 relative overflow-x-hidden">
      {/* Header - Reverted to "K" block style as requested with current colors */}
      <header className="pt-16 pb-12 px-8 relative z-10 bg-white/30 backdrop-blur-md border-b border-[#4a3728]/10 rounded-b-[60px] shadow-sm">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto relative">
          
          {/* Reverting to the block logo shape but with brand fonts & colors */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 bg-[#c5a059] rounded-[30px] flex items-center justify-center font-brand text-6xl font-black text-[#4a3728] shadow-[0_15px_40px_rgba(197,160,89,0.3)] mb-4 transform -rotate-2 hover:rotate-0 transition-all duration-700 select-none">
              K
            </div>
            <h1 className="text-7xl font-script text-[#4a3728] leading-none mb-2">Kamen</h1>
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-10 bg-[#4a3728]/20"></span>
              <p className="text-sm text-[#4a3728]/60 font-montserrat font-bold uppercase tracking-[0.4em]">Cafe & Restaurant</p>
              <span className="h-[1px] w-10 bg-[#4a3728]/20"></span>
            </div>
          </div>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="absolute left-0 top-0 p-5 bg-[#4a3728] hover:bg-[#5d4037] rounded-[28px] transition-all shadow-xl group"
          >
            <ShoppingCart className="w-7 h-7 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-[#c5a059] text-[#4a3728] text-[13px] w-8 h-8 rounded-full flex items-center justify-center font-black shadow-2xl border-[3px] border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mt-10 group">
          <input 
            type="text" 
            placeholder="ابحث عن مشروبك أو وجبتك المفضلة..."
            className="w-full bg-white border-2 border-[#4a3728]/5 rounded-[30px] py-6 pr-16 pl-8 text-lg font-bold focus:outline-none focus:ring-8 focus:ring-[#4a3728]/5 focus:border-[#4a3728] transition-all text-[#4a3728] placeholder:text-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-7 top-6 text-[#4a3728]/30 w-7 h-7 group-focus-within:text-[#4a3728] transition-colors" />
        </div>
      </header>

      {/* Sticky Categories */}
      <div className="sticky top-0 bg-[#f7f3ed]/95 backdrop-blur-2xl z-30 py-8 overflow-x-auto no-scrollbar border-b border-[#4a3728]/5 shadow-sm">
        <div className="flex gap-6 px-10 min-w-max">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-3 px-12 py-5 rounded-[30px] text-base font-black transition-all duration-500 ${
                activeCategory === cat.id 
                ? 'bg-[#4a3728] text-white shadow-2xl scale-110' 
                : 'bg-white text-[#4a3728]/50 border border-[#4a3728]/10 hover:border-[#4a3728]/30 hover:text-[#4a3728]'
              }`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span>{cat.nameAr}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <main className="p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-[60px] overflow-hidden shadow-[0_15px_50px_rgba(74,55,40,0.06)] hover:shadow-[0_40px_100px_rgba(74,55,40,0.15)] transition-all duration-700 group border border-[#4a3728]/5 flex flex-col">
              <div className="h-[380px] relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.nameEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2.5s] ease-out"
                />
                <div className="absolute top-10 left-10 bg-[#4a3728] text-white px-8 py-4 rounded-[30px] text-2xl font-black shadow-2xl border border-white/10">
                  {item.price} <span className="text-xs text-[#c5a059] tracking-widest ml-1 font-bold">LE</span>
                </div>
              </div>
              <div className="p-12 flex-1 flex flex-col">
                <div className="mb-6 text-right">
                  <h3 className="text-4xl font-black text-[#4a3728] mb-3 leading-tight">{item.nameAr}</h3>
                  <div className="flex items-center justify-end gap-3">
                     <p className="text-xs text-[#c5a059] font-montserrat font-bold uppercase tracking-[0.4em]">{item.nameEn}</p>
                     <div className="h-[1px] w-6 bg-[#c5a059]/40"></div>
                  </div>
                </div>
                {item.description && (
                  <p className="text-lg text-gray-500 mb-12 text-right line-clamp-2 leading-relaxed font-medium">{item.description}</p>
                )}
                <div className="mt-auto">
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full bg-[#f7f3ed] text-[#4a3728] hover:bg-[#4a3728] hover:text-white py-7 rounded-[35px] flex items-center justify-center gap-5 transition-all duration-500 font-black text-xl group/btn active:scale-95"
                  >
                    <Plus className="w-8 h-8 text-[#c5a059] group-hover/btn:rotate-90 transition-transform duration-500" />
                    أضف للطلب
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Sticky Cart Button */}
      {cartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-12 left-8 right-8 z-40 max-w-xl mx-auto animate-in slide-in-from-bottom duration-700">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-[#4a3728] text-white p-7 rounded-[40px] shadow-[0_40px_80px_rgba(74,55,40,0.4)] flex justify-between items-center transform hover:scale-[1.03] active:scale-95 transition-all duration-500 border-t border-white/20"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#c5a059] rounded-[25px] flex items-center justify-center font-black text-[#4a3728] text-3xl shadow-2xl">
                {cartCount}
              </div>
              <div className="text-right">
                <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">الطلبات المختارة</p>
                <p className="font-black text-2xl text-white">إتمام الطلب الآن</p>
              </div>
            </div>
            <div className="text-left bg-white/10 px-8 py-4 rounded-[25px] border border-white/10">
              <p className="text-[#c5a059] text-2xl font-black">{cartTotal} <span className="text-xs">LE</span></p>
            </div>
          </button>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-[#4a3728]/95 backdrop-blur-2xl transition-opacity duration-700" onClick={() => setIsCartOpen(false)} />
          <div className="absolute inset-y-0 left-0 max-w-full flex">
            <div className="w-screen max-w-xl bg-white shadow-2xl flex flex-col rounded-r-[70px] overflow-hidden animate-in slide-in-from-left duration-700">
              <div className="p-14 border-b border-[#4a3728]/5 flex justify-between items-center bg-[#f7f3ed]">
                <button onClick={() => setIsCartOpen(false)} className="p-6 bg-white shadow-2xl rounded-3xl border border-[#4a3728]/5 hover:rotate-90 transition-all duration-500 group">
                  <X className="w-8 h-8 text-[#4a3728] group-hover:scale-110" />
                </button>
                <div className="text-right">
                  <h2 className="text-4xl font-black text-[#4a3728]">سلة المشتريات</h2>
                  <p className="text-sm text-[#c5a059] font-black tracking-[0.5em] uppercase mt-2">Kamen Premium Experience</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-12 space-y-12 no-scrollbar">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-[#4a3728]/20 gap-10">
                    <ShoppingCart className="w-40 h-40 opacity-10" />
                    <p className="font-black text-2xl">السلة لا تزال فارغة</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-8">
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-8 items-center bg-[#f7f3ed]/30 p-8 rounded-[50px] border border-[#4a3728]/5 shadow-sm group">
                          <img src={item.image} className="w-32 h-32 rounded-[35px] object-cover shadow-2xl border-4 border-white group-hover:scale-105 transition-transform" />
                          <div className="flex-1 text-right">
                            <h4 className="font-black text-[#4a3728] text-2xl mb-1">{item.nameAr}</h4>
                            <p className="text-xl text-[#c5a059] font-black">{item.price} LE</p>
                          </div>
                          <div className="flex flex-col items-center gap-4 bg-white p-4 rounded-3xl shadow-inner border border-[#4a3728]/5">
                            <button onClick={() => addToCart(item)} className="p-2 text-[#4a3728] hover:scale-110 transition-transform"><Plus className="w-7 h-7" /></button>
                            <span className="font-black text-3xl text-[#4a3728] min-w-[40px] text-center">{item.quantity}</span>
                            <button onClick={() => removeFromCart(item.id)} className="p-2 text-gray-300 hover:text-red-500 hover:scale-110 transition-transform"><Minus className="w-7 h-7" /></button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Final Step Form */}
                    <form id="orderForm" onSubmit={handlePlaceOrder} className="space-y-12 border-t border-[#4a3728]/10 pt-16">
                      <div className="flex items-center gap-5 justify-end">
                        <div className="text-right">
                           <h3 className="font-black text-3xl text-[#4a3728]">بيانات استلام الطلب</h3>
                           <p className="text-xs text-[#c5a059] font-bold tracking-[0.4em] uppercase">Secured & Fast Delivery</p>
                        </div>
                        <div className="w-14 h-14 bg-[#4a3728] rounded-[22px] flex items-center justify-center text-white shadow-2xl shadow-[#4a3728]/30"><User className="w-8 h-8" /></div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="relative group">
                          <input 
                            type="text" 
                            required
                            placeholder="الاسم بالكامل"
                            className="w-full bg-[#f7f3ed]/50 border-2 border-[#4a3728]/5 rounded-[30px] py-7 pr-16 pl-8 text-xl font-black text-[#4a3728] focus:outline-none focus:ring-8 focus:ring-[#4a3728]/5 focus:border-[#4a3728] transition-all placeholder:text-[#4a3728]/20"
                            value={customerDetails.name}
                            onChange={(e) => setCustomerDetails({...customerDetails, name: e.target.value})}
                          />
                          <User className="absolute right-6 top-7 text-[#4a3728]/30 w-7 h-7 group-focus-within:text-[#4a3728] transition-colors" />
                        </div>

                        <div className="relative group">
                          <input 
                            type="tel" 
                            required
                            placeholder="رقم الهاتف"
                            className="w-full bg-[#f7f3ed]/50 border-2 border-[#4a3728]/5 rounded-[30px] py-7 pr-16 pl-8 text-xl font-black text-[#4a3728] focus:outline-none focus:ring-8 focus:ring-[#4a3728]/5 focus:border-[#4a3728] transition-all placeholder:text-[#4a3728]/20"
                            value={customerDetails.phone}
                            onChange={(e) => setCustomerDetails({...customerDetails, phone: e.target.value})}
                          />
                          <Phone className="absolute right-6 top-7 text-[#4a3728]/30 w-7 h-7 group-focus-within:text-[#4a3728] transition-colors" />
                        </div>

                        <div className="relative group">
                          <textarea 
                            rows={4}
                            required
                            placeholder="العنوان بالتفصيل (الحي، الشارع، العقار، الدور)"
                            className="w-full bg-[#f7f3ed]/50 border-2 border-[#4a3728]/5 rounded-[30px] py-7 pr-16 pl-8 text-xl font-black text-[#4a3728] focus:outline-none focus:ring-8 focus:ring-[#4a3728]/5 focus:border-[#4a3728] transition-all placeholder:text-[#4a3728]/20 resize-none"
                            value={customerDetails.detailedAddress}
                            onChange={(e) => setCustomerDetails({...customerDetails, detailedAddress: e.target.value})}
                          />
                          <MapPin className="absolute right-6 top-7 text-[#4a3728]/30 w-7 h-7 group-focus-within:text-[#4a3728] transition-colors" />
                        </div>

                        <div className="relative group">
                          <input 
                            type="text" 
                            placeholder="رقم الطاولة (في حال تواجدك داخل الكافيه)"
                            className="w-full bg-[#f7f3ed]/50 border-2 border-[#4a3728]/5 rounded-[30px] py-7 pr-16 pl-8 text-xl font-black text-[#4a3728] focus:outline-none focus:ring-8 focus:ring-[#4a3728]/5 focus:border-[#4a3728] transition-all placeholder:text-[#4a3728]/20"
                            value={customerDetails.table}
                            onChange={(e) => setCustomerDetails({...customerDetails, table: e.target.value})}
                          />
                          <Hash className="absolute right-6 top-7 text-[#4a3728]/20 w-7 h-7 group-focus-within:text-[#4a3728] transition-colors" />
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-14 bg-[#f7f3ed] space-y-10 border-t border-[#4a3728]/10 rounded-t-[70px] shadow-[0_-30px_60px_rgba(0,0,0,0.05)]">
                  <div className="space-y-4 text-right">
                    <div className="flex justify-between items-center text-[#4a3728]/40 font-bold text-lg">
                      <span className="text-[#4a3728] font-black">{cartTotal} LE</span>
                      <span>قيمة الطلبات</span>
                    </div>
                    <div className="flex justify-between items-center text-[#4a3728]/40 font-bold text-lg">
                      <span className="text-[#4a3728] font-black">15 LE</span>
                      <span>رسوم الخدمة والضريبة</span>
                    </div>
                    <div className="flex justify-between items-center text-5xl font-black text-[#4a3728] border-t-4 border-dashed border-[#4a3728]/10 pt-10 mt-4">
                      <span className="text-[#c5a059]">{cartTotal + 15} LE</span>
                      <span>الإجمالي</span>
                    </div>
                  </div>
                  
                  <button 
                    form="orderForm"
                    disabled={orderStatus === 'ordering'}
                    type="submit"
                    className="w-full bg-[#4a3728] text-white py-9 rounded-[40px] font-black text-2xl flex items-center justify-center gap-6 shadow-[0_30px_60px_rgba(74,55,40,0.4)] hover:bg-[#5d4037] transition-all active:scale-95 disabled:opacity-50"
                  >
                    {orderStatus === 'ordering' ? (
                      <span className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></span>
                    ) : (
                      <>
                        <CreditCard className="w-10 h-10 text-[#c5a059]" />
                        تأكيد وإتمام الطلب
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-[#4a3728]/30 font-black uppercase tracking-[0.5em]">Experience Luxury Dining @ KAMEN</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
