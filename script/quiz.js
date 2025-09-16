// Basit ve sağlam bir quiz motoru

// 30+ soruluk havuz (Git, GitHub, React)
const QUESTIONS = [
  // Git
  { id: 'git-init', q: 'git init ne yapar?', options: [
    'Yeni bir Git deposu başlatır', 'Uzak depoyu yerel kopyalar', 'Son commit\'i geri alır', 'Geçici değişiklikleri saklar'
  ], answer: 0 },
  { id: 'git-clone', q: 'git clone komutu ne yapar?', options: [
    'Uzak depoyu yerel kopyalar', 'Yeni bir Git deposu başlatır', 'Değişiklikleri commit eder', 'Dosyaları staging alanına ekler'
  ], answer: 0 },
  { id: 'git-status', q: 'git status ne gösterir?', options: [
    'Commit geçmişini', 'Branch listesini', 'Çalışma ve staging alanındaki değişiklikleri', 'Uzak depoları'
  ], answer: 2 },
  { id: 'git-add', q: 'git add . ne yapar?', options: [
    'Tüm değişiklikleri commitler', 'Tüm değişiklikleri staging alanına ekler', 'Tüm branchleri siler', 'Tüm değişiklikleri geri alır'
  ], answer: 1 },
  { id: 'git-commit', q: 'git commit -m "mesaj" ne yapar?', options: [
    'Uzak depoya gönderir', 'Yerel commit oluşturur', 'Yeni branch oluşturur', 'Tag ekler'
  ], answer: 1 },
  { id: 'git-log', q: 'Commit geçmişini tek satır görmek için?', options: [
    'git log --oneline', 'git log --flat', 'git log --short', 'git history --one'
  ], answer: 0 },
  { id: 'git-diff', q: 'Staginge eklenmemiş değişiklikleri görmek için?', options: [
    'git diff', 'git diff --staged', 'git show', 'git log -p'
  ], answer: 0 },
  { id: 'git-diff-staged', q: 'Staginge eklenmiş değişiklikleri görmek için?', options: [
    'git diff', 'git diff --staged', 'git show', 'git ls-files'
  ], answer: 1 },
  { id: 'git-branch', q: 'Yerel branchleri listelemek için?', options: [
    'git branches', 'git list branch', 'git branch', 'git show-branch-all'
  ], answer: 2 },
  { id: 'git-checkout', q: 'Var olan branch\'e geçmek için?', options: [
    'git switch -c feature', 'git checkout feature', 'git init feature', 'git branch feature'
  ], answer: 1 },
  { id: 'git-switch-create', q: 'Yeni branch oluşturup geçmek için?', options: [
    'git switch -c feature', 'git new feature', 'git branch -m feature', 'git mv feature'
  ], answer: 0 },
  { id: 'git-merge', q: 'git merge feature ne yapar?', options: [
    'feature branch\'ini siler', 'feature\'ı mevcut branch ile birleştirir', 'feature\'ı push eder', 'Commitleri sıralar'
  ], answer: 1 },
  { id: 'git-rebase', q: 'git rebase ne yapar?', options: [
    'Commitleri başka bir tabana tekrar uygular', 'Uzaktaki branchleri siler', 'Tagleri birleştirir', 'Repo adresini değiştirir'
  ], answer: 0 },
  { id: 'git-remote-add', q: 'Yeni remote eklemek için?', options: [
    'git remote add origin URL', 'git remote create origin URL', 'git add remote origin', 'git set remote origin'
  ], answer: 0 },
  { id: 'git-remote-v', q: 'Remote adreslerini görmek için?', options: [
    'git remote', 'git remote -v', 'git remote show', 'git show remote'
  ], answer: 1 },
  { id: 'git-push', q: 'Değişiklikleri uzak depoya göndermek için?', options: [
    'git send', 'git upload', 'git push', 'git export'
  ], answer: 2 },
  { id: 'git-pull', q: 'git pull ne yapar?', options: [
    'Sadece indirir', 'İndirir ve birleştirir', 'Sadece merge yapar', 'Sadece rebase yapar'
  ], answer: 1 },
  { id: 'git-fetch', q: 'git fetch ne yapar?', options: [
    'İndirir ama birleştirmez', 'İndirir ve birleştirir', 'Yeni branch oluşturur', 'Tag oluşturur'
  ], answer: 0 },
  { id: 'git-stash', q: 'Geçici değişiklikleri saklamak için?', options: [
    'git save', 'git stash', 'git store', 'git hide'
  ], answer: 1 },
  { id: 'git-reset-hard', q: 'git reset --hard ne yapar?', options: [
    'Sadece HEAD\'i taşır', 'Staging’i temizler, çalışma alanını korur', 'Çalışma alanını da geri döndürür', 'Yeni commit oluşturur'
  ], answer: 2 },
  { id: 'git-revert', q: 'Geçmişi değiştirmeden commit geri almak için?', options: [
    'git reset', 'git revert <hash>', 'git undo', 'git restore'
  ], answer: 1 },

  // GitHub
  { id: 'gh-diff', q: 'Git ile GitHub farkı nedir?', options: [
    'İkisi de aynıdır', 'Git sürüm kontrolüdür; GitHub barındırma/hizmettir', 'Git bulut depolamadır', 'Git GUI, GitHub CLI\'dır'
  ], answer: 1 },
  { id: 'gh-fork', q: 'Fork nedir?', options: [
    'Yerelde kopyalama', 'Hesabınız altında depo kopyası', 'Yeni branch', 'Tag oluşturma'
  ], answer: 1 },
  { id: 'gh-pr', q: 'Pull Request nedir?', options: [
    'Uzak depoyu güncelleme isteği', 'Kod inceleme/birleştirme isteği', 'Branch silme', 'Release notu'
  ], answer: 1 },
  { id: 'gh-actions', q: 'GitHub Actions nedir?', options: [
    'Wiki', 'CI/CD ve otomasyon', 'Paket yöneticisi', 'Depo araması'
  ], answer: 1 },

  // React
  { id: 'react-what', q: 'React nedir?', options: [
    'Back-end framework', 'UI için JS kütüphanesi', 'Veritabanı', 'Paket yöneticisi'
  ], answer: 1 },
  { id: 'jsx-what', q: 'JSX nedir?', options: [
    'CSS preprocessor', 'JS için XML-benzeri sözdizimi', 'Yeni HTML standardı', 'Derleyici'
  ], answer: 1 },
  { id: 'state-what', q: 'State nedir?', options: [
    'Derleme aracı', 'Bileşenin değişen verisi', 'Router', 'Server sadece'
  ], answer: 1 },
  { id: 'useState', q: 'useState ne döner?', options: [
    'Değer + getter', 'Değer + setter', 'Sadece setter', 'Sadece değer'
  ], answer: 1 },
  { id: 'useEffect', q: 'useEffect ne zaman çalışır?', options: [
    'Render’dan önce', 'Render’dan sonra (bağımlılıkla)', 'Sadece unmount', 'Sadece mount'
  ], answer: 1 },
  { id: 'list-key', q: 'Listelerde key neden gerekir?', options: [
    'Stil için', 'Performans/doğru yeniden kullanım için', 'SEO için', 'Router için'
  ], answer: 1 },
];

