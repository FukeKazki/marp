import { slides, type SlideEntry } from "./slides.generated";

const grid = document.getElementById("grid") as HTMLUListElement | null;

if (!grid) {
  throw new Error("required DOM nodes are missing");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cardMarkup(entry: SlideEntry): string {
  const desc = entry.description
    ? `<p class="card__desc">${escapeHtml(entry.description)}</p>`
    : "";
  return `
    <li>
      <a class="card" href="${escapeHtml(entry.href)}">
        <div class="card__head">
          <span class="card__slug">// ${escapeHtml(entry.slug)}</span>
          <span class="card__date">${escapeHtml(entry.updatedAt)}</span>
        </div>
        <h2 class="card__title">${escapeHtml(entry.title)}</h2>
        ${desc}
        <div class="card__footer">
          <span>open slide</span>
          <span class="card__arrow" aria-hidden="true">→</span>
        </div>
      </a>
    </li>
  `;
}

function render(list: SlideEntry[]): void {
  grid!.innerHTML = list.map(cardMarkup).join("");
}

render(slides);
