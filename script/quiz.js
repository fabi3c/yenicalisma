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

// Ek: JavaScript/HTML/CSS soruları
const ADDITIONAL_JS = [
  { id: 'js-closure', q: 'Closure nedir?', options: [
    'Sadece sınıflarda kullanılan kalıtım tekniği', 'Bir fonksiyonun, tanımlandığı kapsamın değişkenlerine erişimi koruması', 'Global değişken', 'Event döngüsü'
  ], answer: 1 },
  { id: 'js-eq', q: '== ile === farkı nedir?', options: [
    '== tip dönüşümü yapmaz, === yapar', 'Her ikisi de tip dönüşümü yapar', '== tip dönüşümü yapar, === yapmaz', 'İkisi aynıdır'
  ], answer: 2 },
  { id: 'js-var-let-const', q: 'var, let ve const hakkında doğru ifade?', options: [
    'var blok kapsamına sahiptir', 'let ve const blok kapsamına sahiptir', 'const yeniden atanabilir', 'let işlev kapsamına sahiptir'
  ], answer: 1 },
  { id: 'js-event-loop', q: 'Event loop’un görevi nedir?', options: [
    'CSS’yi derlemek', 'Senkron kodu kuyruğa almak', 'Call stack ve task/microtask kuyruklarını koordine etmek', 'DOM’u boyamak'
  ], answer: 2 },
  { id: 'js-promise', q: 'Promise.resolve(1).then(x => x+1).then(console.log) çıktısı?', options: [
    '1', '2', 'undefined', 'Promise'
  ], answer: 1 },
  { id: 'js-hoisting', q: 'Hoisting hakkında doğru ifade?', options: [
    'var ve function declaration tanımları yukarı kaldırılır',
    'let/const için hoisting yoktur ve her zaman erişilebilir',
    'Hiçbir bildirim hoist olmaz',
    'Sadece const hoist olur'
  ], answer: 0 },
  { id: 'js-scope', q: 'Aşağıdakilerden hangisi doğrudur?', options: [
    'var blok kapsamına sahiptir',
    'let/const fonksiyon kapsamına sahiptir',
    'var fonksiyon kapsamlıdır; let/const blok kapsamlıdır',
    'Hepsi globaldir'
  ], answer: 2 },
  { id: 'js-this-arrow', q: 'Arrow function’da this nasıl belirlenir?', options: [
    'Çağırana göre dinamik',
    'new ile her zaman global',
    'Lexical (çevresel bağlamdan alınır)',
    'Her zaman undefined'
  ], answer: 2 },
  { id: 'js-prototype-new', q: 'new ile üretilen nesnenin prototipi için doğru ifade?', options: [
    'instance.__proto__ === Constructor.prototype',
    'instance.prototype === Constructor.__proto__',
    'Constructor.__proto__ === instance',
    'Object.prototype === null'
  ], answer: 0 },
  { id: 'js-array-map', q: 'Array.prototype.map ne döner?', options: [
    'Orijinal diziyi değiştirir',
    'Aynı uzunlukta yeni bir dizi döner',
    'Tek bir değer döner',
    'Iterator döner'
  ], answer: 1 },
  { id: 'js-array-reduce', q: 'Array.prototype.reduce ne için kullanılır?', options: [
    'Dizi öğelerini tek bir değere indirgemek',
    'Dizi öğelerini filtrelemek',
    'Diziyi kopyalamak',
    'Diziyi sıralamak'
  ], answer: 0 },
  { id: 'js-event-flow', q: 'Event capturing ve bubbling hakkında doğru ifade?', options: [
    'Capturing içten dışa; bubbling dıştan içe',
    'Capturing dıştan içe; bubbling içten dışa',
    'İkisi de içten dışa',
    'İkisi de dıştan içe'
  ], answer: 1 },
  { id: 'js-nullish', q: 'Nullish coalescing (??) ile OR (||) farkı?', options: [
    '|| sadece null/undefined için çalışır',
    '?? tüm falsy değerler için çalışır',
    '?? sadece null/undefined için devreye girer; || tüm falsy değerlerde',
    'İkisi tamamen aynıdır'
  ], answer: 2 },
  { id: 'js-optional-chaining', q: 'Optional chaining operatörü hangisidir?', options: [
    '?.', '??', '::', '=>'
  ], answer: 0 },
  { id: 'js-spread-rest', q: 'Spread ve Rest için doğru ifade?', options: [
    'Spread kalanları toplar; Rest yayar',
    'Spread yayar; Rest kalanları toplar',
    'İkisi de sadece nesnede çalışır',
    'İkisi de sadece dizide çalışır'
  ], answer: 1 },
  { id: 'js-iife', q: 'IIFE nedir?', options: [
    'Yavaş çalışan fonksiyon',
    'Kendini hemen çalıştıran fonksiyon ifadesi',
    'Async fonksiyon',
    'Generator fonksiyon'
  ], answer: 1 },
  { id: 'js-pure-fn', q: 'Saf (pure) fonksiyon için doğru ifade?', options: [
    'Yan etkisi yoktur, aynı girdiye aynı çıktıyı üretir',
    'Her zaman global durumu değiştirir',
    'Rastgele çıktı üretir',
    'DOM’u değiştirir'
  ], answer: 0 },
  { id: 'js-copy', q: 'Shallow vs deep copy hakkında doğru ifade?', options: [
    'Shallow tüm derinliği kopyalar',
    'Deep referansları paylaşır',
    'Shallow üst seviyeyi kopyalar, iç referanslar paylaşılabilir',
    'İkisi de aynıdır'
  ], answer: 2 },
  { id: 'js-microtask', q: 'Promise.then ve setTimeout zamanlaması için doğru ifade?', options: [
    'setTimeout önce, then sonra',
    'then microtask’tır ve setTimeout’tan önce çalışır',
    'İkisi eşzamanlıdır',
    'Tarayıcıya göre değişir ve garantisi yoktur'
  ], answer: 1 },
  { id: 'js-tdz', q: 'Temporal Dead Zone (TDZ) nedir?', options: [
    'var değişkenlerinin hatası',
    'let/const bildirimi yapılana kadar erişilemeyen dönem',
    'Event loop durması',
    'GC tarafından silinme anı'
  ], answer: 1 },
  { id: 'js-bind-call-apply', q: 'bind, call ve apply için doğru ifade?', options: [
    'bind anında çağırır; call yeni fonksiyon döner',
    'call argümanları diziyle alır; apply tek tek alır',
    'bind yeni fonksiyon döndürür; call/apply anında çağırır',
    'Üçü de aynıdır'
  ], answer: 2 },
  { id: 'js-loop-closure', q: 'for döngüsünde closure ve var/let için doğru ifade?', options: [
    'var her iterasyonda yeni bağlam oluşturur',
    'let tek bağlam paylaşır',
    'var tek bağlam paylaşır; let her iterasyonda ayrı bağlam oluşturur',
    'İkisi de aynı davranır'
  ], answer: 2 },
  { id: 'js-obj-eq', q: 'Aşağıdakilerden hangisi doğrudur?', options: [
    '{} === {} true’dur',
    'İki farklı nesne referansı eşit değildir',
    'Nesneler === ile her zaman eşittir',
    'Nesneler == ile her zaman eşittir'
  ], answer: 1 },
  { id: 'js-nan', q: 'NaN === NaN sonucu nedir?', options: [
    'true', 'false', 'undefined', 'TypeError'
  ], answer: 1 },
  { id: 'js-typeof-null', q: 'typeof null sonucu nedir?', options: [
    '"null"', '"object"', '"undefined"', '"number"'
  ], answer: 1 },
  { id: 'js-falsy', q: 'Aşağıdakilerden hangileri falsy’dir?', options: [
    '0, "", null, undefined, NaN, false',
    '[], {}, "0", true',
    '1, " ", [], {}',
    'Infinity, -1, "false"'
  ], answer: 0 },
  { id: 'js-promise-states', q: 'Promise durumları hangi seçenekte doğru?', options: [
    'started, done, failed',
    'pending, fulfilled, rejected',
    'open, closed, error',
    'idle, running, stopped'
  ], answer: 1 },
  { id: 'js-async-await-err', q: 'async/await ile hata yakalama için doğru yaklaşım?', options: [
    'await her zaman hataları yutar',
    'try/catch ile await edilen reddedilen promise yakalanabilir',
    'Sadece then/catch kullanılabilir',
    'throw kullanılamaz'
  ], answer: 1 }
];

