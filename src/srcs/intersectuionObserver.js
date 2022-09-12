const callback = (entries) => {
    entries.forEach((element) => {
        if (element.isIntersecting) {
            const url = element.target.getAttribute("url-img");
            element.target.setAttribute("src", url);
            element.target.classList.remove("inactive-product--card");
            // console.log('observado');
            // observer.unobserve(element.target);
        }
    });
};

export let observer = new IntersectionObserver(callback, {
  threshold: .2
});
