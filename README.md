# 5~6주차 미션 - Next-Netflix

## Team 프로메사

👨‍💻 권동욱
👩‍💻 김서연

## Pages

    src/app
        (public)
            page.tsx    # Landing page
        (routes)
            home/page.tsx   # Home page
            search/page.tsx # Search page
            detail/[productId]/page.tsx # Product detail page
            comming-soon,downloads,more/page.tsx    # Not implemented pages

## API

| GET                           | Page | Section                   |
| ----------------------------- | ---- | ------------------------- |
| getThumbnailProduct           | home | Thumbnail                 |
| getPopularProducts            | home | Previews                  |
| getTrendingTodayTop10Products | home | Top 10 in Worldwide Today |
| getKoreanMovies               | home | Korean Movies             |
| getNetflixOriginalTVShows     | home | Netflix Originals         |
| getNewReleaseProducts         | home | New Releases              |
| getMysteryTVShows             | home | TV Mysteries              |
| getKoreanTVShows              | home | KR TV Shows               |

## Usage

    https://next-netflix-21th-promesa.vercel.app/
