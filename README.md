# asmodeliy.github.io

이상원 포트폴리오 + 코딩 로그. Jekyll + GitHub Pages.

## 글 추가

`_posts/YYYY-MM-DD-slug.md` 파일 생성 → 커밋 → 푸시. 1~2분 내 자동 반영.

```markdown
---
layout: post
title: "글 제목"
tags: [tag1, tag2]
---

본문 (마크다운)
```

## 구조

- `_config.yml` — 사이트 설정
- - `_layouts/` — default(공통), post(글)
  - - `_posts/` — 코딩 로그
    - - `log/` — 로그 목록 페이지
      - - `assets/` — CSS, GitHub API 연동 JS
       
        - ## 커스텀 도메인 (선택)
       
        - `asmodeliy.is-a.dev`: https://github.com/is-a-dev/register 에 `domains/asmodeliy.json` PR → 머지 후 Settings > Pages > Custom domain 설정.