const ADDITIONAL_HTML = [
  { id: 'html-semantic', q: 'Semantik HTML etiketi hangisidir?', options: [
    'div', 'span', 'section', 'b'
  ], answer: 2 },
  { id: 'html-alt', q: 'img için alt özniteliği neden önemlidir?', options: [
    'SEO ve erişilebilirlik için alternatif metin sağlar', 'Resmi büyütür', 'Lazy-load zorunludur', 'Resmi önbelleğe alır'
  ], answer: 0 },
  { id: 'html-form-method', q: 'Form verisini URL’e ekleyen method?', options: [
    'POST', 'PUT', 'GET', 'PATCH'
  ], answer: 2 },
  { id: 'html-meta-viewport', q: 'Mobil uyum için tipik viewport meta içeriği?', options: [
    'width=1024', 'initial-scale=2', 'width=device-width, initial-scale=1', 'user-scalable=no'
  ], answer: 2 },
  { id: 'html-block-inline', q: 'Block vs inline için doğru ifade?', options: [
    'Inline genişlik kaplar', 'Block tüm satırı kaplayabilir, inline satır içinde akar', 'Block satır içinde akar', 'Inline margin almaz'
  ], answer: 1 },
];

const ADDITIONAL_CSS = [
  { id: 'css-specificity', q: 'Spesifiklik sırası en düşükten en yükseğe?', options: [
    'ID > Class > Element', 'Element > Class > ID', 'Class > ID > Element', 'Inline > ID > Class'
  ], answer: 1 },
  { id: 'css-box-model', q: 'Box modelde içerik + padding + border toplam genişliği için hangisi kullanılır?', options: [
    'box-sizing: content-box', 'box-sizing: border-box', 'display: inline-block', 'width: auto'
  ], answer: 1 },
  { id: 'css-flex-grid', q: 'Satır/sütun yerleşimleri için hangi ifade doğru?', options: [
    'Flexbox iki boyutludur, Grid tek boyutlu', 'Grid iki boyutludur, Flexbox tek boyutlu', 'İkisi de sadece satır içindir', 'İkisi de aynı'
  ], answer: 1 },
  { id: 'css-position-sticky', q: 'position: sticky için doğru ifade?', options: [
    'Her zaman sabittir', 'Scroll konumuna göre belirli eşiğe gelince yapışır', 'Sadece parent fixed ise çalışır', 'Z-index gerekmez'
  ], answer: 1 },
  { id: 'css-media', q: '320px altı ekranlar için media query?', options: [
    '@media (max-width: 320px) { ... }', '@media (min-width: 320px) { ... }', '@media screen=320px { ... }', '@media width<=320 { ... }'
  ], answer: 0 },
];