// Ek soru havuzu (Git & GitHub, Semantic Commits, Lifecycle, Memoization, Context, TS, Atomic Design)
const EXTRA_QUESTIONS = [
  // 1) Git & GitHub
  { id: 'git-checkout-b', q: 'git checkout -b feature/login ne yapar?', options: [
    'Yeni branch oluşturup ona geçer', 'Sadece yeni branch oluşturur', 'Sadece mevcut brancha geçer', 'Uzak branchi siler'
  ], answer: 0 },
  { id: 'merge-vs-rebase-basic', q: 'Merge vs Rebase için temel doğru ifade hangisi?', options: [
    'Merge commitleri siler; rebase birleştirir', 'Merge iki dalı birleştirir, rebase commitleri yeni tabana taşıyarak lineer geçmiş oluşturur', 'İkisi de aynıdır', 'Rebase uzak depoda çalışır, merge yerelde'
  ], answer: 1 },
  { id: 'gitignore-node', q: 'Node.js projesinde node_modules klasörünü hariç tutmak için .gitignore satırı?', options: [
    'node_modules/', 'modules.node', '*.node', '!node_modules/'
  ], answer: 0 },
  { id: 'gh-create-repo', q: 'GitHub’da yeni repo oluştururken hangisi yapılabilir?', options: [
    'README, .gitignore ve lisans eklemek', 'Commit geçmişini içe aktarmak zorunlu', 'Ana branch adı değiştirilemez', 'Fork olmadan PR açılamaz'
  ], answer: 0 },
  { id: 'gh-open-pr-where', q: 'Pull Request nereden açılır?', options: [
    'Repository sayfası > Pull requests > New pull request', 'Gists sayfası', 'Issues sekmesi', 'Settings > Branches'
  ], answer: 0 },

  // 2) Semantic Commit Messages (Conventional Commits)
  { id: 'cc-valid-type', q: 'Aşağıdakilerden hangisi geçerli Conventional Commit türüdür?', options: [
    'build', 'bugfix', 'hotfix', 'release'
  ], answer: 0 },
  { id: 'cc-format', q: 'Conventional Commit biçimi hangisi?', options: [
    'type(scope): açıklama', 'scope:type - açıklama', '[type] açıklama', 'açıklama - type'
  ], answer: 0 },
  { id: 'cc-breaking', q: 'Breaking change nasıl belirtilir?', options: [
    'feat!: API değişikliği', 'feat(!!): değişiklik', 'BREAK!: footer', 'feat: BREAK!'
  ], answer: 0 },
  { id: 'cc-fix-example', q: '“fix: profil görseli yükleme hatası düzeltildi” mesajı hangi türdür?', options: [
    'fix', 'feat', 'docs', 'refactor'
  ], answer: 0 },

  // 3) React Lifecycle Hooks
  { id: 'mount-effect', q: 'Functional bileşende componentDidMount eşdeğeri nedir?', options: [
    'useEffect(() => {}, [dep])', 'useEffect(() => {}, [])', 'useLayoutEffect(() => {}, [dep])', 'useMemo(() => {}, [])'
  ], answer: 1 },
  { id: 'unmount-effect', q: 'Functional bileşende unmount anında temizlik nasıl yapılır?', options: [
    'useCleanup()', 'useEffect(() => () => {/* cleanup */}, [])', 'componentWillUnmount', 'useRef()'
  ], answer: 1 },
  { id: 'update-effect', q: 'Belirli bir değere göre güncelleme sonrası çalışmak için?', options: [
    'useEffect(() => { /* ... */ }, [dep])', 'useEffect(() => { /* ... */ }, [])', 'useMemo(() => dep, [])', 'componentDidUpdate()'
  ], answer: 0 },
  { id: 'class-mount-order', q: 'Class bileşenlerde mount sırası?', options: [
    'render -> constructor -> componentDidMount', 'constructor -> render -> componentDidMount', 'componentDidMount -> render -> constructor', 'render -> componentDidMount -> constructor'
  ], answer: 1 },

  // 4) React Memorization
  { id: 'react-memo', q: 'React.memo(Component) ne yapar?', options: [
    'Bileşeni cacheleyip hiç güncellemez', 'Props değişmediği sürece yeniden render’ı atlar', 'State’i otomatik memoize eder', 'Sunucu tarafında render eder'
  ], answer: 1 },
  { id: 'useMemo', q: 'useMemo ne için uygundur?', options: [
    'Event dinlemek', 'Pahalı hesaplamayı bağımlılıklar değişene kadar önbelleğe almak', 'State oluşturmak', 'Ref yaratmak'
  ], answer: 1 },
  { id: 'useCallback', q: 'useCallback ne işe yarar?', options: [
    'Fonksiyonu çalıştırır', 'Fonksiyon referansını bağımlılıklara göre sabitler', 'Değeri cacheler', 'Router’ı değiştirir'
  ], answer: 1 },
  { id: 'memo-pitfall', q: 'Memoization ile ilgili doğru ifade?', options: [
    'Her yerde kullanılmalı', 'Yanlış kullanılırsa gereksiz karmaşıklık yaratabilir', 'Performansı her zaman artırır', 'Sunucuda zorunludur'
  ], answer: 1 },

  // 5) Functional vs Class Components
  { id: 'modern-prefer', q: 'Modern React’te tercih edilen bileşen türü?', options: [
    'Class', 'Functional', 'Mixin', 'HOC tek başına'
  ], answer: 1 },
  { id: 'hooks-where', q: 'Hooklar nerede kullanılabilir?', options: [
    'Sadece classlarda', 'Sadece fonksiyon bileşenlerinde ve custom hooklarda', 'Her yerde', 'Sadece testlerde'
  ], answer: 1 },

  // 6) Abstract Class Component (React)
  { id: 'abstract-support', q: 'React’te abstract class desteği hakkında doğru ifade?', options: [
    'JS’te doğrudan abstract yok; TS ile abstract class tanımlanabilir', 'React abstract anahtar kelimesi sağlar', 'Sadece mixin gerekir', 'Sadece interface yeterlidir'
  ], answer: 0 },
  { id: 'abstract-pattern', q: 'Soyut temel sınıf kalıbı için doğru ifade?', options: [
    'BaseComponent içinde renderContent() soyut bırakılır ve alt sınıf uygular', 'render() her zaman soyut olmalı', 'Sadece HOC ile olur', 'Context ile aynı şeydir'
  ], answer: 0 },

  // 7) Context API
  { id: 'context-create', q: 'Context nasıl oluşturulur?', options: [
    'new Context()', 'React.createContext(varsayılan)', 'useContext()', 'createProvider()'
  ], answer: 1 },
  { id: 'context-provider', q: 'Değer nasıl sağlanır?', options: [
    '<Provider value={...}>', '<Context value={...}>', '<Store value={...}>', '<Context.Provider() /> olmadan'
  ], answer: 0 },
  { id: 'context-consume', q: 'Context değeri nasıl tüketilir?', options: [
    'useContext(MyContext)', 'useMemo(MyContext)', 'useRef(MyContext)', 'useId(MyContext)'
  ], answer: 0 },
  { id: 'context-usecase', q: 'Context tipik kullanım alanı?', options: [
    'Tema/Kullanıcı/Dil bilgisi paylaşımı', 'Animasyon', 'CSS derleme', 'Webpack ayarı'
  ], answer: 0 },

  // 8) Type-Safe Coding (TypeScript)
  { id: 'ts-type-interface', q: 'Interface hakkında doğru ifade?', options: [
    'Declaration merging ile genişletilebilir', 'Union oluşturur', 'Yalnızca sınıflarda kullanılır', 'Tip kontrolü yapmaz'
  ], answer: 0 },
  { id: 'ts-union', q: 'Union type örneği?', options: [
    'type Id = string | number', 'interface Id { string & number }', 'enum Id { String, Number }', 'let id: any | never'
  ], answer: 0 },
  { id: 'ts-unknown-any', q: 'unknown vs any için doğru ifade?', options: [
    'unknown atanmadan önce daraltma gerektirir; any sınırsızdır', 'any daha güvenlidir', 'unknown her yerde hataya yol açar', 'İkisi de aynıdır'
  ], answer: 0 },
  { id: 'ts-never', q: 'never tipi neyi ifade eder?', options: [
    'Her zaman null döner', 'Hiçbir zaman dönmeyen (throw/sonsuz döngü) fonksiyon tipi', 'Bilinmeyen tip', 'Boş dizi'
  ], answer: 1 },
  { id: 'ts-typeguard', q: 'Hangi ifade type guard’dır?', options: [
    'typeof x === "string"', 'console.log(x)', 'Math.max()', 'JSON.parse()'
  ], answer: 0 },
  { id: 'ts-props', q: 'React’te props tipini tanımlama örneği?', options: [
    'interface Props { title: string }', 'let Props = any', 'enum Props { title }', 'type Props = never'
  ], answer: 0 },

  // 9) Atomic Design Pattern
  { id: 'atomic-order', q: 'Atomic Design katmanlarının doğru sırası?', options: [
    'Atoms > Molecules > Organisms > Templates > Pages', 'Atoms > Organisms > Molecules > Pages > Templates', 'Pages > Templates > Organisms > Molecules > Atoms', 'Molecules > Atoms > Organisms > Pages > Templates'
  ], answer: 0 },
  { id: 'atomic-molecule', q: 'Molecule için doğru örnek?', options: [
    'Button', 'Label + Input + ErrorMessage', 'Navbar', 'Sayfa şablonu'
  ], answer: 1 },
  { id: 'atomic-organism', q: 'Organism için doğru örnek?', options: [
    'Input', 'Form veya Navbar gibi kompleks bileşen', 'Grid layout şablonu', 'Gerçek sayfa'
  ], answer: 1 },
  { id: 'atomic-template-vs-page', q: 'Template ile Page farkı?', options: [
    'Template yerleşimi tanımlar; Page gerçek içerikle doldurur', 'Page şablondur; Template gerçek veridir', 'İkisi aynıdır', 'Sadece CSS ile ilgilidir'
  ], answer: 0 },
];

