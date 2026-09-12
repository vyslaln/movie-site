# Flixora

**[Türkçe](#türkçe) | [English](#english)**

---

<a name="türkçe"></a>
## Türkçe

Flixora, **HTML5, CSS3 ve saf JavaScript** kullanılarak sıfırdan geliştirilmiş, Netflix tarzı bir film keşif sitesidir — herhangi bir framework veya backend kullanılmamıştır. Bu proje, DOM manipülasyonu, tarayıcı tarafında veri yönetimi, responsive tasarım ve çok sayfalı bir sitenin düzenli bir şekilde yapılandırılması gibi gerçek dünya front-end kavramlarını pratik etmek amacıyla bir **öğrenme projesi** olarak hazırlanmıştır.

## Tanıtım Videosu

https://github.com/user-attachments/assets/4fb83674-e73a-4ea3-bdb4-3a44301fac74

*(Ayrıca yerel olarak `assets/movie-site.mp4` yolunda da mevcuttur)*

## Özellikler

- **Ana sayfa** — sinematik bir hero bölümü ve yatay kaydırmalı film carousel'leri (Popüler / Yeni Eklenenler)
- **Movies sayfası** — tam film kataloğu, tür (genre) filtreleme ve canlı arama penceresi
- **Tür filtresi** — hem ana sayfada hem movies sayfasında çalışan dropdown tabanlı filtreleme
- **Film detay sayfaları** — tamamen URL parametreleriyle çalışan dinamik içerik (sabit bir film veritabanına ihtiyaç duymadan)
- **My List (İzleme Listesi)** — film ekleme/çıkarma, `localStorage` ile kalıcı hale getirilmiş
- **Hesap sistemi** (yalnızca istemci tarafında) — giriş yapma, avatar yükleyerek profil düzenleme, şifre değiştirme, çıkış yapma
- **Karanlık mod** — hem navbar'dan hem sidebar'dan açılıp kapatılabilir, oturumlar arası hatırlanır
- **Tamamen responsive** — hamburger menü, uyarlanabilir grid yapıları ve mobil ekranlara kadar dokunmatik dostu tasarım

## Kullanılan Teknolojiler

| Katman | Teknoloji |
|---|---|
| Yapı | HTML5 |
| Stil | CSS3 (tema için custom property/değişkenler), bazı sayfalarda Bootstrap 5 grid sistemi |
| İkonlar | Bootstrap Icons |
| Fontlar | Google Fonts (Poppins + Inter) |
| Mantık | Saf JavaScript (ES6+) |
| Veri Kalıcılığı | Tarayıcı `localStorage` (backend/veritabanı yok) |

## Proje Klasör Yapısı

```
movie-site-last/
├── assets/
│   └── movie-site.mp4
├── css/
│   ├── components.css
│   ├── layout.css
│   ├── login.css
│   ├── responsive.css
│   └── style.css
├── docs/
│   └── readme.md
├── html/
│   ├── account.html
│   ├── change-password.html
│   ├── edit-profile.html
│   ├── index.html
│   ├── login.html
│   ├── movie-detail.html
│   ├── movies.html
│   └── my-list.html
├── images/
│   ├── arog.jpg
│   ├── backrooms.jpg
│   ├── budapeşte-hoteli.png
│   ├── cinema.png
│   ├── daredevik.jpg
│   ├── esaretin-bedeli.png
│   ├── far-from-hpme.png
│   ├── free-solo.png
│   ├── gora.jpg
│   ├── hulk.jpg
│   ├── interstellar.png
│   ├── ironman.jpg
│   ├── iyi-kotu-ve-cirkin.png
│   ├── john-wick.png
│   ├── knives-out.png
│   ├── la-la-land.png
│   ├── little-miss-sunshine.png
│   ├── mandalorian.png
│   ├── mmorales.jpg
│   ├── onslaught.png
│   ├── orumcek-adam-evreninde.png
│   ├── scary-movie.jpg
│   ├── schindler-list.png
│   ├── se7en.png
│   ├── spidey2.jpg
│   ├── the-conjuring.png
│   ├── toy-story.png
│   └── yuzuklerin-efendisi.png
└── javascript/
    ├── auth.js
    ├── carousel.js
    ├── genre-filter.js
    ├── movie-details.js
    ├── movies-actions.js
    ├── my-list.js
    ├── responsive-menu.js
    ├── search.js
    └── theme.js
```

## Nasıl Çalışıyor

Backend olmadığı için Flixora tamamen tarayıcıya dayanıyor:

- **Film verileri** doğrudan HTML içinde `data-*` attribute'ları (`data-genre`, `data-title`, `data-poster`) olarak tutuluyor — bu, öğrenme projesi için işleri basit tutuyor, ancak "gerçek" bir katalog boyutuna ölçeklenmiyor.
- **Film detay sayfaları** hiçbir yerde film bilgisi saklamıyor — başlık, poster ve tür bilgisi URL query parametreleri (`movie-detail.html?title=...&poster=...&genre=...`) olarak taşınıyor, böylece herhangi bir kart ortak bir veritabanına ihtiyaç duymadan çalışan bir detay sayfasına link verebiliyor.
- **Kullanıcı hesapları** simüle ediliyor: profil bilgisi (isim, email, şifre, avatar) tek bir `localStorage` anahtarında saklanıyor, giriş/çıkış durumu ise ayrı takip ediliyor — böylece çıkış yapmak kayıtlı profil fotoğrafını asla silmiyor.
- **İzleme listesi** öğeleri `localStorage`'da bir JSON dizisi olarak saklanıyor ve sayfa her yüklendiğinde yeniden render ediliyor.

## Kullanılan JavaScript Kavramları

Bu proje, tipik bir ilk projeden daha fazla JS kavramını bilinçli olarak içeriyor — bunlardan birçoğu bu projeyi geliştirirken öğrenilen yeni kavramlardı:

| Kavram | Ne işe yarıyor | Nerede kullanıldı |
|---|---|---|
| `localStorage` | Kullanıcı profilini, oturum durumunu ve izleme listesini sayfa yüklemeleri/ziyaretleri arasında kalıcı hale getirir | `auth.js`, `my-list.js`, `theme.js` |
| `URLSearchParams` | Doğru filmin verisini yüklemek için URL'deki query parametrelerini okur | `movie-details.js` |
| `FileReader` API | Yüklenen bir avatar görselini, sunucu olmadan saklanıp yeniden kullanılabilmesi için Base64 metnine çevirir | `auth.js` |
| Event delegation | Her tek tek elemente değil, bir üst container'a tıklama olayını dinler (örn. şifre göster/gizle ikonları) | `auth.js` |
| `classList.toggle()` | Mobil menüyü açıp kapatmak, karanlık modu uygulamak gibi işler için CSS class'larını açıp kapatır | `responsive-menu.js`, `theme.js` |
| `data-*` attribute'ları | Tür, başlık, poster yolu gibi ekstra bilgileri doğrudan HTML elementleri üzerinde saklar, JS bunları okur | `genre-filter.js`, `movies-actions.js`, `search.js` |
| `querySelector` / `querySelectorAll` | DOM'dan bir veya birden fazla elementi seçip okumak/güncellemek için kullanılır | Neredeyse her script'te kullanılıyor |
| `Array.prototype.filter()` / `.some()` | İzleme listesini türe göre filtreler, bir film eklenmeden önce zaten listede olup olmadığını kontrol eder | `my-list.js`, `movies-actions.js` |
| `Element.closest()` | Bir seçiciye uyan en yakın üst elementi bulur — bir kart içindeki butondan o filmin verisini almak için kullanılır | `movies-actions.js` |
| Yumuşak geçişli `scrollBy()` | Yatay carousel'in sol/sağ kaydırma butonlarını çalıştırır | `carousel.js` |
| Template literal'lar | Değişkenleri içine gömerek dinamik HTML metinleri (film kartları, arama sonuçları) oluşturur | `my-list.js`, `search.js` |
| `JSON.stringify()` / `JSON.parse()` | `localStorage` sadece metin sakladığı için JS objelerini metne çevirir (kaydetmek için) ve geri çevirir (okumak için) | `auth.js`, `my-list.js`, `movie-details.js` |
| Optional chaining (`?.`) | Var olmayabilecek bir özelliğe, script'i çökertmeden güvenli şekilde erişir | `search.js` |
| `encodeURIComponent()` / `decodeURIComponent()` | Özel karakterler (iki nokta, kesme işareti) içeren film başlıklarını URL üzerinden güvenli şekilde taşır | `index.html` linkleri, `movie-details.js` |

## Projeyi Çalıştırma

Kurulacak bir bağımlılık ya da build adımı yok — sadece aç:

1. Repository'yi klonla veya indir
2. `html/index.html` dosyasını doğrudan tarayıcında aç

*(Not: bazı tarayıcılar `file://` üzerinden dış kaynaklara erişimi kısıtlayabiliyor — en sorunsuz deneyim için klasörü basit bir local server ile çalıştırmak, örneğin VS Code'un "Live Server" eklentisi, önerilir.)*

## Yapılabilecek Gelecek Geliştirmeler

- Sabit `data-*` film bilgilerini gerçek bir API (örn. [TMDB](https://www.themoviedb.org/documentation/api)) ile değiştirerek canlı, güncel bir katalog oluşturmak
- Gerçek hesap güvenliği için authentication'ı gerçek bir backend'e taşımak
- Movies grid'ine sayfalama (pagination) veya sonsuz kaydırma (infinite scroll) eklemek
- Hâlâ placeholder olan sayfaları (Series, Contact, Privacy Policy, Terms of Use) tamamlamak

## Lisans & Atıf

Bu, ticari kullanım amacı taşımayan kişisel bir öğrenme projesidir. Referans verilen film başlıkları ve posterleri kendi stüdyolarına aittir ve burada yalnızca eğitim/demo amacıyla kullanılmıştır.

---

<a name="english"></a>
## English

Flixora is a Netflix-style movie discovery website built from scratch with **HTML5, CSS3, and vanilla JavaScript** — no frameworks, no backend. It was built as a **learning project** to practice real-world front-end concepts: DOM manipulation, client-side state management, responsive design, and structuring a multi-page site cleanly.

## Demo Video

https://github.com/user-attachments/assets/4fb83674-e73a-4ea3-bdb4-3a44301fac74

*(Also available locally at `assets/movie-site.mp4`)*

## Features

- **Homepage** with a cinematic hero section and horizontally scrolling movie carousels (Popular / New Releases)
- **Movies page** with a full catalog, genre filtering, and a live search modal
- **Genre filter** — dropdown-based filtering that works across the homepage and movies page
- **Movie detail pages** — dynamic content driven entirely by URL parameters (no hardcoded movie database needed)
- **My List (Watchlist)** — add/remove movies, persisted with `localStorage`
- **Account system** (client-side only) — login, edit profile with avatar upload, change password, logout
- **Dark mode** — toggleable from both the navbar and sidebar, persisted across sessions
- **Fully responsive** — hamburger navigation, adaptive grids, and touch-friendly layouts down to mobile screens

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties / variables for theming), Bootstrap 5 grid (on select pages) |
| Icons | Bootstrap Icons |
| Fonts | Google Fonts (Poppins + Inter) |
| Logic | Vanilla JavaScript (ES6+) |
| Data Persistence | Browser `localStorage` (no backend/database) |

## Project Structure

```
movie-site-last/
├── assets/
│   └── movie-site.mp4
├── css/
│   ├── components.css
│   ├── layout.css
│   ├── login.css
│   ├── responsive.css
│   └── style.css
├── docs/
│   └── readme.md
├── html/
│   ├── account.html
│   ├── change-password.html
│   ├── edit-profile.html
│   ├── index.html
│   ├── login.html
│   ├── movie-detail.html
│   ├── movies.html
│   └── my-list.html
├── images/
│   ├── arog.jpg
│   ├── backrooms.jpg
│   ├── budapeşte-hoteli.png
│   ├── cinema.png
│   ├── daredevik.jpg
│   ├── esaretin-bedeli.png
│   ├── far-from-hpme.png
│   ├── free-solo.png
│   ├── gora.jpg
│   ├── hulk.jpg
│   ├── interstellar.png
│   ├── ironman.jpg
│   ├── iyi-kotu-ve-cirkin.png
│   ├── john-wick.png
│   ├── knives-out.png
│   ├── la-la-land.png
│   ├── little-miss-sunshine.png
│   ├── mandalorian.png
│   ├── mmorales.jpg
│   ├── onslaught.png
│   ├── orumcek-adam-evreninde.png
│   ├── scary-movie.jpg
│   ├── schindler-list.png
│   ├── se7en.png
│   ├── spidey2.jpg
│   ├── the-conjuring.png
│   ├── toy-story.png
│   └── yuzuklerin-efendisi.png
└── javascript/
    ├── auth.js
    ├── carousel.js
    ├── genre-filter.js
    ├── movie-details.js
    ├── movies-actions.js
    ├── my-list.js
    ├── responsive-menu.js
    ├── search.js
    └── theme.js
```

## How It Works

Since there's no backend, Flixora leans entirely on the browser:

- **Movie data** lives directly in the HTML as `data-*` attributes (`data-genre`, `data-title`, `data-poster`) — this keeps things simple for a learning project, at the cost of not scaling to a "real" catalog size.
- **Movie detail pages** don't store movie info anywhere — the title, poster, and genre are passed as URL query parameters (`movie-detail.html?title=...&poster=...&genre=...`), so any card can link to a working detail page without a shared database.
- **User accounts** are simulated: profile info (name, email, password, avatar) is saved to `localStorage` under one key, while login/logout state is tracked separately — so logging out never wipes your saved profile picture.
- **Watchlist** items are stored as a JSON array in `localStorage` and re-rendered on page load.

## JavaScript Concepts Used

This project intentionally covers more JS than a typical first project — here's what's used and where, since several of these were new concepts while building this:

| Concept | What it does | Used in |
|---|---|---|
| `localStorage` | Persists user profile, session state, and watchlist between page loads/visits | `auth.js`, `my-list.js`, `theme.js` |
| `URLSearchParams` | Reads query parameters from the URL to load the right movie's data | `movie-details.js` |
| `FileReader` API | Converts an uploaded avatar image into a Base64 string so it can be stored and reused without a server | `auth.js` |
| Event delegation | Listens for clicks on a parent container instead of every individual element (e.g. password show/hide toggles) | `auth.js` |
| `classList.toggle()` | Switches CSS classes on/off to open/close the mobile menu, apply dark mode, etc. | `responsive-menu.js`, `theme.js` |
| `data-*` attributes | Stores extra info (genre, title, poster path) directly on HTML elements for JS to read | `genre-filter.js`, `movies-actions.js`, `search.js` |
| `querySelector` / `querySelectorAll` | Selects one or many elements from the DOM to read or update | Used across nearly every script |
| `Array.prototype.filter()` / `.some()` | Filters the watchlist by genre, checks for duplicate entries before adding a movie | `my-list.js`, `movies-actions.js` |
| `Element.closest()` | Finds the nearest parent element matching a selector — used to get a movie's data from a button nested inside a card | `movies-actions.js` |
| `scrollBy()` with smooth behavior | Powers the horizontal carousel's left/right scroll buttons | `carousel.js` |
| Template literals | Builds dynamic HTML strings (movie cards, search results) cleanly with embedded variables | `my-list.js`, `search.js` |
| `JSON.stringify()` / `JSON.parse()` | Converts JS objects to strings (to store) and back (to read) since `localStorage` only holds strings | `auth.js`, `my-list.js`, `movie-details.js` |
| Optional chaining (`?.`) | Safely accesses a property that might not exist, without crashing the script | `search.js` |
| `encodeURIComponent()` / `decodeURIComponent()` | Safely passes movie titles with special characters (colons, apostrophes) through URLs | `index.html` links, `movie-details.js` |

## Running the Project

No build step, no dependencies to install — just open it:

1. Clone or download the repository
2. Open `html/index.html` directly in your browser

*(Note: some browsers restrict certain features like `file://` access to external resources — for the smoothest experience, serving the folder with a simple local server, e.g. the VS Code "Live Server" extension, is recommended.)*

## Possible Future Improvements

- Replace static `data-*` movie info with a real API (e.g. [TMDB](https://www.themoviedb.org/documentation/api)) for a live, up-to-date catalog
- Move authentication to a real backend for actual account security
- Add pagination or infinite scroll to the movies grid
- Build out the still-placeholder pages (Series, Contact, Privacy Policy, Terms of Use)

## License & Attribution

This is a personal learning project, not intended for commercial use. Movie titles and posters referenced belong to their respective studios and are used here for educational/demo purposes only.