const ADDITIONAL_STANDARDS = [
  // Politikalar / Akış
  { id: 'std-main-push', q: 'main branch\'ine doğrudan push hakkında doğru ifade?', options: [
    'Serbesttir', 'Sadece force push yasaktır', 'Tamamen yasaktır, PR ile ilerlenir', 'Sadece hafta içi serbest'
  ], answer: 2 },
  { id: 'pr-required', q: 'Değişiklikler nasıl ana koda dahil edilmelidir?', options: [
    'Doğrudan main\'e push', 'Forksuz PR', 'Pull Request açıp onay alarak', 'Tag atarak'
  ], answer: 2 },
  { id: 'branch-from-main', q: 'Yeni bir işe başlarken hangi dal baz alınmalı?', options: [
    'main', 'rastgele bir branch', 'HEAD~1', 'release'
  ], answer: 0 },
  { id: 'commit-small', q: 'Commit sıklığı için öneri nedir?', options: [
    'Büyük ve seyrek', 'Küçük ve sık', 'Tek commit', 'Sadece release öncesi'
  ], answer: 1 },
  { id: 'pr-self-review', q: 'PR açmadan önce hangi adım önerilir?', options: [
    'Direkt merge', 'Self-review yapıp sonra "Ready for Review"', 'Tag oluşturma', 'Squash etme'
  ], answer: 1 },

  // Semantic Commit Messages
  { id: 'cc-format-std', q: 'Semantic commit biçimi hangisi?', options: [
    'type(scope): açıklama', 'scope:type - açıklama', '[type] açıklama', 'type:scope açıklama'
  ], answer: 0 },
  { id: 'cc-imperative', q: 'Commit açıklaması hangi kipte olmalı?', options: [
    'Geçmiş zaman', 'Gelecek zaman', 'Emir kipinde/şimdiki zaman', 'Rastgele'
  ], answer: 2 },
  { id: 'cc-scope-opt', q: 'Commit scope alanı için doğru ifade?', options: [
    'Zorunlu', 'Opsiyonel ama faydalı', 'Yasak', 'Sadece testlerde'
  ], answer: 1 },
  { id: 'cc-types', q: 'Aşağıdakilerden hangisi önerilen commit türlerinden değildir?', options: [
    'feat', 'fix', 'refactor', 'change'
  ], answer: 3 },
  { id: 'cc-issues', q: 'İlgili issue nasıl referanslanır?', options: [
    'Başlıkta', 'Açıklamada link', 'Footer\'da Closes #123 gibi', 'Tag atarak'
  ], answer: 2 },
  { id: 'cc-breaking-footer', q: 'Breaking change bildirimi nereye yazılır?', options: [
    'Başlığa', 'Scope alanına', 'Footer\'a "BREAKING CHANGE:" ile', 'Body\'ye herhangi yere'
  ], answer: 2 },
  { id: 'cc-bad-vague', q: 'Kötü örnek hangisi?', options: [
    'feat(ui): add dark mode toggle', 'fix(api): handle null values', 'refactor(user): simplify logic', 'update: change some stuff'
  ], answer: 3 },
  { id: 'cc-single-unit', q: 'Commit’ler nasıl olmalı?', options: [
    'Birden fazla konuyu birleştirmeli', 'Tek bir anlamlı işi temsil etmeli', 'Sadece stil değişiklikleri olmalı', 'Ne olursa olsun tek commit'
  ], answer: 1 },

  // Merge Stratejileri
  { id: 'merge-commit', q: 'Merge commit stratejisinin özelliği?', options: [
    'Tüm commitleri tek committe birleştirir', 'Lineer tarih oluşturur', 'Birleştirme commitini koruyarak tarihi muhafaza eder', 'Remote geçmişini siler'
  ], answer: 2 },
  { id: 'merge-squash', q: 'Squash and Merge ne yapar?', options: [
    'Branchi siler', 'Tüm commitleri tek commit olarak birleştirir', 'Rebase yapar', 'Tag ekler'
  ], answer: 1 },
  { id: 'merge-rebase', q: 'Rebase and Merge sonucu?', options: [
    'Merge commit oluşur', 'Lineer geçmiş (D\', E\') oluşur', 'Commitler kaybolur', 'Sadece tagler taşınır'
  ], answer: 1 },
  { id: 'merge-preferred', q: 'Tercih edilen strateji (belirtildiği gibi)?', options: [
    'Merge commit', 'Squash and Merge', 'Rebase and Merge', 'Hepsi yasak'
  ], answer: 1 },

  // SemVer
  { id: 'semver-pattern', q: 'SemVer deseni nedir?', options: [
    'MAJOR.MINOR.PATCH', 'MAJOR.PATCH.MINOR', 'PATCH.MINOR.MAJOR', 'vMAJOR-PATCH'
  ], answer: 0 },
  { id: 'semver-major', q: 'Hangi durumda MAJOR artar?', options: [
    'Geriye dönük uyumlu özellik', 'Dokümantasyon değişikliği', 'Geriye dönük uyumsuz değişiklik', 'Hata düzeltmesi'
  ], answer: 2 },
  { id: 'semver-minor', q: 'MINOR artışı neyi ifade eder?', options: [
    'Uyumsuzluk', 'Geriye uyumlu yeni özellik', 'Hata düzeltmesi', 'Performans düşüşü'
  ], answer: 1 },
  { id: 'semver-patch', q: 'PATCH artışı neyi ifade eder?', options: [
    'Hata düzeltmesi (geri uyumlu)', 'Yeni özellik', 'Docs', 'Uyumsuz değişiklik'
  ], answer: 0 },

  // Diğer iyi uygulamalar
  { id: 'docs-readme-template', q: 'README şablonu kullanmanın faydası?', options: [
    'Onboarding’i hızlandırır', 'Commit sayısını azaltır', 'Git gereksizdir', 'PR sayısını kısıtlar'
  ], answer: 0 },
];

