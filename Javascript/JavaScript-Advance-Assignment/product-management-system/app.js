let products = [
  {
    productId: 1,
    name: "Smartphone",
    description:
      "The latest smartphone with high-end features and a stunning display.",
    image: "https://picsum.photos/id/1/200/300",
    category: "Electronics",
    price: 1000,
    rating: 4.2,
    manufacturer: "Samsung",
    stock: 50,
  },
  {
    productId: 2,
    name: "Running Shoes",
    description:
      "Comfortable and durable running shoes for all your fitness needs.",
    image: "https://picsum.photos/id/2/200/300",
    category: "Footwear",
    price: 80,
    rating: 4.8,
    manufacturer: "Nike",
    stock: 100,
  },
  {
    productId: 3,
    name: "Laptop",
    description:
      "Fantastic gaming laptop with 16 GB RAM, HD display, and 1TB hard drive.",
    image: "https://picsum.photos/id/3/200/300",
    category: "Electronics",
    price: 74000,
    rating: 3.5,
    manufacturer: "Asus",
    stock: 75,
  },
  {
    productId: 4,
    name: "Coffee Maker",
    description: "Brew your favorite coffee with this advanced coffee maker.",
    image: "https://picsum.photos/id/4/200/300",
    category: "Appliances",
    price: 120,
    rating: 4.0,
    manufacturer: "Breville",
    stock: 30,
  },
  {
    productId: 5,
    name: "Digital Camera",
    description:
      "Capture stunning moments with this high-resolution digital camera.",
    image: "https://picsum.photos/id/5/200/300",
    category: "Electronics",
    price: 600,
    rating: 4.5,
    manufacturer: "Canon",
    stock: 20,
  },
  {
    productId: 6,
    name: "Leather Wallet",
    description: "Elegant and durable leather wallet for your everyday use.",
    image: "https://picsum.photos/id/6/200/300",
    category: "Fashion",
    price: 50,
    rating: 4.0,
    manufacturer: "Fossil",
    stock: 80,
  },
  {
    productId: 7,
    name: "Desk Chair",
    description: "Comfortable and ergonomic desk chair for your home office.",
    image: "https://picsum.photos/id/7/200/300",
    category: "Furniture",
    price: 150,
    rating: 4.3,
    manufacturer: "IKEA",
    stock: 35,
  },
  {
    productId: 8,
    name: "Bluetooth Headphones",
    description:
      "Enjoy wireless music with these high-quality Bluetooth headphones.",
    image: "https://picsum.photos/id/8/200/300",
    category: "Electronics",
    price: 120,
    rating: 4.8,
    manufacturer: "Sony",
    stock: 60,
  },
  {
    productId: 9,
    name: "Gaming Console",
    description: "Immerse yourself in gaming with the latest gaming console.",
    image: "https://picsum.photos/id/9/200/300",
    category: "Electronics",
    price: 400,
    rating: 4.6,
    manufacturer: "Microsoft",
    stock: 25,
  },
  {
    productId: 10,
    name: "Fitness Tracker",
    description:
      "Monitor your fitness goals with this advanced fitness tracker.",
    image: "https://picsum.photos/id/10/200/300",
    category: "Electronics",
    price: 80,
    rating: 4.2,
    manufacturer: "Fitbit",
    stock: 70,
  },
  {
    productId: 11,
    name: "LED Smart TV",
    description:
      "Experience cinematic entertainment with this large LED smart TV.",
    image: "https://picsum.photos/id/11/200/300",
    category: "Electronics",
    price: 1200,
    rating: 4.7,
    manufacturer: "LG",
    stock: 15,
  },
  {
    productId: 12,
    name: "Backpack",
    description: "Spacious and stylish backpack for your daily adventures.",
    image: "https://picsum.photos/id/12/200/300",
    category: "Fashion",
    price: 70,
    rating: 4.0,
    manufacturer: "The North Face",
    stock: 50,
  },
  {
    productId: 13,
    name: "Coffee Table",
    description:
      "Add elegance to your living room with this modern coffee table.",
    image: "https://picsum.photos/id/13/200/300",
    category: "Furniture",
    price: 200,
    rating: 4.5,
    manufacturer: "Wayfair",
    stock: 40,
  },
  {
    productId: 14,
    name: "Air Purifier",
    description:
      "Ensure clean air with this efficient and compact air purifier.",
    image: "https://picsum.photos/id/14/200/300",
    category: "Appliances",
    price: 150,
    rating: 4.3,
    manufacturer: "Dyson",
    stock: 30,
  },
  {
    productId: 15,
    name: "Smart Watch",
    description: "Stay connected with this feature-packed smartwatch.",
    image: "https://picsum.photos/id/15/200/300",
    category: "Electronics",
    price: 180,
    rating: 4.6,
    manufacturer: "Apple",
    stock: 20,
  },
  {
    productId: 16,
    name: "Sunglasses",
    description:
      "Protect your eyes with these trendy and UV-resistant sunglasses.",
    image: "https://picsum.photos/id/16/200/300",
    category: "Fashion",
    price: 60,
    rating: 4.2,
    manufacturer: "Ray-Ban",
    stock: 65,
  },
  {
    productId: 17,
    name: "Home Theater System",
    description:
      "Upgrade your home entertainment with this powerful home theater system.",
    image: "https://picsum.photos/id/17/200/300",
    category: "Electronics",
    price: 500,
    rating: 4.8,
    manufacturer: "Bose",
    stock: 25,
  },
  {
    productId: 18,
    name: "Travel Mug",
    description:
      "Keep your beverages hot or cold with this insulated travel mug.",
    image: "https://picsum.photos/id/18/200/300",
    category: "Kitchen",
    price: 25,
    rating: 4.0,
    manufacturer: "Contigo",
    stock: 90,
  },
  {
    productId: 19,
    name: "Desk Lamp",
    description:
      "Illuminate your workspace with this adjustable and energy-efficient desk lamp.",
    image: "https://picsum.photos/id/19/200/300",
    category: "Home Decor",
    price: 40,
    rating: 4.5,
    manufacturer: "IKEA",
    stock: 35,
  },
  {
    productId: 20,
    name: "Cordless Drill",
    description:
      "Tackle DIY projects with ease using this powerful cordless drill.",
    image: "https://picsum.photos/id/20/200/300",
    category: "Tools",
    price: 90,
    rating: 4.3,
    manufacturer: "DeWalt",
    stock: 60,
  },
  {
    productId: 21,
    name: "Wireless Mouse",
    description:
      "Enhance your computer setup with this ergonomic wireless mouse.",
    image: "https://picsum.photos/id/21/200/300",
    category: "Electronics",
    price: 35,
    rating: 4.2,
    manufacturer: "Logitech",
    stock: 80,
  },
  {
    productId: 22,
    name: "Yoga Mat",
    description:
      "Achieve fitness goals with this non-slip and comfortable yoga mat.",
    image: "https://picsum.photos/id/22/200/300",
    category: "Fitness",
    price: 20,
    rating: 4.5,
    manufacturer: "Liforme",
    stock: 70,
  },
  {
    productId: 23,
    name: "Blender",
    description:
      "Prepare smoothies and shakes with this powerful and versatile blender.",
    image: "https://picsum.photos/id/23/200/300",
    category: "Kitchen",
    price: 80,
    rating: 4.0,
    manufacturer: "Vitamix",
    stock: 45,
  },
  {
    productId: 24,
    name: "Sunscreen SPF 50",
    description:
      "Protect your skin from harmful rays with this high SPF sunscreen.",
    image: "https://picsum.photos/id/24/200/300",
    category: "Beauty",
    price: 15,
    rating: 4.7,
    manufacturer: "Neutrogena",
    stock: 100,
  },
  {
    productId: 25,
    name: "Hiking Backpack",
    description:
      "Explore the outdoors with this durable and spacious hiking backpack.",
    image: "https://picsum.photos/id/25/200/300",
    category: "Outdoor",
    price: 120,
    rating: 4.5,
    manufacturer: "Osprey",
    stock: 30,
  },
  {
    productId: 26,
    name: "Portable Bluetooth Speaker",
    description:
      "Enjoy music on the go with this compact and wireless Bluetooth speaker.",
    image: "https://picsum.photos/id/26/200/300",
    category: "Electronics",
    price: 50,
    rating: 4.3,
    manufacturer: "JBL",
    stock: 60,
  },

  {
    productId: 27,
    name: "Kitchen Knife Set",
    description:
      "Upgrade your kitchen with this high-quality and sharp knife set.",
    image: "https://picsum.photos/id/27/200/300",
    category: "Kitchen",
    price: 100,
    rating: 4.8,
    manufacturer: "Wusthof",
    stock: 25,
  },
  {
    productId: 28,
    name: "Potted Plant",
    description:
      "Bring nature indoors with this beautiful and easy-to-care-for potted plant.",
    image: "https://picsum.photos/id/28/200/300",
    category: "Home Decor",
    price: 30,
    rating: 4.2,
    manufacturer: "The Sill",
    stock: 90,
  },
  {
    productId: 29,
    name: "Wireless Earbuds",
    description:
      "Immerse yourself in music with these comfortable and wireless earbuds.",
    image: "https://picsum.photos/id/29/200/300",
    category: "Electronics",
    price: 60,
    rating: 4.6,
    manufacturer: "Apple",
    stock: 40,
  },
  {
    productId: 30,
    name: "Rice Cooker",
    description:
      "Simplify cooking with this efficient and easy-to-use rice cooker.",
    image: "https://picsum.photos/id/30/200/300",
    category: "Kitchen",
    price: 70,
    rating: 4.0,
    manufacturer: "Zojirushi",
    stock: 50,
  },
];

