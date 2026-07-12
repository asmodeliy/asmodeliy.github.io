// public repo auto list (GitHub REST API)
(async () => {
    const el = document.getElementById('gh-live');
    if (!el) return;
    try {
          const res = await fetch('https://api.github.com/users/asmodeliy/repos?sort=updated&per_page=12');
          if (!res.ok) throw new Error(res.status);
          const repos = (await res.json()).filter(r => !r.fork);
          if (!repos.length) {
                  el.innerHTML = '<div class="empty">No public repositories yet.</div>';
                  return;
          }
          el.innerHTML = '<div class="repo-grid">' + repos.map(r => `
                <a class="repo" href="${r.html_url}">
                        <h3>${r.name} <span class="badge">public</span></h3>
                                <p>${r.description ? r.description.replace(/</g, '&lt;') : '-'}</p>
                                        <div class="meta">
                                                  <span>${r.language ?? '-'}</span>
                                                            <span>* ${r.stargazers_count}</span>
                                                                      <span>updated ${r.updated_at.slice(0, 10)}</span>
                                                                              </div>
                                                                                    </a>`).join('') + '</div>';
    } catch {
          el.innerHTML = '<div class="empty"><a href="https://github.com/asmodeliy?tab=repositories">View repositories on GitHub</a></div>';
    }
})();개자동목록인증불필요아직공개저장소가없습니다설명없음—★를불러오지못했습니다저장소목록보기→