// Yeni: Component Architecture / Best Practices soru havuzu
const ADDITIONAL_ARCH = [
  // Atomic Design ve yerleşim
  { id: 'arch-reusable-only', q: 'Atomic klasörlerine hangi bileşenler konmalıdır?', options: [
    'Sadece sayfaya özel bileşenler', 'Her oluşturulan bileşen', 'Uygulama genelinde tekrar kullanılabilen bileşenler', 'Sadece 3. parti bileşenler'
  ], answer: 2 },
  { id: 'arch-feature-local', q: 'Yalnızca LandingPage içinde kullanılan bileşen nereye konmalı?', options: [
    'atoms/', 'organisms/', 'src/landing/components/', 'pages/'
  ], answer: 2 },

  // Naming
  { id: 'naming-component-pascal', q: 'React bileşen isim standardı nedir?', options: [
    'snake_case', 'kebab-case', 'camelCase', 'PascalCase'
  ], answer: 3 },
  { id: 'naming-folder-kebab', q: 'Klasör isim standardı nedir?', options: [
    'PascalCase', 'kebab-case', 'SCREAMING_SNAKE', 'camelCase'
  ], answer: 1 },
  { id: 'naming-props-camel', q: 'Props ve state isimlendirmesi için öneri?', options: [
    'PascalCase', 'camelCase', 'kebab-case', 'SCREAMING_SNAKE'
  ], answer: 1 },
  { id: 'naming-bool-prefix', q: 'Boolean prop isimleri nasıl başlamalı?', options: [
    'get', 'set', 'is/has/should', 'on'
  ], answer: 2 },
  { id: 'naming-const', q: 'Sabitler için stil?', options: [
    'camelCase', 'PascalCase', 'kebab-case', 'ALL_CAPS_SNAKE_CASE'
  ], answer: 3 },
  { id: 'events-prefix-handle', q: 'Olay yakalayıcı fonksiyonlar için tavsiye edilen önek?', options: [
    'on', 'do', 'handle', 'exec'
  ], answer: 2 },
  { id: 'hooks-naming', q: 'Custom hook isimlendirmesi nasıl olmalı?', options: [
    'use + PascalCase', 'get + camelCase', 'PascalCase', 'snake_case'
  ], answer: 0 },

  // State Management
  { id: 'state-useReducer', q: 'Karmaşık state yönetimi için hangisi tercih edilir?', options: [
    'useState', 'useReducer', 'useRef', 'useMemo'
  ], answer: 1 },
  { id: 'state-global-choice', q: 'Karmaşık global durumlar için önerilen seçenek?', options: [
    'Sadece Context', 'URL parametreleri', 'Redux/Zustand gibi kütüphaneler', 'LocalStorage'
  ], answer: 2 },

  // Context Optimization
  { id: 'ctx-partition', q: 'Context güncellemelerinde gereksiz renderları azaltmak için?', options: [
    'Tek büyük context kullanmak', 'Context’i parçalara bölmek', 'Prop drilling yapmak', 'useRef ile sarmak'
  ], answer: 1 },
  { id: 'ctx-combined-provider', q: 'Nested provider hiyerarşisini sadeleştirmek için?', options: [
    'Tümü kaldırılır', 'CombinedProvider ile grupla', 'Sadece tek provider bırak', 'Context’i durdur'
  ], answer: 1 },
  { id: 'ctx-selector', q: 'Context’te ince taneli abonelik için kütüphane?', options: [
    'use-context-selector', 'react-router', 'immer', 'clsx'
  ], answer: 0 },
  { id: 'ctx-avoid-heavy', q: 'Performans kritik listelerde context yerine ne önerilir?', options: [
    'Context doğrudan tüketimi', 'Her item’da useContext', 'Veriyi üstten prop olarak geçirmek', 'Global değişken'
  ], answer: 2 },
  { id: 'ctx-batching', q: 'Birden çok context değerini güncellerken tavsiye?', options: [
    'Ayrı ayrı eventlerde çağır', 'Batching ile tek handler’da güncelle', 'Senkron beklet', 'Her set’ten sonra zorla render'
  ], answer: 1 },
  { id: 'ctx-lazy-init', q: 'Pahalı ilk değer üretimi için uygun yaklaşım?', options: [
    'useState’e fonksiyon vererek lazy init', 'Render içinde hesapla', 'Her render’da fetch', 'Global değişken ata'
  ], answer: 0 },

  // Hooks
  { id: 'hooks-encapsulate', q: 'Karmaşık tekrar kullanılabilir iş mantığı nereye taşınmalı?', options: [
    'Component body', 'Custom hook içine', 'Global scope', 'CSS dosyası'
  ], answer: 1 },
  { id: 'hooks-compose', q: 'Hook kompozisyonu ile ilgili doğru ifade?', options: [
    'Hooklar birleşmez', 'Hooklar küçük hooklardan compose edilebilir', 'Sadece tek hook olmalı', 'Sadece class’ta mümkündür'
  ], answer: 1 },

  // Suspense & Code Splitting
  { id: 'suspense-lazy', q: 'Bileşenleri ihtiyaç halinde yüklemek için önerilen yaklaşım?', options: [
    'React.lazy + Suspense', 'Webpack externals', 'SSR zorunlu', 'Iframe ile yükle'
  ], answer: 0 },
  { id: 'suspense-data', q: 'Suspense ile veri çekme için doğru ifade?', options: [
    'Sadece class’larda çalışır', 'React Query/Relay/SWR gibi araçlarla birlikte kullanılabilir', 'UseEffect yerine geçer', 'Tarayıcıda desteklenmez'
  ], answer: 1 },

  // Caching
  { id: 'cache-expensive', q: 'Pahalı hesaplamaları yeniden hesaplamayı önlemek için?', options: [
    'useMemo', 'useRef', 'useEffect', 'useLayoutEffect'
  ], answer: 0 },

  // Error Boundaries
  { id: 'error-boundary', q: 'Error Boundary hangi yapıyla uygulanır?', options: [
    'Fonksiyon bileşen + useEffect', 'Class bileşen + componentDidCatch', 'Context Provider', 'Service Worker'
  ], answer: 1 },

  // Performance
  { id: 'perf-virtualization', q: 'Büyük listelerde virtualization için önerilen kütüphane?', options: [
    'react-window', 'redux-saga', 'axios', 'formik'
  ], answer: 0 },
  { id: 'perf-debounce', q: 'Arama veya resize gibi olaylarda performans için?', options: [
    'Her değişimde setState', 'Throttle/Debounce kullanmak', 'Sabit 60fps loop', 'Inline script'
  ], answer: 1 },

  // Coding Quality
  { id: 'quality-no-dup-state', q: 'Aynı state’i birden fazla context veya component içinde kopyalamaktan kaçınma ilkesi?', options: [
    'KISS', 'DRY', 'YAGNI', 'WET'
  ], answer: 1 },
  { id: 'quality-no-dup-fn', q: 'Aynı yardımcı fonksiyonun farklı yerlerde tekrarlanmasını önlemek için?', options: [
    'Her dosyada yeniden yaz', 'Kopyala-yapıştır', 'Ortak yardımcı/namespace’e çıkar', 'Global window’a ekle'
  ], answer: 2 },
];