const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const searchBtn = document.querySelector(".bx-search");
const table = document.querySelector("table");
const sortbyRadios = document.querySelectorAll('input[name="sortby"]');
const manufacturerRadios = document.querySelectorAll(
  'input[name="manufacturer"]'
);
const ratingRadios = document.querySelectorAll('input[name="rating"]');

let currentPage = 1;
const pageSize = 5;

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

function getUniqueProductCategories() {
  return [...new Set(products.map((product) => product.category))];
}

function loadUniqueCategories() {
  const uniqueCategories = getUniqueProductCategories();

  const selectedElements = document.getElementsByClassName("product-category");

  for (let i = 0; i < selectedElements.length; i++) {
    uniqueCategories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      selectedElements[i].appendChild(option);
    });
  }
}

loadUniqueCategories();

sortbyRadios.forEach(function (radio) {
  radio.addEventListener("change", function () {
    let selectedSortby = this.value;
    currentPage = 1;

    let sortedProducts = [];
    if (selectedSortby === "price-low-high") {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (selectedSortby === "price-high-low") {
      sortedProducts = [...products].sort((a, b) => b.price - a.price);
    } else if (selectedSortby === "stock-low-high") {
      sortedProducts = [...products].sort((a, b) => a.stock - b.stock);
    } else if (selectedSortby === "stock-high-low") {
      sortedProducts = [...products].sort((a, b) => b.stock - a.stock);
    } else {
      sortedProducts = [...products];
    }

    const searchInput = document.getElementById("search-text");
    sortedProducts = sortedProducts.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(searchInput.value.toLowerCase());
    });

    removeAllPaginationButtons();
    loadPaginationButtons(sortedProducts);
    removeTableAllRows();
    addRows(sortedProducts.slice(0, pageSize));
    addEventListenerToTextButtons(sortedProducts);
    reinitializeModals();
  });
});

