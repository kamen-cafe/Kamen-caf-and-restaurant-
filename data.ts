
import { MenuItem, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'coffee', nameAr: 'القهوة المختصة', nameEn: 'Specialty Coffee', icon: '☕' },
  { id: 'hot-drinks', nameAr: 'مشروبات ساخنة', nameEn: 'Hot Drinks', icon: '🍵' },
  { id: 'ice-coffee', nameAr: 'ايس كوفي', nameEn: 'Ice Coffee', icon: '🧊' },
  { id: 'crepes', nameAr: 'الكريب', nameEn: 'Crepes', icon: '🌯' },
  { id: 'burgers', nameAr: 'البرجر', nameEn: 'Burgers', icon: '🍔' },
  { id: 'pasta', nameAr: 'الباستا', nameEn: 'Pasta', icon: '🍝' },
  { id: 'breakfast', nameAr: 'الفطار والكرواسون', nameEn: 'Breakfast', icon: '🥐' },
  { id: 'waffles', nameAr: 'الوافل والحلويات', nameEn: 'Waffles & Sweets', icon: '🧇' },
  { id: 'fresh-juices', nameAr: 'عصائر فريش', nameEn: 'Fresh Juices', icon: '🥤' },
  { id: 'smoothies', nameAr: 'السموزي', nameEn: 'Smoothies', icon: '🍹' },
  { id: 'milkshake', nameAr: 'ميلك شيك', nameEn: 'Milkshake', icon: '🍦' },
  { id: 'soda', nameAr: 'كوكتيلات صودا', nameEn: 'Soda Cocktails', icon: '🫧' },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- Coffee Section ---
  { id: 'c1', category: 'coffee', nameAr: 'اسبريسو سنجل', nameEn: 'Single Espresso', price: 40, image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=400' },
  { id: 'c2', category: 'coffee', nameAr: 'اسبريسو دبل', nameEn: 'Double Espresso', price: 55, image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=400' },
  { id: 'c3', category: 'coffee', nameAr: 'كابتشينو كمين', nameEn: 'Kamen Cappuccino', price: 75, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=400' },
  { id: 'c4', category: 'coffee', nameAr: 'كافيه لاتيه', nameEn: 'Cafe Latte', price: 75, image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=400' },
  { id: 'c5', category: 'coffee', nameAr: 'فلات وايت', nameEn: 'Flat White', price: 80, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=400' },
  { id: 'c6', category: 'coffee', nameAr: 'قهوة تركي', nameEn: 'Turkish Coffee', price: 35, image: 'https://images.unsplash.com/photo-1599818816401-49f99580468f?auto=format&fit=crop&q=80&w=400' },

  // --- Ice Coffee Section ---
  { id: 'ic1', category: 'ice-coffee', nameAr: 'ايس لاتيه', nameEn: 'Iced Latte', price: 75, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400' },
  { id: 'ic2', category: 'ice-coffee', nameAr: 'ايس موكا', nameEn: 'Iced Mocha', price: 85, image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&q=80&w=400' },
  { id: 'ic3', category: 'ice-coffee', nameAr: 'ايس وايت موكا', nameEn: 'Iced White Mocha', price: 90, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400' },

  // --- Crepes Section (Requested) ---
  { id: 'cr1', category: 'crepes', nameAr: 'كريب دبل كمين', nameEn: 'Kamen Double Crepe', price: 145, description: 'كريب كبير محشو بشيكولاتة نوتيلا، ميكس فواكه، وصوص خاص - تجربة كمين الأصلية', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=400' },
  { id: 'cr2', category: 'crepes', nameAr: 'كريب كريسبي دجاج', nameEn: 'Crispy Chicken Crepe', price: 110, description: 'دجاج كريسبي، موتزاريلا، فلفل الوان، وصوص الرانش', image: 'https://images.unsplash.com/photo-1621314336332-9092496a793c?auto=format&fit=crop&q=80&w=400' },
  { id: 'cr3', category: 'crepes', nameAr: 'كريب فواكه مشكلة', nameEn: 'Mix Fruit Crepe', price: 95, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=400' },

  // --- Burgers Section ---
  { id: 'b1', category: 'burgers', nameAr: 'برجر كمين بوم', nameEn: 'Kamen Boom Burger', price: 160, description: 'بيف برجر، صوص الجبنة السايحة، بيكون بقري، بصل مكرمل', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400' },
  { id: 'b2', category: 'burgers', nameAr: 'تشيز برجر كلاسيك', nameEn: 'Classic Cheeseburger', price: 140, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400' },
  { id: 'b3', category: 'burgers', nameAr: 'تشيكن رانش برجر', nameEn: 'Chicken Ranch Burger', price: 135, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=400' },

  // --- Pasta Section ---
  { id: 'p1', category: 'pasta', nameAr: 'باستا كمين الخاصة', nameEn: 'Special Kamen Pasta', price: 170, description: 'باستا بيني مع قطع اللحم الفاخرة، صوص ديمي جلاس والمشروم', image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=400' },
  { id: 'p2', category: 'pasta', nameAr: 'باستا الفريدو دجاج', nameEn: 'Chicken Alfredo', price: 145, description: 'صوص ابيض، دجاج مشوي، مشروم فريش وجبنة بارميزان', image: 'https://images.unsplash.com/photo-1645112481355-320742bc3028?auto=format&fit=crop&q=80&w=400' },

  // --- Breakfast & Croissants ---
  { id: 'br1', category: 'breakfast', nameAr: 'كرواسون نوتيلا', nameEn: 'Nutella Croissant', price: 65, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400' },
  { id: 'br2', category: 'breakfast', nameAr: 'كرواسون جبنة رومي', nameEn: 'Romy Cheese Croissant', price: 55, image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=400' },
  { id: 'br3', category: 'breakfast', nameAr: 'فطار كمين المتكامل', nameEn: 'Kamen Full Breakfast', price: 180, description: 'بيض، سوسيس، بطاطس، كرواسون سادة، وزبدة وعسل', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=400' },

  // --- Waffles Section ---
  { id: 'w1', category: 'waffles', nameAr: 'وافل نوتيلا', nameEn: 'Nutella Waffle', price: 115, image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=400' },
  { id: 'w2', category: 'waffles', nameAr: 'وافل لوتس', nameEn: 'Lotus Waffle', price: 130, image: 'https://images.unsplash.com/photo-1593344484962-996055d4939a?auto=format&fit=crop&q=80&w=400' },

  // --- Fresh Juices ---
  { id: 'fj1', category: 'fresh-juices', nameAr: 'مانجو طبيعي', nameEn: 'Fresh Mango', price: 75, image: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=400' },
  { id: 'fj2', category: 'fresh-juices', nameAr: 'برتقال فريش', nameEn: 'Fresh Orange', price: 65, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400' },
  { id: 'fj3', category: 'fresh-juices', nameAr: 'ليمون نعناع', nameEn: 'Lemon Mint', price: 60, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' },

  // --- Smoothies ---
  { id: 'sm1', category: 'smoothies', nameAr: 'سموزي باشون فروت', nameEn: 'Passion Fruit Smoothie', price: 95, image: 'https://images.unsplash.com/photo-1525385133336-25484cdbb542?auto=format&fit=crop&q=80&w=400' },
  { id: 'sm2', category: 'smoothies', nameAr: 'سموزي بلو بيري', nameEn: 'Blueberry Smoothie', price: 85, image: 'https://images.unsplash.com/photo-1536882247184-57482f344040?auto=format&fit=crop&q=80&w=400' },

  // --- Milkshakes ---
  { id: 'ms1', category: 'milkshake', nameAr: 'ميلك شيك لوتس', nameEn: 'Lotus Milkshake', price: 110, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400' },
  { id: 'ms2', category: 'milkshake', nameAr: 'ميلك شيك فانيلا', nameEn: 'Vanilla Milkshake', price: 85, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400' },

  // --- Soda ---
  { id: 'sd1', category: 'soda', nameAr: 'موهيتو فيرجن كلاسيك', nameEn: 'Virgin Classic Mojito', price: 75, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400' },
  { id: 'sd2', category: 'soda', nameAr: 'موهيتو بلو لاجون', nameEn: 'Blue Lagoon Mojito', price: 80, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400' },
];