// Havuzları birleştir ve kategorize et
const QUIZ_SIZE = 20;
const ALL_POOL = () => [
  ...QUESTIONS,
  ...(typeof EXTRA_QUESTIONS !== 'undefined' ? EXTRA_QUESTIONS : []),
  ...ADDITIONAL_JS,
  ...ADDITIONAL_HTML,
  ...ADDITIONAL_CSS,
  ...ADDITIONAL_STANDARDS,
  ...ADDITIONAL_ARCH,
];

// Yardımcı: id prefix kontrolü
const idStarts = (prefixes, id) => prefixes.some(p => id.startsWith(p));

// Banka: mevcut soruları id’lerine göre gruplandır
function buildBank() {
  const all = ALL_POOL();

  const gitIdsExtra = new Set([
    'cc-valid-type','cc-format','cc-breaking','cc-fix-example',
    'merge-vs-rebase-basic','gitignore-node'
  ]);

  const reactExtras = new Set([
    'mount-effect','unmount-effect','update-effect','class-mount-order',
    'react-memo','useMemo','useCallback','memo-pitfall',
    'modern-prefer','hooks-where',
    'abstract-support','abstract-pattern',
    'context-create','context-provider','context-consume','context-usecase',
    'atomic-order','atomic-molecule','atomic-organism','atomic-template-vs-page'
  ]);

  const bank = {
    git: all.filter(q =>
      idStarts(['git-','cc-','branch-','commit-','merge-','semver-','std-'], q.id) ||
      gitIdsExtra.has(q.id)
    ),
    github: all.filter(q => idStarts(['gh-','pr-'], q.id)),
    react: all.filter(q =>
      idStarts(
        ['react-','jsx-','state-','useState','useEffect','list-key',
         'arch-','naming-','ctx-','hooks-','suspense-','error-','perf-','quality-'],
        q.id
      ) || reactExtras.has(q.id)
    ),
    javascript: all.filter(q => idStarts(['js-','ts-'], q.id)),
    html: all.filter(q => idStarts(['html-'], q.id)),
    css: all.filter(q => idStarts(['css-'], q.id)),
  };

  return bank;
}

