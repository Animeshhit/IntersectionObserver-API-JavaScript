const obserberToFade = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

const obserberToTransForm = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

const ContentToBeFade = document.querySelectorAll("[data-fade]");
const ContentToBeTransForm = document.querySelectorAll("[data-transform]");

ContentToBeFade.forEach((content) => {
  obserberToFade.observe(content);
});

ContentToBeTransForm.forEach((content) => {
  obserberToTransForm.observe(content);
});
