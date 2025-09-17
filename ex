[1mdiff --git a/css/style.css b/css/style.css[m
[1mindex 447f768..7f129c4 100644[m
[1m--- a/css/style.css[m
[1m+++ b/css/style.css[m
[36m@@ -2,7 +2,7 @@[m
 body {[m
   background-color: #1a1a1a;[m
   color: #eaeaea;[m
[31m-  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;[m
[32m+[m[32m  font-family: 'Yoster', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;[m
   margin: 0;[m
 }[m
 [m
[36m@@ -15,7 +15,7 @@[m [mbody {[m
   --clr-body:    #eaeaea;[m
   --clr-danger: #ef4444; /* Blog için kırmızı */[m
 [m
[31m-  --font-sans: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;[m
[32m+[m[32m  --font-sans: 'Yoster', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;[m
   --font-serif: Georgia, "Times New Roman", serif;[m
   --font-mono:  ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;[m
 [m
[36m@@ -27,8 +27,17 @@[m [mbody {[m
   --shadow-md: 0 8px 18px rgba(0,0,0,.25);[m
 }[m
 [m
[32m+[m[32m/* Yoster font (TTF dosyası kök dizindeyse ../yoster.ttf, aynı klasördeyse yoster.ttf) */[m
[32m+[m[32m@font-face {[m
[32m+[m[32m  font-family: 'Yoster';[m
[32m+[m[32m  src: url('../yoster.ttf') format('truetype');[m
[32m+[m[32m  font-display: swap;[m
[32m+[m[32m  font-weight: 400;[m
[32m+[m[32m  font-style: normal;[m
[32m+[m[32m}[m
[32m+[m
 /* Yardımcı font sınıfları */[m
[31m-.font-sans  { font-family: var(--font-sans); }[m
[32m+[m[32m.font-sans  { font-family: 'Yoster', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }[m
 .font-serif { font-family: var(--font-serif); }[m
 .font-mono  { font-family: var(--font-mono); }[m
 [m
[36m@@ -276,7 +285,12 @@[m [mbody {[m
   padding: 0 16px;[m
 }[m
 .quiz-title { margin: 12px 0; }[m
[31m-.quiz-subtitle { color: #9ca3af; margin-bottom: 16px; }[m
[32m+[m[32m.quiz-subtitle {[m
[32m+[m[32m  font-size: 14px;[m
[32m+[m[32m  color: #9ca3af;[m
[32m+[m[32m  margin-bottom: 18px;[m
[32m+[m[32m  font-family: 'Yoster', system-ui, sans-serif;[m
[32m+[m[32m}[m
 [m
 .quiz-header-row {[m
   display: flex;[m
[36m@@ -459,4 +473,39 @@[m [mbody {[m
 @media (max-width: 520px) {[m
   .category-fieldset { gap: 8px; }[m
   .category-label { padding: 8px 10px; }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/* Count row and input */[m
[32m+[m[32m.count-row {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  gap: 10px;[m
[32m+[m[32m  margin: 8px 0 12px;[m
[32m+[m[32m}[m
[32m+[m[32m.count-input {[m
[32m+[m[32m  width: 96px;[m
[32m+[m[32m  padding: 8px 10px;[m
[32m+[m[32m  border-radius: 8px;[m
[32m+[m[32m  border: 1px solid var(--border);[m
[32m+[m[32m  background: linear-gradient(180deg, #222, #1b1b1b);[m
[32m+[m[32m  color: #e5e7eb;[m
[32m+[m[32m}[m
[32m+[m[32m.count-input:focus-visible {[m
[32m+[m[32m  outline: none;[m
[32m+[m[32m  box-shadow: 0 0 0 3px var(--ring-accent);[m
[32m+[m[32m  border-color: var(--ring-accent);[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.quiz-container {[m
[32m+[m[32m  font-size: 15px;[m
[32m+[m[32m  padding: 10px 18px;[m
[32m+[m[32m  line-height: 1.5;[m
[32m+[m[32m  color: #22c55e;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.quiz-subtitle {[m
[32m+[m[32m  font-size: 14px;[m
[32m+[m[32m  color: #9ca3af;[m
[32m+[m[32m  margin-bottom: 18px;[m
[32m+[m[32m  font-family: 'Yoster', system-ui, sans-serif;[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/quiz.html b/quiz.html[m
[1mindex 66cf740..98c8015 100644[m
[1m--- a/quiz.html[m
[1m+++ b/quiz.html[m
[36m@@ -19,45 +19,51 @@[m
 [m
 	<main class="quiz-container">[m
 		<section id="start-screen">[m
[31m-			<h1 class="quiz-title">Git, GitHub ve React Quiz</h1>[m
[31m-			<p class="quiz-subtitle">Havuzdan rastgele 20 soru.</p>[m
[32m+[m			[32m<h1 class="quiz-title">ARAS ICIN QUIZ</h1>[m
[32m+[m			[32m<p class="quiz-subtitle">yazdığın kadar soru çıkar.</p>[m
 [m
 			<fieldset class="category-fieldset">[m
 				<legend class="category-legend">Kategori seç</legend>[m
[31m-				<label class="category-label"><input type="radio" name="category" value="mix" checked> Karışık</label>[m
[31m-				<label class="category-label"><input type="radio" name="category" value="git"> Git</label>[m
[31m-				<label class="category-label"><input type="radio" name="category" value="github"> GitHub</label>[m
[31m-				<label class="category-label"><input type="radio" name="category" value="react"> React</label>[m
[31m-				<label class="category-label"><input type="radio" name="category" value="javascript"> JavaScript</label>[m
[31m-				<label class="category-label"><input type="radio" name="category" value="html"> HTML</label>[m
[31m-				<label class="category-label"><input type="radio" name="category" value="css"> CSS</label>[m
[32m+[m				[32m<label class="category-label"><input type="checkbox" name="category" value="mix" checked> Karışık</label>[m
[32m+[m				[32m<label class="category-label"><input type="checkbox" name="category" value="git"> Git</label>[m
[32m+[m				[32m<label class="category-label"><input type="checkbox" name="category" value="github"> GitHub</label>[m
[32m+[m				[32m<label class="category-label"><input type="checkbox" name="category" value="react"> React</label>[m
[32m+[m				[32m<label class="category-label"><input type="checkbox" name="category" value="javascript"> JavaScript</label>[m
[32m+[m				[32m<label class="category-label"><input type="checkbox" name="category" value="html"> HTML</label>[m
[32m+[m				[32m<label class="category-label"><input type="checkbox" name="category" value="css"> CSS</label>[m
 			</fieldset>[m
 [m
[32m+[m			[32m<div class="count-row">[m
[32m+[m				[32m<label for="question-count" class="count-label text-muted">Soru sayısı</label>[m
[32m+[m				[32m<input id="question-count" class="count-input" type="number" min="1" step="1" value="20">[m
[32m+[m				[32m<small id="count-help" class="text-muted">(Bu kategori: ...)</small>[m
[32m+[m			[32m</div>[m
[32m+[m
 			<button id="start-btn" class="btn">Quize Başla</button>[m
 		</section>[m
 [m
 		<section id="quiz-screen" class="hidden">[m
 			<div class="quiz-header-row">[m
[31m-				<div class="quiz-progress" id="progress">Soru 1/10</div>[m
[32m+[m				[32m<span id="progress" class="quiz-progress">Soru 1/1</span>[m
[32m+[m			[32m</div>[m
[32m+[m			[32m<div class="question-card">[m
[32m+[m				[32m<div id="question" class="question-text"></div>[m
[32m+[m				[32m<div id="options" class="options"></div>[m
 			</div>[m
[31m-			<article class="question-card">[m
[31m-				<h2 class="question-text" id="question"></h2>[m
[31m-				<div class="options" id="options"></div>[m
[31m-			</article>[m
 			<div class="quiz-actions">[m
[31m-				<button id="next-btn" class="btn">Sonraki</button>[m
[31m-				<button id="finish-btn" class="btn btn-secondary hidden">Bitir</button>[m
[32m+[m				[32m<button id="next-btn" class="btn btn-secondary">Sonraki</button>[m
[32m+[m				[32m<button id="finish-btn" class="btn">Bitir</button>[m
 			</div>[m
 		</section>[m
 [m
 		<section id="result-screen" class="hidden">[m
[31m-			<h2>Sonuç</h2>[m
[31m-			<p class="quiz-score" id="score"></p>[m
[31m-			<ol class="result-list" id="result-list"></ol>[m
[31m-			<button id="restart-btn" class="btn">Tekrar</button>[m
[32m+[m			[32m<div id="score" class="quiz-score"></div>[m
[32m+[m			[32m<ol id="result-list" class="result-list"></ol>[m
[32m+[m			[32m<div class="quiz-actions">[m
[32m+[m				[32m<button id="restart-btn" class="btn btn-secondary">Tekrar</button>[m
[32m+[m			[32m</div>[m
 		</section>[m
 	</main>[m
[31m-[m
[31m-	<script src="script/quiz.js"></script>[m
[32m+[m	[32m<script defer src="script/quiz.js"></script>[m
 </body>[m
 </html>[m
[1mdiff --git a/script/quiz.js b/script/quiz.js[m
[1mindex 7285c48..9d1c5e7 100644[m
[1m--- a/script/quiz.js[m
[1m+++ b/script/quiz.js[m
[36m@@ -101,7 +101,7 @@[m [mconst QUESTIONS = [[m
     'Stil için', 'Performans/doğru yeniden kullanım için', 'SEO için', 'Router için'[m
   ], answer: 1 },[m
 ];[m
[31m-  [m
[32m+[m
 // Ek soru havuzu (Git & GitHub, Semantic Commits, Lifecycle, Memoization, Context, TS, Atomic Design)[m
 const EXTRA_QUESTIONS = [[m
   // 1) Git & GitHub[m
[36m@@ -245,6 +245,135 @@[m [mconst ADDITIONAL_JS = [[m
   { id: 'js-promise', q: 'Promise.resolve(1).then(x => x+1).then(console.log) çıktısı?', options: [[m
     '1', '2', 'undefined', 'Promise'[m
   ], answer: 1 },[m
[32m+[m[32m  { id: 'js-hoisting', q: 'Hoisting hakkında doğru ifade?', options: [[m
[32m+[m[32m    'var ve function declaration tanımları yukarı kaldırılır',[m
[32m+[m[32m    'let/const için hoisting yoktur ve her zaman erişilebilir',[m
[32m+[m[32m    'Hiçbir bildirim hoist olmaz',[m
[32m+[m[32m    'Sadece const hoist olur'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'js-scope', q: 'Aşağıdakilerden hangisi doğrudur?', options: [[m
[32m+[m[32m    'var blok kapsamına sahiptir',[m
[32m+[m[32m    'let/const fonksiyon kapsamına sahiptir',[m
[32m+[m[32m    'var fonksiyon kapsamlıdır; let/const blok kapsamlıdır',[m
[32m+[m[32m    'Hepsi globaldir'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'js-this-arrow', q: 'Arrow function’da this nasıl belirlenir?', options: [[m
[32m+[m[32m    'Çağırana göre dinamik',[m
[32m+[m[32m    'new ile her zaman global',[m
[32m+[m[32m    'Lexical (çevresel bağlamdan alınır)',[m
[32m+[m[32m    'Her zaman undefined'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'js-prototype-new', q: 'new ile üretilen nesnenin prototipi için doğru ifade?', options: [[m
[32m+[m[32m    'instance.__proto__ === Constructor.prototype',[m
[32m+[m[32m    'instance.prototype === Constructor.__proto__',[m
[32m+[m[32m    'Constructor.__proto__ === instance',[m
[32m+[m[32m    'Object.prototype === null'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'js-array-map', q: 'Array.prototype.map ne döner?', options: [[m
[32m+[m[32m    'Orijinal diziyi değiştirir',[m
[32m+[m[32m    'Aynı uzunlukta yeni bir dizi döner',[m
[32m+[m[32m    'Tek bir değer döner',[m
[32m+[m[32m    'Iterator döner'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'js-array-reduce', q: 'Array.prototype.reduce ne için kullanılır?', options: [[m
[32m+[m[32m    'Dizi öğelerini tek bir değere indirgemek',[m
[32m+[m[32m    'Dizi öğelerini filtrelemek',[m
[32m+[m[32m    'Diziyi kopyalamak',[m
[32m+[m[32m    'Diziyi sıralamak'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'js-event-flow', q: 'Event capturing ve bubbling hakkında doğru ifade?', options: [[m
[32m+[m[32m    'Capturing içten dışa; bubbling dıştan içe',[m
[32m+[m[32m    'Capturing dıştan içe; bubbling içten dışa',[m
[32m+[m[32m    'İkisi de içten dışa',[m
[32m+[m[32m    'İkisi de dıştan içe'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'js-nullish', q: 'Nullish coalescing (??) ile OR (||) farkı?', options: [[m
[32m+[m[32m    '|| sadece null/undefined için çalışır',[m
[32m+[m[32m    '?? tüm falsy değerler için çalışır',[m
[32m+[m[32m    '?? sadece null/undefined için devreye girer; || tüm falsy değerlerde',[m
[32m+[m[32m    'İkisi tamamen aynıdır'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'js-optional-chaining', q: 'Optional chaining operatörü hangisidir?', options: [[m
[32m+[m[32m    '?.', '??', '::', '=>'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'js-spread-rest', q: 'Spread ve Rest için doğru ifade?', options: [[m
[32m+[m[32m    'Spread kalanları toplar; Rest yayar',[m
[32m+[m[32m    'Spread yayar; Rest kalanları toplar',[m
[32m+[m[32m    'İkisi de sadece nesnede çalışır',[m
[32m+[m[32m    'İkisi de sadece dizide çalışır'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'js-iife', q: 'IIFE nedir?', options: [[m
[32m+[m[32m    'Yavaş çalışan fonksiyon',[m
[32m+[m[32m    'Kendini hemen çalıştıran fonksiyon ifadesi',[m
[32m+[m[32m    'Async fonksiyon',[m
[32m+[m[32m    'Generator fonksiyon'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'js-pure-fn', q: 'Saf (pure) fonksiyon için doğru ifade?', options: [[m
[32m+[m[32m    'Yan etkisi yoktur, aynı girdiye aynı çıktıyı üretir',[m
[32m+[m[32m    'Her zaman global durumu değiştirir',[m
[32m+[m[32m    'Rastgele çıktı üretir',[m
[32m+[m[32m    'DOM’u değiştirir'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'js-copy', q: 'Shallow vs deep copy hakkında doğru ifade?', options: [[m
[32m+[m[32m    'Shallow tüm derinliği kopyalar',[m
[32m+[m[32m    'Deep referansları paylaşır',[m
[32m+[m[32m    'Shallow üst seviyeyi kopyalar, iç referanslar paylaşılabilir',[m
[32m+[m[32m    'İkisi de aynıdır'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'js-microtask', q: 'Promise.then ve setTimeout zamanlaması için doğru ifade?', options: [[m
[32m+[m[32m    'setTimeout önce, then sonra',[m
[32m+[m[32m    'then microtask’tır ve setTimeout’tan önce çalışır',[m
[32m+[m[32m    'İkisi eşzamanlıdır',[m
[32m+[m[32m    'Tarayıcıya göre değişir ve garantisi yoktur'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'js-tdz', q: 'Temporal Dead Zone (TDZ) nedir?', options: [[m
[32m+[m[32m    'var değişkenlerinin hatası',[m
[32m+[m[32m    'let/const bildirimi yapılana kadar erişilemeyen dönem',[m
[32m+[m[32m    'Event loop durması',[m
[32m+[m[32m    'GC tarafından silinme anı'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'js-bind-call-apply', q: 'bind, call ve apply için doğru ifade?', options: [[m
[32m+[m[32m    'bind anında çağırır; call yeni fonksiyon döner',[m
[32m+[m[32m    'call argümanları diziyle alır; apply tek tek alır',[m
[32m+[m[32m    'bind yeni fonksiyon döndürür; call/apply anında çağırır',[m
[32m+[m[32m    'Üçü de aynıdır'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'js-loop-closure', q: 'for döngüsünde closure ve var/let için doğru ifade?', options: [[m
[32m+[m[32m    'var her iterasyonda yeni bağlam oluşturur',[m
[32m+[m[32m    'let tek bağlam paylaşır',[m
[32m+[m[32m    'var tek bağlam paylaşır; let her iterasyonda ayrı bağlam oluşturur',[m
[32m+[m[32m    'İkisi de aynı davranır'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'js-obj-eq', q: 'Aşağıdakilerden hangisi doğrudur?', options: [[m
[32m+[m[32m    '{} === {} true’dur',[m
[32m+[m[32m    'İki farklı nesne referansı eşit değildir',[m
[32m+[m[32m    'Nesneler === ile her zaman eşittir',[m
[32m+[m[32m    'Nesneler == ile her zaman eşittir'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'js-nan', q: 'NaN === NaN sonucu nedir?', options: [[m
[32m+[m[32m    'true', 'false', 'undefined', 'TypeError'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'js-typeof-null', q: 'typeof null sonucu nedir?', options: [[m
[32m+[m[32m    '"null"', '"object"', '"undefined"', '"number"'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'js-falsy', q: 'Aşağıdakilerden hangileri falsy’dir?', options: [[m
[32m+[m[32m    '0, "", null, undefined, NaN, false',[m
[32m+[m[32m    '[], {}, "0", true',[m
[32m+[m[32m    '1, " ", [], {}',[m
[32m+[m[32m    'Infinity, -1, "false"'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'js-promise-states', q: 'Promise durumları hangi seçenekte doğru?', options: [[m
[32m+[m[32m    'started, done, failed',[m
[32m+[m[32m    'pending, fulfilled, rejected',[m
[32m+[m[32m    'open, closed, error',[m
[32m+[m[32m    'idle, running, stopped'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'js-async-await-err', q: 'async/await ile hata yakalama için doğru yaklaşım?', options: [[m
[32m+[m[32m    'await her zaman hataları yutar',[m
[32m+[m[32m    'try/catch ile await edilen reddedilen promise yakalanabilir',[m
[32m+[m[32m    'Sadece then/catch kullanılabilir',[m
[32m+[m[32m    'throw kullanılamaz'[m
[32m+[m[32m  ], answer: 1 }[m
 ];[m
 [m
 const ADDITIONAL_HTML = [[m
[36m@@ -283,6 +412,188 @@[m [mconst ADDITIONAL_CSS = [[m
   ], answer: 0 },[m
 ];[m
 [m
[32m+[m[32mconst ADDITIONAL_STANDARDS = [[m
[32m+[m[32m  // Politikalar / Akış[m
[32m+[m[32m  { id: 'std-main-push', q: 'main branch\'ine doğrudan push hakkında doğru ifade?', options: [[m
[32m+[m[32m    'Serbesttir', 'Sadece force push yasaktır', 'Tamamen yasaktır, PR ile ilerlenir', 'Sadece hafta içi serbest'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'pr-required', q: 'Değişiklikler nasıl ana koda dahil edilmelidir?', options: [[m
[32m+[m[32m    'Doğrudan main\'e push', 'Forksuz PR', 'Pull Request açıp onay alarak', 'Tag atarak'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'branch-from-main', q: 'Yeni bir işe başlarken hangi dal baz alınmalı?', options: [[m
[32m+[m[32m    'main', 'rastgele bir branch', 'HEAD~1', 'release'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'commit-small', q: 'Commit sıklığı için öneri nedir?', options: [[m
[32m+[m[32m    'Büyük ve seyrek', 'Küçük ve sık', 'Tek commit', 'Sadece release öncesi'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'pr-self-review', q: 'PR açmadan önce hangi adım önerilir?', options: [[m
[32m+[m[32m    'Direkt merge', 'Self-review yapıp sonra "Ready for Review"', 'Tag oluşturma', 'Squash etme'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m
[32m+[m[32m  // Semantic Commit Messages[m
[32m+[m[32m  { id: 'cc-format-std', q: 'Semantic commit biçimi hangisi?', options: [[m
[32m+[m[32m    'type(scope): açıklama', 'scope:type - açıklama', '[type] açıklama', 'type:scope açıklama'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'cc-imperative', q: 'Commit açıklaması hangi kipte olmalı?', options: [[m
[32m+[m[32m    'Geçmiş zaman', 'Gelecek zaman', 'Emir kipinde/şimdiki zaman', 'Rastgele'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'cc-scope-opt', q: 'Commit scope alanı için doğru ifade?', options: [[m
[32m+[m[32m    'Zorunlu', 'Opsiyonel ama faydalı', 'Yasak', 'Sadece testlerde'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'cc-types', q: 'Aşağıdakilerden hangisi önerilen commit türlerinden değildir?', options: [[m
[32m+[m[32m    'feat', 'fix', 'refactor', 'change'[m
[32m+[m[32m  ], answer: 3 },[m
[32m+[m[32m  { id: 'cc-issues', q: 'İlgili issue nasıl referanslanır?', options: [[m
[32m+[m[32m    'Başlıkta', 'Açıklamada link', 'Footer\'da Closes #123 gibi', 'Tag atarak'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'cc-breaking-footer', q: 'Breaking change bildirimi nereye yazılır?', options: [[m
[32m+[m[32m    'Başlığa', 'Scope alanına', 'Footer\'a "BREAKING CHANGE:" ile', 'Body\'ye herhangi yere'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'cc-bad-vague', q: 'Kötü örnek hangisi?', options: [[m
[32m+[m[32m    'feat(ui): add dark mode toggle', 'fix(api): handle null values', 'refactor(user): simplify logic', 'update: change some stuff'[m
[32m+[m[32m  ], answer: 3 },[m
[32m+[m[32m  { id: 'cc-single-unit', q: 'Commit’ler nasıl olmalı?', options: [[m
[32m+[m[32m    'Birden fazla konuyu birleştirmeli', 'Tek bir anlamlı işi temsil etmeli', 'Sadece stil değişiklikleri olmalı', 'Ne olursa olsun tek commit'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m
[32m+[m[32m  // Merge Stratejileri[m
[32m+[m[32m  { id: 'merge-commit', q: 'Merge commit stratejisinin özelliği?', options: [[m
[32m+[m[32m    'Tüm commitleri tek committe birleştirir', 'Lineer tarih oluşturur', 'Birleştirme commitini koruyarak tarihi muhafaza eder', 'Remote geçmişini siler'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'merge-squash', q: 'Squash and Merge ne yapar?', options: [[m
[32m+[m[32m    'Branchi siler', 'Tüm commitleri tek commit olarak birleştirir', 'Rebase yapar', 'Tag ekler'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'merge-rebase', q: 'Rebase and Merge sonucu?', options: [[m
[32m+[m[32m    'Merge commit oluşur', 'Lineer geçmiş (D\', E\') oluşur', 'Commitler kaybolur', 'Sadece tagler taşınır'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'merge-preferred', q: 'Tercih edilen strateji (belirtildiği gibi)?', options: [[m
[32m+[m[32m    'Merge commit', 'Squash and Merge', 'Rebase and Merge', 'Hepsi yasak'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m
[32m+[m[32m  // SemVer[m
[32m+[m[32m  { id: 'semver-pattern', q: 'SemVer deseni nedir?', options: [[m
[32m+[m[32m    'MAJOR.MINOR.PATCH', 'MAJOR.PATCH.MINOR', 'PATCH.MINOR.MAJOR', 'vMAJOR-PATCH'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'semver-major', q: 'Hangi durumda MAJOR artar?', options: [[m
[32m+[m[32m    'Geriye dönük uyumlu özellik', 'Dokümantasyon değişikliği', 'Geriye dönük uyumsuz değişiklik', 'Hata düzeltmesi'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'semver-minor', q: 'MINOR artışı neyi ifade eder?', options: [[m
[32m+[m[32m    'Uyumsuzluk', 'Geriye uyumlu yeni özellik', 'Hata düzeltmesi', 'Performans düşüşü'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'semver-patch', q: 'PATCH artışı neyi ifade eder?', options: [[m
[32m+[m[32m    'Hata düzeltmesi (geri uyumlu)', 'Yeni özellik', 'Docs', 'Uyumsuz değişiklik'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m
[32m+[m[32m  // Diğer iyi uygulamalar[m
[32m+[m[32m  { id: 'docs-readme-template', q: 'README şablonu kullanmanın faydası?', options: [[m
[32m+[m[32m    'Onboarding’i hızlandırır', 'Commit sayısını azaltır', 'Git gereksizdir', 'PR sayısını kısıtlar'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m];[m
[32m+[m
[32m+[m[32m// Yeni: Component Architecture / Best Practices soru havuzu[m
[32m+[m[32mconst ADDITIONAL_ARCH = [[m
[32m+[m[32m  // Atomic Design ve yerleşim[m
[32m+[m[32m  { id: 'arch-reusable-only', q: 'Atomic klasörlerine hangi bileşenler konmalıdır?', options: [[m
[32m+[m[32m    'Sadece sayfaya özel bileşenler', 'Her oluşturulan bileşen', 'Uygulama genelinde tekrar kullanılabilen bileşenler', 'Sadece 3. parti bileşenler'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'arch-feature-local', q: 'Yalnızca LandingPage içinde kullanılan bileşen nereye konmalı?', options: [[m
[32m+[m[32m    'atoms/', 'organisms/', 'src/landing/components/', 'pages/'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m
[32m+[m[32m  // Naming[m
[32m+[m[32m  { id: 'naming-component-pascal', q: 'React bileşen isim standardı nedir?', options: [[m
[32m+[m[32m    'snake_case', 'kebab-case', 'camelCase', 'PascalCase'[m
[32m+[m[32m  ], answer: 3 },[m
[32m+[m[32m  { id: 'naming-folder-kebab', q: 'Klasör isim standardı nedir?', options: [[m
[32m+[m[32m    'PascalCase', 'kebab-case', 'SCREAMING_SNAKE', 'camelCase'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'naming-props-camel', q: 'Props ve state isimlendirmesi için öneri?', options: [[m
[32m+[m[32m    'PascalCase', 'camelCase', 'kebab-case', 'SCREAMING_SNAKE'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'naming-bool-prefix', q: 'Boolean prop isimleri nasıl başlamalı?', options: [[m
[32m+[m[32m    'get', 'set', 'is/has/should', 'on'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'naming-const', q: 'Sabitler için stil?', options: [[m
[32m+[m[32m    'camelCase', 'PascalCase', 'kebab-case', 'ALL_CAPS_SNAKE_CASE'[m
[32m+[m[32m  ], answer: 3 },[m
[32m+[m[32m  { id: 'events-prefix-handle', q: 'Olay yakalayıcı fonksiyonlar için tavsiye edilen önek?', options: [[m
[32m+[m[32m    'on', 'do', 'handle', 'exec'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'hooks-naming', q: 'Custom hook isimlendirmesi nasıl olmalı?', options: [[m
[32m+[m[32m    'use + PascalCase', 'get + camelCase', 'PascalCase', 'snake_case'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m
[32m+[m[32m  // State Management[m
[32m+[m[32m  { id: 'state-useReducer', q: 'Karmaşık state yönetimi için hangisi tercih edilir?', options: [[m
[32m+[m[32m    'useState', 'useReducer', 'useRef', 'useMemo'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'state-global-choice', q: 'Karmaşık global durumlar için önerilen seçenek?', options: [[m
[32m+[m[32m    'Sadece Context', 'URL parametreleri', 'Redux/Zustand gibi kütüphaneler', 'LocalStorage'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m
[32m+[m[32m  // Context Optimization[m
[32m+[m[32m  { id: 'ctx-partition', q: 'Context güncellemelerinde gereksiz renderları azaltmak için?', options: [[m
[32m+[m[32m    'Tek büyük context kullanmak', 'Context’i parçalara bölmek', 'Prop drilling yapmak', 'useRef ile sarmak'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'ctx-combined-provider', q: 'Nested provider hiyerarşisini sadeleştirmek için?', options: [[m
[32m+[m[32m    'Tümü kaldırılır', 'CombinedProvider ile grupla', 'Sadece tek provider bırak', 'Context’i durdur'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'ctx-selector', q: 'Context’te ince taneli abonelik için kütüphane?', options: [[m
[32m+[m[32m    'use-context-selector', 'react-router', 'immer', 'clsx'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'ctx-avoid-heavy', q: 'Performans kritik listelerde context yerine ne önerilir?', options: [[m
[32m+[m[32m    'Context doğrudan tüketimi', 'Her item’da useContext', 'Veriyi üstten prop olarak geçirmek', 'Global değişken'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m  { id: 'ctx-batching', q: 'Birden çok context değerini güncellerken tavsiye?', options: [[m
[32m+[m[32m    'Ayrı ayrı eventlerde çağır', 'Batching ile tek handler’da güncelle', 'Senkron beklet', 'Her set’ten sonra zorla render'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'ctx-lazy-init', q: 'Pahalı ilk değer üretimi için uygun yaklaşım?', options: [[m
[32m+[m[32m    'useState’e fonksiyon vererek lazy init', 'Render içinde hesapla', 'Her render’da fetch', 'Global değişken ata'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m
[32m+[m[32m  // Hooks[m
[32m+[m[32m  { id: 'hooks-encapsulate', q: 'Karmaşık tekrar kullanılabilir iş mantığı nereye taşınmalı?', options: [[m
[32m+[m[32m    'Component body', 'Custom hook içine', 'Global scope', 'CSS dosyası'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'hooks-compose', q: 'Hook kompozisyonu ile ilgili doğru ifade?', options: [[m
[32m+[m[32m    'Hooklar birleşmez', 'Hooklar küçük hooklardan compose edilebilir', 'Sadece tek hook olmalı', 'Sadece class’ta mümkündür'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m
[32m+[m[32m  // Suspense & Code Splitting[m
[32m+[m[32m  { id: 'suspense-lazy', q: 'Bileşenleri ihtiyaç halinde yüklemek için önerilen yaklaşım?', options: [[m
[32m+[m[32m    'React.lazy + Suspense', 'Webpack externals', 'SSR zorunlu', 'Iframe ile yükle'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'suspense-data', q: 'Suspense ile veri çekme için doğru ifade?', options: [[m
[32m+[m[32m    'Sadece class’larda çalışır', 'React Query/Relay/SWR gibi araçlarla birlikte kullanılabilir', 'UseEffect yerine geçer', 'Tarayıcıda desteklenmez'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m
[32m+[m[32m  // Caching[m
[32m+[m[32m  { id: 'cache-expensive', q: 'Pahalı hesaplamaları yeniden hesaplamayı önlemek için?', options: [[m
[32m+[m[32m    'useMemo', 'useRef', 'useEffect', 'useLayoutEffect'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m
[32m+[m[32m  // Error Boundaries[m
[32m+[m[32m  { id: 'error-boundary', q: 'Error Boundary hangi yapıyla uygulanır?', options: [[m
[32m+[m[32m    'Fonksiyon bileşen + useEffect', 'Class bileşen + componentDidCatch', 'Context Provider', 'Service Worker'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m
[32m+[m[32m  // Performance[m
[32m+[m[32m  { id: 'perf-virtualization', q: 'Büyük listelerde virtualization için önerilen kütüphane?', options: [[m
[32m+[m[32m    'react-window', 'redux-saga', 'axios', 'formik'[m
[32m+[m[32m  ], answer: 0 },[m
[32m+[m[32m  { id: 'perf-debounce', q: 'Arama veya resize gibi olaylarda performans için?', options: [[m
[32m+[m[32m    'Her değişimde setState', 'Throttle/Debounce kullanmak', 'Sabit 60fps loop', 'Inline script'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m
[32m+[m[32m  // Coding Quality[m
[32m+[m[32m  { id: 'quality-no-dup-state', q: 'Aynı state’i birden fazla context veya component içinde kopyalamaktan kaçınma ilkesi?', options: [[m
[32m+[m[32m    'KISS', 'DRY', 'YAGNI', 'WET'[m
[32m+[m[32m  ], answer: 1 },[m
[32m+[m[32m  { id: 'quality-no-dup-fn', q: 'Aynı yardımcı fonksiyonun farklı yerlerde tekrarlanmasını önlemek için?', options: [[m
[32m+[m[32m    'Her dosyada yeniden yaz', 'Kopyala-yapıştır', 'Ortak yardımcı/namespace’e çıkar', 'Global window’a ekle'[m
[32m+[m[32m  ], answer: 2 },[m
[32m+[m[32m];[m
[32m+[m
 // Havuzları birleştir ve kategorize et[m
 const QUIZ_SIZE = 20;[m
 const ALL_POOL = () => [[m
[36m@@ -291,6 +602,8 @@[m [mconst ALL_POOL = () => [[m
   ...ADDITIONAL_JS,[m
   ...ADDITIONAL_HTML,[m
   ...ADDITIONAL_CSS,[m
[32m+[m[32m  ...ADDITIONAL_STANDARDS,[m
[32m+[m[32m  ...ADDITIONAL_ARCH,[m
 ];[m
 [m
 // Yardımcı: id prefix kontrolü[m
[36m@@ -315,11 +628,17 @@[m [mfunction buildBank() {[m
   ]);[m
 [m
   const bank = {[m
[31m-    git: all.filter(q => idStarts(['git-'], q.id) || gitIdsExtra.has(q.id)),[m
[31m-    github: all.filter(q => idStarts(['gh-'], q.id)),[m
[32m+[m[32m    git: all.filter(q =>[m
[32m+[m[32m      idStarts(['git-','cc-','branch-','commit-','merge-','semver-','std-'], q.id) ||[m
[32m+[m[32m      gitIdsExtra.has(q.id)[m
[32m+[m[32m    ),[m
[32m+[m[32m    github: all.filter(q => idStarts(['gh-','pr-'], q.id)),[m
     react: all.filter(q =>[m
[31m-      idStarts(['react-','jsx-','state-','useState','useEffect','list-key'], q.id) ||[m
[31m-      reactExtras.has(q.id)[m
[32m+[m[32m      idStarts([m
[32m+[m[32m        ['react-','jsx-','state-','useState','useEffect','list-key',[m
[32m+[m[32m         'arch-','naming-','ctx-','hooks-','suspense-','error-','perf-','quality-'],[m
[32m+[m[32m        q.id[m
[32m+[m[32m      ) || reactExtras.has(q.id)[m
     ),[m
     javascript: all.filter(q => idStarts(['js-','ts-'], q.id)),[m
     html: all.filter(q => idStarts(['html-'], q.id)),[m
[36m@@ -329,7 +648,7 @@[m [mfunction buildBank() {[m
   return bank;[m
 }[m
 [m
[31m-// Yardımcılar[m
[32m+[m[32m// Yardımcılar ve durum + DOM + olaylar (geri eklendi)[m
 const $ = (id) => document.getElementById(id);[m
 const LETTERS = ['A', 'B', 'C', 'D'];[m
 const shuffle = (arr) => {[m
[36m@@ -341,26 +660,27 @@[m [mconst shuffle = (arr) => {[m
   return a;[m
 };[m
 [m
[31m-// Yeni: her soru için şıkları karıştır ve doğru cevap indeksini güncelle[m
[32m+[m[32m// Şıkları karıştır[m
 function shuffleQuestion(q) {[m
[31m-  const order = shuffle([0, 1, 2, 3]);              // 4 şık için permütasyon[m
[31m-  const options = order.map(i => q.options[i]);     // gösterilecek sıradaki şıklar[m
[31m-  const answer = order.indexOf(q.answer);           // yeni doğru indeks[m
[32m+[m[32m  const order = shuffle([0, 1, 2, 3]);[m
[32m+[m[32m  const options = order.map(i => q.options[i]);[m
[32m+[m[32m  const answer = order.indexOf(q.answer);[m
   return { ...q, options, answer };[m
 }[m
 [m
 // Durum[m
 let picked = [];[m
 let curre