// Yardımcılar ve durum + DOM + olaylar (geri eklendi)
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

// Şıkları karıştır
function shuffleQuestion(q) {
  const order = shuffle([0, 1, 2, 3]);
  const options = order.map(i => q.options[i]);
  const answer = order.indexOf(q.answer);
  return { ...q, options, answer };
}

// Durum
let picked = [];
let current = 0;
let answers = [];

// DOM ref’leri
let startBtn, nextBtn, finishBtn, restartBtn;
let startScreen, quizScreen, resultScreen;
let questionEl, optionsEl, progressEl, scoreEl, resultListEl;
let countInput, countHelp;

// Başlatıcı
function init() {
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

  countInput = $('question-count');
  countHelp = $('count-help');

  // Kategori değişimi: artık checkbox çoklu seçim
  document.querySelectorAll('input[name="category"]').forEach(input => {
    input.addEventListener('change', handleCategoryChange);
  });

  // Sayı girişini 1..max aralığına sıkıştır
  const clampCountInput = () => {
    if (!countInput) return;
    const max = Number(countInput.max || '1');
    let v = parseInt(countInput.value || '0', 10);
    if (!Number.isFinite(v)) v = 1;
    v = Math.max(1, Math.min(max, v));
    countInput.value = String(v);
  };
  if (countInput) {
    countInput.addEventListener('input', clampCountInput);
    countInput.addEventListener('change', clampCountInput);
    countInput.addEventListener('blur', clampCountInput);
  }

  // Buton olayları
  if (startBtn) startBtn.addEventListener('click', onStart);
  if (nextBtn) nextBtn.addEventListener('click', onNext);
  if (finishBtn) finishBtn.addEventListener('click', onFinish);
  if (restartBtn) restartBtn.addEventListener('click', onRestart);

  // Şık tıklama
  if (optionsEl) {
    optionsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.option-btn');
      if (!btn) return;
      const idx = Number(btn.dataset.idx);
      onSelect(idx);
    });
  }

  // İlk yükleme
  updateCountUI();
}

