
    $(document).ready(function () {
        var owl = $("#banner").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: true,
            onInitialized: function () {
                // Create custom dots
                var dotsCount = this.items().length;
                var dotsContainer = $(".custom-owl-dots");
                for (var i = 0; i < dotsCount; i++) {
                    $("<div class='custom-owl-dot'></div>").appendTo(dotsContainer);
                }
                // Set the first dot as active
                dotsContainer.find(".custom-owl-dot:first-child").addClass("active");
            },
            onTranslated: function (event) {
                // Update custom dots when the carousel changes
                var currentIndex = event.item.index;
                $(".custom-owl-dot").removeClass("active");
                $(".custom-owl-dot").eq(currentIndex).addClass("active");
            }
        });

        // Handle custom dot click events
        $(".custom-owl-dot").click(function () {
            var dotIndex = $(this).index();
            owl.trigger('to.owl.carousel', [dotIndex, 300]);
        });
    });

    var clothingCards = document.getElementById("clothingCards");
    var accessoriesCards = document.getElementById("accessoriesCards");
    
    function createItemCard(id, preview, name, brand, price) {
        var cardElement = document.createElement("div");
        cardElement.setAttribute("class","card");
        cardElement.setAttribute("id",id);


        var cardLink = document.createElement("a");
        cardLink.href = "productdetails.html?product_id=" + id;

        var imgContainer = document.createElement("div");
        imgContainer.setAttribute("class", "img");

        var newImgElement = document.createElement("img");
        newImgElement.src = preview;

        imgContainer.appendChild(newImgElement);

        var details = document.createElement("div")
        details.setAttribute("class", "details");

        var newTitleElement = document.createElement("h3");
        var newName = document.createTextNode(name);

        newTitleElement.appendChild(newName);
        details.appendChild(newTitleElement);

        newBrandElement = document.createElement("h4");
        var newBrand = document.createTextNode(brand);

        newBrandElement.appendChild(newBrand);
        details.appendChild(newBrandElement);

        var newPriceElement = document.createElement("h5");
        var newPriceText = document.createTextNode("Rs");
        var newPrice = document.createTextNode(price);
        newPriceElement.appendChild(newPriceText);


        newPriceElement.appendChild(newPrice);
        details.appendChild(newPriceElement);

        cardLink.appendChild(imgContainer);
        cardLink.appendChild(details);

        cardElement.appendChild(cardLink);
        return cardElement;

        

    }