function addRows(productsToDisplay) {
  productsToDisplay.forEach((product) => {
    const tr = document.createElement("tr");
    tr.className = "product-row";
    tr.innerHTML = `
      <td class="product-info">
        <div class="product-avatar">
        <img src='${product.image}'/>
        </div>
        <div class="product-content">
          <div>${product.name}</div>
          <div class="product-desc">${product.description}</div>
        </div>
      </td>
      <td>${product.category}</td>
      <td>${product.manufacturer}</td>
      <td>${product.price}</td>
      <td>${product.rating}</td>
      <td>${product.stock}</td>
      <td class="hidden">${product.productId}</td>
      <td class="action-row">
          <button class="edit-btn" data-modal-target="#edit-modal">
            <i class="bx bx-edit"></i>
          </button>
          <button class="delete-btn" data-modal-target="#delete-modal">
            <i class="bx bx-trash"></i>
          </button>
      </td>
    `;
    table.appendChild(tr);
  });
}

function removeAllPaginationButtons() {
  const parent = document.getElementById("pagination-text-btn-group");

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  const paginationBar = document.querySelector(".pagination-bar");
  paginationBar.removeChild(paginationBar.firstChild);
  paginationBar.removeChild(paginationBar.lastChild);
}

function removeTableAllRows() {
  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

function loadPaginationButtons(products) {
  const length = products.length;

  let totalButtons = Math.floor(length / pageSize);

  if (length % pageSize !== 0) {
    totalButtons += 1;
  }

  const parent = document.getElementById("pagination-text-btn-group");

  for (let i = 1; i <= totalButtons; i++) {
    const button = document.createElement("div");
    if (i === currentPage) {
      button.className = "text-btn active";
    } else {
      button.className = "text-btn";
    }
    button.textContent = `${i}`;
    parent.appendChild(button);
  }

  const paginationBar = document.querySelector(".pagination-bar");

  const prevButton = document.createElement("div");
  prevButton.className = "prev-btn";
  const leftIcon = document.createElement("i");
  leftIcon.className = "bx bx-chevron-left";
  prevButton.appendChild(leftIcon);

  const nextButton = document.createElement("div");
  nextButton.className = "next-btn";
  const rightIcon = document.createElement("i");
  rightIcon.className = "bx bx-chevron-right";
  nextButton.appendChild(rightIcon);
  paginationBar.prepend(prevButton);
  paginationBar.appendChild(nextButton);

  prevButton.addEventListener("click", () => {
    handlePrevButton(products);
  });

  nextButton.addEventListener("click", () => {
    handleNextButton(products);
  });

  addRows(products.slice(0, pageSize));
  const textButtons = document.querySelectorAll(".text-btn");
  validateFirstOrLastButton(textButtons.length);
}

loadPaginationButtons(products);

function addEventListenerToTextButtons(products) {
  const textButtons = document.querySelectorAll(".text-btn");
  textButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      textButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      btn.classList.add("active");
      currentPage = Number(btn.textContent);

      removeTableAllRows();

      const productsToDisplay = products.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      );

      addRows(productsToDisplay);
      reinitializeModals();
      validateFirstOrLastButton(textButtons.length);
    });
  });
}