/* --- Yeni yardımcılar (çoklu kategori) --- */
function getSelectedCategories() {
  const checked = Array.from(document.querySelectorAll('input[name="category"]:checked'))
    .map(i => i.value);
  // Hiç yoksa mix’e dön
  if (checked.length === 0) return ['mix'];
  // mix varsa tek olsun
  if (checked.includes('mix')) return ['mix'];
  return checked;
}

function handleCategoryChange(e) {
  const changed = e.target;
  const mixInput = document.querySelector('input[name="category"][value="mix"]');
  if (changed.value === 'mix') {
    if (changed.checked) {
      // Diğerlerini kaldır
      document.querySelectorAll('input[name="category"]').forEach(i => {
        if (i !== changed) i.checked = false;
      });
    } else {
      // Mix kaldırıldı ve başka yoksa tekrar aç
      const anyOther = Array.from(document.querySelectorAll('input[name="category"]'))
        .some(i => i.value !== 'mix' && i.checked);
      if (!anyOther) changed.checked = true;
    }
  } else {
    // Diğer bir kategori seçildiyse mix’i kapat
    if (changed.checked && mixInput && mixInput.checked) {
      mixInput.checked = false;
    }
    // Hepsi kaldırıldıysa mix’i aç
    const othersChecked = Array.from(document.querySelectorAll('input[name="category"]'))
      .some(i => i.value !== 'mix' && i.checked);
    if (!othersChecked && mixInput && !mixInput.checked) {
      mixInput.checked = true;
    }
  }
  updateCountUI();
}