// Yardımcılar
const $ = (id) => document.getElementById(id);
const LETTERS = ['A', 'B', 'C', 'D'];
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
// 20 soru seç
const QUIZ_SIZE = 20;

// Yeni: her soru için şıkları karıştır ve doğru cevap indeksini güncelle
function shuffleQuestion(q) {
  const order = shuffle([0, 1, 2, 3]);              // 4 şık için permütasyon
  const options = order.map(i => q.options[i]);     // gösterilecek sıradaki şıklar
  const answer = order.indexOf(q.answer);           // yeni doğru indeks
  return { ...q, options, answer };
}

// Durum
let picked = [];
let current = 0;
let answers = []; // her soru için seçilen index (0..3) veya undefined

// DOM
let startBtn, nextBtn, finishBtn, restartBtn;
let startScreen, quizScreen, resultScreen;
let questionEl, optionsEl, progressEl, scoreEl, resultListEl;

// Başlat
document.addEventListener('DOMContentLoaded', () => {
  // Elemanlar
  startBtn = $('start-btn');
  nextBtn = $('next-btn');
  finishBtn = $('finish-btn');
  restartBtn = $('restart-btn');

  startScreen = $('start-screen');
  quizScreen = $('quiz-screen');
  resultScreen = $('result-screen');

  questionEl = $('question');
  optionsEl = $('options');
  progressEl = $('progress');
  scoreEl = $('score');
  resultListEl = $('result-list');

  // Olaylar
  if (startBtn) startBtn.addEventListener('click', onStart);
  if (nextBtn) nextBtn.addEventListener('click', onNext);
  if (finishBtn) finishBtn.addEventListener('click', onFinish);
  if (restartBtn) restartBtn.addEventListener('click', onRestart);
  if (optionsEl) {
    optionsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.option-btn');
      if (!btn) return;
      const idx = Number(btn.dataset.idx);
      onSelect(idx);
    });
  }
});

