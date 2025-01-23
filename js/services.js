const servicesContainer = document.getElementById("servicesGrid");
fetch("../db/services.json")
  .then((response) => response.json())
  .then((services) => {
    services.forEach((service) => {
      const serviceCard = `
        <article class="service-card">
          <div class="service-card__icon">
            <img src="../assets/icons/services/${service.icon}" alt="${service.alt}" />
          </div>
          <h3 class="service-card__title">${service.title}</h3>
          <p class="service-card__description">${service.description}</p>
          <a href="detail.html?id=${service["data-id"]}" class="service-card__button">Read More</a>
        </article>
      `;
      servicesContainer.innerHTML += serviceCard;
    });
  })
  .catch((error) => console.error("JSON yüklənmədi:", error));