addEventListenerToTextButtons(products);

function handlePrevButton(products) {
  const textButtons = document.querySelectorAll(".text-btn");
  if (currentPage > 1) {
    currentPage -= 1;
    textButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    removeTableAllRows();

    const productsToDisplay = products.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    addRows(productsToDisplay);

    textButtons[currentPage - 1].classList.add("active");
    reinitializeModals();
  }
  validateFirstOrLastButton(textButtons.length);
}

function handleNextButton(products) {
  const textButtons = document.querySelectorAll(".text-btn");
  if (currentPage < textButtons.length) {
    currentPage += 1;
    textButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    removeTableAllRows();

    const productsToDisplay = products.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    addRows(productsToDisplay);

    textButtons[currentPage - 1].classList.add("active");
    reinitializeModals();
  }
  validateFirstOrLastButton(textButtons.length);
}

function validateFirstOrLastButton(textButtonsLength) {
  if (textButtonsLength === 0) {
    document.querySelector(".next-btn").classList.add("disabled");
    document.querySelector(".prev-btn").classList.add("disabled");
  } else {
    if (currentPage === textButtonsLength) {
      document.querySelector(".next-btn").classList.add("disabled");
    } else {
      document.querySelector(".next-btn").classList.remove("disabled");
    }
    if (currentPage === 1) {
      document.querySelector(".prev-btn").classList.add("disabled");
    } else {
      document.querySelector(".prev-btn").classList.remove("disabled");
    }
  }
}

const searchInput = document.getElementById("search-text");

