const listing = "https://yandex.ru/maps/org/avtotekhprofi/210710236477/";
const destinations = {
  org: listing,
  route: "https://yandex.ru/maps/?rtext=~56.266742%2C44.092783&rtt=auto",
  reviews: listing + "reviews/",
  gallery: listing + "gallery/",
  panorama: listing + "panorama/"
};

for (const link of document.querySelectorAll("[data-map]")) {
  link.href = destinations[link.dataset.map];
  link.target = "_blank";
  link.rel = "noopener";
}

const photos = [["photo-1","Вывеска у дороги"],["photo-3","Обслуживание кондиционера"],["photo-4","Здание со стороны Магистральной улицы"],["photo-5","Подъезд к ремонтной зоне"],["photo-6","Автомобиль на подъёмнике"],["photo-7","Стенд для регулировки углов установки колёс"],["photo-8","Шиномонтажное оборудование"],["photo-9","Обработка днища автомобиля"]];
const gallery = document.querySelector("#gallery");
const viewer = document.querySelector("#viewer");
const large = document.querySelector("#large");
for (const [file, description] of photos) {
  const image = new Image();
  image.src = "assets/" + file + ".jpg";
  image.alt = description;
  image.loading = "lazy";
  const button = document.createElement("button");
  button.type = "button";
  button.append(image);
  button.addEventListener("click", () => {
    large.src = image.src;
    large.alt = description;
    viewer.showModal();
  });
  gallery.append(button);
}
document.querySelector("#close").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", event => {
  if (event.target === viewer) viewer.close();
});