/* Havuz birleştirme */
function buildSelectedPool(selected, bank) {
  if (selected.length === 1 && selected[0] === 'mix') {
    return ALL_POOL();
  }
  const combined = [];
  const seen = new Set();
  selected.forEach(cat => {
    const arr = bank[cat] || [];
    arr.forEach(q => {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        combined.push(q);
      }
    });
  });
  return combined;
}

// DOM hazırsa hemen başlat; değilse event ile
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Toplam soru bilgisini göster ve input limitlerini ayarla
function updateCountUI() {
  const bank = buildBank();
  const selected = getSelectedCategories();
  const pool = buildSelectedPool(selected, bank);
  const total = pool.length;

  if (countInput) {
    countInput.min = '1';
    countInput.max = String(total);
    let current = parseInt(countInput.value || '0', 10);
    if (!(current >= 1)) current = Math.min(QUIZ_SIZE, total);
    current = Math.max(1, Math.min(total, current));
    countInput.value = String(current);
  }
  if (countHelp) {
    const label = selected[0] === 'mix' ? 'Karışık' : selected.join(', ');
    countHelp.textContent = `${label}: ${total} soru (1 - ${total})`;
  }
}

// Başlat: havuz hazırla ve ekrana geç
function onStart() {
  const bank = buildBank();
  const selected = getSelectedCategories();
  const pool = buildSelectedPool(selected, bank);

  const desiredRaw = countInput ? parseInt(countInput.value || '0', 10) : QUIZ_SIZE;
  const desired = Math.max(1, Math.min(pool.length, Number.isFinite(desiredRaw) ? desiredRaw : QUIZ_SIZE));

  picked = shuffle(pool).slice(0, desired).map(shuffleQuestion);
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
  startScreen.classList.remove('hidden');
  quizScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
}

function nudge() {
  optionsEl.style.transition = 'transform .12s ease';
  optionsEl.style.transform = 'translateX(4px)';
  setTimeout(() => { optionsEl.style.transform = 'translateX(-4px)'; }, 80);
  setTimeout(() => { optionsEl.style.transform = 'translateX(0)'; }, 160);
}