searchInput.addEventListener("input", () => {
  let searchedProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  let checkedValue = document.querySelector('input[name="sortby"]:checked');

  if (checkedValue) {
    const selectedSortby = checkedValue.value;
    if (selectedSortby === "price-low-high") {
      searchedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSortby === "price-high-low") {
      searchedProducts.sort((a, b) => b.price - a.price);
    } else if (selectedSortby === "stock-low-high") {
      searchedProducts.sort((a, b) => a.stock - b.stock);
    } else if (selectedSortby === "stock-high-low") {
      searchedProducts.sort((a, b) => b.stock - a.stock);
    }
  }

  const productsToDisplay = searchedProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  removeAllPaginationButtons();
  loadPaginationButtons(searchedProducts);
  removeTableAllRows();
  addRows(productsToDisplay);
  addEventListenerToTextButtons(searchedProducts);
  reinitializeModals();

  if (searchedProducts.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML =
      "<td colspan='7' style='text-align: center;'><p style='margin: 20px;fontweight: 700;'>No Items Found!</p></td>";
    table.appendChild(tr);
  } else {
    const firstRow = table.firstElementChild;
    if (firstRow && firstRow.textContent.trim() === "No Item Found!") {
      table.deleteRow(0);
    }
  }
});

function initializeModals() {
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      if (button.dataset.modalTarget === "#edit-modal") {
        const selectedRow = button.parentElement.parentElement;
        document.querySelector("#edit-modal #product-name").value =
          selectedRow.cells[0].querySelector(
            ".product-content > div"
          ).textContent;

        document.querySelector("#edit-modal #product-description").value =
          selectedRow.cells[0].querySelector(
            ".product-content .product-desc"
          ).textContent;

        document.getElementById("edit-product-category").value =
          selectedRow.cells[1].textContent;

        document.querySelector("#edit-modal #product-image").value =
          selectedRow.cells[0].getElementsByTagName("img")[0].src;

        document.querySelector("#edit-modal #product-manufacturer").value =
          selectedRow.cells[2].textContent;

        document.querySelector("#edit-modal #product-price").value =
          selectedRow.cells[3].textContent;
        document.querySelector("#edit-modal #product-stock").value =
          selectedRow.cells[5].textContent;
        document.querySelector("#edit-modal #product-rating").value =
          selectedRow.cells[4].textContent;

        const selectedProductId = selectedRow.cells[6].textContent;
        document.querySelector("#edit-product-id").textContent =
          selectedProductId;

        openModal(modal);
      } else if (button.dataset.modalTarget === "#delete-modal") {
        const selectedRow = button.parentElement.parentElement;
        const selectedProductId = selectedRow.cells[6].textContent;
        document.querySelector("#delete-product-id").textContent =
          selectedProductId;

        openModal(modal);
      } else if (button.dataset.modalTarget === "#add-modal") {
        clearAddFormData();
        openModal(modal);
      }
    });
  });

  function clearAddFormData() {
    document.getElementById("product-name").value = "";
    document.getElementById("product-manufacturer").value = "";
    document.getElementById("product-description").value = "";
    document.getElementById("product-image").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-stock").value = "";
    document.getElementById("product-rating").value = "";
  }

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".add-modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".add-modal");
      if (button.textContent === "Add") {
        const name = document.getElementById("product-name").value;
        const manufacturer = document.getElementById(
          "product-manufacturer"
        ).value;
        const description = document.getElementById(
          "product-description"
        ).value;
        const image = document.getElementById("product-image").value;
        const price = document.getElementById("product-price").value;
        const stock = document.getElementById("product-stock").value;
        const rating = document.getElementById("product-rating").value;
        const category = document.getElementById("add-product-category").value;
        const errElement = document.querySelector("#add-modal .err");

        let product = {
          name: name,
          manufacturer: manufacturer,
          description: description,
          image: image,
          price: price,
          stock: stock,
          rating: rating,
          category: category,
        };

        const validationErrors = verifyProductDetails(product);

        let isProductExist = products.some((product) => product.name === name);

        if (isProductExist) {
          validationErrors.push("- Product with same name already exists.");
        }

        if (validationErrors.length === 0) {
          errElement.textContent = "";
          errElement.style.display = "none";
          addProduct(product);
          closeModal(modal);
        } else {
          errElement.innerHTML = validationErrors.join("<br>");
          errElement.style.display = "block";
        }
      } else if (button.textContent === "Delete") {
        const selectedProductId =
          document.querySelector("#delete-product-id").textContent;
        deleteProduct(selectedProductId);
        closeModal(modal);
      } else if (button.textContent === "Edit") {
        const selectedProductId =
          document.querySelector("#edit-product-id").textContent;
        const name = document.querySelector("#edit-modal #product-name").value;
        const errElement = document.querySelector("#edit-modal .err");
        const description = document.querySelector(
          "#edit-modal #product-description"
        ).value;
        const category = document.getElementById("edit-product-category").value;
        const image = document.querySelector(
          "#edit-modal #product-image"
        ).value;
        const manufacturer = document.querySelector(
          "#edit-modal #product-manufacturer"
        ).value;
        const price = document.querySelector(
          "#edit-modal #product-price"
        ).value;
        const stock = document.querySelector(
          "#edit-modal #product-stock"
        ).value;
        const rating = document.querySelector(
          "#edit-modal #product-rating"
        ).value;

        const product = {
          name,
          manufacturer,
          description,
          image,
          price,
          stock,
          rating,
        };

        const validationErrors = verifyProductDetails(product);

        if (validationErrors.length === 0) {
          errElement.textContent = "";
          errElement.style.display = "none";
          editProduct(selectedProductId, { ...product, category });
          closeModal(modal);
        } else {
          errElement.innerHTML = validationErrors.join("<br>");
          errElement.style.display = "block";
        }
      } else {
        const addErr = document.querySelector("#add-modal .err");
        const editErr = document.querySelector("#edit-modal .err");
        addErr.textContent = "";
        addErr.style.display = "none";
        editErr.textContent = "";
        editErr.style.display = "none";
        closeModal(modal);
      }
    });
  });
}

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

