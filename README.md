# Mini Web Uygulaması: Anasayfa, Kedi Galerisi ve Kategorili Quiz

Basit, şık bir arayüzle üç sayfa:
- Anasayfa (index.html)
- Kedi Galerisi (kedigaleri.html)
- Kategorili Quiz (quiz.html)

Stil: css/style.css  
Davranış: script/quiz.js (kategori seçimli, 20 soruluk quiz)

## Özellikler
- Duyarlı (responsive) ve koyu tema tasarımı
- Erişilebilir navigasyon ve odak halkaları
- Kedi galerisi: grid yerleşim, hover efektleri, lazy-loading
- Quiz:
  - Kategori seçimi: Karışık, Git, GitHub, React, JavaScript, HTML, CSS
  - Havuzdan rastgele 20 soru, her soruda şıklar karışık
  - Soru ilerleme göstergesi, seçime göre “Sonraki/Bitir”
  - Sonuç ekranı: doğru/yanlış listesi ve yüzde skor

## Sayfalar
- index.html: Basit karşılama ve menü
- kedigaleri.html: 10 görsellik kedi galerisi
- quiz.html: Kategori seçimi + quiz akışı

## Quiz Kullanımı
1. Quiz sayfasını açın ve “Kategori seç” bölümünden bir kategori işaretleyin.
2. “Quize Başla”ya basın.
3. Her soruda bir şık seçin, “Sonraki” ile ilerleyin.
4. Son soruda “Bitir” ile sonucu görün, “Tekrar” ile başa dönün.

Varsayılanlar:
- Soru sayısı: 20 (QUIZ_SIZE)
- Şıklar her soruda karıştırılır; doğru cevap indeksleri dinamik güncellenir.

## Kategoriler
- Karışık: Tüm havuzdan
- Git / GitHub: Komutlar, akış, PR ve repo süreçleri
- React: Hooks, lifecycle, memoization, context, temel kavramlar
- JavaScript: Closure, eşitlik, event loop, promise vb.
- HTML: Semantik etiketler, form method, meta viewport
- CSS: Spesifiklik, box-model, flex vs grid, sticky, media query

## Kurulum ve Çalıştırma
Herhangi bir sunucu gerekmez:
- Projeyi klasör olarak açın
- index.html, kedigaleri.html veya quiz.html dosyalarını tarayıcıda açın

İsteğe bağlı: Canlı sunucu
- VS Code Live Server veya basit bir http-server ile kökten servis edebilirsiniz.

## Dosya Yapısı (Özet)
- index.html — Anasayfa
- kedigaleri.html — Galeri
- quiz.html — Quiz arayüzü ve kategori seçimi
- css/style.css — Tema ve bileşen stilleri (chip görünümlü kategori seçimi dahil)
- script/quiz.js — Quiz motoru ve soru havuzları
- images/ — Görseller

## Özelleştirme İpuçları
- Soru sayısı: script/quiz.js içinde QUIZ_SIZE sabitini değiştirin.
- Kategoriler: Yeni sorular eklemek için ilgili diziye (QUESTIONS/EXTRA_QUESTIONS/ADDITIONAL_*) yeni öğeler ekleyin.
- Tema rengi: css/style.css içindeki :root değişkenlerinden --clr-accent ve yüzey renklerini düzenleyin.

## Notlar
- category-label:has(input:checked) seçici modern tarayıcılarda desteklenir.
- Mobilde chip butonları otomatik sarar; küçük ekranda okunabilirlik korunur.

Keyifli çalışmalar!