function onStart() {
  // Havuz: mevcut + ek sorular, karıştır, 20 seç, her sorunun şıklarını da karıştır
  const pool = QUESTIONS.concat(EXTRA_QUESTIONS);
  picked = shuffle(pool)
    .slice(0, Math.min(QUIZ_SIZE, pool.length))
    .map(shuffleQuestion);
  current = 0;
  answers = Array(picked.length);

  startScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  render();
}

function render() {
  const q = picked[current];
  questionEl.textContent = q.q;
  progressEl.textContent = `Soru ${current + 1}/${picked.length}`;

  optionsEl.innerHTML = q.options.map((opt, i) => {
    const selected = answers[current] === i ? ' selected' : '';
    return `
      <button type="button" class="option-btn${selected}" data-idx="${i}">
        <strong>${LETTERS[i]}</strong><span>${opt}</span>
      </button>
    `;
  }).join('');

  updateNav();
}

function updateNav() {
  const isLast = current === picked.length - 1;
  const hasSel = typeof answers[current] === 'number';

  nextBtn.classList.toggle('hidden', isLast);
  finishBtn.classList.toggle('hidden', !isLast);

  nextBtn.disabled = !hasSel && !isLast;
  finishBtn.disabled = !hasSel && isLast;
}

function onSelect(idx) {
  answers[current] = idx;
  // Seçili stili güncelle (yeniden render basit ve güvenli)
  render();
}