initializeModals();

function reinitializeModals() {
  const openModalButtons = document.querySelectorAll("[data-modal-target]");

  openModalButtons.forEach((button) => {
    const modal = document.querySelector(button.dataset.modalTarget);
    if (button.dataset.modalTarget === "#edit-modal") {
      button.addEventListener("click", () => {
        const selectedRow = button.parentElement.parentElement;
        document.querySelector("#edit-modal #product-name").value =
          selectedRow.cells[0].querySelector(
            ".product-content > div"
          ).textContent;

        document.querySelector("#edit-modal #product-description").value =
          selectedRow.cells[0].querySelector(
            ".product-content .product-desc"
          ).textContent;

        document.getElementById("edit-product-category").value =
          selectedRow.cells[1].textContent;

        document.querySelector("#edit-modal #product-image").value =
          selectedRow.cells[0].getElementsByTagName("img")[0].src;

        document.querySelector("#edit-modal #product-manufacturer").value =
          selectedRow.cells[2].textContent;

        document.querySelector("#edit-modal #product-price").value =
          selectedRow.cells[3].textContent;
        document.querySelector("#edit-modal #product-stock").value =
          selectedRow.cells[5].textContent;
        document.querySelector("#edit-modal #product-rating").value =
          selectedRow.cells[4].textContent;

        const selectedProductId = selectedRow.cells[6].textContent;
        document.querySelector("#edit-product-id").textContent =
          selectedProductId;

        openModal(modal);
      });
    } else if (button.dataset.modalTarget === "#delete-modal") {
      button.addEventListener("click", () => {
        const selectedRow = button.parentElement.parentElement;
        const selectedProductId = selectedRow.cells[6].textContent;
        document.querySelector("#delete-product-id").textContent =
          selectedProductId;

        openModal(modal);
      });
    }
  });
}

function addProduct(product) {
  product.productId = products.length + 1;
  products.unshift(product);
  let checkedValue = document.querySelector('input[name="sortby"]:checked');

  let newProducts = [];

  if (checkedValue) {
    const selectedSortby = checkedValue.value;
    if (selectedSortby === "price-low-high") {
      newProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (selectedSortby === "price-high-low") {
      newProducts = [...products].sort((a, b) => b.price - a.price);
    } else if (selectedSortby === "stock-low-high") {
      newProducts = [...products].sort((a, b) => a.stock - b.stock);
    } else if (selectedSortby === "stock-high-low") {
      newProducts = [...products].sort((a, b) => b.stock - a.stock);
    } else {
      newProducts = [...products];
    }
  }

  const searchInput = document.getElementById("search-text");
  let searchedProducts = newProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });

  const productsToDisplay = searchedProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  removeAllPaginationButtons();
  loadPaginationButtons(searchedProducts);
  removeTableAllRows();
  addRows(productsToDisplay);
  addEventListenerToTextButtons(searchedProducts);
  reinitializeModals();
}

