const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const detailPageCards = document.getElementById("detailPage-cards");
detailPageCards.innerHTML = "";

fetch("../db/detail.json")
  .then((response) => response.json())
  .then((data) => {
    const cardDetail = data.find((item) => item.id == id);
    if (!cardDetail) {
      detailPageCards.innerHTML = `<p class="error-message">Seçdiyiniz məlumat tapılmadı.</p>`;
      return;
    }

    document.querySelector("#detailPage-main-title").textContent = cardDetail.title;
    document.querySelector("#detailPage-main__content-description").textContent = cardDetail.intro;

    cardDetail.cards.forEach((card) => {
      const cardSection = createCard(card);
      detailPageCards.appendChild(cardSection);
    });
  })
  .catch((error) => {
    console.error("Xəta baş verdi:", error);
    detailPageCards.innerHTML = `<p class="error-message">Məlumat yüklənərkən xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.</p>`;
  });

function createCard(card) {
  const cardSection = document.createElement("article");
  cardSection.classList.add("detailPage-card");

  let listContent = "";
  if (Array.isArray(card.list)) {
    listContent = `<ul>`;
    card.list.forEach((item) => {
      listContent += `
        <li>
          <span class="list-title">${item.title}</span>
          <span>${item.text}</span>
        </li>
      `;
    });
    listContent += `</ul>`;
  }

  cardSection.innerHTML = `
    <h3 class="detailPage-card__title">${card.title}</h3>
    <p class="detailPage-card__description">${card.content}</p>
    ${listContent}
  `;
  return cardSection;
}