function onNext() {
  if (typeof answers[current] !== 'number') return nudge();
  if (current < picked.length - 1) {
    current += 1;
    render();
  }
}

function onFinish() {
  if (typeof answers[current] !== 'number') return nudge();

  // Skor
  let correct = 0;
  resultListEl.innerHTML = '';
  picked.forEach((q, i) => {
    const user = answers[i];
    const ok = user === q.answer;
    if (ok) correct += 1;

    const li = document.createElement('li');
    li.className = ok ? 'correct' : 'wrong';
    li.textContent = `${i + 1}. ${q.q} — Senin: ${user != null ? q.options[user] : '(yok)'} | Doğru: ${q.options[q.answer]}`;
    resultListEl.appendChild(li);
  });
  const total = picked.length;
  scoreEl.textContent = `Doğru: ${correct}/${total} (${Math.round(correct * 100 / total)}%)`;

  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
}

function onRestart() {
  // Başlangıç ekranına dön
  startScreen.classList.remove('hidden');
  quizScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
}

function nudge() {
  // Basit titreşim
  optionsEl.style.transition = 'transform .12s ease';
  optionsEl.style.transform = 'translateX(4px)';
  setTimeout(() => { optionsEl.style.transform = 'translateX(-4px)'; }, 80);
  setTimeout(() => { optionsEl.style.transform = 'translateX(0)'; }, 160);
}