function editProduct(id, editedProduct) {
  const index = products.findIndex(
    (product) => product.productId === Number(id)
  );
  products[index] = {
    productId: Number(id),
    ...editedProduct,
  };
  let checkedValue = document.querySelector('input[name="sortby"]:checked');
  let newProducts = [];

  if (checkedValue) {
    const selectedSortby = checkedValue.value;
    if (selectedSortby === "price-low-high") {
      newProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (selectedSortby === "price-high-low") {
      newProducts = [...products].sort((a, b) => b.price - a.price);
    } else if (selectedSortby === "stock-low-high") {
      newProducts = [...products].sort((a, b) => a.stock - b.stock);
    } else if (selectedSortby === "stock-high-low") {
      newProducts = [...products].sort((a, b) => b.stock - a.stock);
    } else {
      newProducts = [...products];
    }
  }
  const searchInput = document.getElementById("search-text");
  let searchedProducts = newProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  const productsToDisplay = searchedProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  removeAllPaginationButtons();
  loadPaginationButtons(searchedProducts);
  removeTableAllRows();
  addRows(productsToDisplay);
  addEventListenerToTextButtons(searchedProducts);
  reinitializeModals();
}

function deleteProduct(id) {
  products = products.filter((product) => {
    return product.productId != id;
  });
  let checkedValue = document.querySelector('input[name="sortby"]:checked');
  let newProducts = [];
  if (checkedValue) {
    const selectedSortby = checkedValue.value;
    if (selectedSortby === "price-low-high") {
      newProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (selectedSortby === "price-high-low") {
      newProducts = [...products].sort((a, b) => b.price - a.price);
    } else if (selectedSortby === "stock-low-high") {
      newProducts = [...products].sort((a, b) => a.stock - b.stock);
    } else if (selectedSortby === "stock-high-low") {
      newProducts = [...products].sort((a, b) => b.stock - a.stock);
    } else {
      newProducts = [...products];
    }
  }

  const searchInput = document.getElementById("search-text");
  let searchedProducts = newProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });

  const productsToDisplay = searchedProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  removeAllPaginationButtons();
  loadPaginationButtons(searchedProducts);
  removeTableAllRows();
  addRows(productsToDisplay);
  addEventListenerToTextButtons(searchedProducts);
  reinitializeModals();
}

function verifyProductDetails({
  name,
  manufacturer,
  description,
  image,
  price,
  stock,
  rating,
}) {
  const namePattern = /^[a-zA-Z0-9\s]+$/;
  const pricePattern = /^[0-9]+(\.\d{1,2})?$/;
  const stockPattern = /^[0-9]+$/;
  const ratingPattern = /^([1-5](\.\d{1,2})?)$/;
  const imageUrlPattern = /^https:\/\/picsum\.photos\/id\/\d+\/200\/300$/;
  let errMsgs = [];

  if (
    description.trim() === "" ||
    image.trim() === "" ||
    name.trim() === "" ||
    price.trim() === "" ||
    stock.trim() === "" ||
    rating.trim() === "" ||
    manufacturer.trim() === ""
  ) {
    errMsgs.push("* Plase fill in all the required fields.");
  }

  if (!namePattern.test(name)) {
    errMsgs.push(
      "- Invalid product name. Only alphanumeric characters and spaces are allowed."
    );
  }

  if (!imageUrlPattern.test(image)) {
    errMsgs.push(
      "- Image URL should be 'https://picsum.photos/id/{id}/200/300', where {id} is a placeholder for one or more digits."
    );
  }

  if (parseFloat(price) <= 0 || !pricePattern.test(price)) {
    errMsgs.push(
      "- Invalid product price. Please enter a valid non-negative number with up to two decimal places."
    );
  }

  if (!stockPattern.test(stock) || parseInt(stock) < 0) {
    errMsgs.push(
      "- Invalid product stock. Please enter a valid non-negative integer."
    );
  }

  if (!ratingPattern.test(rating)) {
    errMsgs.push(
      "- Invalid product rating. Please enter a number between 1 and 5 (including upto two decimal values)."
    );
  }

  return errMsgs;
}
