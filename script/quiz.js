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
  picked = shuffle(QUESTIONS).slice(0, Math.min(10, QUESTIONS.length));
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
